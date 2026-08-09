export default function SkillBadge({ label }) {
  return (
    <span className="rounded-full border border-ink/10 bg-paper-2 px-4 py-2 text-sm text-ink/70 transition-colors hover:border-amber/50 hover:text-ink">
      {label}
    </span>
  )
}
