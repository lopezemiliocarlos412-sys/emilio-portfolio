import { useState } from 'react'
import TiltCard from './TiltCard'

const PlayIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 8.5v7l6-3.5-6-3.5z" fill="currentColor" />
  </svg>
)

const ArrowIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

function ExcelCardFace({ item }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl shadow-ink/50">
      <img src={item.banner} alt={item.title} className="h-full w-full object-cover" draggable={false} />

      <div className="absolute left-3 top-3">
        <span className="rounded-full bg-amber px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
          Excel Project
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-ink/70 px-4 py-4">
        <h3 className="font-display text-lg font-semibold leading-tight text-paper sm:text-xl">
          {item.title}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-paper/70 sm:text-sm">{item.subtitle}</p>

        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-paper hover:text-amber sm:text-sm"
          >
            View file
            <ArrowIcon className="h-3.5 w-3.5" />
          </a>
        ) : (
          <p className="mt-3 text-xs italic text-paper/40">File coming soon</p>
        )}
      </div>
    </div>
  )
}

function VideoCardFace({ item, onWatch }) {
  const [thumbFailed, setThumbFailed] = useState(false)

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-ink-2 shadow-2xl shadow-ink/50">
      {!thumbFailed ? (
        <video
          src={`${item.video}#t=0.5`}
          muted
          playsInline
          preload="metadata"
          onError={() => setThumbFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal via-ink-2 to-ink text-paper/20">
          <PlayIcon className="h-16 w-16" />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/20">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90 text-ink">
          <PlayIcon className="h-6 w-6" />
        </span>
      </div>

      <div className="absolute left-3 top-3">
        <span className="rounded-full bg-teal px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
          Video
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-ink/70 px-4 py-4">
        <h3 className="font-display text-lg font-semibold leading-tight text-paper sm:text-xl">
          {item.title}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-paper/70 sm:text-sm">{item.subtitle}</p>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onWatch?.(item)
          }}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-paper hover:text-teal-light sm:text-sm"
        >
          Watch video
          <ArrowIcon className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}

function CardFace({ item, type, onWatch }) {
  return type === 'video' ? <VideoCardFace item={item} onWatch={onWatch} /> : <ExcelCardFace item={item} />
}

export default function MediaCard({ item, type, isActive, onWatch }) {
  if (!isActive) {
    return <CardFace item={item} type={type} onWatch={onWatch} />
  }

  return (
    <div style={{ perspective: 1000 }} className="h-full w-full">
      <TiltCard className="h-full w-full">
        <CardFace item={item} type={type} onWatch={onWatch} />
      </TiltCard>
    </div>
  )
}
