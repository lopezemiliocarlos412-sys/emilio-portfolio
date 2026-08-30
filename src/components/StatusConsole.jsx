import { heroConsole } from '../data/profile'

export default function StatusConsole() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-box border border-paper/10 bg-ink-2 font-mono shadow-2xl shadow-ink/40">
      <div className="flex items-center justify-between border-b border-paper/10 bg-ink-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
        </div>
        <span className="text-[11px] uppercase tracking-widest text-paper/40">store_ops.console</span>
      </div>

      <div className="space-y-4 px-5 py-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          <span className="text-teal-light">status: {heroConsole.status.toLowerCase()}</span>
        </div>

        <div className="space-y-2.5 text-sm">
          {heroConsole.lines.map((line) => (
            <div key={line.label} className="flex items-center justify-between border-b border-paper/5 pb-2.5">
              <span className="text-paper/50">{line.label}</span>
              <span className="text-paper">{line.value}</span>
            </div>
          ))}
        </div>

        <p className="pt-1 text-xs leading-relaxed text-paper/35">// real-time discipline, applied to storefront operations</p>
      </div>
    </div>
  )
}
