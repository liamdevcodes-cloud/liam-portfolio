import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, description }) {
  const titleWords = title.split(' ')

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
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
        }}
        aria-label={title}
        className="font-display text-3xl font-extrabold leading-tight sm:text-4xl"
      >
        {titleWords.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.25 }}
            className="mr-2 inline-block"
          >
            {word}
          </motion.span>
        ))}
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
