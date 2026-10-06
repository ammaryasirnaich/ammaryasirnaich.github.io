export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "AI and deep learning",
    items: [
      "PyTorch",
      "Hugging Face",
      "Transformers",
      "LLMs",
      "Fine-tuning",
      "Multimodal AI",
      "Deep learning",
      "Model evaluation",
    ],
  },
  {
    title: "Computer vision and edge AI",
    items: [
      "NVIDIA DeepStream",
      "Jetson Orin",
      "CUDA",
      "Object detection",
      "Tracking",
      "Multi-camera analytics",
      "LiDAR",
      "3D vision",
    ],
  },
  {
    title: "Agentic AI",
    items: [
      "RAG",
      "Agentic workflows",
      "Tool orchestration",
      "Memory",
      "Grounding",
      "Guardrails",
    ],
  },
  {
    title: "Engineering and infrastructure",
    items: [
      "Python",
      "C++",
      "SQL",
      "Kubernetes",
      "Kubeflow",
      "MLflow",
      "AWS",
      "CI/CD",
      "OpenStack",
      "Distributed training",
      "GPU acceleration",
      "Quantization",
    ],
  },
];
