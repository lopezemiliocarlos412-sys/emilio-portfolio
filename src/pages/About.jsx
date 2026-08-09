import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="About" title={`Hi, I'm ${profile.shortName}.`} />
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-5 text-base leading-relaxed text-ink/70">
          <p>
            I'm an e-commerce virtual assistant with a background in IT, data management, and
            customer support. Right now I build and maintain eTurismo, a tourism management
            platform for the City Government of San Carlos — the kind of system where clean,
            validated data isn't optional, because non-technical staff rely on it every day to
            manage hotel, attraction, shop, and tour records.
          </p>
          <p>
            That's the same standard I bring to store operations: accurate product listings,
            inventory that reconciles, and customer cases that get sorted and routed instead of
            piling up. During my internship at the SSS E-Center, reorganizing how cases were
            prioritized cut average response time from 24 hours to 14 — a 42% improvement. It's a
            small process fix with outsized impact, which is the pattern I look for in any
            workflow I touch.
          </p>
          <p>
            I'm looking to bring that combination — technical grounding plus hands-on operational
            execution — to Amazon and e-commerce sellers who need someone reliable running
            listings, data, and support behind the scenes.
          </p>

          <div className="pt-4">
            <Button to="/contact">Work with me</Button>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-box border border-ink/10 bg-paper-2 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-teal">Quick facts</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-ink/50">Based in</dt>
                <dd className="text-right font-medium text-ink">{profile.location}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink/50">Education</dt>
                <dd className="text-right font-medium text-ink">BS Information Technology</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink/50">Languages</dt>
                <dd className="text-right font-medium text-ink">English, Filipino, Ilonggo</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink/50">Status</dt>
                <dd className="text-right font-medium text-teal">{profile.availability}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-box border border-ink/10 bg-paper-2 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-amber">Certifications</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li>English for Common Interactions in the Workplace</li>
              <li>Introduction to Data Analysis Using Microsoft Excel</li>
              <li>IT Expo Program — San Carlos City (Presenter/Participant)</li>
            </ul>
          </div>

          <div className="rounded-box border border-ink/10 bg-ink p-6 text-paper">
            <p className="font-mono text-xs uppercase tracking-widest text-amber">Why it matters</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">
              Most VAs learn e-commerce tools from a course. I learned process discipline building
              a live government platform — then applied it to running store operations.
            </p>
          </div>
        </aside>
      </Reveal>
    </section>
  )
}
