export type ArchitectureStep = {
  title: string;
  detail?: string;
};

export type Decision = {
  title: string;
  body: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectResults = {
  paragraphs: string[];
  metrics?: Metric[];
};

export type Project = {
  slug: string;
  title: string;
  pageTitle?: string;
  category: string;
  summary: string;
  technologies: string[];
  featured?: boolean;
  award?: string;
  confidential: boolean;
  role: string;
  status: string;
  overview: string[];
  problem: string[] | null;
  architecture: ArchitectureStep[] | null;
  contribution: string[];
  challenges: string[] | null;
  decisions: Decision[] | null;
  results: ProjectResults | null;
  links: ProjectLink[];
  citation?: string;
};

const confidentiality =
  "Some implementation details are omitted due to commercial confidentiality.";

export const projects: Project[] = [
  {
    slug: "multicamera-edge-ai",
    title: "Real-Time Multi-Camera Edge AI Platform",
    category: "Computer Vision · Edge AI",
    summary:
      "One GPU pipeline for multi-camera detection, tracking, a shared person identity, and facial emotion.",
    technologies: [
      "NVIDIA DeepStream",
      "TensorRT",
      "YOLOv8",
      "ByteTrack",
      "OSNet",
      "SCRFD",
      "MQTT",
      "AprilTag",
    ],
    confidential: true,
    role: "AI Engineer / KTP Associate, Cold Banana, Bournemouth",
    status: "In progress · August 2026 – present",
    overview: [
      "A live multi-camera analytics platform. One GPU process detects people, tracks them, keeps a single identity across views, and reads facial emotion.",
      "Ammar leads the work as AI Engineer and KTP Associate at Cold Banana in Bournemouth, from August 2026. The project is in progress.",
      confidentiality,
    ],
    problem: [
      "The cameras are independent IP streams. They share no hardware clock, and each tracker issues its own IDs, so a person is not the same identity from one view to the next.",
      "Detection, re-identification, face, and emotion still have to run together, in real time, on one GPU. A floor position also has to be estimated from those views without a measured lens model.",
    ],
    architecture: [
      {
        title: "Time alignment",
        detail:
          "Software alignment across IP cameras that share no hardware clock, with the host clock as fallback when a camera timestamp is missing.",
      },
      {
        title: "One GPU pipeline",
        detail:
          "Hardware decode, GStreamer, CUDA, and NVIDIA DeepStream. YOLOv8 and ByteTrack run in TensorRT at FP16, in the same process as re-identification and emotion.",
      },
      {
        title: "Identity and emotion",
        detail:
          "OSNet appearance embeddings are the shared person ID. SCRFD and the facial-emotion model run only inside the floor region.",
      },
      {
        title: "Floor and live output",
        detail:
          "AprilTag calibration and a metric depth model estimate floor position. MQTT publishes live tracks and mood. FastAPI and OpenCV support calibration, recording, and the mosaic.",
      },
    ],
    contribution: [
      "Leading the multi-camera pipeline on one GPU.",
      "Using appearance embeddings so one person keeps a single identity when per-camera tracker IDs reset.",
      "Gating the heavier face and emotion models to the floor region, and publishing live tracks and mood.",
    ],
    challenges: [
      "The IP cameras share no common hardware clock, so their frames are not aligned on arrival.",
      "Per-camera tracker IDs reset, so identity has to survive a new ID in every view.",
      "Detection, re-identification, face, and emotion have to run together, in real time, on one GPU.",
      "Floor position has to be estimated from several views without a measured lens model.",
    ],
    decisions: [
      {
        title: "Why one GPU pipeline?",
        body: "Detection, tracking, re-identification, and emotion share one video-analytics process. The live path stays on a single GPU instead of being split across services.",
      },
      {
        title: "Why appearance embeddings for identity?",
        body: "Tracker IDs belong to one camera and reset. An appearance embedding is the ID that links the same person across views, and emotion is attached in that same process.",
      },
      {
        title: "Why a floor-region gate?",
        body: "Face and emotion are the heavier models. They run only for people inside the area of interest, using a floor position from AprilTag calibration and a metric depth model.",
      },
      {
        title: "Why software time alignment?",
        body: "There is no shared hardware clock. Frames are aligned in software, and the host clock fills in when a camera timestamp is missing.",
      },
      {
        title: "Why a message bus for tracks and mood?",
        body: "MQTT carries live tracks and mood out of the GPU process, so calibration, recording, and the mosaic stay separate from inference.",
      },
    ],
    results: {
      paragraphs: [
        "In a live run, one process detects, tracks, keeps a shared identity across camera views, and reads facial emotion. Operators can calibrate, record, and watch a live mosaic.",
      ],
      metrics: [
        { label: "Per-stream rate", value: "20–25 FPS" },
        { label: "Camera skew", value: "Under 100 ms" },
        { label: "Calibration replay", value: "About 0.3 px" },
      ],
    },
    links: [],
  },
  {
    slug: "agentic-rag",
    title: "Enterprise Agentic RAG Platform",
    category: "Agentic AI · LLM Systems",
    summary:
      "Agentic and graph RAG for a construction client, over PDFs, documents, images, and graphs.",
    technologies: [
      "Foundation models",
      "Agentic RAG",
      "Graph RAG",
      "TurboVec",
      "Tool orchestration",
      "Memory",
      "Grounding",
      "Guardrails",
    ],
    confidential: true,
    role: "AI Engineer / KTP Associate, Cold Banana, Bournemouth",
    status: "In progress · August 2026 – present",
    overview: [
      "An enterprise agentic RAG platform for a construction-industry client. Project files of different kinds go into one workflow: PDFs, Word documents, images, and graphs.",
      "Ammar is architecting it as AI Engineer and KTP Associate at Cold Banana in Bournemouth, from August 2026, alongside the edge analytics platform. The project is in progress.",
      confidentiality,
    ],
    problem: [
      "Construction projects already produce mixed files: specifications and other PDFs, Word documents, images such as drawings and site photos, and graphs such as programme charts.",
      "A text-only index treats those as the same kind of input. The platform has to retrieve across them, reason with tools and memory, and keep each answer tied to the source it came from.",
    ],
    architecture: [
      {
        title: "Mixed construction inputs",
        detail:
          "PDFs, Word documents, images, and graphs from the construction project enter one pipeline.",
      },
      {
        title: "Foundation-model encoding",
        detail:
          "Foundation models encode that multidimensional input so a drawing, a photo, a document, and a chart can be retrieved together.",
      },
      {
        title: "Agentic and graph RAG",
        detail:
          "Agentic RAG runs retrieval, tool orchestration, and memory. Graph RAG links related items across the project files. TurboVec is part of the retrieval path.",
      },
      {
        title: "Grounded answers",
        detail:
          "Grounding and guardrails keep a cited source attached to the answer.",
      },
    ],
    contribution: [
      "Architecting the platform for a construction-industry client.",
      "Choosing foundation models so PDFs, documents, images, and graphs enter one RAG system.",
      "Designing the workflow as Agentic RAG with Graph RAG, TurboVec, memory, grounding, and guardrails.",
    ],
    challenges: [
      "The construction client’s files are not one format. The system has to take PDFs, Word documents, images, and graphs.",
      "A drawing, a site photo, and a programme chart are not text passages, so a single text index cannot represent them.",
      "An answer still has to stay tied to the project file it came from, across those input types.",
    ],
    decisions: [
      {
        title: "Why foundation models?",
        body: "The input is multidimensional: PDFs, documents, images, and graphs. Foundation models encode those types into one RAG system instead of a text-only index.",
      },
      {
        title: "Why Agentic RAG and Graph RAG?",
        body: "Agentic RAG combines retrieval, tool orchestration, and memory in one workflow. Graph RAG links a clause, a drawing, a package, or a chart when the project files refer to each other. TurboVec sits on the retrieval path.",
      },
      {
        title: "Why grounding and guardrails?",
        body: "A construction answer is only useful if the source stays attached. Grounding and guardrails keep the reply tied to the project file rather than a generic model response.",
      },
    ],
    results: {
      paragraphs: [
        "The platform is in progress, so these are the effects it is built for, not a measured score.",
        "A construction team can ask across the files the project already produces: specifications and other PDFs, Word documents, images such as drawings and site photos, and graphs such as programme charts. The answer is meant to come from those sources, with the cited file attached, rather than from a generic model reply.",
        "Graph links let a question follow a reference from a clause to a drawing, a package, or a chart, so the search is not limited to the single document that happened to match the words.",
      ],
    },
    links: [],
  },
  {
    slug: "pointconvit",
    title: "PointConViT",
    pageTitle:
      "PointConViT: An Adaptable Convolution-Transformer Model for High-rate 3D Detection in Autonomous Robot",
    category: "Research · Computer Vision",
    summary:
      "End-to-end transformer for high-rate 3D object detection, using gated positional self-attention so local and global point-cloud features are learned in one architecture.",
    technologies: [
      "LiDAR",
      "Point clouds",
      "PointNet++",
      "Transformers",
      "GPSA",
      "KITTI",
      "3D object detection",
    ],
    award: "Best Industrial Paper — DeLTA 2026",
    confidential: false,
    role: "First author, Queen Mary University of London",
    status: "Published · DeLTA 2026",
    overview: [
      "PointConViT: An Adaptable Convolution-Transformer Model for High-rate 3D Detection in Autonomous Robot. Published in the Proceedings of the 7th International Conference on Deep Learning Theory and Applications (DeLTA), 2026, pages 299–317, Porto, Portugal.",
      "Authors: Ammar Yasir Naich, Nikesh Bajaj, Sofia Zahri, and Jesús Requena Carrión, Queen Mary University of London. The paper received the Best Industrial Paper Award.",
      "Ammar is the first author. The public repository hosts the official implementation for training and 3D object detection inference.",
    ],
    problem: [
      "Fast, reliable 3D object detection matters for autonomous robot navigation. Vision transformers are a candidate for point clouds, and those clouds are large, sparse, and irregular.",
      "Hybrid CNN–transformer models only partly address that. They often reach low detection rates and need difficult hyperparameter tuning across stages. PointConViT is an end-to-end transformer: gated positional self-attention lets early layers aggregate local features while the rest of the backbone reasons globally, without a separate CNN training pipeline.",
    ],
    architecture: [
      {
        title: "Feature embedding",
        detail:
          "Hierarchical PointNet++ set abstraction, with three set-abstraction levels, turns a sparse LiDAR scene into a fixed-size representation.",
      },
      {
        title: "Transformer backbone",
        detail:
          "Twelve layers: ten gated positional self-attention (GPSA) MLP blocks and two multi-head self-attention MLP blocks, with nine heads.",
      },
      {
        title: "3D object detector",
        detail:
          "Anchor-free bounding box and class prediction. The reported experiments use the KITTI Car class.",
      },
    ],
    contribution: [
      "First author of the DeLTA 2026 paper.",
      "Published the official training and inference implementation at github.com/ammaryasirnaich/pointconvit.",
      "The method is a single transformer backbone with GPSA, rather than separate CNN and transformer training pipelines.",
    ],
    challenges: [
      "Point clouds are large, sparse, and irregular for vision transformers.",
      "Hybrid CNN–transformer models in this setting often reach low detection rates.",
      "Those hybrid pipelines need difficult hyperparameter tuning across heterogeneous stages.",
    ],
    decisions: [
      {
        title: "Why a pure transformer with GPSA?",
        body: "Unlike hybrid architectures, local feature aggregation and global context happen in one backbone. Early transformer layers can behave similarly to convolutions, so the model learns local and global 3D features without separate CNN and transformer training pipelines.",
      },
      {
        title: "Why PointNet++ for the embedding?",
        body: "The published method uses hierarchical PointNet++ set abstraction, with three levels, to convert sparse LiDAR into the fixed-size representation the transformer consumes.",
      },
      {
        title: "Which benchmark is reported?",
        body: "The reported experiments are the KITTI Car class on the validation set at IoU 70%. KITTI, nuScenes, and Waymo appear in the broader PhD research; the figures below are the KITTI Car results from the public README.",
      },
    ],
    results: {
      paragraphs: [
        "On the KITTI 3D Object Detection Benchmark, validation set, Car class, IoU 70%, a single NVIDIA RTX 3080. The public README reports competitive accuracy and the highest detection rate among the compared pure-transformer and hybrid baselines on that GPU.",
      ],
      metrics: [
        { label: "3D AP (Easy)", value: "84.98%" },
        { label: "BEV AP (Hard)", value: "81.55%" },
        { label: "Detection rate", value: "15.6 FPS" },
        { label: "Parameters", value: "11.7M" },
      ],
    },
    links: [
      {
        label: "Paper",
        href: "https://www.insticc.org/node/TechnicalProgram/DeLTA/2026/presentationDetails/149875",
      },
      {
        label: "Code",
        href: "https://github.com/ammaryasirnaich/pointconvit",
      },
    ],
    citation: `@inproceedings{naich2026pointconvit,
  title={PointConViT: An Adaptable Convolution-Transformer Model for High-rate 3D Detection in Autonomous Robot},
  author={Naich, Ammar Yasir and Bajaj, Nikesh and Zahri, Sofia and Requena Carri{\'o}n, Jes{\'u}s},
  booktitle={Proceedings of the 7th International Conference on Deep Learning Theory and Applications (DeLTA)},
  pages={299--317},
  year={2026},
  address={Porto, Portugal}
}`,
  },
  {
    slug: "ai-evaluation-platform",
    title: "Scalable AI Evaluation and Research Platform",
    category: "ML Infrastructure",
    summary:
      "Research platform for hosting, executing, evaluating, and comparing machine-learning models across distributed GPU resources.",
    technologies: [
      "OpenStack",
      "Distributed training",
      "Model evaluation",
      "CLI",
      "Authentication",
    ],
    confidential: false,
    role: "Research Fellow, Queen Mary University of London",
    status: "In progress · October 2021 – present",
    overview: [
      "A scalable platform for hosting and evaluating machine-learning models on OpenStack, with reproducible evaluation workflows and distributed training and deployment across GPU resources.",
      "Ammar leads the work as Research Fellow in the School of Electronic Engineering and Computer Science at Queen Mary University of London. The fellowship runs from October 2021 and is current.",
      "He built internal tooling, CLI-based interfaces, and authentication-integrated research software for experimentation and collaboration.",
    ],
    problem: [
      "The platform has to support organised model execution, reproducible evaluation, and distributed training and deployment across shared GPU resources.",
    ],
    architecture: [
      { title: "Model hosting" },
      { title: "Organised model execution" },
      { title: "Reproducible evaluation" },
      { title: "Distributed training and deployment" },
      { title: "OpenStack GPU resources" },
      { title: "CLI interfaces" },
      { title: "Authentication" },
    ],
    contribution: [
      "Leading development of the model hosting and evaluation platform on OpenStack.",
      "Supporting organised execution, reproducible evaluation, and distributed GPU training and deployment.",
      "Building internal tooling, CLI interfaces, and authentication-integrated research software.",
    ],
    challenges: null,
    decisions: null,
    results: null,
    links: [],
  },
  {
    slug: "github-repo-summarizer",
    title: "GitHub Repo Summarizer",
    category: "LLM systems",
    summary:
      "FastAPI service that summarizes a public GitHub repository with an LLM and returns a summary, technologies, and structure.",
    technologies: ["Python", "FastAPI", "Qwen", "Nebius", "vLLM", "uv"],
    confidential: false,
    role: "Public repository",
    status: "Public · github.com/ammaryasirnaich/Github_Repo_Summarizer",
    overview: [
      "Repo Summarizer API is a FastAPI service that summarizes public GitHub repositories. POST /summarize accepts a GitHub URL and returns summary, technologies, and structure.",
      "The default model and tokenizer are Qwen/Qwen2.5-7B-Instruct. The service can call Nebius or a separate vLLM server. It targets Python 3.10+ and uses uv or pip.",
      "The repository is public at github.com/ammaryasirnaich/Github_Repo_Summarizer.",
    ],
    problem: [
      "A full repository does not fit in a model context window. The service has to choose the files that describe the project, stay inside a context cap, and still return a useful summary.",
    ],
    architecture: [
      { title: "POST /summarize", detail: "FastAPI route accepts a public GitHub URL." },
      { title: "Repository fetch", detail: "Reads the repository through the GitHub API." },
      { title: "File filter", detail: "Drops binaries, lockfiles, vendored directories, and files over 50 KB." },
      {
        title: "Context strategy",
        detail:
          "Tiered priority: README and key docs, directory tree, config files, then selected entry-point source. Truncation is token-based when the tokenizer loads, otherwise character-based.",
      },
      { title: "Prompt and LLM", detail: "Sends the packed context to Nebius or a vLLM server." },
    ],
    contribution: [
      "Published the FastAPI service, context builder, and LLM client.",
      "Supported Nebius and a separate local vLLM server, with Qwen/Qwen2.5-7B-Instruct as the default model and tokenizer.",
    ],
    challenges: [
      "Repository contents have to stay inside a context budget. The default cap is 8192 tokens.",
      "If the tokenizer cannot load, truncation falls back to character limits.",
      "A missing vLLM server returns 502. The README documents switching to Nebius or pointing VLLM_BASE_URL at a running server.",
    ],
    decisions: [
      {
        title: "Why tiered context instead of the whole tree?",
        body: "The README calls this Approach A: README and key docs first, then the directory tree, config files, and a small set of entry-point sources. Lockfiles, binaries, and generated directories are skipped.",
      },
      {
        title: "Why match the tokenizer to the model?",
        body: "Qwen/Qwen2.5-7B-Instruct is used for both the LLM and the tokenizer so truncation follows that model’s tokenization. SUMMARIZER_MODEL and TOKENIZER_MODEL can override it.",
      },
      {
        title: "Why Nebius or vLLM?",
        body: "USE_NEBIUS selects the Nebius API. Otherwise the app calls a vLLM server over HTTP and does not install vLLM in the API environment.",
      },
    ],
    results: {
      paragraphs: [
        "The README documents a worked POST /summarize call against github.com/psf/requests. The returned summary describes the HTTP library, lists Python, urllib3, and certifi, and places the source in src/requests/, tests in tests/, and documentation in docs/.",
        "The repository does not publish a separate accuracy score. The operating limits it does publish are a default context budget of 8192 tokens, files larger than 50 KB skipped, and an LLM request timeout of 120 seconds.",
      ],
      metrics: [
        { label: "Context budget", value: "8192 tokens" },
        { label: "File size skip", value: "50 KB" },
        { label: "LLM timeout", value: "120 s" },
      ],
    },
    links: [
      { label: "Code", href: "https://github.com/ammaryasirnaich/Github_Repo_Summarizer" },
    ],
  },
  {
    slug: "pyreqify",
    title: "PyReqify",
    category: "Open source · Python tooling",
    summary:
      "CLI that scans Python and Jupyter files, maps imports to packages, and writes a requirements.txt.",
    technologies: ["Python", "pip", "requirements.txt", "Jupyter"],
    featured: false,
    confidential: false,
    role: "Public repository",
    status: "Public · github.com/ammaryasirnaich/PyReqify",
    overview: [
      "PyReqify is a Python module and CLI for generating a requirements.txt file. It scans .py and .ipynb files, extracts imported modules, and can record installed versions.",
      "Install with pip install pyreqify. The command takes a source folder and a destination folder.",
      "The repository is public at github.com/ammaryasirnaich/PyReqify and is released under the MIT license.",
    ],
    problem: [
      "Dependency files drift from the imports actually used in Python and notebook code. PyReqify builds requirements.txt from those imports.",
    ],
    architecture: [
      { title: "Source folder", detail: "Reads .py and .ipynb files in the given directory." },
      { title: "Import extraction", detail: "Collects imported modules from those files." },
      { title: "Package mapping", detail: "Maps common aliases to official package names." },
      { title: "Version detection", detail: "Looks up installed versions of the imported modules." },
      { title: "requirements.txt", detail: "Writes the dependency file in the destination folder." },
    ],
    contribution: [
      "Published the module, CLI, and packaging (pyproject.toml) for pip install pyreqify.",
      "Added flags to include module versions and the source Python version.",
    ],
    challenges: [
      "Import names in .py and .ipynb files often differ from the installable package name, so aliases have to be mapped before a requirements file is useful.",
      "A generated file can list names only, or it can pin the installed version and the Python version that produced the scan.",
    ],
    decisions: [
      {
        title: "Which files are scanned?",
        body: "The README scans .py and .ipynb files in a directory, then writes requirements.txt for the extracted imports.",
      },
      {
        title: "What can the file include?",
        body: "pyreqify <source_folder> <destination folder> writes dependencies. --include-module-version adds installed versions. --include-source-pyversion also records the Python version.",
      },
    ],
    results: {
      paragraphs: [
        "The README shows one generated requirements.txt from a scan of .py and .ipynb files. That sample pins scikit-learn 1.5.1, keras 3.6.0, numpy 2.0.1, pandas 2.2.2, open3d 0.16.1, webcolors 24.8.0, nbformat 5.10.4, matplotlib 3.9.1, typing 3.7.4.3, and torch 2.2.2.",
        "With the source-version flag, the same sample records Python 3.10.14. The repository does not report a coverage or accuracy score beyond that documented output.",
      ],
    },
    links: [{ label: "Code", href: "https://github.com/ammaryasirnaich/PyReqify" }],
  },
  {
    slug: "local-wiki",
    title: "Local Wiki",
    category: "Open source · Agent workflows",
    summary:
      "Local knowledge base: drop sources in raw/, and an agent maintains an interlinked Markdown wiki.",
    technologies: ["Markdown", "Cursor", "Claude Code", "AGENTS.md"],
    featured: false,
    confidential: false,
    role: "Public repository",
    status: "Public · github.com/ammaryasirnaich/local_wiki_setup",
    overview: [
      "Local Wiki Template is a personal knowledge base kept as Markdown. Raw documents stay in raw/. An agent compiles them into wiki/ with cross-links, an index, and a log.",
      "It follows Andrej Karpathy’s LLM Wiki pattern: ingest, query, and lint. The same AGENTS.md schema is written for Cursor Agent mode and Claude Code.",
      "The repository is public at github.com/ammaryasirnaich/local_wiki_setup. The wiki files stay local. No extra wiki host or vector database is required.",
    ],
    problem: [
      "One-off retrieval answers disappear after the question. This template keeps raw sources and a compiled wiki so later questions build on pages that already exist.",
    ],
    architecture: [
      { title: "raw/", detail: "Immutable PDFs, Markdown, and text. The agent reads them and does not edit them." },
      { title: "Ingest", detail: "Reads a source, writes or updates wiki pages, and adds wiki-links." },
      { title: "wiki/index.md", detail: "Categorized table of contents." },
      { title: "wiki/log.md", detail: "Append-only record of operations." },
      { title: "Query", detail: "Answers from the wiki and cites pages." },
      { title: "Lint", detail: "Checks orphans, contradictions, missing links, and stale claims." },
    ],
    contribution: [
      "Published the folder schema, AGENTS.md contract, and Cursor rule that points the agent at that schema.",
      "Documented the same ingest, query, and lint prompts for Cursor and Claude Code.",
    ],
    challenges: [
      "The README treats index.md plus page reads as enough up to roughly 100 sources, and points to local hybrid search after that.",
    ],
    decisions: [
      {
        title: "Why keep raw/ immutable?",
        body: "Sources stay the originals. The agent updates wiki/, wiki/index.md, and wiki/log.md only.",
      },
      {
        title: "Why AGENTS.md for both agents?",
        body: "Cursor loads it through .cursor/rules. Claude Code can use a CLAUDE.md copy or symlink of the same file. The operations stay the same.",
      },
    ],
    results: {
      paragraphs: [
        "The README states that ingesting one source often updates 10–15 wiki pages: a source page, related concept pages, wiki/index.md, and an append to wiki/log.md.",
        "It also states that index.md plus page reads is enough up to roughly 100 sources, and points to local hybrid search after that. The wiki stays local Markdown. No extra host or vector database is required.",
      ],
      metrics: [
        { label: "Pages updated per source", value: "10–15" },
        { label: "Index-only scale", value: "~100 sources" },
      ],
    },
    links: [{ label: "Code", href: "https://github.com/ammaryasirnaich/local_wiki_setup" }],
  },
  {
    slug: "llama-finetune",
    title: "Llama 3.1 Fine-tuning",
    category: "Open source · LLMs",
    summary:
      "Tutorial for fine-tuning Meta-Llama-3.1-8B with LoRA and Unsloth on Colab or a local GPU.",
    technologies: ["Python", "Unsloth", "LoRA", "Llama 3.1", "PyTorch", "Jupyter"],
    featured: false,
    confidential: false,
    role: "Public repository",
    status: "Public · github.com/ammaryasirnaich/finetunninglama3_1",
    overview: [
      "This repository is a tutorial for fine-tuning Meta-Llama-3.1-8B with LoRA through Unsloth. It can run in Google Colab or on a local GPU.",
      "The notebook covers environment setup, model and tokenizer loading, Alpaca-style prompts, SFTTrainer, and saving the model locally or to the Hugging Face Hub.",
      "The repository is public at github.com/ammaryasirnaich/finetunninglama3_1.",
    ],
    problem: [
      "Full fine-tuning of an 8B model is heavy for a laptop or a Colab session. The tutorial uses LoRA and Unsloth so the run fits a smaller GPU.",
    ],
    architecture: [
      { title: "Environment", detail: "Installs torch, transformers, datasets, trl, and unsloth." },
      { title: "Configuration", detail: "Sets sequence length, data type, and precision." },
      { title: "Model and tokenizer", detail: "Loads them with Unsloth FastLanguageModel." },
      { title: "Data", detail: "Formats examples with an Alpaca prompt and the datasets library." },
      { title: "Training", detail: "Runs SFTTrainer with the configured learning rate, batch size, and steps." },
      { title: "Save", detail: "Writes the model and tokenizer locally, with an optional Hugging Face Hub push." },
    ],
    contribution: [
      "Published the LoRA fine-tuning notebook and README for Meta-Llama-3.1-8B with Unsloth.",
    ],
    challenges: [
      "The README presents the Meta-Llama-3.1-8B LoRA tutorial as a Colab or local-GPU run that takes around 10.2 GB of GPU memory.",
    ],
    decisions: [
      {
        title: "Why Unsloth and LoRA?",
        body: "The README presents Unsloth as the fine-tuning framework and LoRA as the adaptation method, for Colab or a local GPU of about 10.2 GB.",
      },
      {
        title: "Which datasets does the README suggest next?",
        body: "For further experiments it names Common Crawl, Wikitext-103, BooksCorpus, and CodeSearchNet. Those are suggestions in the tutorial, not reported training runs.",
      },
    ],
    results: {
      paragraphs: [
        "The repository title states the Unsloth setup as 2.1× faster and using 60% less memory, and the description says a local run takes around 10.2 GB of GPU memory. Those figures are the repository’s own description of the tutorial, not a separate benchmark table.",
      ],
    },
    links: [{ label: "Code", href: "https://github.com/ammaryasirnaich/finetunninglama3_1" }],
  },
  {
    slug: "ivef",
    title: "IVEF",
    pageTitle: "IVEF: LiDAR-based Intensity-Aware Outdoor 3D Object Detection",
    category: "Research · Computer Vision",
    summary:
      "Voxel intensity-histogram features concatenated with geometry for outdoor 3D detection, built on MMDetection3D.",
    technologies: ["LiDAR", "MMDetection3D", "PyTorch", "KITTI", "Voxel features"],
    confidential: false,
    role: "Public repository",
    status: "Public · github.com/ammaryasirnaich/IVEF",
    overview: [
      "IVEF is the code repository for LiDAR-based intensity-aware outdoor 3D object detection. Intensity is encoded as a voxel-wise histogram and concatenated with the geometric feature.",
      "The implementation is based on MMDetection3D. Authors on the citation are Ammar Yasir Naich and Jesús Requena Carrión. The paper is Sensors 24.9 (2024): 2942.",
      "The repository is public at github.com/ammaryasirnaich/IVEF.",
    ],
    problem: [
      "Outdoor 3D detection from LiDAR needs a feature that uses return intensity as well as geometry. IVEF builds a voxel-wise intensity histogram and concatenates it with the geometric feature.",
    ],
    architecture: [
      { title: "LiDAR input" },
      {
        title: "Intensity voxel feature extractor",
        detail: "Voxel-wise LiDAR intensity histogram features.",
      },
      { title: "Geometric feature" },
      { title: "Concatenated feature map" },
      { title: "3D detection pipeline", detail: "Based on MMDetection3D." },
    ],
    contribution: [
      "Published the IVEF repository and the Sensors 2024 paper on intensity-aware outdoor 3D detection.",
      "Reported a KITTI validation baseline trained in that codebase.",
    ],
    challenges: [
      "The Sensors paper states that geometric LiDAR features alone can be susceptible to environmental noise from adverse weather or highly scattering media.",
    ],
    decisions: [
      {
        title: "Why an intensity histogram?",
        body: "The README centers the method on voxel-wise LiDAR intensity histogram features, concatenated with the geometric feature for the detection pipeline.",
      },
      {
        title: "Why MMDetection3D?",
        body: "The code is based on MMDetection3D. The README thanks that project for the open-source codebase.",
      },
    ],
    results: {
      paragraphs: [
        "On KITTI, the Sensors paper reports comparable 3D and bird’s-eye-view detection for cars against the method it compares with, superior results for pedestrians and cyclists, and an inference rate of 40.7 FPS at a lower computational cost.",
        "The repository model zoo lists one configuration: Hard difficulty, R40, validation set, trained for about 16 hours on one NVIDIA RTX 3080 with PyTorch 1.9.",
      ],
      metrics: [
        { label: "Car @ R40", value: "74.26" },
        { label: "Pedestrian @ R40", value: "47.90" },
        { label: "Cyclist @ R40", value: "61.94" },
        { label: "Inference rate", value: "40.7 FPS" },
      ],
    },
    links: [
      { label: "Paper", href: "https://doi.org/10.3390/s24092942" },
      { label: "Code", href: "https://github.com/ammaryasirnaich/IVEF" },
    ],
    citation: `@article{naich2024lidar,
  title={LiDAR-based intensity-aware outdoor 3D object detection},
  author={Naich, Ammar Yasir and Requena Carri{\'o}n, Jes{\'u}s},
  journal={Sensors},
  volume={24},
  number={9},
  pages={2942},
  year={2024},
  publisher={MDPI},
  doi={10.3390/s24092942}
}`,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
