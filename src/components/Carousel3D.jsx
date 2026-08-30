import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import MediaCard from './MediaCard'

function getOffset(index, active, length) {
  let diff = index - active
  const half = length / 2
  if (diff > half) diff -= length
  if (diff < -half) diff += length
  return diff
}

function getVariant(offset) {
  const clamped = Math.max(-2, Math.min(2, offset))
  const sign = Math.sign(clamped)
  const abs = Math.abs(clamped)

  const byDistance = {
    0: { x: '0%', scale: 1, rotateY: 0, opacity: 1, zIndex: 50 },
    1: { x: `${sign * 58}%`, scale: 0.82, rotateY: sign * -22, opacity: 0.7, zIndex: 40 },
    2: { x: `${sign * 100}%`, scale: 0.64, rotateY: sign * -30, opacity: 0.35, zIndex: 30 },
  }

  if (Math.abs(offset) > 2) {
    return { x: `${Math.sign(offset) * 135}%`, scale: 0.5, rotateY: Math.sign(offset) * -30, opacity: 0, zIndex: 10 }
  }

  return byDistance[abs]
}

export default function Carousel3D({ items, ariaLabel = 'Carousel' }) {
  const [active, setActive] = useState(0)
  const length = items.length
  const isPaused = useRef(false)

  const goTo = useCallback((i) => setActive(((i % length) + length) % length), [length])
  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused.current) next()
    }, 4500)
    return () => clearInterval(timer)
  }, [next])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  return (
    <div
      className="relative"
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      <div
        className="relative mx-auto flex h-[380px] w-full max-w-3xl items-center justify-center overflow-hidden sm:h-[440px]"
        style={{ perspective: 1400 }}
      >
        {items.map((item, index) => {
          const offset = getOffset(index, active, length)
          const variant = getVariant(offset)
          const isActive = offset === 0

          return (
            <motion.div
              key={item.id}
              className="absolute h-72 w-52 sm:h-96 sm:w-64"
              style={{ zIndex: variant.zIndex, pointerEvents: Math.abs(offset) > 2 ? 'none' : 'auto' }}
              animate={{ x: variant.x, scale: variant.scale, rotateY: variant.rotateY, opacity: variant.opacity }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              onClick={() => !isActive && goTo(index)}
            >
              <MediaCard item={item} isActive={isActive} />
            </motion.div>
          )
        })}
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={prev}
        className="btn btn-circle btn-ghost absolute left-0 top-1/2 z-[60] -translate-y-1/2 bg-ink/40 text-paper hover:bg-ink/70 sm:left-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={next}
        className="btn btn-circle btn-ghost absolute right-0 top-1/2 z-[60] -translate-y-1/2 bg-ink/40 text-paper hover:bg-ink/70 sm:right-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to ${item.title}`}
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === active ? 'w-6 bg-amber' : 'w-1.5 bg-paper/25 hover:bg-paper/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
