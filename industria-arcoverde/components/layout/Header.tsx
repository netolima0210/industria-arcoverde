"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0D1B4C] backdrop-blur-md",
        isScrolled
          ? "shadow-lg border-b border-blue-900/50 py-2 h-20"
          : "py-4 h-24"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full relative">
        {/* Logo - Left */}
        <Link
          href="/"
          className="relative z-10 flex-shrink-0 transition-transform hover:scale-105"
        >
          <Image
            src="/logo-arcoverde.png"
            alt="Indústria Arcoverde"
            width={180}
            height={80}
            className={cn(
              "w-auto object-contain transition-all duration-300",
              isScrolled ? "h-12" : "h-16"
            )}
            priority
          />
        </Link>

        {/* Desktop Navigation - Absolute Center */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group h-full flex items-center"
                onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  onClick={() => {
                    if (link.name === "Home") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={cn(
                    "relative text-base font-medium transition-colors flex items-center gap-1 py-2",
                    "text-white/90 hover:text-white group-hover:text-white"
                  )}
                >
                  {link.name}
                  {link.children && (
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  )}

                  {/* Hover Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.children && openDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 w-56"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2 backdrop-blur-sm bg-white/95">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors font-medium"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>

        {/* Right Section: Suporte & Mobile Toggle */}
        <div className="relative z-10 flex items-center gap-6">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center px-5 py-2.5 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-white hover:text-[#0D1B4C] transition-all duration-300 transform hover:scale-105"
          >
            Suporte
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block text-lg text-gray-800 font-semibold hover:text-primary transition-colors py-2"
                    onClick={() => {
                      if (!link.children) setIsMobileMenuOpen(false);
                      if (link.name === "Home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <div className="pl-4 border-l-2 border-primary/20 ml-2 mt-2 space-y-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block text-base text-gray-600 hover:text-primary transition-colors py-1 font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-100 mt-2">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full justify-center items-center px-5 py-3 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all"
                >
                  Falar com Suporte
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
