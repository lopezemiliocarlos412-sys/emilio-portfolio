import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function VideoLightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-3xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3">
              <h3 className="font-display text-lg font-semibold text-paper">{item.title}</h3>
              <button
                type="button"
                aria-label="Close video"
                onClick={onClose}
                className="btn btn-circle btn-ghost text-paper hover:bg-paper/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <video
              src={item.video}
              controls
              autoPlay
              className="w-full rounded-2xl bg-ink shadow-2xl"
            >
              Your browser doesn't support embedded video.
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
