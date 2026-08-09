import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import Reveal, { RevealItem } from '../components/Reveal'
import { services } from '../data/services'

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Where I plug in"
          description="Pick a single service or hand off the full operational workload — either way, things stay accurate and on schedule."
        />
      </Reveal>

      <Reveal stagger className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <RevealItem key={service.id}>
            <ServiceCard service={service} />
          </RevealItem>
        ))}
      </Reveal>

      <Reveal delay={0.1} className="mt-16 rounded-box border border-ink/10 bg-paper-2 p-8 text-center sm:p-12">
        <h3 className="font-display text-2xl font-semibold text-ink">Not sure what you need?</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink/60">
          Send me a quick overview of your store and where things feel stuck — I'll point to the
          right starting place.
        </p>
        <div className="mt-6 flex justify-center">
          <Button to="/contact">Let's talk</Button>
        </div>
      </Reveal>
    </section>
  )
}
