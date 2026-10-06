export type Award = {
  title: string;
  issuer: string;
  detail: string;
  primary: boolean;
};

export const awards: Award[] = [
  {
    title: "Best Industrial Paper Award",
    issuer: "DeLTA 2026",
    detail:
      "PointConViT: An Adaptable Convolution-Transformer Model for High-rate 3D Detection in Autonomous Robot.",
    primary: true,
  },
  {
    title: "Nebius Fellowship",
    issuer: "AI Inference Engineer track",
    detail:
      "LLM Architecture credential for large language model inference, deployment, optimisation, and scalable serving.",
    primary: true,
  },
  {
    title: "NVIDIA DLI",
    issuer: "Fundamentals of Accelerated Computing with CUDA Python",
    detail: "CUDA Python certification.",
    primary: true,
  },
  {
    title: "National Award for PhD Research",
    issuer: "Higher Education Commission of Pakistan",
    detail: "PhD research scholarship.",
    primary: false,
  },
  {
    title: "Big Data Specialization",
    issuer: "University of California San Diego, Coursera",
    detail: "Big Data, Version 1 Specialization.",
    primary: false,
  },
  {
    title: "Visual Perception for Self-Driving Cars",
    issuer: "University of Toronto, Coursera",
    detail: "Course certificate.",
    primary: false,
  },
];
