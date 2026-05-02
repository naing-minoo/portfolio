'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-neutral-200/60 dark:border-neutral-800/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-black tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="gradient-text">NMO</span>
        </motion.a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <motion.a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200 group"
                whileHover={{ y: -1 }}
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-1 h-px bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? (
                    <Sun size={16} className="text-yellow-400" />
                  ) : (
                    <Moon size={16} className="text-indigo-600" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          )}

          <motion.a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors duration-200"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-800"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 block text-center py-3 rounded-full bg-indigo-600 text-white font-semibold"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
