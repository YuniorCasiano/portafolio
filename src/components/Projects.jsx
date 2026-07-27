import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { useLanguage } from '../context/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const current = projects[index]
  const isModex = current.id === 'modex-micro' || current.id === 'modex-mono'

  const goPrev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1))

  return (
    <section id="proyectos" className="border-b border-line dark:border-line-dark bg-surface-subtle dark:bg-surface-dark-subtle">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="mb-6 flex items-center justify-between">
          <p className="inline-block rounded-full bg-teal-soft dark:bg-teal/15 px-3 py-1 font-mono text-xs text-teal">{t('projects_label')}</p>
          <p className="font-mono text-xs text-ink-faint dark:text-ink-dark-soft">
            {index + 1} / {projects.length}
          </p>
        </div>

        {isModex && (
          <p className="mb-4 rounded-lg border border-dashed border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-4 py-2.5 text-sm text-ink-soft dark:text-ink-dark-soft">
            {t('modex_note')}
          </p>
        )}

        <ProjectCard project={current} />

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            aria-label="Proyecto anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark bg-surface dark:bg-surface-dark text-ink-soft dark:text-ink-dark-soft hover:text-ink dark:hover:text-ink-dark hover:border-ink-faint dark:hover:border-ink-dark-soft transition-colors focus-ring"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setIndex(i)}
                aria-label={`Ir a ${p.name}`}
                className={`h-2 w-2 rounded-full transition-colors focus-ring ${
                  i === index ? 'bg-ink dark:bg-ink-dark' : 'bg-line dark:bg-line-dark hover:bg-ink-faint'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Siguiente proyecto"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark bg-surface dark:bg-surface-dark text-ink-soft dark:text-ink-dark-soft hover:text-ink dark:hover:text-ink-dark hover:border-ink-faint dark:hover:border-ink-dark-soft transition-colors focus-ring"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
