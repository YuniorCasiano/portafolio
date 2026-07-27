import StatusBadge from './StatusBadge'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line dark:border-line-dark bg-surface-subtle dark:bg-surface-dark-subtle bg-[image:radial-gradient(circle,#DAD6FA_1px,transparent_1px)] dark:bg-[image:radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:22px_22px]"
    >
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(245,243,254,0) 0%, rgba(245,243,254,0.9) 75%, #F5F3FE 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          background:
            'linear-gradient(180deg, rgba(18,22,35,0) 0%, rgba(18,22,35,0.9) 75%, #121623 100%)',
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="mb-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-3 py-1 font-mono text-xs text-up">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-up opacity-60"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-up"></span>
            </span>
            UP <span className="ml-1 text-ink-soft dark:text-ink-dark-soft">ANGEL-CASIANO-SERVICE</span>
          </span>
        </div>

        <p className="mb-3 font-mono text-xs tracking-wide text-ink-faint dark:text-ink-dark-soft">
          {t('hero_eyebrow')}
        </p>

        <h1 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-ink dark:text-ink-dark sm:text-4xl">
          {t('hero_title')}
        </h1>

        <p className="mt-4 max-w-xl text-base text-ink-soft dark:text-ink-dark-soft">{t('hero_subtitle')}</p>

        <p className="mt-6 font-mono text-xs text-ink-faint dark:text-ink-dark-soft">{t('hero_meta')}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="rounded-lg bg-accent px-5 py-2.5 font-body text-sm font-medium text-white hover:bg-accent/90 transition-colors focus-ring"
          >
            {t('hero_cta_projects')}
          </a>
          <a
            href="#cv"
            className="rounded-lg border border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-5 py-2.5 font-body text-sm font-medium text-ink dark:text-ink-dark hover:border-ink-faint dark:hover:border-ink-dark-soft transition-colors focus-ring"
          >
            {t('hero_cta_cv')}
          </a>
          <a
            href="#contacto"
            className="rounded-lg border border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-5 py-2.5 font-body text-sm font-medium text-ink dark:text-ink-dark hover:border-ink-faint dark:hover:border-ink-dark-soft transition-colors focus-ring"
          >
            {t('hero_cta_contact')}
          </a>
        </div>
      </div>
    </section>
  )
}
