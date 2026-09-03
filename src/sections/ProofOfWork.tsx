import { useState } from "react";
import {
  ArrowUpRight,
  List,
  Grid2X2,
} from "lucide-react";
import { certifications } from "../data/certifications";

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const [viewMode, setViewMode] = useState("list");

  const visibleCertifications = showAll
    ? certifications
    : certifications.slice(0, viewMode === "list" ? 3 : 4);

  // Keep these classes static so Tailwind detects them
  const gradients = [
    "from-violet-900/50 via-purple-950/25 to-zinc-950",
    "from-blue-900/50 via-indigo-950/25 to-zinc-950",
    "from-emerald-900/45 via-cyan-950/20 to-zinc-950",
    "from-orange-900/45 via-amber-950/20 to-zinc-950",
    "from-rose-900/45 via-red-950/20 to-zinc-950",
  ];

  return (
    <section
      id="certifications"
      className="bg-[#0b0b0c] text-zinc-100"
    >
      <div className="mx-auto max-w-5xl px-8 pb-20 pt-12 md:px-12 md:pb-12 md:pt-12 lg:px-16">

        {/* TOP BORDER */}
        <div className="border-t border-zinc-800" />

        {/* SECTION HEADER */}
        <div className="flex items-center justify-between pt-14">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            06 / Certifications
          </h2>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-zinc-600">
              Credentials
            </span>

            {/* VIEW TOGGLE */}
            <div className="flex items-center gap-1 border-l border-zinc-800 pl-4">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                aria-label="List view"
                className={`p-1 transition-colors ${
                  viewMode === "list"
                    ? "text-zinc-200"
                    : "text-zinc-700 hover:text-zinc-400"
                }`}
              >
                <List size={13} strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
                className={`p-1 transition-colors ${
                  viewMode === "grid"
                    ? "text-zinc-200"
                    : "text-zinc-700 hover:text-zinc-400"
                }`}
              >
                <Grid2X2 size={13} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid gap-10 pt-14 md:grid-cols-[1fr_1.7fr] md:gap-12 lg:gap-16">

          {/* LEFT — INTRO */}
          <div className="max-w-sm">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Continuous
              <br />
              <span className="text-zinc-500">
                learning.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-400">
              A collection of certifications and credentials
              earned while expanding my knowledge across
              software development, AI, and computer science.
            </p>
          </div>

          {/* RIGHT */}
          <div className="self-start">

            {/* ================= LIST VIEW ================= */}
            {viewMode === "list" && (
              <div>
                {visibleCertifications.map((cert, index) => {
                  const accentColors = [
                    "border-violet-500/70",
                    "border-blue-500/70",
                    "border-emerald-500/70",
                    "border-orange-500/70",
                    "border-rose-500/70",
                  ];

                  return (
                    <a
                      key={cert.id}
                      href={cert.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`
                        group
                        flex
                        items-center
                        gap-4
                        border-b
                        border-zinc-800
                        py-4
                        pl-3
                        transition-colors
                        hover:border-zinc-700
                        last:border-b-0
                      `}
                    >
                      {/* COLORED ACCENT */}
                      <span
                        className={`
                          h-8
                          w-[2px]
                          shrink-0
                          border-l-2
                          ${accentColors[index % accentColors.length]}
                          opacity-60
                          transition-all
                          duration-300
                          group-hover:h-10
                          group-hover:opacity-100
                        `}
                      />

                      {/* INFO */}
                      <div className="min-w-0 flex-1">
                        <h3
                          className="
                            truncate
                            text-[13px]
                            font-medium
                            tracking-tight
                            text-zinc-200
                            transition-colors
                            group-hover:text-white
                          "
                        >
                          {cert.title}
                        </h3>

                        <p className="mt-0.5 text-[9px] text-zinc-600">
                          {cert.issuer}
                        </p>
                      </div>

                      {/* YEAR */}
                      <span className="shrink-0 text-[9px] text-zinc-600">
                        {cert.year}
                      </span>

                      {/* ARROW */}
                      <ArrowUpRight
                        size={11}
                        className="
                          shrink-0
                          text-zinc-700
                          transition-all
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                          group-hover:text-zinc-200
                        "
                      />
                    </a>
                  );
                })}
              </div>
            )}

            {/* ================= GRID VIEW ================= */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {visibleCertifications.map((cert, index) => (
                  <a
                    key={cert.id}
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`
                      group
                      relative
                      overflow-hidden
                      border
                      border-zinc-800
                      bg-gradient-to-br
                      ${gradients[index % gradients.length]}
                      px-3.5
                      py-3
                      transition-all
                      duration-300
                      hover:border-zinc-700
                    `}
                  >
                    {/* SUBTLE HOVER LAYER */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-white/[0.025]
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    {/* CONTENT */}
                    <div className="relative">

                      {/* TOP */}
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-zinc-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <ArrowUpRight
                          size={11}
                          className="
                            text-zinc-500
                            transition-all
                            duration-300
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                            group-hover:text-zinc-200
                          "
                        />
                      </div>

                      {/* TITLE */}
                      <h3
                        className="
                          mt-2.5
                          line-clamp-2
                          text-[12px]
                          font-medium
                          leading-4
                          tracking-tight
                          text-zinc-100
                        "
                      >
                        {cert.title}
                      </h3>

                      {/* META */}
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="truncate text-[9px] text-zinc-400">
                          {cert.issuer}
                        </span>

                        <span className="shrink-0 text-[9px] text-zinc-400">
                          {cert.year}
                        </span>
                      </div>

                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* VIEW MORE / SHOW LESS */}
            {certifications.length > (viewMode === "list" ? 3 : 4) && (
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-zinc-600
                  transition-colors
                  hover:text-zinc-200
                "
              >
                <span>
                  {showAll
                    ? "Show less"
                    : "View all certificates"}
                </span>

                <span
                  className="
                    text-xs
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                >
                  {showAll ? "↑" : "↓"}
                </span>
              </button>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;