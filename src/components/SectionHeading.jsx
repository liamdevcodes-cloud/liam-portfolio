import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300"
      >
        {eyebrow}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.08 }}
        className="font-display text-3xl font-extrabold leading-tight sm:text-4xl"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.25 }}
        className="max-w-3xl text-base text-slate-600 dark:text-slate-300"
      >
        {description}
      </motion.p>
    </div>
  )
}

export default SectionHeading
