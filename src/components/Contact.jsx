import { useLanguage } from '../context/LanguageContext'

const channels = [
  {
    label: 'Email',
    monogram: '@',
    value: 'angelyuniorcasiano0421@gmail.com',
    href: 'mailto:angelyuniorcasiano0421@gmail.com',
    color: 'bg-rose text-white',
  },
  {
    label: 'WhatsApp',
    monogram: 'WA',
    value: '+1 829-519-1629',
    href: 'https://wa.me/18295191629',
    color: 'bg-[#25D366] text-white',
  },
  {
    label: 'GitHub',
    monogram: 'GH',
    value: 'github.com/YuniorCasiano',
    href: 'https://github.com/YuniorCasiano',
    color: 'bg-ink dark:bg-ink-dark dark:text-surface-dark text-white',
  },
  {
    label: 'LinkedIn',
    monogram: 'in',
    value: 'linkedin.com/in/angel-casiano',
    href: 'https://www.linkedin.com/in/angel-casiano-1873b5332/',
    color: 'bg-teal text-white',
  },
]

export default function Contact() {
  const { t } = useLanguage()
  return (
    <section id="contacto" className="bg-surface dark:bg-surface-dark">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <p className="mb-6 inline-block rounded-full bg-violet-soft dark:bg-violet/15 px-3 py-1 font-mono text-xs text-violet">{t('contact_label')}</p>
        <h2 className="max-w-lg font-display text-2xl font-semibold text-ink dark:text-ink-dark">
          {t('contact_title')}
        </h2>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label !== 'Email' ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-4 py-2.5 text-sm text-ink dark:text-ink-dark hover:border-ink-faint dark:hover:border-ink-dark-soft transition-colors focus-ring"
            >
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md font-mono text-[11px] font-medium ${c.color}`}>
                {c.monogram}
              </span>
              <span>{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
