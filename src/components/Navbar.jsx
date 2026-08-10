"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import logo from "../assets/logo1.webp";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Materials", href: "/material" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolledDown(true);
        // Automatically close mobile menu when scrolling down
        setIsMenuOpen(false);
      } else {
        setIsScrolledDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`global-nav-wrapper ${isScrolledDown ? "nav-hidden" : ""}`}>
      <Link href="/" className="nav-logo" style={{ cursor: "pointer", zIndex: 102 }}>
        <img
          src={logo.src || logo}
          alt="Vinfra Projects Logo"
          className="nav-logo-icon"
        />
      </Link>

      <button
        className={`nav-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link ${isActive ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
