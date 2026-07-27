import { Link } from 'react-router-dom'
import { Server, GitBranch, ExternalLink, FileText, ImageOff } from 'lucide-react'
import StatusBadge from './StatusBadge'

export default function ProjectCard({ project }) {
  const hasReadme = Boolean(project.readme)

  return (
    <div className="relative overflow-hidden rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark transition-colors hover:border-ink-faint dark:hover:border-ink-dark-soft hover:shadow-sm">
      <div className="flex aspect-video items-center justify-center border-b border-line dark:border-line-dark bg-surface-subtle dark:bg-surface-dark-subtle">
        {project.image ? (
          <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-1.5 text-ink-faint dark:text-ink-dark-soft">
            <ImageOff size={20} />
            <span className="font-mono text-[11px]">imagen próximamente</span>
          </div>
        )}
      </div>

      <div className="p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-mono text-xs tracking-wide text-ink-faint dark:text-ink-dark-soft">
          <Server size={13} className="text-ink-faint dark:text-ink-dark-soft" />
          {project.service}
        </span>
        <StatusBadge label={project.status} size="sm" />
      </div>

      <h3 className="font-display text-lg font-semibold text-ink dark:text-ink-dark">{project.name}</h3>
      <p className="mt-1 text-sm text-ink-soft dark:text-ink-dark-soft">{project.tagline}</p>

      <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft">{project.description}</p>

      {project.instance && (
        <p className="mt-3 font-mono text-xs text-ink-faint dark:text-ink-dark-soft">{project.instance}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-accent-soft dark:bg-accent/15 px-2 py-1 font-mono text-[11px] text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-mono text-xs text-accent hover:underline focus-ring rounded"
          >
            {link.label.toLowerCase().includes('github') ? (
              <GitBranch size={13} />
            ) : (
              <ExternalLink size={13} />
            )}
            {link.label}
          </a>
        ))}
        {hasReadme && (
          <Link
            to={`/readme/${project.id}`}
            className="flex items-center gap-1 font-mono text-xs text-ink-soft dark:text-ink-dark-soft hover:text-ink dark:hover:text-ink-dark transition-colors focus-ring rounded"
          >
            <FileText size={13} />
            README
          </Link>
        )}
      </div>
      </div>
    </div>
  )
}
