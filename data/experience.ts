export type Role = {
  title: string;
  organisation: string;
  location: string;
  dates: string;
  focus: string[];
};

export const experience: Role[] = [
  {
    title: "AI Engineer (KTP Associate)",
    organisation: "Cold Banana",
    location: "Bournemouth",
    dates: "August 2026 – Present",
    focus: [
      "Leading a GPU-accelerated multi-camera analytics platform on NVIDIA DeepStream and Jetson Orin, integrating detection, tracking, facial-expression analysis, and gesture recognition for real-time edge deployment.",
      "Architecting an enterprise agentic RAG platform with TurboVec, LLMs, tool orchestration, memory, grounding, and guardrails.",
      "Taking AI systems from architecture and rapid prototyping through performance optimisation, benchmarking, integration, and production deployment.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    organisation: "Digital Reality Corp (DRC)",
    location: "London",
    dates: "September 2025 – October 2025",
    focus: [
      "Developed and trained models that convert LiDAR point clouds into 2D and 3D digital assets.",
      "Optimised models and automated data pipelines with CI/CD and AWS.",
    ],
  },
  {
    title: "Research Fellow",
    organisation: "Queen Mary University of London",
    location: "London",
    dates: "October 2021 – Present",
    focus: [
      "Nominated by QMUL to lecture Introduction to Data Science at QUPT in Hainan, China.",
      "Leading a scalable AI platform for model hosting and evaluation on OpenStack, with reproducible workflows, distributed GPU training and deployment, CLI tooling, and authentication.",
      "Developed Big Data Processing coursework and labs, including Apache Spark Streaming and Apache GraphFrames, and assessed student work.",
      "Supervised 23 MSc students in deep learning and computer vision.",
      "Designed and delivered Principles of Machine Learning coursework and labs, integrating crowdsourced datasets and improving student competency in machine learning techniques by 75%.",
    ],
  },
  {
    title: "PhD Research",
    organisation: "Queen Mary University of London",
    location: "London",
    dates: "June 2019 – July 2024",
    focus: [
      "Developed and evaluated deep learning models for real-time 3D object detection on KITTI, nuScenes, and Waymo, with reproducible training and evaluation pipelines.",
      "Implemented custom CUDA kernels and used model, data, and pipeline parallelism on local and cluster GPUs.",
      "Explored quantization for efficient training and fine-tuning of LLMs under edge and low-memory GPU conditions.",
    ],
  },
];

export const earlierExperience: Role[] = [
  {
    title: "Embedded Software Engineer",
    organisation: "NodeNS",
    location: "London",
    dates: "January 2020 – January 2021",
    focus: [
      "Built a sensor integration unit for plug-and-play connections between mmWave radar sensors and edge devices.",
      "Designed and implemented a security protocol for communication across the networked system.",
      "Defined the development stack and built a GUI tool for sensor data transfer and configuration.",
    ],
  },
  {
    title: "Technical Manager / Software Architecture",
    organisation: "Stingray Technologies (Pvt) Ltd",
    location: "Pakistan",
    dates: "January 2015 – September 2018",
    focus: [
      "Led software architecture and cross-functional teams delivering low-latency systems in C, C++, and Qt.",
      "Led a GIS application in C, C++, and QGIS with real-time tracking, data recovery, pattern matching, and data mining. It became the company’s main source of revenue.",
      "Developed software for real-time data from digital I/O and serial sensors, improving data processing speed by 40%.",
      "Architected emulators and simulators in C and C++ for hardware testing, reducing project cost by 35%.",
      "Contributed to Critical Event Management Services covering 250 possible system events, reducing downtime by 70%.",
    ],
  },
];

export const education = [
  {
    credential: "PhD in Computer Science",
    school: "Queen Mary University of London",
    dates: "June 2019 – July 2024",
    detail:
      "Thesis: LiDAR and transformer architectures, and multi-GPU optimisation, for 3D object detection.",
  },
  {
    credential: "Master of Engineering in Networking",
    school: "Mehran University of Engineering and Technology, Jamshoro",
    dates: "",
    detail: "",
  },
  {
    credential: "Bachelor of Engineering in Computer Systems",
    school: "Mehran University of Engineering and Technology, Jamshoro",
    dates: "",
    detail: "",
  },
] as const;
