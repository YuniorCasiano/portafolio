import { useLanguage } from '../context/LanguageContext'

const groups = [
  {
    label: 'Backend',
    color: 'violet',
    items: ['Java', 'Spring Boot', 'Kafka', 'OpenFeign', 'Resilience4j'],
  },
  {
    label: 'Frontend',
    color: 'teal',
    items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'TailwindCSS', 'HTML', 'CSS'],
  },
  {
    label: 'Datos',
    color: 'amber',
    items: ['PostgreSQL', 'MongoDB Atlas', 'SQLite'],
  },
  {
    label: 'DevOps & infraestructura',
    color: 'rose',
    items: ['Docker', 'Docker Compose', 'Eureka', 'Config Server', 'API Gateway', 'Zipkin', 'Prometheus', 'Grafana', 'Render', 'Vercel'],
  },
  {
    label: 'Mobile',
    color: 'violet',
    items: ['Android Studio', 'Java (Android SDK)', 'Capacitor'],
  },
  {
    label: 'Herramientas',
    color: 'teal',
    items: ['Git', 'GitHub', 'IntelliJ IDEA', 'PowerShell', 'Windows + WSL2'],
  },
]

const colorClasses = {
  violet: 'bg-violet-soft text-violet dark:bg-violet/15',
  teal: 'bg-teal-soft text-teal dark:bg-teal/15',
  amber: 'bg-amber-soft text-amber dark:bg-amber/15',
  rose: 'bg-rose-soft text-rose dark:bg-rose/15',
}

export default function Skills() {
  const { t } = useLanguage()
  return (
    <section id="stack" className="border-b border-line dark:border-line-dark bg-surface-subtle dark:bg-surface-dark-subtle">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <p className="mb-6 inline-block rounded-full bg-rose-soft dark:bg-rose/15 px-3 py-1 font-mono text-xs text-rose">{t('stack_label')}</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label} className="rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-5">
              <p className={`mb-3 inline-block rounded-md px-2 py-1 font-mono text-xs ${colorClasses[group.color]}`}>
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-surface-subtle dark:bg-surface-dark-subtle px-2 py-1 font-mono text-[11px] text-ink-soft dark:text-ink-dark-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
