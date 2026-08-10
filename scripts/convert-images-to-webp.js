import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const repoRoot = path.resolve();
const imageDirs = [path.join(repoRoot, "src"), path.join(repoRoot, "public")];
const sourceExts = [".png", ".jpg", ".jpeg", ".PNG", ".JPG", ".JPEG"];
const codeExts = [".js", ".jsx", ".ts", ".tsx"];

async function walk(dir, callback) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (
      entry.name === ".git" ||
      entry.name === "node_modules" ||
      entry.name === ".next"
    )
      continue;
    if (entry.isDirectory()) {
      await walk(entryPath, callback);
    } else {
      await callback(entryPath);
    }
  }
}

function isImageFile(filePath) {
  return sourceExts.includes(path.extname(filePath));
}

async function convertImage(filePath) {
  const outPath = filePath.replace(/\.[^.]+$/, ".webp");
  try {
    const buffer = await sharp(filePath)
      .webp({ quality: 85, alphaQuality: 90, effort: 6 })
      .toBuffer();
    await fs.writeFile(outPath, buffer);
    await fs.unlink(filePath);
    console.log(
      `Converted: ${path.relative(repoRoot, filePath)} -> ${path.relative(repoRoot, outPath)}`,
    );
    return true;
  } catch (error) {
    console.error(`Failed to convert ${filePath}:`, error.message);
    return false;
  }
}

async function updateCodeReferences() {
  const codeFiles = [];
  for (const root of ["src"]) {
    await walk(path.join(repoRoot, root), (filePath) => {
      if (codeExts.includes(path.extname(filePath))) codeFiles.push(filePath);
    });
  }

  const urlRegex = /(["'`])([^"'`]+?\.(?:png|jpe?g))(\1)/gi;
  let replacements = 0;

  for (const filePath of codeFiles) {
    let content = await fs.readFile(filePath, "utf8");
    let changed = false;
    content = content.replace(urlRegex, (match, quote, assetPath, endQuote) => {
      const normalized = assetPath.replace(/%20/g, " ");
      let actualPath;
      if (normalized.startsWith("/")) {
        actualPath = path.join(repoRoot, "public", normalized.slice(1));
      } else {
        actualPath = path.resolve(path.dirname(filePath), normalized);
      }
      if (!sourceExts.includes(path.extname(actualPath))) return match;
      if (!fs.stat(actualPath).catch(() => false)) {
        return match;
      }
      const webpPath = assetPath.replace(/\.(png|jpe?g)$/i, ".webp");
      changed = true;
      replacements += 1;
      return `${quote}${webpPath}${endQuote}`;
    });

    if (changed) {
      await fs.writeFile(filePath, content, "utf8");
      console.log(
        `Updated references in: ${path.relative(repoRoot, filePath)}`,
      );
    }
  }
  console.log(`Total code reference replacements: ${replacements}`);
}

async function main() {
  console.log("Scanning for images...");
  const images = [];
  for (const dir of imageDirs) {
    await walk(dir, (filePath) => {
      if (isImageFile(filePath)) images.push(filePath);
    });
  }

  if (images.length === 0) {
    console.log("No supported image files found to convert.");
    return;
  }

  let convertedCount = 0;
  for (const filePath of images) {
    const outputPath = filePath.replace(/\.[^.]+$/, ".webp");
    if (await fs.stat(outputPath).catch(() => false)) {
      await fs.unlink(filePath).catch(() => {});
      console.log(`Removed original and kept existing WebP: ${filePath}`);
      convertedCount += 1;
      continue;
    }
    const ok = await convertImage(filePath);
    if (ok) convertedCount += 1;
  }

  console.log(`Converted ${convertedCount}/${images.length} images.`);
  await updateCodeReferences();
}

main().catch((error) => {
  console.error("Conversion script failed:", error);
  process.exit(1);
});
