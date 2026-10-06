import { About } from "@/components/home/About";
import { Awards } from "@/components/home/Awards";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { Expertise } from "@/components/home/Expertise";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { OpenSource } from "@/components/home/OpenSource";
import { Hero } from "@/components/home/Hero";
import { ResearchPreview } from "@/components/home/ResearchPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <OpenSource />
      <Expertise />
      <ExperiencePreview />
      <ResearchPreview />
      <Awards />
      <About />
      <ContactCTA />
    </>
  );
}
