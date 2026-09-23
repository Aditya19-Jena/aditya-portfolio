export type GalleryItem = {
  image: string;
  title: string;
  description: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type Architecture = {
  title: string;
  description: string;
};

export type TechnicalDeepDive = {
  title: string;
  description: string;
};

export type ProjectChallenge = {
  title: string;
  description: string;
};

export type BuildStoryItem = {
  number: string;
  title: string;
  description: string;
};

export type Project = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent: "violet" | "cyan" | "emerald";
  tags: string[];
  category: string;
  status: string;
  duration: string;
  role: string;
  overview: string;
  problem: string;
  idea: string;
  solution: string;
  gallery: GalleryItem[];

  systemFlow: {
    intro: string;
    stages: {
      id: string;
      label: string;
      title: string;
      description: string;
      detail?: string;
    }[];
  };

  features: ProjectFeature[];
  architecture: Architecture;
  technologies: string[];
  technicalDeepDive: TechnicalDeepDive[];
  technicalHighlights: string[];
  challenges: ProjectChallenge[];
  buildStory: BuildStoryItem[];
  outcome: string;
  learnings: string[];
  github: string;
  demo: string;
};