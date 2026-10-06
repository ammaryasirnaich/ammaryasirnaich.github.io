import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return {};
  }
  const title = project.pageTitle ?? project.title;
  const path = `/projects/${project.slug}/`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: project.summary,
      url: path,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }
  return <ProjectCaseStudy project={project} />;
}
