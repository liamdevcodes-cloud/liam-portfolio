import { motion } from 'framer-motion'
import EducationTimeline from '../components/EducationTimeline'
import PageSection from '../components/PageSection'
import SectionHeading from '../components/SectionHeading'
import { education } from '../data/siteData'
import usePageMeta from '../hooks/usePageMeta'

function EducationPage() {
  usePageMeta(
    'Education | Liam ICT Portfolio',
    'Education timeline for Liam, including MBO Netwerkbeheer at Deltion College and HBO-ICT at Windesheim University.',
  )

  return (
    <PageSection>
      <SectionHeading
        eyebrow="Education"
        title="Academic Journey"
        description="Combining practical infrastructure training with applied higher education in ICT engineering."
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        <EducationTimeline items={education} />
      </motion.div>
    </PageSection>
  )
}

export default EducationPage
