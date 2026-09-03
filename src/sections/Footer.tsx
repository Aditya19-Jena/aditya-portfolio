import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0b0b0c] text-zinc-100">
      <div className="mx-auto max-w-5xl px-8 md:px-12 lg:px-16">

        {/* TOP BORDER */}
        <div className="border-t border-zinc-800" />

        {/* MAIN FOOTER */}
        <div className="flex flex-col justify-between gap-10 py-12 md:flex-row md:items-end md:py-16">

          {/* NAME */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
              Designed &amp; built by
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-zinc-100 md:text-5xl">
              Aditya
              <span className="text-zinc-500"> Kumar Jena</span>
            </h2>

            <p className="mt-4 text-xs text-zinc-600">
              Computer Science · Full Stack · AI
            </p>
          </div>

          {/* BACK TO TOP */}
          <button
            onClick={scrollToTop}
            className="group flex w-fit items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600 transition-colors hover:text-zinc-200"
          >
            <span>
              Back to top
            </span>

            <span className="flex h-8 w-8 items-center justify-center border border-zinc-800 transition-all duration-300 group-hover:border-zinc-600">
              <ArrowUp
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </button>

        </div>

        {/* BOTTOM LINE */}
        <div className="flex flex-col gap-2 border-t border-zinc-900 py-5 text-[10px] text-zinc-700 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © 2026 Aditya Kumar Jena
          </span>

          <span>
            Built with React &amp; Tailwind
          </span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;