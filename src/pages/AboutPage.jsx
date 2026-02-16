import { FiArrowRight, FiSend } from 'react-icons/fi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageSection from '../components/PageSection'
import SectionHeading from '../components/SectionHeading'
import { highlights, profile } from '../data/siteData'
import usePageMeta from '../hooks/usePageMeta'

function AboutPage() {
  const [photoLoadFailed, setPhotoLoadFailed] = useState(false)
  const [photoSrc, setPhotoSrc] = useState(profile.profileImage)
  const [photoFallbackUsed, setPhotoFallbackUsed] = useState(false)

  usePageMeta(
    'About Liam | ICT Portfolio',
    'Learn more about Liam, an ICT specialist and network engineer in training with strong networking and system administration skills.',
  )

  const handlePhotoError = () => {
    if (!photoFallbackUsed && profile.profileImageFallback) {
      setPhotoSrc(profile.profileImageFallback)
      setPhotoFallbackUsed(true)
      return
    }

    setPhotoLoadFailed(true)
  }

  return (
    <PageSection>
      <SectionHeading
        eyebrow="About Me"
        title={`${profile.name} - ${profile.title}`}
        description={profile.intro}
      />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="panel space-y-6">
          {profile.profileImage && !photoLoadFailed && (
            <motion.div 
              className="flex justify-center lg:hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <img
                src={photoSrc}
                alt={profile.name}
                onError={handlePhotoError}
                className="aspect-square w-32 rounded-full object-cover border-4 border-sky-100 dark:border-sky-900"
              />
            </motion.div>
          )}
          {photoLoadFailed && (
            <div className="flex justify-center lg:hidden">
              <div className="grid aspect-square w-32 place-items-center rounded-full border-4 border-sky-100 bg-sky-50 text-2xl font-bold text-sky-700 dark:border-sky-900 dark:bg-slate-800 dark:text-sky-300">
                {profile.name?.[0] ?? 'L'}
              </div>
            </div>
          )}

          <motion.p 
            className="text-base leading-relaxed text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            I enjoy building reliable IT environments where infrastructure, security, and automation
            work together. My focus is practical engineering: designing stable network setups,
            maintaining servers, and solving issues quickly with structured troubleshooting.
          </motion.p>

          <motion.div 
            className="grid gap-4 sm:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {highlights.map((item) => (
              <motion.article 
                key={item.label} 
                className="rounded-xl bg-slate-100/80 p-4 dark:bg-slate-800/60"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <h3 className="text-xs font-bold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">{item.value}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/projects" className="cta-secondary">
              <FiArrowRight />
              View Projects
            </Link>
            <Link to="/contact" className="cta-secondary">
              <FiSend />
              Contact
            </Link>
          </motion.div>
        </div>

        <aside className="panel space-y-6">
          {profile.profileImage && !photoLoadFailed && (
            <motion.div 
              className="hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <img
                src={photoSrc}
                alt={profile.name}
                onError={handlePhotoError}
                className="aspect-square w-48 rounded-full object-cover border-4 border-sky-100 dark:border-sky-900"
              />
            </motion.div>
          )}
          {photoLoadFailed && (
            <div className="hidden justify-center lg:flex">
              <div className="grid aspect-square w-48 place-items-center rounded-full border-4 border-sky-100 bg-sky-50 text-4xl font-bold text-sky-700 dark:border-sky-900 dark:bg-slate-800 dark:text-sky-300">
                {profile.name?.[0] ?? 'L'}
              </div>
            </div>
          )}

          <div>
            <h2 className="font-display text-xl font-bold">Technical Focus</h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {profile.iconCloud?.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-xl border border-slate-200 bg-white p-3 text-center dark:border-slate-700 dark:bg-slate-900 cursor-default"
                  >
                    <Icon className="mx-auto text-lg text-sky-700 dark:text-sky-300" />
                    <p className="mt-1 text-xs font-semibold">{item.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </aside>
      </div>

    </PageSection>
  )
}

export default AboutPage
