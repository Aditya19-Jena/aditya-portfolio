const milestones = [
  {
    year: "2024",
    title: "Started with the fundamentals",
    description:
      "Built a strong foundation in HTML, CSS and JavaScript while learning how modern web applications work.",
  },
  {
    year: "2025",
    title: "Moved into React & full-stack",
    description:
      "Started building complete applications with React and explored backend development, APIs and databases.",
  },
  {
    year: "2026",
    title: "AI × Full Stack",
    description:
      "Focused on building intelligent products by combining modern web technologies with AI.",
  },
  {
    year: "NOW",
    title: "Building for the real world",
    description:
      "Turning ideas into polished products while preparing for software engineering opportunities.",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="bg-[#0b0b0c] text-zinc-100">
      <div className="mx-auto max-w-5xl px-8 pt-12 pb-20 md:px-12 md:pt-12 md:pb-12 lg:px-16">

        {/* TOP BORDER */}
        <div className="border-t border-zinc-800" />

        {/* SECTION HEADER */}
        <div className="flex items-center justify-between pt-14">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            04 / Journey
          </h2>

          <span className="text-[11px] text-zinc-600">
            The Path So Far
          </span>
        </div>

        {/* JOURNEY CONTENT */}
        <div className="grid gap-14 pt-14 md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-16">

          {/* LEFT — INTRO */}
          <div className="max-w-sm">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              The journey behind
              <span className="text-zinc-500"> the work.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-400">
              From learning the fundamentals to building intelligent,
              real-world products.
            </p>
          </div>

          {/* RIGHT — JOURNEY LIST */}
          <div>
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className={`grid gap-4 py-6 md:grid-cols-[90px_1fr_auto] md:items-start ${
                  index !== milestones.length - 1
                    ? "border-b border-zinc-800"
                    : ""
                }`}
              >

                {/* YEAR */}
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  {item.year}
                </span>

                {/* CONTENT */}
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-zinc-100">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </div>               
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;