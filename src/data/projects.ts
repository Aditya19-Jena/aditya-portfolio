export const projects = [
  {
    number: "01",
    title: "CineVerse",

    subtitle:
      "An AI-powered movie discovery platform that combines personalized recommendations, mood-based suggestions, and real-time movie data.",

    description: "Full-Stack · AI · API Integration",

    image: "/images/projects/cover.png",

    accent: "violet",

    tags: ["FULL-STACK", "AI", "API"],

    category: "Full-Stack · AI-Powered Movie Discovery",

    status: "Personal Project",
    duration: "Personal Project",
    role: "Full-Stack Developer",

    overview:
      "CineVerse is an AI-powered movie discovery platform designed to help users move beyond simple browsing and discover movies that match their interests and current mood. The application combines real-time movie data with personalized Movie DNA, AI-generated recommendations, mood-based discovery, detailed movie exploration, and a favorites system to create a more intelligent movie discovery experience.",

    problem:
      "Traditional movie discovery platforms often present large collections of content without understanding why a particular movie may be relevant to the viewer. Users can spend significant time browsing without finding something that matches their personal preferences or current mood. CineVerse was built to explore a more personalized approach to movie discovery.",

    idea:
      "The idea behind CineVerse was to combine movie discovery with lightweight personalization and AI-assisted recommendations. Instead of relying only on search and popular movie lists, the platform builds a Movie DNA profile from user preferences and uses that context to support personalized, mood-based movie recommendations.",

    solution:
      "CineVerse integrates real-time movie information with an AI-powered recommendation layer. Users can search and explore movies, view detailed information, save favorites, generate a personalized Movie DNA profile, and receive recommendations based on their preferences or current mood. The frontend communicates with dedicated backend APIs for movie data and AI-powered features.",

    gallery: [
      {
        image: "/public/images/projects/home.png",
        title: "AI-Powered Movie Discovery",
        description:
          "The CineVerse experience combines movie discovery with personalized recommendations and intelligent viewing suggestions.",
      },
      {
        image: "/public/images/projects/search.png",
        title: "Search & Discover",
        description:
          "The search interface allows users to find movies dynamically and explore relevant results.",
      },
      {
        image: "/public/images/projects/movie-details.png",
        title: "Movie Details",
        description:
          "A dedicated movie view provides detailed information and helps users explore individual titles more deeply.",
      },
      {
        image: "/public/images/projects/watchlist.png",
        title: "Movie Watchlist",
        description:
          "Users can save movies they want to revisit, creating a personalized collection of titles.",
      },
    ],

    systemFlow: {
      intro:
        "CineVerse combines real-time movie data with a personalization layer. User interactions, preferences, favorites, and mood signals are transformed into contextual inputs that support intelligent movie recommendations.",

      stages: [
        {
          id: "01",
          label: "DISCOVER",
          title: "Explore the movie catalogue",
          description:
            "Users browse available movie content or search for a specific title.",
          detail:
            "The discovery layer provides access to dynamically retrieved movie information rather than relying on a fixed catalogue.",
        },

        {
          id: "02",
          label: "PROFILE",
          title: "Build a Movie DNA profile",
          description:
            "User preferences and movie interactions are used to create a personalized viewing profile.",
          detail:
            "The Movie DNA layer provides contextual information that can be used when generating personalized recommendations.",
        },

        {
          id: "03",
          label: "ANALYZE",
          title: "Add preference and mood context",
          description:
            "Users can request recommendations based on their interests or how they currently feel.",
          detail:
            "Mood and preference signals provide an additional layer of context beyond traditional movie search.",
        },

        {
          id: "04",
          label: "RECOMMEND",
          title: "Generate intelligent suggestions",
          description:
            "The backend processes the available context and returns personalized movie recommendations.",
          detail:
            "The recommendation layer connects user context with available movie candidates to create more relevant suggestions.",
        },

        {
          id: "05",
          label: "EXPLORE",
          title: "Discover and save movies",
          description:
            "Users explore recommended movies, view detailed information, and save titles to their favorites.",
          detail:
            "The workflow creates a continuous experience from discovery and personalization to deeper exploration.",
        },
      ],
    },

    features: [
      {
        title: "Movie Discovery",
        description:
          "Browse and discover dynamically retrieved movie content through a visual interface.",
      },
      {
        title: "Advanced Movie Search",
        description:
          "Search for movies and explore relevant results without relying on a static catalogue.",
      },
      {
        title: "Movie DNA",
        description:
          "Builds a personalized movie preference profile that provides context for intelligent recommendations.",
      },
      {
        title: "AI Recommendations",
        description:
          "Generates personalized movie suggestions based on user preferences and available movie candidates.",
      },
      {
        title: "Mood-Based Discovery",
        description:
          "Allows users to select their current mood and receive movie recommendations aligned with that context.",
      },
      {
        title: "AI Movie Explanations",
        description:
          "Provides contextual explanations for why a particular movie may be relevant to the user.",
      },
      {
        title: "Favorites & Watchlist",
        description:
          "Allows users to save movies and maintain a personal collection of titles.",
      },
      {
        title: "Detailed Movie Exploration",
        description:
          "Provides dedicated movie views with additional information for deeper exploration.",
      },
    ],

    architecture: {
      frontend: ["HTML", "CSS", "JavaScript"],

      backend: ["Node.js", "Express", "REST APIs"],

      ai: [],

      database: [],

      infrastructure: [],
    },

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "TMDB API",
      "REST API",
      "AI API Integration",
      "Vercel",
    ],

    technicalDeepDive: [
      {
        title: "Real-Time Movie Data Integration",
        description:
          "CineVerse retrieves movie information dynamically through external APIs instead of maintaining a manually created movie catalogue. This enables the interface to present current movie details, cast information, similar titles, and provider-related data.",
      },
      {
        title: "Movie DNA Personalization",
        description:
          "The application creates a structured representation of user movie preferences and uses that profile as contextual input for personalized recommendations.",
      },
      {
        title: "Mood-Based Recommendation Engine",
        description:
          "Users can select how they feel and receive movie recommendations based on both their selected mood and their existing preference context.",
      },
      {
        title: "AI Recommendation Layer",
        description:
          "A dedicated backend AI layer processes recommendation requests and connects user context with candidate movies to generate more personalized suggestions.",
      },
      {
        title: "Modular Frontend Architecture",
        description:
          "The frontend separates major functionality into dedicated modules for discovery, search, authentication, favorites, movie details, and AI-powered features.",
      },
    ],

    technicalHighlights: [
      "Built a full-stack movie discovery platform using Vanilla JavaScript and Node.js.",
      "Integrated real-time movie information through the TMDB API.",
      "Implemented a personalized Movie DNA system.",
      "Developed AI-powered movie recommendations.",
      "Created mood-based movie discovery workflows.",
      "Implemented AI-generated explanations for movie recommendations.",
      "Built favorites and personalized movie collection functionality.",
      "Structured the application using modular frontend and backend architecture.",
      "Created dedicated REST API routes for movie and AI functionality.",
    ],

    challenges: [
      {
        title: "Personalizing Movie Discovery",
        description:
          "A major challenge was moving beyond basic search and building a recommendation workflow that could incorporate user preferences and viewing context.",
      },
      {
        title: "Combining AI With Real Movie Data",
        description:
          "The AI layer needed contextual information about the user while recommendations also had to remain connected to actual movie candidates retrieved from external data sources.",
      },
      {
        title: "Managing Modular Application Logic",
        description:
          "As the application expanded from basic movie browsing into AI features, favorites, search, and detailed views, separating functionality into focused modules became important.",
      },
      {
        title: "Designing Mood-Based Recommendations",
        description:
          "Mood-based discovery required translating subjective user inputs into contextual information that could be combined with existing movie preferences.",
      },
    ],

    buildStory: [
      {
        number: "01",
        title: "Discovery",
        description:
          "Started by building a movie discovery experience around dynamically retrieved movie content and search functionality.",
      },
      {
        number: "02",
        title: "Exploration",
        description:
          "Expanded the experience with dedicated movie details, additional metadata, and deeper movie exploration.",
      },
      {
        number: "03",
        title: "Personalization",
        description:
          "Introduced favorites and Movie DNA to begin capturing the user's individual movie preferences.",
      },
      {
        number: "04",
        title: "Intelligence",
        description:
          "Added AI-powered recommendation workflows, mood-based discovery, and contextual movie explanations.",
      },
      {
        number: "05",
        title: "Architecture",
        description:
          "Organized the application into modular frontend components and dedicated backend routes for movie and AI functionality.",
      },
    ],

    outcome:
      "CineVerse evolved from a movie discovery interface into a full-stack, AI-assisted movie recommendation platform. The project demonstrates API integration, modular JavaScript architecture, backend development, personalization, and AI-powered recommendation workflows within a single user experience.",

    learnings: [
      "Integrating external APIs into a production-style frontend.",
      "Designing modular JavaScript application architecture.",
      "Building REST APIs with Node.js and Express.",
      "Connecting AI capabilities with structured application data.",
      "Designing personalized recommendation workflows.",
      "Translating subjective inputs such as mood into application context.",
      "Separating frontend presentation, backend logic, and AI services.",
      "Thinking about a project as an evolving product rather than a collection of individual features.",
    ],

    github: "https://github.com/Aditya19-Jena/CineVerse",
    demo: "https://cineverse-of1cck6cz-aditya38.vercel.app/",
  },

  // ============================================================
  // PROJECT 02 — TASKFLOW
  // ============================================================

  {
    number: "02",
    title: "TaskFlow",

    subtitle:
      "A smart productivity dashboard designed to help students and developers organize tasks, plan their day, track progress, and stay focused.",

    description: "Productivity · Dashboard · Smart Planning",

    image: "/images/projects/taskflow.png",

    /*
     * Keep this as "violet" for now.
     *
     * Your current ProjectModal expects the selected accent
     * to resolve to an object containing properties such as
     * `glow`. Since "blue" is not currently defined there,
     * using "blue" causes:
     *
     * Cannot read properties of undefined (reading 'glow')
     */
    accent: "violet",

    tags: ["PRODUCTIVITY", "DASHBOARD", "PLANNING"],

    category: "Productivity · Task Management",

    status: "Personal Project",
    duration: "Personal Project",
    role: "Frontend Developer",

    overview:
      "TaskFlow is a productivity dashboard designed to bring tasks, planning, progress tracking, and daily workflow management into a single workspace. The application focuses on helping students and developers organize their work, prioritize important tasks, and maintain a consistent productivity workflow.",

    problem:
      "Managing tasks across multiple applications can create unnecessary friction. Students and developers often need to balance projects, learning, deadlines, and personal tasks while maintaining visibility into what needs to be done. TaskFlow was created to provide a centralized workspace for organizing these activities and maintaining a clear daily workflow.",

    idea:
      "The idea behind TaskFlow was to create a focused productivity system where users can manage tasks, organize their work, review progress, and structure their day from one dashboard. Instead of treating task management, scheduling, and productivity insights as separate experiences, TaskFlow brings them together into a unified interface.",

    solution:
      "TaskFlow combines task management, productivity statistics, daily planning, scheduling, search, and insights into a single dashboard. The application provides users with an overview of their current workload while allowing them to focus on individual tasks and structure their day around priorities.",

    gallery: [
      {
        image: "/images/projects/taskflow-dashboard.png",
        title: "Productivity Dashboard",
        description:
          "A centralized dashboard provides an overview of tasks, active work, productivity metrics, and the user's daily workflow.",
      },
      {
        image: "/images/projects/taskflow-tasks.png",
        title: "Task Management",
        description:
          "Users can organize their tasks, track completion, and work with different task priorities.",
      },
      {
        image: "/images/projects/taskflow-planning.png",
        title: "Daily Planning",
        description:
          "The planning workflow helps users structure their day around tasks and priorities.",
      },
      {
        image: "/images/projects/taskflow-insights.png",
        title: "Productivity Insights",
        description:
          "Productivity information provides users with visibility into their progress and work patterns.",
      },
    ],

    systemFlow: {
      intro:
        "TaskFlow transforms individual tasks into an organized daily workflow. Users create and manage tasks, prioritize their workload, review their schedule, and use productivity insights to understand their progress.",

      stages: [
        {
          id: "01",
          label: "CAPTURE",
          title: "Create and organize tasks",
          description:
            "Users add tasks that need to be completed and organize their workload.",
          detail:
            "The task management layer acts as the foundation of the productivity workflow.",
        },

        {
          id: "02",
          label: "PRIORITIZE",
          title: "Identify important work",
          description:
            "Tasks can be organized according to their importance and urgency.",
          detail:
            "Prioritization helps users focus their available time on the work that matters most.",
        },

        {
          id: "03",
          label: "PLAN",
          title: "Structure the day",
          description:
            "Users can organize their tasks into a practical daily workflow.",
          detail:
            "The planning experience connects individual tasks with the user's broader schedule.",
        },

        {
          id: "04",
          label: "EXECUTE",
          title: "Complete focused work",
          description:
            "Users work through their planned tasks and track completion.",
          detail:
            "The execution layer turns the planned workload into measurable progress.",
        },

        {
          id: "05",
          label: "ANALYZE",
          title: "Review productivity",
          description:
            "Users can review productivity information and understand their progress.",
          detail:
            "Insights provide feedback that can help users improve their future planning and workflow.",
        },
      ],
    },

    features: [
      {
        title: "Task Management",
        description:
          "Create, organize, prioritize, and track tasks through a centralized workspace.",
      },
      {
        title: "Productivity Dashboard",
        description:
          "Provides a consolidated overview of tasks, progress, and productivity information.",
      },
      {
        title: "Daily Planning",
        description:
          "Helps users structure their workload and organize tasks into a focused daily workflow.",
      },
      {
        title: "Task Priorities",
        description:
          "Allows users to distinguish important work and focus their attention accordingly.",
      },
      {
        title: "Schedule Management",
        description:
          "Provides a structured view of planned work and upcoming activities.",
      },
      {
        title: "Productivity Insights",
        description:
          "Surfaces progress and productivity information to help users understand their workflow.",
      },
      {
        title: "Task Search",
        description:
          "Allows users to quickly locate relevant tasks and information.",
      },
      {
        title: "Responsive Interface",
        description:
          "Designed as a modern productivity dashboard with a focused and responsive user experience.",
      },
    ],

    architecture: {
      frontend: ["HTML", "CSS", "JavaScript"],

      backend: [],

      ai: [],

      database: [],

      infrastructure: ["Vercel"],
    },

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vanilla JavaScript",
      "Responsive UI",
      "Vercel",
    ],

    technicalDeepDive: [
      {
        title: "Dashboard Architecture",
        description:
          "TaskFlow organizes multiple productivity workflows into a centralized dashboard rather than separating task management and planning into disconnected interfaces.",
      },
      {
        title: "Task Management Workflow",
        description:
          "The application structures task creation, prioritization, completion, and tracking as a continuous workflow.",
      },
      {
        title: "Daily Planning",
        description:
          "The planning experience connects the user's task workload with their daily schedule to create a more structured execution workflow.",
      },
      {
        title: "Productivity Tracking",
        description:
          "Task completion and productivity information are surfaced through dashboard-oriented metrics and insights.",
      },
      {
        title: "Modular Frontend Structure",
        description:
          "The project separates functionality across components, sections, scripts, services, and styles to keep the frontend organized as the application grows.",
      },
    ],

    technicalHighlights: [
      "Built a productivity dashboard using HTML, CSS, and JavaScript.",
      "Designed a centralized task management workflow.",
      "Implemented task prioritization and completion tracking.",
      "Created a daily planning experience for organizing work.",
      "Developed productivity-focused dashboard views.",
      "Added scheduling and task organization workflows.",
      "Structured the project using modular frontend sections and services.",
      "Designed a responsive productivity-oriented user interface.",
      "Deployed the application using Vercel.",
    ],

    challenges: [
      {
        title: "Designing a Unified Productivity Workflow",
        description:
          "A major challenge was bringing task management, planning, scheduling, and productivity insights together without making the interface feel fragmented.",
      },
      {
        title: "Maintaining Dashboard Clarity",
        description:
          "The dashboard needed to expose useful productivity information while keeping the primary task workflow easy to understand and navigate.",
      },
      {
        title: "Structuring Frontend Logic",
        description:
          "As more productivity features were introduced, separating components, sections, scripts, services, and styling became important for maintainability.",
      },
      {
        title: "Balancing Features With Focus",
        description:
          "The interface needed to provide enough functionality for planning and tracking while keeping the core experience centered around completing meaningful work.",
      },
    ],

    buildStory: [
      {
        number: "01",
        title: "Foundation",
        description:
          "Started by establishing the core productivity dashboard and task management experience.",
      },
      {
        number: "02",
        title: "Organization",
        description:
          "Expanded the application with task prioritization, categorization, and structured workflow management.",
      },
      {
        number: "03",
        title: "Planning",
        description:
          "Introduced daily planning and scheduling capabilities to connect tasks with the user's available time.",
      },
      {
        number: "04",
        title: "Insights",
        description:
          "Added productivity-oriented information to provide users with visibility into their progress.",
      },
      {
        number: "05",
        title: "Product Experience",
        description:
          "Refined the interface into a unified productivity workspace with a responsive and focused user experience.",
      },
    ],

    outcome:
      "TaskFlow evolved into a centralized productivity workspace that combines task management, daily planning, scheduling, and productivity insights. The project demonstrates frontend architecture, responsive interface design, JavaScript application logic, workflow design, and product-oriented thinking.",

    learnings: [
      "Designing a productivity-focused dashboard from the ground up.",
      "Structuring frontend functionality into modular sections and services.",
      "Managing task-oriented application state and user interactions.",
      "Designing interfaces around user workflows rather than individual features.",
      "Creating responsive dashboard experiences.",
      "Thinking about prioritization and planning as part of a single workflow.",
      "Balancing information density with interface clarity.",
      "Deploying a frontend application using Vercel.",
    ],

    github: "https://github.com/Aditya19-Jena/TaskFlow",

    demo: "https://taskflow-aditya38.vercel.app/",
  },
];