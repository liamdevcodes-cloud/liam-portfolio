import { motion } from 'framer-motion'
import PageSection from '../components/PageSection'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { profile, projects } from '../data/siteData'
import usePageMeta from '../hooks/usePageMeta'

function ProjectsPage() {
  usePageMeta(
    'Projects | Liam ICT Portfolio',
    'Portfolio projects by Liam featuring network labs, PowerShell automation, and Python-based diagnostics tooling.',
  )

  return (
    <PageSection>
      <SectionHeading
        eyebrow="Projects"
        title="Portfolio & Labs"
        description="Selected work across networking, scripting, and infrastructure reliability. All cards can be linked to real GitHub repositories, lab screenshots, and dashboards."
      />

      <motion.div 
        className="grid gap-6 lg:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } }
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>

      <motion.div 
        className="panel flex flex-wrap items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300">
          Want to see all repositories and lab experiments? Visit my GitHub profile for full source
          code, network diagrams, and setup notes.
        </p>
        <motion.a 
          href={profile.github} 
          target="_blank" 
          rel="noreferrer" 
          className="cta-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Open GitHub Profile
        </motion.a>
      </motion.div>
    </PageSection>
  )
}

export default ProjectsPage
