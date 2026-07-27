import { Download, FileText } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function CV() {
  const { t } = useLanguage()

  return (
    <section id="cv" className="border-b border-line dark:border-line-dark bg-surface dark:bg-surface-dark">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <p className="mb-6 inline-block rounded-full bg-amber-soft dark:bg-amber/15 px-3 py-1 font-mono text-xs text-amber">
          {t('cv_label')}
        </p>

        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-line dark:border-line-dark bg-accent-soft dark:bg-accent/10 p-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
              <FileText size={20} />
            </span>
            <div>
              <p className="font-display text-base font-semibold text-ink dark:text-ink-dark">{t('cv_title')}</p>
              <p className="text-sm text-ink-soft dark:text-ink-dark-soft">{t('cv_subtitle')}</p>
            </div>
          </div>

          <a
            href="/cv-angel-casiano.pdf"
            download
            className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-body text-sm font-medium text-white hover:bg-accent/90 transition-colors focus-ring"
          >
            <Download size={16} />
            {t('cv_download')}
          </a>
        </div>
      </div>
    </section>
  )
}
