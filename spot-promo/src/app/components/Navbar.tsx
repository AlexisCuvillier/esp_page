"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100]">
      {/* Navbar principale */}
      <div className="nav-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="SPOT"
              width={40}
              height={40}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-[family-name:var(--font-playfair)] font-bold text-xl">
              SPOT
            </span>
          </a>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link px-2 xl:px-3 py-2 rounded-full text-xs xl:text-sm font-medium transition-all duration-300 hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 whitespace-nowrap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span 
              className={`w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`} 
            />
            <span 
              className={`w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`} 
            />
            <span 
              className={`w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`} 
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: 'rgba(10, 16, 20, 0.98)' }}
      >
        <div className="px-6 py-4 flex flex-col gap-2 backdrop-blur-lg border-t border-[var(--accent)]/20">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-base font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors py-3 px-4 rounded-lg hover:bg-[var(--accent)]/10"
              style={{ 
                transitionDelay: isOpen ? `${index * 30}ms` : '0ms',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
