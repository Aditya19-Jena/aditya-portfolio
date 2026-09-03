import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { h5 } from "framer-motion/m";

type GalleryItem = {
  image: string;
  title: string;
  description: string;
};

type ProjectFeature = {
  title: string;
  description: string;
};

type ProjectChallenge = {
  title: string;
  description: string;
};

type TechnicalDeepDive = {
  title: string;
  description: string;
};

type BuildStoryItem = {
  number: string;
  title: string;
  description: string;
};

type Architecture = {
  frontend: string[];
  backend: string[];
  ai: string[];
  database: string[];
  infrastructure?: string[];
};

type Project = {
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

type ProjectModalProps = {
  isOpen: boolean;
  projects: Project[];
  selectedProject: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project | null) => void;
};

/* ================================================================
   ACCENT SYSTEM
================================================================ */

const accentStyles = {
  violet: {
    glow: "from-violet-500/25 via-purple-500/10 to-transparent",
    text: "text-violet-300",
    softText: "text-violet-400/80",
    border: "border-violet-400/20",
    bg: "bg-violet-400/10",
    line: "bg-violet-400",
    ring: "ring-violet-400/20",
  },

  cyan: {
    glow: "from-cyan-500/25 via-blue-500/10 to-transparent",
    text: "text-cyan-300",
    softText: "text-cyan-400/80",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/10",
    line: "bg-cyan-400",
    ring: "ring-cyan-400/20",
  },

  emerald: {
    glow: "from-emerald-500/25 via-teal-500/10 to-transparent",
    text: "text-emerald-300",
    softText: "text-emerald-400/80",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/10",
    line: "bg-emerald-400",
    ring: "ring-emerald-400/20",
  },
};

/* ================================================================
   MOTION
================================================================ */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

/* ================================================================
   MAIN MODAL
================================================================ */

