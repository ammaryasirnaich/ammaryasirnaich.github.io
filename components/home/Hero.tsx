import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

export function Hero() {
  return (
    <section className="border-b border-border py-16 sm:py-24" aria-labelledby="hero-title">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_9rem]">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-muted">
              {site.name}, {site.credential}
            </p>
            <h1
              id="hero-title"
              className="mt-3 max-w-[16ch] text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              {site.role}
            </h1>
            <p className="mt-6 max-w-[720px] text-lg leading-8 text-foreground">
              {site.positioning}
            </p>
            <p className="mt-3 max-w-[720px] text-base leading-7 text-muted">
              {site.supporting}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#work">View Projects</Button>
              <Button href={site.cvPath} variant="secondary" download>
                Download CV
              </Button>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <li>
                <a className="text-accent" href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a className="text-accent" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="text-accent" href={`mailto:${site.email}`}>
                  Email
                </a>
              </li>
            </ul>
            <p className="mt-6 max-w-[720px] text-sm leading-6 text-muted">{site.status}</p>
          </Reveal>
          <Reveal delay={0.08} className="md:justify-self-end">
            <Image
              src={site.portrait}
              alt="Portrait of Ammar Yasir Naich"
              width={768}
              height={768}
              priority
              className="h-28 w-28 rounded-2xl object-cover object-[center_18%] sm:h-36 sm:w-36"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
