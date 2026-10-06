import { site } from "@/data/site";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";

export function ContactCTA() {
  return (
    <section id="contact" className="border-t border-border py-20 sm:py-24">
      <Container width="reading">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Interested in building ambitious AI systems?
        </h2>
        <p className="mt-4 text-base leading-7 text-muted">
          Email and LinkedIn are the fastest way to reach him. The CV is one click away.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`mailto:${site.email}`}>Email Ammar</Button>
          <Button href={site.linkedin} variant="secondary" external>
            LinkedIn
          </Button>
          <Button href={site.cvPath} variant="secondary" download>
            Download CV
          </Button>
        </div>
        <p className="mt-6 text-sm">
          <a className="font-semibold text-accent" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          <span className="text-muted"> · {site.email}</span>
        </p>
      </Container>
    </section>
  );
}
