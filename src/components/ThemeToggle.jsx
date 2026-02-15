import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === 'dark'

  return (
    <div className="inline-flex items-center gap-2">
      <span
        className={`text-[10px] font-semibold transition-opacity ${
          isDark ? 'opacity-40' : 'opacity-100'
        } text-slate-600 dark:text-slate-300`}
      >
        Light
      </span>
      <button
        type="button"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="relative inline-flex h-10 w-20 items-center rounded-full border border-slate-300 bg-white/80 px-1 transition-colors dark:border-slate-700 dark:bg-slate-900"
        aria-label="Toggle theme"
      >
        <motion.span
          animate={{ x: isDark ? 40 : 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 24 }}
          className="absolute left-1 top-1 grid h-8 w-8 place-items-center rounded-full bg-sky-700 text-white"
        >
          {isDark ? <FiMoon size={14} /> : <FiSun size={14} />}
        </motion.span>
      </button>
      <span
        className={`text-[10px] font-semibold transition-opacity ${
          isDark ? 'opacity-100' : 'opacity-40'
        } text-slate-600 dark:text-slate-300`}
      >
        Dark
      </span>
    </div>
  )
}

export default ThemeToggle
