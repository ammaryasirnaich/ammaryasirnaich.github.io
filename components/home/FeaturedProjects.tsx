import Link from "next/link";
import { projects } from "@/content/projects";
import { PipelineDiagram } from "@/components/diagrams/PipelineDiagram";
import { Badge } from "@/components/shared/Badge";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FeaturedProjects() {
  return (
    <section id="work" className="py-20 sm:py-24" aria-labelledby="work-title">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Six flagship systems"
          description="Production edge AI, agentic RAG, two published 3D detectors, a research evaluation platform, and a repository summarizer."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects
            .filter((project) => project.featured !== false)
            .map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <article className="lift flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-transform duration-200 hover:-translate-y-0.5">
                <p className="text-sm text-accent">{project.category}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  <Link href={`/projects/${project.slug}/`} className="hover:text-accent">
                    {project.title}
                  </Link>
                </h3>
                {project.award ? (
                  <p className="mt-3">
                    <Badge tone="accent">{project.award}</Badge>
                  </p>
                ) : null}
                <p className="mt-4 text-base leading-7 text-muted">{project.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>
                {project.architecture ? (
                  <div className="mt-6">
                    <PipelineDiagram
                      compact
                      steps={project.architecture}
                      label={`${project.title} stages`}
                    />
                  </div>
                ) : null}
                <p className="mt-6">
                  <Link
                    href={`/projects/${project.slug}/`}
                    className="text-sm font-semibold text-accent"
                  >
                    View case study
                  </Link>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
