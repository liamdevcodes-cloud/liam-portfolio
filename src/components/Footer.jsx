import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { profile } from '../data/siteData'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/80 bg-white/85 py-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-xs text-slate-500 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <span>© {currentYear}</span>
          <span>•</span>
          <span className="font-semibold">{profile.name}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <FiMapPin size={12} />
            {profile.location}
          </span>
          <span>•</span>
          <a
            href={`mailto:${profile.email || 'liam@example.com'}`}
            className="transition hover:text-sky-700 dark:hover:text-sky-300"
          >
            <FiMail size={12} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 sm:justify-end">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-sky-700 dark:hover:text-sky-300"
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-700 dark:hover:text-sky-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
