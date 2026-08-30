export default function SectionHeading({ eyebrow, title, description, align = 'left', dark = false }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const eyebrowClass = dark ? 'text-teal-light' : 'text-teal'
  const titleClass = dark ? 'text-paper' : 'text-ink'
  const descriptionClass = dark ? 'text-paper/60' : 'text-ink/60'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow && <span className={`font-mono text-xs uppercase tracking-widest ${eyebrowClass}`}>{eyebrow}</span>}
      <h2 className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${titleClass}`}>{title}</h2>
      {description && <p className={`text-base leading-relaxed ${descriptionClass}`}>{description}</p>}
    </div>
  )
}
