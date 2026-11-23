import type { Project } from '../../data/site'
import { cx } from '../lib/cx'
import { Parallax } from './motion'

/** Cover image when a project has one, otherwise a plain typographic panel. */
export function ProjectVisual({
  project,
  className,
  strength = 5,
}: {
  project: Project
  className?: string
  strength?: number
}) {
  if (project.cover) {
    return <Parallax src={project.cover} alt={project.title} className={className} strength={strength} />
  }

  return (
    <div className={cx('flex flex-col justify-between overflow-hidden p-6 sm:p-9', className)}>
      <p className="text-[12px] uppercase tracking-[0.16em] text-fg/50">Circuit build</p>
      <div>
        <p className="font-display text-[clamp(26px,3.4vw,48px)] leading-[1.05] text-fg/85">{project.title}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.role.map((r) => (
            <li key={r} className="rounded-full border border-fg/15 px-3 py-1 text-[12.5px] text-fg/60">
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
