import { useEffect, useMemo, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import EducationPage from './pages/EducationPage'
import ContactPage from './pages/ContactPage'

const THEME_KEY = 'liam-portfolio-theme'

function AppShell() {
  const location = useLocation()
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_KEY)
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const routeConfig = useMemo(
    () => [
      { path: '/about', element: <AboutPage /> },
      { path: '/skills', element: <SkillsPage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/education', element: <EducationPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
    [],
  )

  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.22, ease: 'easeOut' }}>
      <div className="relative min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-28 sm:px-6 lg:px-8">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/about" replace />} />
          {routeConfig.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </MotionConfig>
  )
}

function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  )
}

export default App
