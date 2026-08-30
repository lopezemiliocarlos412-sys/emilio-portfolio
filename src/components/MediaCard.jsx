import TiltCard from './TiltCard'

const themes = {
  video: {
    gradient: 'from-teal via-ink-2 to-ink',
    badgeClass: 'badge border-none bg-teal text-ink',
    label: 'Video',
    action: 'Watch video',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 8.5v7l6-3.5-6-3.5z" fill="currentColor" />
      </svg>
    ),
  },
  excel: {
    gradient: 'from-amber via-ink-2 to-ink',
    badgeClass: 'badge border-none bg-amber text-ink',
    label: 'Excel Project',
    action: 'Open file',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
}

function CardFace({ item }) {
  const theme = themes[item.type]

  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br ${theme.gradient} p-6 shadow-2xl shadow-ink/50`}
    >
      <div className="flex items-center justify-between">
        <span className={theme.badgeClass}>{theme.label}</span>
      </div>

      <div className="flex flex-1 items-center justify-center text-paper/20">
        <div className="h-16 w-16">{theme.icon}</div>
      </div>

      <div>
        <h3 className="font-display text-xl font-semibold leading-tight text-paper sm:text-2xl">
          {item.title}
        </h3>
        <div className="my-3 h-px w-10 bg-paper/30" />
        <p className="text-sm leading-relaxed text-paper/60">{item.subtitle}</p>

        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-paper hover:text-amber"
          >
            {theme.action}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        ) : (
          <p className="mt-4 text-xs italic text-paper/30">Link coming soon</p>
        )}
      </div>
    </div>
  )
}

export default function MediaCard({ item, isActive }) {
  if (!isActive) {
    return <CardFace item={item} />
  }

  return (
    <div style={{ perspective: 1000 }} className="h-full w-full">
      <TiltCard className="h-full w-full">
        <CardFace item={item} />
      </TiltCard>
    </div>
  )
}
