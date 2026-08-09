import SectionHeading from '../components/SectionHeading'
import SkillBadge from '../components/SkillBadge'
import Reveal, { RevealItem } from '../components/Reveal'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Tools &amp; capabilities"
          description="A working toolkit built across two different worlds — kept sharp with both."
        />
      </Reveal>

      <Reveal stagger className="mt-12 space-y-10">
        {skillGroups.map((group) => (
          <RevealItem key={group.category}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-teal">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  )
}
