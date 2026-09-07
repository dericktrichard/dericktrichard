export type ProjectImage = {
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
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  description: string;
  role: string;
  stack: string[];
  repository: string;
  hero: ProjectImage;
  gallery: ProjectImage[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "sentry",
    title: "SENTRY",
    category: "Grounded AI / Cybersecurity",
    year: "2025 / 2026",
    shortDescription:
      "A cybersecurity training system combining grounded generative AI, retrieval, analytics, Android and robotics.",
    description:
      "SENTRY is a research prototype for cybersecurity training built around grounded generative AI, retrieval, structured training data and a Pepper robot interface.",
    role:
      "My main focus was the grounded AI and retrieval side of the system, including the RAG pipeline and evaluation framework.",
    stack: [
      "Python",
      "FastAPI",
      "RAG",
      "PostgreSQL",
      "Kotlin",
      "Jetpack Compose",
      "Pepper",
    ],
    repository: "https://github.com/SENTRY-Pepper/sentry-system",
    hero: {
      src: "/projects/sentry/sentry.png",
      alt: "SENTRY project interface",
      aspect: "wide",
    },
    gallery: [
      {
        src: "/projects/sentry/sentryhome.png",
        alt: "SENTRY application home screen",
        aspect: "wide",
      },
      {
        src: "/projects/sentry/sentrylogin.png",
        alt: "SENTRY application login screen",
        aspect: "wide",
      },
      {
        src: "/projects/sentry/pepperclose.jpg",
        alt: "Close view of the Pepper robot used in SENTRY",
        aspect: "standard",
      },
      {
        src: "/projects/sentry/pepperfull.jpg",
        alt: "Full view of the Pepper robot used in SENTRY",
        aspect: "portrait",
      },
    ],
    sections: [
      {
        title: "The problem",
        body:
          "Cybersecurity training requires reliable information and meaningful interaction. A generic language model can produce fluent answers while still providing unsupported or inaccurate information. SENTRY explores a more controlled approach by grounding generated responses in a defined knowledge base.",
      },
      {
        title: "The system",
        body:
          "The prototype connects an Android application, FastAPI middleware, a retrieval-augmented generation pipeline, PostgreSQL storage and a Pepper robot interface. The system also records training and evaluation information that can be used to examine learning outcomes and system behaviour.",
      },
      {
        title: "Grounded intelligence",
        body:
          "The retrieval pipeline works over curated cybersecurity and relevant legal knowledge sources rather than relying solely on a model's internal knowledge. Retrieved material is filtered and passed into a constrained generation process.",
      },
      {
        title: "Evaluation",
        body:
          "The evaluation framework considers grounding accuracy, hallucination rate, knowledge gain, retrieval and generation latency, token usage and training outcomes. The goal is to understand whether grounded responses are more useful and reliable, rather than assuming that they are.",
      },
    ],
  },

  {
    slug: "pso-logistics",
    title: "PSO Logistics Optimizer",
    category: "Optimisation / Data",
    year: "2026",
    shortDescription:
      "An interactive Particle Swarm Optimization system for exploring logistics routing and constrained vehicle movement.",
    description:
      "An interactive optimisation project exploring how Particle Swarm Optimization can be applied to vehicle routing under practical constraints.",
    role:
      "Designed and implemented the optimisation interface and visual system around the underlying PSO algorithm.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Particle Swarm Optimization",
      "Vehicle Routing",
    ],
    repository: "https://github.com/dericktrichard/pso-logistics-optimizer",
    hero: {
      src: "",
      alt: "Particle Swarm Optimization route visualisation",
      aspect: "wide",
    },
    gallery: [],
    sections: [
      {
        title: "The problem",
        body:
          "Vehicle routing becomes increasingly difficult as the number of customers, vehicles and constraints increases. The project explores an optimisation approach where candidate solutions evolve through the interaction of a population of particles.",
      },
      {
        title: "The approach",
        body:
          "The interface exposes the optimisation process rather than hiding it behind a final route. Parameters can be adjusted while the evolving solution provides a visual representation of the search process.",
      },
      {
        title: "The data perspective",
        body:
          "The project connects algorithmic optimisation with measurable operational concerns such as route distance, vehicle capacity and fuel consumption. This makes the optimisation problem easier to reason about as a data problem rather than only an algorithmic exercise.",
      },
    ],
  },

  {
    slug: "seia",
    title: "SEIA",
    category: "Product / Android",
    year: "2025",
    shortDescription:
      "A social discovery concept for sharing places, experiences, costs and plans with other travellers and communities.",
    description:
      "SEIA explores a social platform for discovering places, sharing experiences and organising plans around real-world activities.",
    role:
      "Worked on the product concept, interface direction and application structure.",
    stack: [
      "Android",
      "Kotlin",
      "UI/UX",
      "Product Design",
      "Community",
    ],
    repository: "https://github.com/dericktrichard/SEIA",
    hero: {
      src: "/projects/seia/seiahome.jpeg",
      alt: "SEIA application home screen",
      aspect: "wide",
    },
    gallery: [
      {
        src: "/projects/seia/seiahome.jpeg",
        alt: "SEIA home feed",
        aspect: "wide",
      },
      {
        src: "/projects/seia/seiaprofile.jpeg",
        alt: "SEIA profile interface",
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
          "SEIA is built around the idea that discovering a place is often connected to discovering an experience. The product concept brings places, experiences, costs and plans into one social environment.",
      },
      {
        title: "The product",
        body:
          "The interface focuses on visual discovery while giving posts additional practical information such as expenses, arrival expectations and activity details.",
      },
      {
        title: "The thinking",
        body:
          "The project sits at the intersection of software development and product design. The technical implementation matters, but so does deciding what information users need before committing to an experience.",
      },
    ],
  },
];

export const projectOrder = projects.map((project) => project.slug);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const currentIndex = projectOrder.indexOf(slug);

  if (currentIndex === -1) {
    return {
      previous: undefined,
      next: undefined,
    };
  }

  const previous =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  const next = projects[(currentIndex + 1) % projects.length];

  return {
    previous,
    next,
  };
}