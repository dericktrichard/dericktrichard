export type ProjectVisual = "sentry" | "pso" | "seia";

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  aspect?: "wide" | "standard" | "portrait";
};

export type ProjectSection = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  description: string;
  role: string;
  technologies: string[];
  visual: ProjectVisual;
  github: string;
  hero?: ProjectGalleryItem;
  gallery: ProjectGalleryItem[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "sentry",
    number: "01",
    title: "SENTRY",
    category: "Grounded AI / Cybersecurity",
    year: "2025 / 2026",
    shortDescription:
      "A grounded AI cybersecurity training system combining retrieval, analytics, Android and robotics.",
    description:
      "SENTRY is a research prototype designed to support cybersecurity training through grounded generative AI, trainee and management interfaces, analytics, and a Pepper robot interface.",
    role:
      "My primary focus was the grounded AI and retrieval side of the system, including the RAG pipeline and evaluation framework.",
    technologies: [
      "Python",
      "FastAPI",
      "RAG",
      "PostgreSQL",
      "Kotlin",
      "Jetpack Compose",
      "Pepper",
    ],
    visual: "sentry",
    github: "https://github.com/SENTRY-Pepper/sentry-system",
    hero: {
      src: "/projects/sentry/sentry.png",
      alt: "SENTRY system interface",
      aspect: "wide",
    },
    gallery: [
      {
        src: "/projects/sentry/sentryhome.png",
        alt: "SENTRY application home interface",
        aspect: "wide",
      },
      {
        src: "/projects/sentry/sentrylogin.png",
        alt: "SENTRY application login interface",
        aspect: "wide",
      },
      {
        src: "/projects/sentry/pepperclose.jpg",
        alt: "Pepper robot used in the SENTRY project",
        aspect: "standard",
      },
      {
        src: "/projects/sentry/pepperfull.jpg",
        alt: "Full view of the Pepper robot used in the SENTRY project",
        aspect: "portrait",
      },
    ],
    sections: [
      {
        title: "The problem",
        body:
          "Cybersecurity training requires reliable information and meaningful interaction. A generic language model can produce useful answers while still providing unsupported or inaccurate information. SENTRY explores a more controlled approach by grounding generated responses in a defined knowledge base.",
      },
      {
        title: "The system",
        body:
          "The prototype connects an Android application, FastAPI middleware, a retrieval-augmented generation pipeline, PostgreSQL storage and a Pepper robot interface. The system also records training and assessment information to examine learning outcomes and system behaviour.",
      },
      {
        title: "Grounded intelligence",
        body:
          "The retrieval pipeline works over cybersecurity and relevant legal knowledge sources rather than relying only on a model's internal knowledge. This makes the source of generated information an explicit part of the system design.",
      },
      {
        title: "Evaluation",
        body:
          "The evaluation framework considers grounding accuracy, hallucination rate, knowledge gain, latency, token usage and training or assessment outcomes. The goal is not simply to generate responses, but to understand whether the system is useful and reliable.",
      },
    ],
  },

  {
    slug: "pso-logistics",
    number: "02",
    title: "PSO Logistics Optimizer",
    category: "Optimisation / Data",
    year: "2026",
    shortDescription:
      "An interactive Particle Swarm Optimization system for exploring logistics routing.",
    description:
      "An interactive optimisation project that applies Particle Swarm Optimization to logistics routing and constrained vehicle movement.",
    role:
      "Designed and implemented the optimisation interface and visual representation of the routing process.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Particle Swarm Optimization",
      "Vehicle Routing",
    ],
    visual: "pso",
    github: "https://github.com/dericktrichard/pso-logistics-optimizer",
    gallery: [],
    sections: [
      {
        title: "The problem",
        body:
          "Vehicle routing becomes increasingly difficult as customer locations, vehicle constraints, capacity and optimisation objectives interact. The project explores how a swarm-based optimisation method can search through possible routing solutions.",
      },
      {
        title: "The approach",
        body:
          "Particle Swarm Optimization provides a population-based search strategy in which candidate solutions move through the solution space according to their own experience and the behaviour of the swarm.",
      },
      {
        title: "Visual reasoning",
        body:
          "The interface is designed to make the optimisation process easier to inspect rather than treating the algorithm as a black box. Routing behaviour, parameters and solution quality can be examined through the visual interface.",
      },
    ],
  },

  {
    slug: "seia",
    number: "03",
    title: "SEIA",
    category: "Product / Android",
    year: "2025",
    shortDescription:
      "A social discovery concept for places, experiences, costs and plans.",
    description:
      "SEIA explores a social discovery platform where people can share places visited, experiences, expenses and plans with other travellers and communities.",
    role:
      "Product and application development, with emphasis on the interaction model and mobile experience.",
    technologies: [
      "Android",
      "Kotlin",
      "UI/UX",
      "Social Discovery",
      "Data",
    ],
    visual: "seia",
    github: "https://github.com/dericktrichard/SEIA",
    gallery: [
      {
        src: "/projects/seia/seiahome.jpeg",
        alt: "SEIA social discovery home feed",
        aspect: "standard",
      },
      {
        src: "/projects/seia/seiaprofile.jpeg",
        alt: "SEIA user profile interface",
        aspect: "portrait",
      },
      {
        src: "/projects/seia/seialogin.jpeg",
        alt: "SEIA login interface",
        aspect: "portrait",
      },
    ],
    sections: [
      {
        title: "The idea",
        body:
          "SEIA is built around the idea that discovering a place can be more useful when the experience, cost and context are shared alongside it.",
      },
      {
        title: "The product",
        body:
          "The concept combines social posts, place discovery, expense information and invitations into one experience. The intention is to make planning and discovering experiences more contextual and social.",
      },
      {
        title: "The interface",
        body:
          "The mobile interface focuses on keeping discovery, personal activity and shared experiences close together while leaving room for the product to evolve into a broader social platform.",
      },
    ],
  },
];

export const projectOrder = projects.map((project) => project.slug);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projectOrder.indexOf(slug);

  if (index === -1) {
    return {
      previous: undefined,
      next: undefined,
    };
  }

  return {
    previous:
      projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}