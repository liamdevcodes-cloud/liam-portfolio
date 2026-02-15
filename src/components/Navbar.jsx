import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
]

function linkClass({ isActive }) {
  return `rounded-lg px-3 py-2 text-sm font-semibold transition ${
    isActive
      ? 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200'
      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70'
  }`
}

function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-950/85">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/about" className="font-display text-lg font-extrabold text-slate-900 dark:text-slate-100">
          Liam <span className="text-sky-700 dark:text-sky-300">Portfolio</span>
        </NavLink>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <button
          type="button"
          className="rounded-lg border border-slate-300 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200 md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="space-y-2 border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden"
        >
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </motion.div>
      )}
    </header>
  )
}

export default Navbar
