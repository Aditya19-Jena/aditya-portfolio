import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "../components/modal/ProjectModal";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const openAllProjects = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const openProject = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="bg-[#0b0b0c] text-zinc-100">
        <div className="mx-auto max-w-5xl px-8 pb-20 pt-12 md:px-12 md:pb-12 md:pt-12 lg:px-16">

          {/* TOP BORDER */}
          <div className="border-t border-zinc-800" />

          {/* SECTION HEADER */}
          <div className="flex items-center justify-between pt-14">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              02 / Selected Builds
            </h2>

            <button
              onClick={openAllProjects}
              className="group text-[11px] text-zinc-600 transition hover:text-zinc-200"
            >
              Open Details{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </button>
          </div>

          {/* PROJECT CONTENT */}
          <div className="grid gap-12 pt-14 md:grid-cols-[1fr_1.7fr] md:gap-12 lg:gap-16">

            {/* LEFT — INTRO */}
            <div className="max-w-sm">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Projects that solve
                <span className="text-zinc-500"> real problems.</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-zinc-400">
                A collection of products and systems I’ve built while
                exploring full-stack development, AI, and intelligent user
                experiences.
              </p>
            </div>

            {/* RIGHT — PROJECT LIST */}
            <div className="space-y-2.5">
              {projects.map((project, index) => {
                const gradients = [
                  "from-violet-950/55 via-purple-950/20 to-zinc-950",
                  "from-blue-950/55 via-indigo-950/20 to-zinc-950",
                  "from-emerald-950/50 via-cyan-950/15 to-zinc-950",
                ];

                return (
                  <button
                    key={project.number}
                    onClick={() => openProject(project)}
                    className={`
                      group relative grid min-h-[84px] w-full
                      grid-cols-[60px_1fr_20px]
                      items-center gap-3
                      overflow-hidden rounded-[14px]
                      border border-zinc-800
                      bg-gradient-to-r ${gradients[index % gradients.length]}
                      px-3.5
                      text-left
                      transition-all duration-300
                      hover:border-zinc-700
                      hover:bg-zinc-900/80
                      md:grid-cols-[62px_1fr_24px]
                      md:px-4
                    `}
                  >
                    {/* SUBTLE HOVER GLOW */}
                    <div className="pointer-events-none absolute inset-0 bg-white/[0.015] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* THUMBNAIL */}
                    <div className="relative h-[56px] w-[60px] overflow-hidden rounded-[9px] border border-white/10 bg-zinc-900/80">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-black/10 transition group-hover:bg-transparent" />
                    </div>

                    {/* PROJECT INFO */}
                    <div className="relative min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-medium text-zinc-500">
                          {project.number}
                        </span>

                        <h3 className="truncate text-[15px] font-medium tracking-tight text-zinc-100 transition-colors group-hover:text-white md:text-base">
                          {project.title}
                        </h3>
                      </div>

                      {/* TAGS */}
                      <div className="mt-1.5 flex gap-1.5 overflow-hidden">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              whitespace-nowrap
                              rounded-full
                              border border-white/10
                              bg-white/[0.04]
                              px-2 py-0.5
                              text-[8px]
                              font-medium
                              tracking-wide
                              text-zinc-400
                              transition-colors
                              group-hover:text-zinc-300
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ARROW */}
                    <span
                      className="
                        relative justify-self-end
                        text-sm text-zinc-600
                        transition-all duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:text-zinc-200
                      "
                    >
                      ↗
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      <ProjectModal
        isOpen={isModalOpen}
        projects={projects}
        selectedProject={selectedProject}
        onClose={() => setIsModalOpen(false)}
        onSelectProject={setSelectedProject}
      />
    </>
  );
};

export default Projects;