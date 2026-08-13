import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const repoRoot = path.resolve();
const sets = ["set1", "set2", "set3"].map(set => path.join(repoRoot, "public", set));

async function main() {
  for (const dir of sets) {
    console.log(`Processing directory: ${dir}`);
    const outDir = dir + "_compressed";
    
    try {
      await fs.mkdir(outDir, { recursive: true });
      const files = await fs.readdir(dir);
      const webpFiles = files.filter(f => f.endsWith(".webp") && !f.endsWith(".tmp.webp"));
      
      let count = 0;
      for (const file of webpFiles) {
        const filePath = path.join(dir, file);
        const outPath = path.join(outDir, file);
        
        try {
          const buffer = await sharp(filePath)
            .resize({ width: 1920 })
            .webp({ quality: 75, effort: 4 })
            .toBuffer();
            
          await fs.writeFile(outPath, buffer);
          count++;
        } catch (err) {
          console.error(`Failed to process ${file}:`, err.message);
        }
        
        if (count % 50 === 0) {
          console.log(`Processed ${count}/${webpFiles.length} files in ${dir}`);
        }
      }
      console.log(`Finished processing ${dir}. Total: ${count}`);
      
      // Swap directories
      const oldDir = dir + "_old";
      // Try to remove oldDir if it exists from a previous run
      await fs.rm(oldDir, { recursive: true, force: true }).catch(() => {});
      
      await fs.rename(dir, oldDir);
      await fs.rename(outDir, dir);
      
      // Attempt to clean up old directory
      await fs.rm(oldDir, { recursive: true, force: true }).catch(e => {
        console.warn(`Could not delete ${oldDir}. It might be locked by the dev server. You can delete it manually later.`);
      });
      
    } catch (err) {
      console.error(`Error processing directory ${dir}:`, err.message);
    }
  }
  console.log("All done!");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
