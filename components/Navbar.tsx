"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Portföy", href: "/portfolyo" },
  { label: "Blog", href: "/blog" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md shadow-sm"
          : "bg-bg/90 backdrop-blur-sm"
      }`}
      style={{ borderBottom: scrolled ? "1px solid rgba(120,113,108,0.12)" : "none" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className="font-logo text-xl font-bold tracking-widest text-navy hover:opacity-80 transition-opacity"
        >
          ULUBEY MEDIA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-warm text-xs font-semibold uppercase tracking-widest hover:text-amber transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="/teklif-al"
            className="bg-amber hover:bg-logo-gold text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Teklif Al
          </Link>
        </div>

        <button
          className="md:hidden text-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü aç"
        >
          <span className="ms-icon ms-icon-filled text-[28px]">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden bg-bg px-4 py-6 flex flex-col gap-4"
          style={{ borderTop: "1px solid rgba(120,113,108,0.12)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-navy text-sm font-semibold uppercase tracking-widest py-2 hover:text-amber transition-colors"
              style={{ borderBottom: "1px solid rgba(120,113,108,0.08)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/teklif-al"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-amber text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full text-center"
          >
            Teklif Al
          </Link>
        </div>
      )}
    </header>
  );
}
