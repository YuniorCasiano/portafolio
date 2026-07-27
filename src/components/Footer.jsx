import { useLanguage } from '../context/LanguageContext'

const channels = [
  { label: 'Email', monogram: '@', href: 'mailto:angelyuniorcasiano0421@gmail.com', color: 'bg-rose text-white' },
  { label: 'WhatsApp', monogram: 'WA', href: 'https://wa.me/18295191629', color: 'bg-[#25D366] text-white' },
  {
    label: 'GitHub',
    monogram: 'GH',
    href: 'https://github.com/YuniorCasiano',
    color: 'bg-ink dark:bg-ink-dark dark:text-surface-dark text-white',
  },
  {
    label: 'LinkedIn',
    monogram: 'in',
    href: 'https://www.linkedin.com/in/angel-casiano-1873b5332/',
    color: 'bg-teal text-white',
  },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-line dark:border-line-dark bg-surface dark:bg-surface-dark">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-ink-faint dark:text-ink-dark-soft">{t('footer_tagline')}</p>

        <div className="flex items-center gap-2">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label !== 'Email' ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={c.label}
              className={`flex h-7 w-7 items-center justify-center rounded-md font-mono text-[11px] font-medium transition-opacity hover:opacity-80 focus-ring ${c.color}`}
            >
              {c.monogram}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-ink-faint dark:text-ink-dark-soft">
          © {new Date().getFullYear()} · Angel Casiano
        </p>
      </div>
    </footer>
  )
}
