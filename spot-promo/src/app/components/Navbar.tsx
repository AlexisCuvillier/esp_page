"use client";

import Image from "next/image";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Teaser", href: "#teaser" },
  { label: "Concept", href: "#concept" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Structure", href: "#wbs" },
  { label: "Rejoindre", href: "#join" },
  { label: "📄 Docs", href: "/documentation" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="SPOT"
            width={40}
            height={40}
            className="group-hover:scale-110 transition-transform duration-300"
          />
          <span className="font-[family-name:var(--font-playfair)] font-bold text-xl hidden sm:block">
            SPOT
          </span>
        </a>
        
        <ul className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-[var(--accent)] hover:bg-[var(--accent)]/10"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

