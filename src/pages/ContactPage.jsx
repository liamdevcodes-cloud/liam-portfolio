import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import PageSection from '../components/PageSection'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/siteData'
import usePageMeta from '../hooks/usePageMeta'

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzbavar'

function ContactPage() {
  usePageMeta(
    'Contact | Liam ICT Portfolio',
    'Contact Liam for internships, ICT collaboration, networking projects, and technical opportunities.',
  )

  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.'
    if (!form.message.trim()) nextErrors.message = 'Message is required.'

    return nextErrors
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setStatus('Please complete all required fields correctly.')
      return
    }

    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setStatus('Message sent successfully. I will get back to you soon.')
      setForm(INITIAL_FORM)
      setErrors({})
    } catch {
      setStatus('Sending failed. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageSection>
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        description="Available for internships, collaboration on networking projects, and ICT engineering opportunities."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <motion.aside 
          className="panel space-y-5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-display text-xl font-bold">Contact Details</h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p className="flex items-center gap-2">
              <FiMail className="text-sky-700 dark:text-sky-300" />
              {profile.email}
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin className="text-sky-700 dark:text-sky-300" />
              {profile.location}
            </p>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Feel free to reach out for internships, collaborations, or any questions about my work.
          </p>
        </motion.aside>

        <motion.form 
          className="panel space-y-4" 
          onSubmit={onSubmit} 
          noValidate
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900"
              />
              {errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name}</span>}
            </label>

            <label className="text-sm font-semibold">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900"
              />
              {errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}
            </label>
          </div>

          <label className="block text-sm font-semibold">
            Subject
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={onChange}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900"
            />
            {errors.subject && <span className="mt-1 block text-xs text-red-600">{errors.subject}</span>}
          </label>

          <label className="block text-sm font-semibold">
            Message
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900"
            />
            {errors.message && <span className="mt-1 block text-xs text-red-600">{errors.message}</span>}
          </label>

          <motion.button 
            type="submit" 
            className="cta-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={isSubmitting}
          >
            <FiSend />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {status && <p className="text-sm text-slate-600 dark:text-slate-300">{status}</p>}
        </motion.form>
      </div>
    </PageSection>
  )
}

export default ContactPage
