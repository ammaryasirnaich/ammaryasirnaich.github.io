import Link from "next/link";
import type { Project } from "@/content/projects";
import { PipelineDiagram } from "@/components/diagrams/PipelineDiagram";
import { CopyCitation } from "@/components/projects/CopyCitation";
import { Badge } from "@/components/shared/Badge";
import { Container } from "@/components/shared/Container";
import { Placeholder } from "@/components/shared/Placeholder";

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-base leading-7 text-muted">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const heading = project.pageTitle ?? project.title;

  return (
    <article className="py-12 sm:py-16">
      <Container width="reading">
        <p>
          <Link href="/#work" className="text-sm font-semibold text-accent">
            Back to selected work
          </Link>
        </p>
        <p className="mt-8 text-sm font-medium text-accent">{project.category}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{heading}</h1>
        {project.award ? (
          <p className="mt-4">
            <Badge tone="accent">{project.award}</Badge>
          </p>
        ) : null}
        <p className="mt-4 text-sm text-muted">{project.role}</p>
        <p className="mt-1 text-sm text-muted">{project.status}</p>
      </Container>

      <Container width="reading" className="mt-12 space-y-12">
        <section aria-labelledby="overview">
          <h2 id="overview" className="text-2xl font-semibold tracking-tight">
            Overview
          </h2>
          <div className="mt-4">
            <Prose paragraphs={project.overview} />
          </div>
        </section>

        <section aria-labelledby="problem">
          <h2 id="problem" className="text-2xl font-semibold tracking-tight">
            The problem
          </h2>
          <div className="mt-4">
            {project.problem ? <Prose paragraphs={project.problem} /> : <Placeholder kind="result" />}
          </div>
        </section>
      </Container>

      <Container className="mt-12">
        <section aria-labelledby="architecture">
          <h2 id="architecture" className="text-2xl font-semibold tracking-tight">
            System architecture
          </h2>
          <div className="mt-4">
            {project.architecture ? (
              <PipelineDiagram steps={project.architecture} label={`${heading} architecture`} />
            ) : (
              <Placeholder kind="visual" />
            )}
          </div>
        </section>
      </Container>

      <Container width="reading" className="mt-12 space-y-12">
        <section aria-labelledby="contribution">
          <h2 id="contribution" className="text-2xl font-semibold tracking-tight">
            My contribution
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
            {project.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="challenges">
          <h2 id="challenges" className="text-2xl font-semibold tracking-tight">
            Technical challenges
          </h2>
          <div className="mt-4">
            {project.challenges ? (
              <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-muted">
                {project.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <Placeholder kind="result" />
            )}
          </div>
        </section>

        <section aria-labelledby="decisions">
          <h2 id="decisions" className="text-2xl font-semibold tracking-tight">
            Engineering decisions
          </h2>
          <div className="mt-4">
            {project.decisions ? (
              <div className="grid gap-4">
                {project.decisions.map((decision) => (
                  <article key={decision.title} className="rounded-2xl border border-border bg-card p-5">
                    <h3 className="text-lg font-semibold">{decision.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{decision.body}</p>
                  </article>
                ))}
              </div>
            ) : (
              <Placeholder kind="result" />
            )}
          </div>
        </section>

        <section aria-labelledby="results">
          <h2 id="results" className="text-2xl font-semibold tracking-tight">
            Results and impact
          </h2>
          <div className="mt-4">
            {project.results ? (
              <>
                {project.results.metrics ? (
                  <dl className="grid gap-3 sm:grid-cols-2">
                    {project.results.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-xl border border-border bg-card px-4 py-3">
                        <dt className="text-sm text-muted">{metric.label}</dt>
                        <dd className="mt-1 text-2xl font-semibold tracking-tight">{metric.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                <div className="mt-4">
                  <Prose paragraphs={project.results.paragraphs} />
                </div>
              </>
            ) : (
              <Placeholder kind="result" />
            )}
          </div>
        </section>

        <section aria-labelledby="stack">
          <h2 id="stack" className="text-2xl font-semibold tracking-tight">
            Technology stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="links">
          <h2 id="links" className="text-2xl font-semibold tracking-tight">
            Related links
          </h2>
          {project.links.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a className="text-accent" href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-base leading-7 text-muted">
              No public repository, demo, or paper link is listed for this project.
            </p>
          )}
          {project.citation ? (
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Citation</h3>
              <CopyCitation citation={project.citation} />
            </div>
          ) : null}
        </section>
      </Container>
    </article>
  );
}
