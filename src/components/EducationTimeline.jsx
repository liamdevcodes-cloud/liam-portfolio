import { motion } from 'framer-motion'

function EducationTimeline({ items }) {
  return (
    <div className="relative ml-3 space-y-8 border-l-2 border-slate-300 pl-6 dark:border-slate-700">
      {items.map((item, index) => (
        <motion.article
          key={item.program}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.3, delay: index * 0.07 }}
          className="panel relative"
        >
          <span className="absolute -left-[2.1rem] top-8 h-4 w-4 rounded-full border-2 border-white bg-sky-700 dark:border-slate-950" />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">{item.period}</p>
          <h3 className="mt-2 font-display text-xl font-bold">{item.program}</h3>
          <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{item.institution}</p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.details}</p>
        </motion.article>
      ))}
    </div>
  )
}

export default EducationTimeline
