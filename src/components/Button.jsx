import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-ink text-paper hover:bg-ink-2',
  outline: 'border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink/5',
  accent: 'bg-amber text-ink hover:bg-amber-light',
}

const MotionLink = motion.create(Link)
const MotionAnchor = motion.a
const MotionButton = motion.button

const tapProps = { whileHover: { y: -1 }, whileTap: { scale: 0.97 } }

export default function Button({ to, href, children, variant = 'primary', className = '', ...props }) {
  const classes = `btn ${variants[variant]} border-0 ${variant === 'outline' ? 'border' : ''} rounded-field transition-colors ${className}`

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...tapProps} {...props}>
        {children}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <MotionAnchor href={href} className={classes} {...tapProps} {...props}>
        {children}
      </MotionAnchor>
    )
  }

  return (
    <MotionButton type="button" className={classes} {...tapProps} {...props}>
      {children}
    </MotionButton>
  )
}
