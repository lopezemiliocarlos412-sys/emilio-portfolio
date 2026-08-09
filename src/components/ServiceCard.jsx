export default function ServiceCard({ service }) {
  return (
    <div className="group rounded-box border border-ink/10 bg-paper-2 p-6 transition-all hover:border-teal/40 hover:shadow-lg hover:shadow-ink/5">
      <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{service.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-ink/10 px-3 py-1 font-mono text-xs text-ink/50 group-hover:border-teal/30 group-hover:text-teal"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}
