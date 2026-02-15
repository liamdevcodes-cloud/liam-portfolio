import { FiArrowRight, FiDownload, FiSend } from 'react-icons/fi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageSection from '../components/PageSection'
import SectionHeading from '../components/SectionHeading'
import { highlights, profile } from '../data/siteData'
import usePageMeta from '../hooks/usePageMeta'

function AboutPage() {
  const [showCvPrompt, setShowCvPrompt] = useState(false)
  const [cvPassword, setCvPassword] = useState('')
  const [cvError, setCvError] = useState('')
  const [photoLoadFailed, setPhotoLoadFailed] = useState(false)
  const [photoSrc, setPhotoSrc] = useState(profile.profileImage)
  const [photoFallbackUsed, setPhotoFallbackUsed] = useState(false)

  usePageMeta(
    'About Liam | ICT Portfolio',
    'Learn more about Liam, an ICT specialist and network engineer in training with strong networking and system administration skills.',
  )

  const handleCvUnlock = (event) => {
    event.preventDefault()

    const configuredPassword = import.meta.env.VITE_CV_PASSWORD

    if (!configuredPassword) {
      setCvError('CV password is not configured yet.')
      return
    }

    if (cvPassword !== configuredPassword) {
      setCvError('Incorrect password.')
      return
    }

    const link = document.createElement('a')
    link.href = profile.cvPath
    link.download = ''
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setCvPassword('')
    setCvError('')
    setShowCvPrompt(false)
  }

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
            <motion.button
              type="button"
              onClick={() => setShowCvPrompt(true)}
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiDownload />
              Download CV
            </motion.button>
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

      {showCvPrompt && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 px-4" onClick={() => setShowCvPrompt(false)}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-panel dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 className="font-display text-lg font-bold">Enter CV Password</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Please enter the password to download the CV.
            </p>
            <form className="mt-4 space-y-3" onSubmit={handleCvUnlock}>
              <input
                type="password"
                value={cvPassword}
                onChange={(event) => {
                  setCvPassword(event.target.value)
                  setCvError('')
                }}
                placeholder="Password"
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900"
              />
              {cvError && <p className="text-xs text-red-600">{cvError}</p>}
              <div className="flex gap-2">
                <button type="submit" className="cta-primary">
                  Unlock
                </button>
                <button
                  type="button"
                  className="cta-secondary"
                  onClick={() => {
                    setShowCvPrompt(false)
                    setCvPassword('')
                    setCvError('')
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </PageSection>
  )
}

export default AboutPage
