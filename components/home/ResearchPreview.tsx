import Link from "next/link";
import { publications } from "@/data/publications";
import { site } from "@/data/site";
import { CopyCitation } from "@/components/projects/CopyCitation";
import { Badge } from "@/components/shared/Badge";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ResearchPreview() {
  return (
    <section id="research" className="border-t border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Research"
          title="Publications that support the engineering"
          description="Two selected papers. The full list lives on Google Scholar."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {publications.map((paper, index) => (
            <Reveal key={paper.id} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <p className="text-sm text-muted">{paper.year}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{paper.title}</h3>
                {paper.award ? (
                  <p className="mt-3">
                    <Badge tone="accent">{paper.award}</Badge>
                  </p>
                ) : null}
                <p className="mt-3 text-sm leading-6 text-muted">{paper.authors}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{paper.venue}</p>
                <ul className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
                  {paper.paperUrl ? (
                    <li>
                      <a
                        className="text-accent"
                        href={paper.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Paper
                      </a>
                    </li>
                  ) : null}
                  {paper.projectSlug ? (
                    <li>
                      <Link className="text-accent" href={`/projects/${paper.projectSlug}/`}>
                        Project
                      </Link>
                    </li>
                  ) : null}
                </ul>
                {paper.citation ? (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-semibold text-accent">
                      Citation
                    </summary>
                    <CopyCitation citation={paper.citation} />
                  </details>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8">
          <a
            className="text-sm font-semibold text-accent"
            href={site.scholar}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Google Scholar
          </a>
        </p>
      </Container>
    </section>
  );
}