const ProjectModal = ({
  isOpen,
  projects,
  selectedProject,
  onClose,
  onSelectProject,
}: ProjectModalProps) => {
  const shouldReduceMotion = useReducedMotion();

  const [activeGallery, setActiveGallery] = useState(0);
  const [activeTechGroup, setActiveTechGroup] = useState<string | null>(null);
  const [activeBuildStory, setActiveBuildStory] = useState(0);

  const selectedIndex = selectedProject
    ? projects.findIndex(
        (project) => project.number === selectedProject.number
      )
    : -1;

  const accent = selectedProject
    ? accentStyles[selectedProject.accent]
    : accentStyles.violet;

  /* ============================================================
     BODY SCROLL
  ============================================================ */

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /* ============================================================
     ESCAPE
  ============================================================ */

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  /* ============================================================
     RESET GALLERY
  ============================================================ */

  useEffect(() => {
    setActiveGallery(0);
    setActiveTechGroup(null);
    setActiveBuildStory(0);
  }, [selectedProject?.number]);

  /* ============================================================
     NAVIGATION
  ============================================================ */

  const previousProject = () => {
    if (selectedIndex <= 0) return;

    onSelectProject(projects[selectedIndex - 1]);
  };

  const nextProject = () => {
    if (selectedIndex === -1) return;

    if (selectedIndex >= projects.length - 1) return;

    onSelectProject(projects[selectedIndex + 1]);
  };

  /* ============================================================
     RENDER
  ============================================================ */

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, scale: 0.97, y: 18 }
          }
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, scale: 1, y: 0 }
          }
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.98, y: 10 }
          }
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(event) => event.stopPropagation()}
          className="relative
  flex
  h-[94vh]
  w-[calc(100%-16px)]
  min-w-0
  max-w-[95vw]
  flex-col
  overflow-hidden
  rounded-2xl
  border border-white/[0.09]
  bg-[#09090b]
  shadow-[0_40px_120px_rgba(0,0,0,0.85)]
  md:w-fit
  md:min-w-[900px]"
        >
          {/* ==================================================
              CLOSE
          =================================================== */}

          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-[100] flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-black/40 text-zinc-500 backdrop-blur-xl transition duration-300 hover:border-white/[0.16] hover:bg-white/[0.08] hover:text-white"
          >
            <X size={17} />
          </button>

          {/* ==================================================
              CONTENT
          =================================================== */}

          <div className="min-h-0 flex-1 overflow-y-auto pb-24 overscroll-contain scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">

            {!selectedProject ? (
              <AllProjects
                projects={projects}
                onSelectProject={onSelectProject}
              />
            ) : (
              <ProjectDetails
                project={selectedProject}
                projects={projects}
                selectedIndex={selectedIndex}
                activeGallery={activeGallery}
                setActiveGallery={setActiveGallery}
                activeTechGroup={activeTechGroup}
                setActiveTechGroup={setActiveTechGroup}
                activeBuildStory={activeBuildStory}
                setActiveBuildStory={setActiveBuildStory}
                accent={accent}
                onBack={() => onSelectProject(null)}
                onPrevious={previousProject}
                onNext={nextProject}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ================================================================
   ARCHITECTURE DIAGRAM
================================================================ */




/* ================================================================
   ALL PROJECTS
================================================================ */

const AllProjects = ({
  projects,
  onSelectProject,
}: {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}) => {
  return (
    <section className="mx-auto w-full max-w-5xl">
      <div className="px-8 py-9 md:px-12 md:py-12 lg:px-16">

        {/* HEADER */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-between">
            <motion.p
              variants={fadeUp}
              className="text-[10px] uppercase tracking-[0.22em] text-zinc-600"
            >
              02 / Selected Builds
            </motion.p>

            <motion.span
              variants={fadeUp}
              className="font-mono text-[9px] tracking-[0.18em] text-zinc-700"
            >
              {String(projects.length).padStart(2, "0")} PROJECTS
            </motion.span>
          </div>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl"
          >
            Projects that solve{" "}
            <span className="text-zinc-600">real problems.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base"
          >
            Products and systems built across full-stack development,
            artificial intelligence, computer vision, and intelligent
            user experiences.
          </motion.p>
        </motion.div>

        {/* PROJECT SHOWCASE */}
        <div className="mt-10">
          {projects.map((project, index) => {
            const accent = accentStyles[project.accent];

            return (
              <motion.button

              

                key={project.number}
                type="button"
                onClick={() => onSelectProject(project)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group relative w-full
                  overflow-hidden
                  py-5
                  text-left
                  transition-all duration-500
                  md:py-6

                  ${index > 0 ? "border-t border-white/[0.07]" : ""}
                `}
              >
                {/* ==================================================
                    ANIMATED BACKGROUND
                =================================================== */}


                
                {/* AMBIENT PROJECT GLOW */}
<div
  className={`
    pointer-events-none
    absolute
    -left-16
    top-1/2
    h-28
    w-72
    -translate-y-1/2
    rounded-full
    bg-gradient-to-r
    ${accent.glow}
    opacity-0
    blur-3xl
    transition-all
    duration-700
    group-hover:left-8
    group-hover:opacity-60
  `}
/>

                {/* MOVING LIGHT */}


                {/* CONTENT */}
                <div
                  className="
                    relative grid
                    grid-cols-[28px_76px_minmax(0,1fr)_24px]
                    items-center
                    gap-4
                    md:grid-cols-[40px_96px_minmax(0,1fr)_auto_32px]
                    md:gap-5
                  "
                >

                  {/* NUMBER */}
                  <div className="self-start pt-1">
                    <span
                      className={`
                        font-mono
                        text-[10px]
                        tracking-wider
                        text-zinc-600
                        transition-colors
                        duration-300
                        ${accent.text}
                        opacity-50
                        group-hover:opacity-100
                      `}
                    >
                      {project.number}
                    </span>
                  </div>

                  {/* IMAGE */}
                  <div
                    className={`
                      relative
                      h-14
                      w-[76px]
                      overflow-hidden
                      rounded-lg
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      transition-all
                      duration-500
                      group-hover:-translate-y-0.5
                      group-hover:border-white/[0.16]
                      md:h-[68px]
                      md:w-24
                    `}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "

                    
                    />

                    <div
    className={`
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-br
      ${accent.glow}
      opacity-0
      mix-blend-screen
      transition-opacity
      duration-500
      group-hover:opacity-60
    `}
  />

                    <div
                      className="
                        pointer-events-none
                        absolute inset-0
                        bg-black/25
                        transition-opacity
                        duration-500
                        group-hover:opacity-0
                      "
                    />

                    {/* IMAGE SHINE */}
                    <div
                      className="
                        pointer-events-none
                        absolute inset-y-0 -left-1/2
                        w-1/3
                        skew-x-[-20deg]
                        bg-white/[0.08]
                        opacity-0
                        transition-all
                        duration-700
                        group-hover:left-[130%]
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  {/* PROJECT CONTENT */}
                  <div className="min-w-0">

                    {/* TITLE */}
                    <div className="flex min-w-0 items-center gap-3">
                      <h3
                        className="
                          truncate
                          text-[15px]
                          font-medium
                          tracking-tight
                          text-zinc-200
                          transition-colors
                          duration-300
                          group-hover:text-white
                          md:text-base
                        "
                      >
                        {project.title}
                      </h3>

                      <span
                        className={`
                          hidden
                          shrink-0
                          text-[8px]
                          uppercase
                          tracking-[0.18em]
                          md:inline
                          ${accent.softText}
                          opacity-60
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        `}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-1.5
                        max-w-xl
                        truncate
                        text-[10px]
                        leading-5
                        text-zinc-500
                        transition-colors
                        duration-300
                        group-hover:text-zinc-300
                        md:text-[11px]
                      "
                    >
                      {project.description}
                    </p>

                    {/* TAGS */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="
                            rounded-full
                            border
                            border-white/[0.07]
                            bg-white/[0.02]
                            px-2
                            py-0.5
                            text-[8px]
                            font-medium
                            tracking-wide
                            text-zinc-600
                            transition-all
                            duration-300
                            group-hover:border-white/[0.12]
                            group-hover:bg-white/[0.04]
                            group-hover:text-zinc-400
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* STATUS */}
                  <span
                    className="
                      hidden
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      text-zinc-700
                      transition-colors
                      duration-300
                      group-hover:text-zinc-500
                      lg:block
                    "
                  >
                    {project.status}
                  </span>

                  {/* ARROW */}
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-transparent
                      text-sm
                      text-zinc-700
                      transition-all
                      duration-500
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-1
                      group-hover:border-white/[0.12]
                      group-hover:bg-white/[0.04]
                      group-hover:text-white
                    "
                  >
                    ↗
                  </span>
                </div>

                {/* ANIMATED ACCENT LINE */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    ${accent.line}
                    opacity-70
                    transition-all
                    duration-700
                    group-hover:w-24
                  `}
                />

                {/* RIGHT EDGE LIGHT */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    right-0
                    top-1/2
                    h-12
                    w-px
                    -translate-y-1/2
                    ${accent.line}
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-40
                  `}
                />
              </motion.button>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-zinc-800" />

            <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
              Built with curiosity
            </span>
          </div>

          <span className="text-[9px] text-zinc-700">
            More coming soon <span className="ml-1">↗</span>
          </span>
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   SYSTEM FLOW
================================================================ */

/* ================================================================
   SYSTEM FLOW
================================================================ */

const SystemFlow = ({
  systemFlow,
  accent,
}: {
  systemFlow: Project["systemFlow"];
  accent: (typeof accentStyles)[keyof typeof accentStyles];
}) => {
  if (!systemFlow) {
    return null;
  }

  return (
    <div className="mt-10 md:mt-14">

      {/* INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-2xl"
      >
        <p className="text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
          {systemFlow.intro}
        </p>
      </motion.div>

      {/* SYSTEM STAGES */}
      <div className="mt-14 md:mt-20">
        {systemFlow.stages.map((stage, index) => (
          <motion.article
            key={stage.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.65,
              delay: index * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
          >

            {/* STAGE HEADER */}
            <div className="flex items-center gap-4">

              {/* NUMBER */}
              <span
                className={`
                  font-mono
                  text-[10px]
                  tracking-[0.18em]
                  ${accent.softText}
                `}
              >
                {stage.id}
              </span>

              {/* LABEL */}
              <span className="text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                {stage.label}
              </span>

              {/* SMALL ACCENT */}
              <span
                className={`
                  h-px
                  w-0
                  ${accent.line}
                  opacity-60
                  transition-all
                  duration-500
                  group-hover:w-10
                `}
              />
            </div>

            {/* MAIN CONTENT */}
            <div className="mt-5 grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">

              {/* TITLE */}
              <div>
                <h3 className="text-xl font-medium tracking-tight text-zinc-200 transition-colors duration-300 group-hover:text-white md:text-2xl">
                  {stage.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <div className="max-w-2xl">

                <p className="text-sm leading-7 text-zinc-500 md:text-[15px] md:leading-8">
                  {stage.description}
                </p>

                {stage.detail && (
                  <p className="mt-5 max-w-xl text-xs leading-6 text-zinc-600">
                    {stage.detail}
                  </p>
                )}
              </div>
            </div>

            {/* SEPARATOR */}
            {/* SEPARATOR */}
            {/* SEPARATOR */}
            {index < systemFlow.stages.length - 1 && (
              <div className="mt-10 mb-6 flex w-full items-center md:mt-14">
                <div className={`h-px w-[30%] ${accent.line} opacity-40`}/>

                <div className="h-px flex-1 bg-white/[0.05]" />
              </div>
            )}
          </motion.article>
        ))}
      </div>

      {/* END MARKER */}
      <div className="mt-12 flex items-center gap-3 md:mt-16">
        <span className={`h-px w-8 ${accent.line} opacity-50`} />

        <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
          End of system flow
        </span>
      </div>
    </div>
  );
};

/* ================================================================
   PROJECT DETAILS
================================================================ */

const ProjectDetails = ({
  project,
  projects,
  selectedIndex,
  activeGallery,
  setActiveGallery,
  activeTechGroup,
  setActiveTechGroup,
  activeBuildStory,
  setActiveBuildStory,
  accent,
  onBack,
  onPrevious,
  onNext,
}: {
  project: Project;
  projects: Project[];
  selectedIndex: number;
  activeGallery: number;
  setActiveGallery: (index: number) => void;
  activeTechGroup: string | null;
  setActiveTechGroup: (title: string | null) => void;
  activeBuildStory: number;
  setActiveBuildStory: (index: number) => void;
  accent: (typeof accentStyles)[keyof typeof accentStyles];
  onBack: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  const [activeTechLayer, setActiveTechLayer] = useState(0);
  const galleryItems = project.gallery?.length
    ? project.gallery
    : [
        {
          image: project.image,
          title: project.title,
          description: project.subtitle,
        },
      ];

  const activeItem =
    galleryItems[activeGallery] || galleryItems[0];

  return (
    <div>

      {/* ==========================================================
          HERO
      =========================================================== */}

      <section className="relative overflow-hidden">

        {/* BACKGROUND GLOW */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b ${accent.glow} blur-3xl`}
        />

        {/* GRID */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="relative mx-auto w-full max-w-5xl px-8 pb-10 pt-10 md:px-12 md:pb-12 md:pt-12 lg:px-16">       

          {/* TOP LINE */}

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8 }}
            className={`h-px ${accent.line} opacity-40`}
          />

          <div className="mt-8">

  {/* TOP METADATA ROW */}
  <div className="flex w-full items-center justify-between">
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className={`text-[10px] uppercase tracking-[0.22em] ${accent.softText}`}
    >
      Project {project.number} /{" "}
      {String(projects.length).padStart(2, "0")}
    </motion.p>

    <button
      type="button"
      onClick={onBack}
      className="flex shrink-0 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-[10px] text-zinc-500 transition hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white"
    >
      <ArrowLeft size={13} />
      All Projects
    </button>
  </div>

  {/* MAIN HERO CONTENT */}
  <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">

    <div>
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.6 }}
        className="max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl lg:text-7xl"
      >
        {project.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.5 }}
        className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base"
      >
        {project.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-5 flex flex-wrap gap-2"
      >
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full border ${accent.border} ${accent.bg} px-3 py-1.5 text-[9px] font-medium tracking-wide ${accent.text}`}
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>

    {/* GITHUB / LIVE DEMO */}
    <div className="flex flex-wrap items-center gap-2 lg:justify-end">
      <ProjectLink
        href={project.github}
        icon={<FaGithub size={15} />}
        label="GitHub"
        accent={accent}
        compact
      />

      <ProjectLink
        href={project.demo}
        icon={<ExternalLink size={15} />}
        label="Live Demo"
        accent={accent}
        compact
      />



    </div>

  </div>
</div>




        </div>

        {/* HERO IMAGE */}

        <div className="mx-auto w-full max-w-5xl px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.35,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08]"
          >
            <div className="aspect-[16/7] bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                {project.category}
              </p>
            </div>
          </motion.div>
        </div>

        
      </section>

      {/* ==========================================================
          CONTENT
      =========================================================== */}

      <div className="mx-auto w-full max-w-5xl px-8 md:px-12 lg:px-16">

        {/* ========================================================
            OVERVIEW + PROJECT INFO
        ========================================================= */}

        <RevealSection>
          <div className="grid gap-10 border-b border-white/[0.07]  py-10 md:grid-cols-[1.7fr_1fr] md:py-14">

            <div>
              <SectionHeading
                number="01"
                label="Overview"
                accent={accent}
              />

              <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-400 md:text-base">
                {project.overview}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Project Info
              </p>

              <div className="mt-5 divide-y divide-white/[0.06]">
                <InfoRow label="Role" value={project.role} />
                <InfoRow label="Duration" value={project.duration} />
                <InfoRow label="Status" value={project.status} />
                <InfoRow label="Category" value={project.category} />
              </div>
            </div>
          </div>
        </RevealSection>

        {/* ========================================================
            PROBLEM
        ========================================================= */}

        <RevealSection>
          <div className="border-b border-white/[0.07] py-10 md:py-14">

            <SectionHeading
              number="02"
              label="The Problem"
              accent={accent}
            />

            <p className="mt-6 max-w-4xl text-xl font-medium leading-9 tracking-tight text-zinc-300 md:text-2xl md:leading-10">
              {project.problem}
            </p>
          </div>
        </RevealSection>

        {/* ========================================================
            IDEA / SOLUTION
        ========================================================= */}

        <RevealSection>
          <div className="grid gap-px overflow-hidden border-b border-white/[0.07] bg-white/[0.07] md:grid-cols-2">

            <StoryCard
              number="03"
              title="The Idea"
              text={project.idea}
              accent={accent}
            />

            <StoryCard
              number="04"
              title="The Solution"
              text={project.solution}
              accent={accent}
            />
          </div>
        </RevealSection>

        {/* ========================================================
            PRODUCT WALKTHROUGH
        ========================================================= */}

        <RevealSection>
          <section className="border-b border-white/[0.07] py-10 md:py-14">

            <SectionHeading
              number="05"
              label="Product Walkthrough"
              accent={accent}
            />

            <div className="mt-7 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#08080a]">

              <div className="grid lg:grid-cols-[minmax(0,1fr)_250px]">

                {/* MAIN DASHBOARD */}
                <div className="relative min-h-[340px] border-b border-white/[0.07] bg-zinc-950 lg:min-h-[500px] lg:border-b-0 lg:border-r">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeItem.image}
                      initial={{ opacity: 0, scale: 1.025, x: 10 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.985, x: -8 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <img
                        src={activeItem.image}
                        alt={activeItem.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between md:left-5 md:right-5">
                    <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2.5 py-1.5 backdrop-blur-xl">
                      <span className={`h-1.5 w-1.5 rounded-full ${accent.line}`} />
                      <span className="text-[8px] uppercase tracking-[0.18em] text-zinc-400">
                        Live Preview
                      </span>
                    </div>

                    <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1.5 text-[8px] text-zinc-500 backdrop-blur-xl">
                      {String(activeGallery + 1).padStart(2, "0")} /{" "}
                      {String(galleryItems.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeItem.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                      >
                        <p className={`text-[9px] uppercase tracking-[0.18em] ${accent.softText}`}>
                          Product View
                        </p>
                        <h3 className="mt-1 text-lg font-medium text-white md:text-xl">
                          {activeItem.title}
                        </h3>
                        <p className="mt-1 max-w-2xl text-xs leading-6 text-zinc-400">
                          {activeItem.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* VERTICAL NAVIGATION */}
                <div className="flex flex-col bg-[#0b0b0d]">
                  <div className="border-b border-white/[0.07] px-4 py-4">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                      Explore Product
                    </p>
                    <p className="mt-1 text-[10px] leading-5 text-zinc-500">
                      Select a view to inspect the interface.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 p-2 md:flex md:flex-col md:gap-0">
                    {galleryItems.map((item, index) => (
                      <button
                        key={item.image}
                        type="button"
                        onClick={() => setActiveGallery(index)}
                        className={`group relative flex min-w-0 items-center gap-2 rounded-xl p-2.5 text-left transition duration-300 md:w-full md:items-start md:gap-3 ${
                          activeGallery === index
                            ? `${accent.bg} ${accent.border} border`
                            : "border border-transparent hover:bg-white/[0.035]"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${
                            activeGallery === index
                              ? `${accent.border} bg-black/20`
                              : "border-white/[0.07] bg-white/[0.025]"
                          }`}
                        >
                          <span
                            className={`text-[8px] ${
                              activeGallery === index ? accent.text : "text-zinc-600"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </span>

                        <span className="min-w-0">
                          <span
                            className={`block text-[10px] font-medium ${
                              activeGallery === index
                                ? "text-zinc-100"
                                : "text-zinc-500 group-hover:text-zinc-300"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="mt-1 hidden line-clamp-2 text-[9px] leading-4 text-zinc-600 md:block">
                            {item.description}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>


       {/* ========================================================
    HOW IT WORKS
========================================================= */}

<RevealSection>
  <section className="border-b border-white/[0.07] py-10 md:py-14">
    <SectionHeading
      number="06"
      label="Inside the System"
      accent={accent}
    />

    <SystemFlow
      systemFlow={project.systemFlow}
      accent={accent}
    />
  </section>
</RevealSection>


        {/* ========================================================
            ARCHITECTURE
        ========================================================= */}

        <RevealSection>
          <section className="border-b border-white/[0.07] py-10 md:py-14">

            <SectionHeading
              number="07"
              label="Architecture"
              accent={accent}
            />
          </section>
        </RevealSection>

        {/* ========================================================
            TECH STACK
        ========================================================= */}

        <RevealSection>
          <section className="border-b border-white/[0.07] py-10 md:py-14">
            <SectionHeading
              number="08"
              label="Tech Stack"
              accent={accent}
            />

            <p className="mt-3 text-xs text-zinc-600">
              Select a layer to inspect the technologies used.
            </p>

            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">
              {[
                {
                  number: "01",
                  label: "Frontend",
                  technologies: ["React", "TypeScript", "Tailwind CSS"],
                },
                {
                  number: "02",
                  label: "Backend",
                  technologies: ["Node.js", "Express", "REST API"],
                },
                {
                  number: "03",
                  label: "Movie Data & APIs",
                  technologies: ["TMDB API",
      "External REST APIs"],
                },
                {
                  number: "04",
                  label: "AI Features",
                  technologies: ["AI API Integration",
      "Movie DNA",
      "Personalized Recommendations",
      "Mood-Based Recommendations"],
                },
                {
                  number: "05",
                  label: "Deployment & Tools",
                  technologies: ["Git",
      "GitHub",
      "Vercel", "Render"],
                },
              ].map((layer, index) => {
                const isActive = activeTechLayer === index;

                return (
                  <div
                    key={layer.label}
                    className="bg-[#09090b]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveTechLayer(isActive ? -1 : index)
                      }
                      className="group w-full text-left"
                    >
                      {/* HEADER */}
                      <div
                        className={`flex items-center gap-4 px-5 py-5 transition-all duration-300 md:px-6 ${
                          isActive
                            ? "bg-white/[0.025]"
                            : "hover:bg-white/[0.018]"
                        }`}
                      >
                        {/* NUMBER */}
                        <span
                          className={`font-mono text-[9px] ${
                            isActive
                              ? accent.softText
                              : "text-zinc-700"
                          }`}
                        >
                          {layer.number}
                        </span>

                        {/* LABEL */}
                        <span
                          className={`text-[10px] uppercase tracking-[0.18em] transition-colors ${
                            isActive
                              ? "text-zinc-200"
                              : "text-zinc-500 group-hover:text-zinc-300"
                          }`}
                        >
                          {layer.label}
                        </span>

                        {/* RIGHT SIDE */}
                        <div className="ml-auto flex items-center gap-3">
                          {isActive && (
                            <span className="hidden text-[8px] uppercase tracking-[0.16em] text-zinc-700 sm:block">
                              {layer.technologies.length} technologies
                            </span>
                          )}

                          <span
                            className={`text-zinc-600 transition-transform duration-300 ${
                              isActive ? "rotate-180" : ""
                            }`}
                          >
                            ↓
                          </span>
                        </div>
                      </div>
                    </button>

                    {/* EXPANDED CONTENT */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isActive
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/[0.05] px-5 pb-6 pt-5 md:px-6">
                          <div className="flex flex-wrap gap-2">
                            {layer.technologies.map((technology) => (
                              <span
                                key={technology}
                                className={`rounded-lg border ${accent.border} ${accent.bg} px-3 py-2 text-[10px] font-medium ${accent.text}`}
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </RevealSection>

        {/* ========================================================
            TECHNICAL DEEP DIVE
        ========================================================= */}

        <RevealSection>
          <section className="border-b border-white/[0.07] py-10 md:py-14">

            <SectionHeading
              number="09"
              label="Technical Deep Dive"
              accent={accent}
            />

            <div className="mt-7 space-y-2">
              {project.technicalDeepDive.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  className="group rounded-xl border border-white/[0.07] bg-white/[0.015] p-5 transition duration-300 hover:border-white/[0.13] hover:bg-white/[0.03]"
                >
                  <div className="flex gap-4">

                    <span className={`mt-0.5 text-[9px] ${accent.softText}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-sm font-medium text-zinc-200">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-3xl text-xs leading-7 text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </section>
        </RevealSection>

        {/* ========================================================
            CHALLENGES
        ========================================================= */}

        <RevealSection>
          <section className="border-b border-white/[0.07] py-10 md:py-14">

            <SectionHeading
              number="10"
              label="Challenges"
              accent={accent}
            />

            <div className="mt-7 grid gap-3 md:grid-cols-2">

              {project.challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                  }}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-5"
                >
                  <div className="flex gap-4">

                    <span className={`text-[9px] ${accent.softText}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-sm font-medium text-zinc-200">
                        {challenge.title}
                      </h3>

                      <p className="mt-2 text-xs leading-7 text-zinc-500">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </section>
        </RevealSection>

        {/* ========================================================
            BUILD STORY
        ========================================================= */}

        <RevealSection>
          <section className="border-b border-white/[0.07] py-10 md:py-14">

            <SectionHeading
              number="11"
              label="Build Story"
              accent={accent}
            />

            <div className="mt-8">
              <div className="grid gap-2 overflow-x-auto pb-2 md:grid-cols-5">
                {project.buildStory.map((item, index) => (
                  <motion.button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveBuildStory(index)}
                    whileHover={{ y: -2 }}
                    className={`group min-w-[150px] rounded-xl border p-4 text-left transition duration-300 ${
                      activeBuildStory === index
                        ? `${accent.border} ${accent.bg}`
                        : "border-white/[0.07] bg-white/[0.015] hover:bg-white/[0.035]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[9px] font-medium ${
                          activeBuildStory === index ? accent.text : "text-zinc-600"
                        }`}
                      >
                        {item.number}
                      </span>

                      {index < project.buildStory.length - 1 && (
                        <span className="text-[10px] text-zinc-800">→</span>
                      )}
                    </div>

                    <p
                      className={`mt-4 text-[10px] font-medium leading-5 ${
                        activeBuildStory === index
                          ? "text-zinc-100"
                          : "text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    >
                      {item.title}
                    </p>
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {project.buildStory[activeBuildStory] && (
                  <motion.div
                    key={project.buildStory[activeBuildStory].number}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-3 rounded-2xl border ${accent.border} ${accent.bg} p-6 md:p-8`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${accent.border} bg-black/20 text-[9px] ${accent.text}`}>
                        {project.buildStory[activeBuildStory].number}
                      </span>

                      <div>
                        <p className={`text-[9px] uppercase tracking-[0.18em] ${accent.softText}`}>
                          Build Milestone
                        </p>

                        <h3 className="mt-2 text-lg font-medium text-zinc-100 md:text-xl">
                          {project.buildStory[activeBuildStory].title}
                        </h3>

                        <p className="mt-3 max-w-3xl text-xs leading-7 text-zinc-500 md:text-sm">
                          {project.buildStory[activeBuildStory].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </section>
        </RevealSection>

        {/* ========================================================
            OUTCOME
        ========================================================= */}

        <RevealSection>
          <section className="border-b border-white/[0.07] py-10 md:py-14">

            <SectionHeading
              number="12"
              label="Outcome"
              accent={accent}
            />

            <div
              className={`mt-6 rounded-2xl border ${accent.border} ${accent.bg} p-6 md:p-8`}
            >
              <p className="max-w-4xl text-lg font-medium leading-9 tracking-tight text-zinc-200 md:text-2xl md:leading-10">
                {project.outcome}
              </p>
            </div>

          </section>
        </RevealSection>

        {/* ========================================================
            LEARNINGS
        ========================================================= */}

        <RevealSection>
          <section className="pt-14 pb-8 md:pt-14">

            <SectionHeading
              number="13"
              label="What I Learned"
              accent={accent}
            />

            <div className="mt-7 grid gap-2 sm:grid-cols-2">

              {project.learnings.map((learning, index) => (
                <div
                  key={`${learning}-${index}`}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-4"
                >
                  <div className="flex gap-3">
                    <span className={`text-[9px] ${accent.softText}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-xs leading-6 text-zinc-500">
                      {learning}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </section>
        </RevealSection>

      {/* ==========================================================
          PREVIOUS / NEXT
      =========================================================== */}

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.07] bg-[#09090b]/90 px-8 py-4 backdrop-blur-xl md:px-12 lg:px-16">

        <div className="flex items-center justify-between">

          <button
            type="button"
            onClick={onPrevious}
            disabled={selectedIndex <= 0}
            className="group flex items-center gap-2 text-xs text-zinc-600 transition hover:text-white disabled:pointer-events-none disabled:opacity-20"
          >
            <ChevronLeft
              size={16}
              className="transition group-hover:-translate-x-0.5"
            />
            Previous
          </button>

          <span className={`text-[9px] tracking-[0.22em] ${accent.softText}`}>
            {project.number} / {String(projects.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={onNext}
            disabled={selectedIndex >= projects.length - 1}
            className="group flex items-center gap-2 text-xs text-zinc-600 transition hover:text-white disabled:pointer-events-none disabled:opacity-20"
          >
            Next
            <ChevronRight
              size={16}
              className="transition group-hover:translate-x-0.5"
            />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================================================================
   ARCHITECTURE
================================================================ */



/* ================================================================
   SECTION COMPONENTS
================================================================ */

const RevealSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({
  number,
  label,
  accent,
}: {
  number: string;
  label: string;
  accent: (typeof accentStyles)[keyof typeof accentStyles];
}) => {
  return (
    <div className="flex items-center gap-3">

      <span className={`text-[9px] font-medium ${accent.softText}`}>
        {number}
      </span>

      <span className="h-px w-5 bg-zinc-800" />

      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
        {label}
      </p>

    </div>
  );
};

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="flex items-center justify-between gap-5 py-3">
      <span className="text-[10px] uppercase tracking-[0.12em] text-zinc-700">
        {label}
      </span>

      <span className="text-right text-xs text-zinc-400">
        {value}
      </span>
    </div>
  );
};

const StoryCard = ({
  number,
  title,
  text,
  accent,
}: {
  number: string;
  title: string;
  text: string;
  accent: (typeof accentStyles)[keyof typeof accentStyles];
}) => {
  return (
    <div className="bg-[#0b0b0d] p-7 md:p-9">

      <span className={`text-[9px] ${accent.softText}`}>
        {number}
      </span>

      <h3 className="mt-5 text-lg font-medium text-zinc-200">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-8 text-zinc-500">
        {text}
      </p>
    </div>
  );
};

const TechAccordion = ({
  title,
  items,
  accent,
  isOpen,
  onToggle,
}: {
  title: string;
  items: string[];
  accent: (typeof accentStyles)[keyof typeof accentStyles];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.025] md:px-6"
      >
        <div className="flex items-center gap-3">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isOpen ? accent.line : "bg-zinc-700"
            }`}
          />

          <span
            className={`text-[10px] font-medium uppercase tracking-[0.16em] ${
              isOpen ? accent.text : "text-zinc-500"
            }`}
          >
            {title}
          </span>
        </div>

        <ChevronDown
          size={14}
          className={`text-zinc-600 transition duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 px-5 pb-5 pt-1 md:px-6">
              {items.map((item) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  className={`rounded-lg border ${accent.border} bg-white/[0.025] px-3 py-2 text-[9px] text-zinc-400 transition hover:text-zinc-200`}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectLink = ({
  href,
  icon,
  label,
  accent,
  compact = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  accent: (typeof accentStyles)[keyof typeof accentStyles];
  compact?: boolean;
}) => {
  const isPlaceholder = href === "#";

  return (
    <a
      href={isPlaceholder ? undefined : href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noopener noreferrer"}
      onClick={(event) => {
        if (isPlaceholder) {
          event.preventDefault();
        }
      }}
      className={`group flex items-center justify-between rounded-xl border ${
        accent.border
      } bg-white/[0.02] transition duration-300 hover:bg-white/[0.05] ${
        compact ? "gap-3 px-4 py-2.5" : "px-5 py-5"
      }`}
    >
      <span
        className={`flex items-center gap-3 text-zinc-400 group-hover:text-white ${
          compact ? "text-[10px]" : "text-xs"
        }`}
      >
        {icon}
        {label}
      </span>

      <ArrowUpRight
        size={15}
        className={`text-zinc-700 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${accent.softText}`}
      />
    </a>
  );
};

export default ProjectModal;
