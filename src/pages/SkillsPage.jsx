import { motion } from 'framer-motion'
import PageSection from '../components/PageSection'
import SectionHeading from '../components/SectionHeading'
import SkillBar from '../components/SkillBar'
import { skills } from '../data/siteData'
import usePageMeta from '../hooks/usePageMeta'

function SkillsPage() {
  usePageMeta(
    'Skills | Liam ICT Portfolio',
    "Explore Liam's core skills in networking, server administration, scripting, cloud basics, and IT troubleshooting.",
  )

  return (
    <PageSection>
      <SectionHeading
        eyebrow="Skills"
        title="Technical Capabilities"
        description="A practical skill set focused on network stability, secure system operations, and automation-driven troubleshooting."
      />

      <motion.div 
        className="grid gap-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } }
        }}
      >
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </PageSection>
  )
}

export default SkillsPage
