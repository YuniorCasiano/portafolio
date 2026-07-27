import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, GitBranch, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import StatusBadge from '../components/StatusBadge'

function Section({ section }) {
  return (
    <section className="mb-9">
      <p className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-faint dark:text-ink-dark-soft">{section.heading}</p>

      {section.type === 'text' && (
        <p className="text-base leading-relaxed text-ink dark:text-ink-dark">{section.content}</p>
      )}

      {section.type === 'list' && (
        <ul className="list-inside list-disc space-y-1.5 text-base leading-relaxed text-ink dark:text-ink-dark">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {section.type === 'table' && (
        <div className="overflow-x-auto rounded-lg border border-line dark:border-line-dark">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-surface-subtle dark:bg-surface-dark-subtle">
                {section.headers.map((h) => (
                  <th key={h} className="border-b border-line dark:border-line-dark px-3 py-2 text-left font-mono text-xs text-ink-faint dark:text-ink-dark-soft">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className="border-b border-line dark:border-line-dark last:border-b-0">
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2 align-top text-ink-soft dark:text-ink-dark-soft">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default function ReadmePage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project || !project.readme) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-surface dark:bg-surface-dark">
      <header className="border-b border-line dark:border-line-dark">
        <div className="mx-auto max-w-3xl px-6 py-5">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-soft dark:text-ink-dark-soft hover:text-ink dark:hover:text-ink-dark transition-colors focus-ring rounded"
          >
            <ArrowLeft size={14} />
            volver al portafolio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-xs tracking-wide text-ink-faint dark:text-ink-dark-soft">{project.service}</span>
          <StatusBadge label={project.status} size="sm" />
        </div>

        <h1 className="font-display text-3xl font-semibold text-ink dark:text-ink-dark">{project.name}</h1>
        <p className="mt-2 text-base text-ink-soft dark:text-ink-dark-soft">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-accent-soft dark:bg-accent/15 px-2 py-1 font-mono text-[11px] text-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-5">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-sm text-accent hover:underline focus-ring rounded"
            >
              {link.label.toLowerCase().includes('github') ? (
                <GitBranch size={15} />
              ) : (
                <ExternalLink size={15} />
              )}
              {link.label}
            </a>
          ))}
        </div>

        <hr className="my-8 border-line dark:border-line-dark" />

        <section className="mb-9">
          <p className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-faint dark:text-ink-dark-soft">Overview</p>
          <p className="text-base leading-relaxed text-ink dark:text-ink-dark">{project.readme.overview}</p>
        </section>

        {project.readme.sections.map((section) => (
          <Section key={section.heading} section={section} />
        ))}
      </main>
    </div>
  )
}
