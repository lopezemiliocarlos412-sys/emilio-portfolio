import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Reveal, { RevealItem } from '../components/Reveal'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="The platform I helped run, and the storefronts I've grown."
        />
      </Reveal>

      <Reveal stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <RevealItem key={project.id}>
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </Reveal>
    </section>
  )
}
