import { skills } from "@/data/skills";
import { Badge } from "@/components/shared/Badge";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Expertise() {
  return (
    <section id="expertise" className="border-t border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Technical expertise"
          title="Where the work sits"
          description="Four areas from the CV."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <article className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
