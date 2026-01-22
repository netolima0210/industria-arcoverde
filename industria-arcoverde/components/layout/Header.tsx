"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Indústria Arcoverde",
    href: "#industria",
    children: [
      { name: "Quem Somos", href: "#quem-somos" },
      { name: "Estrutura", href: "#estrutura" },
      { name: "Certificações", href: "#certificacoes" },
      { name: "Sustentabilidade", href: "#sustentabilidade" },
    ],
  },
  {
    name: "Produtos",
    href: "#produtos",
    children: [
      { name: "Linha Riso", href: "/produtos/linha-riso" },
      { name: "Linha Arcoverde", href: "#linha-arcoverde" },
      { name: "Linha Revolus", href: "#linha-revolus" },
    ],
  },
  { name: "Dicas", href: "#dicas" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[hsl(var(--header-bg))] backdrop-blur-md",
        isScrolled
          ? "shadow-sm border-b border-gray-100 py-2"
          : "py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center">
        {/* Logo - Left */}
        <Link href="/" className="font-bold text-xl md:text-2xl tracking-tight text-primary flex-shrink-0">
          Indústria Arcoverde
        </Link>

        {/* Desktop Navigation - Center */}
        <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                  "text-gray-700"
                )}
              >
                {link.name}
              </Link>

              {/* Dropdown Menu */}
              {link.children && openDropdown === link.name && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Suporte - Right (Desktop) */}
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors flex-shrink-0"
        >
          Suporte
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
        >
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block text-gray-700 font-medium hover:text-primary transition-colors py-2"
                  onClick={() => !link.children && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.children && (
                  <div className="pl-4 border-l-2 border-gray-100 ml-2 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
