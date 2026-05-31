import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { personal } from '../data'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-border dark:border-gray-700/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-bold text-ink dark:text-white text-lg tracking-tight hover:text-accent transition-colors">
            JA<span className="text-accent">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link text-sm font-medium transition-colors ${
                    active === link.href.slice(1)
                      ? 'text-accent'
                      : 'text-ink-muted dark:text-gray-400 hover:text-ink dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="p-2 rounded-xl border border-border dark:border-gray-700 text-ink-muted dark:text-gray-400 hover:text-accent hover:border-accent dark:hover:border-accent bg-white dark:bg-gray-800 transition-all hover:-translate-y-0.5"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-accent-dark transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-ink-muted dark:text-gray-400 hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-ink-muted dark:text-gray-400 hover:text-ink dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-white dark:bg-gray-900 border-b border-border dark:border-gray-700/60 shadow-lg md:hidden"
          >
            <ul className="flex flex-col py-4">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3 text-sm font-medium text-ink-muted dark:text-gray-400 hover:text-accent hover:bg-accent-light dark:hover:bg-accent/10 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-6 pt-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="block text-center bg-accent text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-accent-dark transition-colors"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
