import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'
import Reveal, { RevealItem } from '../components/Reveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Where the background comes from"
          description="Two roles, one common thread: keeping systems accurate and moving."
        />
      </Reveal>

      <Reveal stagger className="mt-14 max-w-2xl">
        {experience.map((item, i) => (
          <RevealItem key={item.id}>
            <TimelineItem item={item} isLast={i === experience.length - 1} />
          </RevealItem>
        ))}
      </Reveal>
    </section>
  )
}
