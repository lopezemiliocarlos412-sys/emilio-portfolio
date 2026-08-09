export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col rounded-box border border-ink/10 bg-paper-2 p-6">
      <span className="w-fit rounded-full bg-ink px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper">
        {project.category}
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{project.description}</p>

      {project.stack?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full border border-ink/10 px-3 py-1 text-xs text-ink/50">
              {tech}
            </li>
          ))}
        </ul>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal-light"
        >
          View project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      )}
    </div>
  )
}
