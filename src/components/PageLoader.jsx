import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

export default function PageLoader() {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(false)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 420)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="h-full origin-left bg-gradient-to-r from-teal via-amber to-teal"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 0.85, transition: { duration: 0.35, ease: 'easeOut' } }}
            exit={{ scaleX: 1, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
