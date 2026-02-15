import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-panel transition-colors dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-4 p-6">
        <h3 className="font-display text-xl font-bold">{project.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="cta-secondary">
            <FiGithub />
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="cta-primary">
            <FiArrowUpRight />
            Demo / Details
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
