import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import StatusConsole from '../components/StatusConsole'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import Reveal, { RevealItem } from '../components/Reveal'
import { profile, heroStats } from '../data/profile'
import { services } from '../data/services'
import { projects } from '../data/projects'

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(63,169,163,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(232,163,61,0.12),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
          <motion.div variants={heroContainer} initial="hidden" animate="show">
            <motion.span
              variants={heroItem}
              className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-teal-light"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {profile.availability}
            </motion.span>

            <motion.h1
              variants={heroItem}
              className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            >
              E-commerce operations,<br />
              <span className="text-amber">built on systems.</span>
            </motion.h1>

            <motion.p variants={heroItem} className="mt-6 max-w-lg text-lg leading-relaxed text-paper/70">
              {profile.subheading}
            </motion.p>

            <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-4">
              <Button to="/contact" variant="accent">Start a project</Button>
              <Button to="/projects" variant="outline" className="border-paper/20 text-paper hover:border-paper hover:bg-paper/10">
                View my work
              </Button>
            </motion.div>

            <motion.div variants={heroItem} className="mt-12 grid grid-cols-3 gap-6 border-t border-paper/10 pt-8">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-xl font-semibold text-teal-light sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-paper/50">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <StatusConsole />
          </motion.div>
        </div>
      </section>

      {/* Differentiator strip */}
      <section className="border-b border-ink/10 bg-paper-2">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-ink/40">
            Two backgrounds, one skill set
          </p>
          <Reveal stagger className="mt-6 grid gap-6 sm:grid-cols-2">
            <RevealItem className="flex items-start gap-4 rounded-box border border-ink/10 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-teal/10 font-mono text-teal">T</span>
              <div>
                <p className="font-semibold text-ink">Technical &amp; Systems</p>
                <p className="mt-1 text-sm text-ink/60">Built and maintain eTurismo, a live government tourism platform — process discipline that carries over directly to store operations.</p>
              </div>
            </RevealItem>
            <RevealItem className="flex items-start gap-4 rounded-box border border-ink/10 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-amber/10 font-mono text-amber">E</span>
              <div>
                <p className="font-semibold text-ink">E-Commerce Execution</p>
                <p className="mt-1 text-sm text-ink/60">Product listings, SEO, inventory reporting, and Shopify — the day-to-day work of keeping a store running.</p>
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="What I do"
            title="Operational support for growing stores"
            description="From listing hygiene to order flow to content — I handle the day-to-day so you can focus on strategy."
          />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <RevealItem key={service.id}>
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </Reveal>
        <div className="mt-10">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal-light">
            See all services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t border-ink/10 bg-paper-2">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Proof, not just promises"
              description="A look at the platform I helped run and the storefronts I've grown."
            />
          </Reveal>
          <Reveal stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <RevealItem key={project.id}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="rounded-box bg-ink px-8 py-16 text-center text-paper sm:px-16">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Let's keep your store running like clockwork.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-paper/60">
              Tell me about your store and where things are slipping. I'll tell you how I can help.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/contact" variant="accent">Get in touch</Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
