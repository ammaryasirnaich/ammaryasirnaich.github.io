import { awards } from "@/data/awards";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Awards() {
  const primary = awards.filter((award) => award.primary);
  const secondary = awards.filter((award) => !award.primary);

  return (
    <section id="awards" className="border-t border-border py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Awards" title="Selected credentials" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {primary.map((award, index) => (
            <Reveal key={award.title} delay={index * 0.04}>
              <article className="h-full rounded-2xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold tracking-tight">{award.title}</h3>
                <p className="mt-2 text-sm font-medium text-accent">{award.issuer}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{award.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {secondary.map((award) => (
            <li key={award.title} className="text-sm leading-6 text-muted">
              <span className="font-medium text-foreground">{award.title}</span>
              <span className="block">{award.issuer}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
