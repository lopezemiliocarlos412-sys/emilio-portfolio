import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Carousel3D from '../components/Carousel3D'
import VideoLightbox from '../components/VideoLightbox'
import Reveal, { RevealItem } from '../components/Reveal'
import { projects } from '../data/projects'
import { excelProjects, contentProjects } from '../data/media'

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
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

      <section className="relative overflow-hidden bg-ink py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,163,61,0.12),transparent_50%)]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Excel Deliverables"
              title="Amazon Excel projects"
              description="Data-backed keyword research and listing analysis, sheet by sheet."
              dark
            />
          </Reveal>

          <div className="mt-14">
            <Carousel3D items={excelProjects} type="excel" ariaLabel="Excel project carousel" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-paper/10 bg-ink py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(63,169,163,0.12),transparent_50%)]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Media"
              title="Content & editing projects"
              description="Process walkthroughs and short-form video work, click to watch."
              dark
            />
          </Reveal>

          <div className="mt-14">
            <Carousel3D
              items={contentProjects}
              type="video"
              ariaLabel="Video project carousel"
              onWatch={setActiveVideo}
            />
          </div>
        </div>
      </section>

      <VideoLightbox item={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  )
}
