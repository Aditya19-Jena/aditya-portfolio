const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0b0b0c] text-zinc-100"
    >
      <div className="mx-auto max-w-5xl px-8 pb-20 pt-12 md:px-12 md:pb-12 md:pt-12 lg:px-16">

        {/* TOP BORDER */}
        <div className="border-t border-zinc-800" />

        {/* SECTION HEADER */}
        <div className="flex items-center justify-between pt-10 md:pt-14">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            01 / About
          </h2>

          <span className="text-[11px] text-zinc-600">
            Profile
          </span>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-[0.55fr_1.45fr] md:gap-16">

          {/* LEFT — META */}
          <div className="grid grid-cols-[0.8fr_0.8fr_1.4fr] gap-4 text-xs md:block md:space-y-7">

            {/* ROLE */}
            <div>
              <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-600 sm:text-[10px]">
                Role
              </p>

              <p className="leading-5 text-zinc-400">
                Full Stack
                <span className="hidden sm:inline"> Developer</span>
                <span className="sm:hidden"> Dev.</span>
              </p>
            </div>

            {/* FOCUS */}
            <div>
              <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-600 sm:text-[10px]">
                Focus
              </p>

              <p className="leading-5 text-zinc-400">
                Web · AI · Product
              </p>
            </div>

            {/* CURRENTLY */}
            <div>
              <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-600 sm:text-[10px]">
                Currently
              </p>

              <p className="leading-5 text-zinc-400">
                Building AI-powered web products
              </p>
            </div>

          </div>

          {/* RIGHT — MAIN CONTENT */}
          <div>

            {/* INTRO */}
            <p className="max-w-3xl text-[25px] font-normal leading-[1.4] tracking-[-0.025em] text-zinc-300 sm:text-[27px] md:text-[30px] lg:text-[32px]">
              I’m a Computer Science student and Full Stack
              Developer building practical digital products
              with modern web technologies and AI.
            </p>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 md:text-[15px]">
              My interests sit at the intersection of full-stack
              development, AI-powered applications, and product
              design. I enjoy turning ideas into functional products
              — from designing the interface to building the backend
              and integrating intelligent systems.
            </p>

            {/* APPROACH */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 md:text-[15px]">
              I care about building products that are not only
              technically sound, but also simple to use, visually
              clear, and useful in the real world.
            </p>

            {/* TECH STACK */}
            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-zinc-800 pt-5 sm:grid-cols-2 sm:gap-10">

              {/* CORE */}
              <div>
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                  Core
                </p>

                <div className="flex flex-wrap items-center gap-y-2 text-sm text-zinc-500">
                  <span>React</span>

                  <span className="mx-3 text-zinc-700">·</span>

                  <span>JavaScript</span>

                  <span className="mx-3 text-zinc-700">·</span>

                  <span>Node.js</span>

                  <span className="mx-3 text-zinc-700">·</span>

                  <span>MongoDB</span>
                </div>
              </div>

              {/* EXPLORING */}
              <div>
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                  Exploring
                </p>

                <div className="flex flex-wrap items-center gap-y-2 text-sm text-zinc-500">
                  <span>AI / ML</span>

                  <span className="mx-3 text-zinc-700">·</span>

                  <span>System Design</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;