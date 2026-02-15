import { motion } from 'framer-motion'

function SkillBar({ skill, index }) {
  const Icon = skill.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="panel"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
            <Icon />
          </span>
          <h3 className="font-semibold">{skill.name}</h3>
        </div>
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-300">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 + index * 0.07 }}
          className="h-2 rounded-full bg-gradient-to-r from-sky-700 to-cyan-500"
        />
      </div>
    </motion.article>
  )
}

export default SkillBar
