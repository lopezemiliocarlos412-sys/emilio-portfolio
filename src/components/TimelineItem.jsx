export default function TimelineItem({ item, isLast }) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-teal bg-paper" />
        {!isLast && <span className="mt-2 w-px flex-1 bg-ink/10" />}
      </div>

      <div className="pb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-teal">{item.period}</span>
        <h3 className="mt-1 font-display text-xl font-semibold text-ink">{item.role}</h3>
        <p className="text-sm font-medium text-ink/50">{item.org}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">{item.summary}</p>
        <ul className="mt-4 space-y-2">
          {item.highlights.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-ink/70">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
