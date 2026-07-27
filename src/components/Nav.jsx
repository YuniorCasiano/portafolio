import { Server, Sun, Moon } from 'lucide-react'
import StatusBadge from './StatusBadge'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

export default function Nav() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()

  const links = [
    { label: t('nav_about'), href: '#about' },
    { label: t('nav_projects'), href: '#proyectos' },
    { label: t('nav_stack'), href: '#stack' },
    { label: t('nav_cv'), href: '#cv' },
    { label: t('nav_contact'), href: '#contacto' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-line dark:border-line-dark bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-ink dark:text-ink-dark tracking-tight focus-ring rounded">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-white">
            <Server size={13} />
          </span>
          angel<span className="text-accent">.</span>casiano
        </a>

        <div className="hidden items-center gap-7 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-ink-soft dark:text-ink-dark-soft hover:text-ink dark:hover:text-ink-dark transition-colors focus-ring rounded"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center overflow-hidden rounded-full border border-line dark:border-line-dark font-mono text-[11px]">
            <button
              onClick={() => setLang('es')}
              className={`px-2 py-1 transition-colors focus-ring ${
                lang === 'es' ? 'bg-accent text-white' : 'text-ink-soft dark:text-ink-dark-soft'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 transition-colors focus-ring ${
                lang === 'en' ? 'bg-accent text-white' : 'text-ink-soft dark:text-ink-dark-soft'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink-soft dark:text-ink-dark-soft hover:text-ink dark:hover:text-ink-dark transition-colors focus-ring"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <span className="hidden sm:block">
            <StatusBadge label={t('nav_open_to_work')} size="sm" />
          </span>
        </div>
      </nav>
    </header>
  )
}
