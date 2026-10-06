import { education } from "@/data/experience";
import { site } from "@/data/site";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-24">
      <Container width="reading">
        <SectionHeading
          eyebrow="About"
          title="Engineering AI systems from research to production."
        />
        <div className="mt-8 space-y-5 text-base leading-7 text-muted">
          <p>
            The path runs from software engineering into computer vision, applied AI, and production machine learning. Earlier work covered embedded sensing and geospatial systems. The PhD and research fellowship focused on real-time 3D perception and shared GPU infrastructure. The current KTP role is production AI at Cold Banana.
          </p>
          <p>
            The same thread connects modelling, optimisation, GPU acceleration, deployment, and system architecture: CUDA and quantization in research, DeepStream and Jetson at the edge, and agentic RAG with retrieval, tools, memory, grounding, and guardrails.
          </p>
          <p>
            Ammar holds a PhD in Computer Science from Queen Mary University of London (2019–2024). The publications sit behind the engineering profile, including PointConViT (Best Industrial Paper, DeLTA 2026) and a Sensors paper on intensity-aware outdoor 3D detection. He is based in the {site.location}. Current focus: KTP Associate at Cold Banana in Bournemouth, and Research Fellow at Queen Mary in London.
          </p>
          <p>
            Peer reviewer for the IEEE Open Journal of the Computer Society, and conference reviewer for ICVES.
          </p>
        </div>
        <h3 className="mt-10 text-lg font-semibold">Education</h3>
        <ul className="mt-4 space-y-4">
          {education.map((item) => (
            <li key={item.credential}>
              <p className="font-medium">{item.credential}</p>
              <p className="text-sm text-muted">
                {item.school}
                {item.dates ? ` · ${item.dates}` : ""}
              </p>
              {item.detail ? <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p> : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
