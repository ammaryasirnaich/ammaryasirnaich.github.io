export const site = {
  name: "Ammar Yasir Naich",
  credential: "PhD",
  role: "AI / Machine Learning Engineer",
  url: "https://ammaryasirnaich.github.io",
  email: "ammar.naich@gmail.com",
  phoneDisplay: "+44 7436 792873",
  phoneTel: "+447436792873",
  linkedin: "https://www.linkedin.com/in/ammaryasirnaich/",
  github: "https://github.com/ammaryasirnaich",
  scholar: "https://scholar.google.com/citations?user=hzF7LnoAAAAJ",
  cvPath: "/cv/ammar-yasir-naich-cv.pdf",
  portrait: "/images/ammar_bio.jpeg",
  location: "United Kingdom",
  title: "Ammar Yasir Naich | AI & Machine Learning Engineer",
  description:
    "AI and Machine Learning Engineer specialising in computer vision, GPU/Edge AI, NVIDIA DeepStream, agentic RAG, LLM systems and scalable machine learning infrastructure.",
  positioning:
    "Building production AI systems across Computer Vision, Agentic AI, and GPU-accelerated Machine Learning.",
  supporting:
    "From real-time edge deployment on NVIDIA Jetson to agentic RAG, distributed training, and production ML infrastructure.",
  status:
    "Currently: AI Engineer / KTP Associate, Cold Banana, Bournemouth · Research Fellow, Queen Mary University of London",
} as const;

export const PLACEHOLDER_RESULT = "[Add verified result]";
export const PLACEHOLDER_VISUAL = "[Add project visual]";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ammar Yasir Naich",
  honorificSuffix: "PhD",
  jobTitle: "AI / Machine Learning Engineer",
  description: site.description,
  email: `mailto:${site.email}`,
  telephone: site.phoneTel,
  url: site.url,
  image: `${site.url}${site.portrait}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Queen Mary University of London",
  },
  sameAs: [site.linkedin, site.github, site.scholar],
};
