import { earlierExperience, experience, type Role } from "@/data/experience";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

function RoleBlock({ role }: { role: Role }) {
  return (
    <article className="relative pl-6">
      <span
        className="absolute top-2 left-0 h-2.5 w-2.5 rounded-full bg-accent"
        aria-hidden="true"
      />
      <p className="text-sm text-muted">{role.dates}</p>
      <h3 className="mt-1 text-xl font-semibold tracking-tight">{role.title}</h3>
      <p className="mt-1 text-sm text-accent">
        {role.organisation} · {role.location}
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
        {role.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export function ExperiencePreview() {
  return (
    <section id="experience" className="border-t border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Research and production, in parallel"
          description="Current roles at Cold Banana and Queen Mary, then the path that led there."
        />
        <div className="mt-10 space-y-10 border-l border-border">
          {experience.map((role, index) => (
            <Reveal key={`${role.title}-${role.dates}`} delay={index * 0.04}>
              <RoleBlock role={role} />
            </Reveal>
          ))}
        </div>
        <details className="mt-10 rounded-2xl border border-border bg-card">
          <summary className="cursor-pointer px-5 py-4 text-base font-semibold">
            Earlier engineering
          </summary>
          <div className="space-y-8 px-5 pb-6">
            {earlierExperience.map((role) => (
              <RoleBlock key={role.title} role={role} />
            ))}
          </div>
        </details>
      </Container>
    </section>
  );
}
