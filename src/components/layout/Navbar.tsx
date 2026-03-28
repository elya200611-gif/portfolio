import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/#projects", label: "Проекты" },
    { href: "/#services", label: "Услуги" },
    { href: "/#about", label: "Обо мне" },
    { href: "/#reviews", label: "Отзывы" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 mix-blend-difference text-white pointer-events-none">
        <Link to="/" className="text-xl md:text-2xl font-display font-bold tracking-tighter pointer-events-auto">
          ER.
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 pointer-events-auto">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium hover:opacity-70 transition-opacity">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="hidden md:block">
            <MagneticButton href="https://t.me/webdesignelya" target="_blank" variant="outline" className="px-6 py-2 text-xs border-white/20 text-white hover:bg-white hover:text-black">
              Обсудить проект
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="fixed inset-0 z-40 bg-black text-white md:hidden flex flex-col items-center justify-center gap-8 px-6"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-display font-medium tracking-tight hover:text-neutral-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-8 w-full">
              <MagneticButton
                href="https://t.me/webdesignelya"
                target="_blank"
                className="w-full bg-white text-black py-4 rounded-full text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Обсудить проект
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
