import Link from "next/link";
import { projects } from "@/content/projects";
import { Badge } from "@/components/shared/Badge";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function OpenSource() {
  const openSource = projects.filter((project) => project.featured === false);

  return (
    <section id="code" className="border-t border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Open source"
          title="Public repositories"
          description="Python dependency tooling, a Llama fine-tuning tutorial, and a local wiki workflow."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {openSource.map((project, index) => {
            const code = project.links.find((link) => link.label === "Code");
            return (
              <Reveal key={project.slug} delay={index * 0.04}>
                <article className="lift flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-transform duration-200 hover:-translate-y-0.5">
                  <p className="text-sm text-accent">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    <Link href={`/projects/${project.slug}/`} className="hover:text-accent">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted">{project.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <Badge>{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                    <Link href={`/projects/${project.slug}/`} className="text-accent">
                      View case study
                    </Link>
                    {code ? (
                      <a className="text-accent" href={code.href} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    ) : null}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
