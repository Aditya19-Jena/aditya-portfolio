import { useState } from "react";

const Currently = () => {
  const items = [
    {
      number: "01",
      label: "Building",
      text: "AI-powered full-stack products with real-world workflows",
      accent: "text-cyan-400",
    },
    {
      number: "02",
      label: "Deepening",
      text: "System design, DSA, backend architecture & engineering fundamentals",
      accent: "text-violet-400",
    },
    {
      number: "03",
      label: "Experimenting",
      text: "AI agents, LLM applications and intelligent systems",
      accent: "text-emerald-400",
    },
    {
      number: "04",
      label: "Next",
      text: "Building production-ready projects and pursuing software engineering roles",
      accent: "text-orange-400",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const previous = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const item = items[activeIndex];

  return (
    <section
      id="currently"
      className="bg-[#0b0b0c] text-zinc-100"
    >
      <div className="mx-auto max-w-5xl px-8 pt-12 pb-20 md:px-12 md:pt-12 md:pb-12 lg:px-16">

        {/* TOP BORDER */}
        <div className="border-t border-zinc-800" />

        {/* SECTION HEADER */}
        <div className="flex items-center justify-between pt-14">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            05 / Currently
          </h2>

          <span className="text-[11px] text-zinc-600">
            What&apos;s happening now
          </span>
        </div>

        {/* CURRENTLY CONTENT */}
        <div className="grid gap-14 pt-14 md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-16">

          {/* LEFT — INTRO */}
          <div className="max-w-sm">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Building,
              <br />
              learning &
              <span className="text-zinc-500">
                {" "}moving forward.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-400">
              A snapshot of what I&apos;m working on, improving,
              and exploring right now.
            </p>
          </div>

          {/* RIGHT — SLIDER */}
          <div>

            {/* FIXED SLIDER HEIGHT */}
            <div className="relative h-[160px] overflow-hidden border-b border-zinc-800 md:h-[160px]">

              <div
                key={activeIndex}
                className="animate-slide-in absolute inset-0 pt-1"
              >
                {/* NUMBER + LABEL */}
                <div className="flex items-center gap-6">
                  <span className="text-xs font-medium tracking-[0.18em] text-zinc-700">
                    {item.number}
                  </span>

                  <span
                    className={`text-xs font-medium uppercase tracking-[0.18em] ${item.accent}`}
                  >
                    {item.label}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-xl text-xl leading-8 tracking-tight text-zinc-300 md:text-2xl">
                  {item.text}
                </p>
              </div>
            </div>

            {/* CONTROLS */}
            <div className="flex items-center justify-between pt-5">

              {/* PROGRESS */}
              <div className="flex items-center gap-2">
                {items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-[2px] transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-zinc-300"
                        : "w-4 bg-zinc-800 hover:bg-zinc-600"
                    }`}
                  />
                ))}
              </div>

              {/* ARROWS */}
              <div className="flex gap-2">
                <button
                  onClick={previous}
                  aria-label="Previous"
                  className="flex h-8 w-8 items-center justify-center border border-zinc-800 text-zinc-500 transition-colors hover:border-zinc-600 hover:text-zinc-200"
                >
                  ←
                </button>

                <button
                  onClick={next}
                  aria-label="Next"
                  className="flex h-8 w-8 items-center justify-center border border-zinc-800 text-zinc-500 transition-colors hover:border-zinc-600 hover:text-zinc-200"
                >
                  →
                </button>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-6 flex items-center justify-between text-xs text-zinc-600">
              <span>
                Focused on becoming a better engineer.
              </span>

              <span>
                {String(activeIndex + 1).padStart(2, "0")} / 04
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* SLIDE ANIMATION */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(18px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.35s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Currently;