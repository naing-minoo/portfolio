'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-black gradient-text">NMO</span>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Naing Min Oo. Built with Next.js + Framer Motion.
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-neutral-400 dark:text-neutral-500">
          <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-indigo-500 transition-colors">Work</a>
          <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
