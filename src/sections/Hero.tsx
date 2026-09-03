import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

import { useState } from "react";
import ResumeModal from "../components/modal/ResumeModal";

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0b0b0c] text-zinc-100"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center px-8 py-24 md:px-12 lg:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-16 md:grid-cols-[minmax(0,1fr)_320px]">

          {/* LEFT CONTENT */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
              Portfolio / 2026
            </p>

            {/* Main Heading */}
            <div>
              <h1 className="text-[clamp(4rem,8vw,6.5rem)] font-bold leading-[0.8] tracking-wide">
                Aditya
              </h1>

              <h2 className="whitespace-nowrap pt-5 text-[clamp(3.5rem,6.5vw,5.5rem)] font-bold leading-[0.8] tracking-normal text-zinc-500">
                builds things.
              </h2>
            </div>

            {/* Description */}
            <p className="mt-7 max-w-lg text-[15px] leading-7 text-zinc-400 md:text-base">
              Full-stack developer exploring AI, building products from idea
              to execution.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full border border-zinc-700 px-5 py-2.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
              >
                Get in touch
              </a>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="rounded-full border border-zinc-700 px-5 py-2.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
              >
                Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-5 text-zinc-500">

              {/* GitHub */}
              <a
                href="https://github.com/Aditya19-Jena"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-200"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aditya-kumar-jena-962348323/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>

              {/* X */}
              <a
                href="https://x.com/AdityaKumarTech"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-200"
                aria-label="X"
              >
                <FaXTwitter size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:adi.jena1904@gmail.com"
                className="transition hover:text-zinc-200"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>

            </div>
          </div>

          {/* RIGHT — ABSTRACT CODE FIELD */}
          <div className="relative hidden h-[360px] overflow-hidden md:block">

            {/* Fine Vertical Line */}
            <div className="absolute left-1/2 top-8 h-[280px] w-px bg-zinc-800/30" />

            {/* Fine Horizontal Line */}
            <div className="absolute left-8 top-1/2 h-px w-[280px] bg-zinc-800/30" />

            {/* Floating Symbols */}

            <span className="hero-symbol hero-symbol-1">
              {"< />"}
            </span>

            <span className="hero-symbol hero-symbol-2">
              {"{ }"}
            </span>

            <span className="hero-symbol hero-symbol-3">
              AI
            </span>

            <span className="hero-symbol hero-symbol-4">
              01
            </span>

            <span className="hero-symbol hero-symbol-5">
              {"→"}
            </span>

            <span className="hero-symbol hero-symbol-6">
              {"*"}
            </span>

            <span className="hero-symbol hero-symbol-7">
              101
            </span>

            <span className="hero-symbol hero-symbol-8">
              {"//"}
            </span>

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">

              <span className="block text-[9px] uppercase tracking-[0.3em] text-zinc-700">
                Creating
              </span>

              <span className="mt-2 block text-[11px] uppercase tracking-[0.25em] text-zinc-600">
                Software × AI
              </span>

            </div>

            {/* Coordinates */}
            <span className="absolute left-2 top-6 text-[8px] tracking-[0.2em] text-zinc-700">
              01
            </span>

            <span className="absolute right-2 top-6 text-[8px] tracking-[0.2em] text-zinc-700">
              26
            </span>

            <span className="absolute bottom-6 left-2 text-[8px] tracking-[0.2em] text-zinc-700">
              100
            </span>

            <span className="absolute bottom-6 right-2 text-[8px] tracking-[0.2em] text-zinc-700">
              001
            </span>

          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          .hero-symbol {
            position: absolute;
            display: block;
            user-select: none;

            font-size: 10px;
            font-weight: 500;
            letter-spacing: 0.18em;

            color: rgba(148, 163, 184, 0.28);

            animation:
              heroFloat 8s ease-in-out infinite,
              heroColor 12s ease-in-out infinite;
          }

          /* -------------------------------- */
          /* Symbol Positions                 */
          /* -------------------------------- */

          .hero-symbol-1 {
            left: 18%;
            top: 18%;
            animation-delay: 0s, 0s;
          }

          .hero-symbol-2 {
            right: 18%;
            top: 27%;
            animation-delay: -2s, -2s;
          }

          .hero-symbol-3 {
            left: 24%;
            bottom: 24%;
            animation-delay: -4s, -4s;
          }

          .hero-symbol-4 {
            right: 25%;
            bottom: 18%;
            animation-delay: -1s, -1s;
          }

          .hero-symbol-5 {
            left: 8%;
            top: 52%;
            animation-delay: -5s, -5s;
          }

          .hero-symbol-6 {
            right: 9%;
            top: 48%;
            animation-delay: -3s, -3s;
          }

          .hero-symbol-7 {
            left: 42%;
            top: 8%;
            animation-delay: -6s, -6s;
          }

          .hero-symbol-8 {
            right: 42%;
            bottom: 7%;
            animation-delay: -7s, -7s;
          }

          /* -------------------------------- */
          /* Floating Movement                */
          /* -------------------------------- */

          @keyframes heroFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.25;
            }

            25% {
              transform: translate3d(8px, -12px, 0);
              opacity: 0.48;
            }

            50% {
              transform: translate3d(-5px, 8px, 0);
              opacity: 0.30;
            }

            75% {
              transform: translate3d(12px, 5px, 0);
              opacity: 0.42;
            }
          }

          /* -------------------------------- */
          /* Faint Color Cycling              */
          /* -------------------------------- */

          @keyframes heroColor {
            0%, 100% {
              color: rgba(125, 211, 252, 0.28);
              text-shadow: 0 0 10px rgba(125, 211, 252, 0.08);
            }

            25% {
              color: rgba(147, 197, 253, 0.30);
              text-shadow: 0 0 10px rgba(147, 197, 253, 0.08);
            }

            50% {
              color: rgba(196, 181, 253, 0.28);
              text-shadow: 0 0 10px rgba(196, 181, 253, 0.08);
            }

            75% {
              color: rgba(216, 180, 254, 0.27);
              text-shadow: 0 0 10px rgba(216, 180, 254, 0.07);
            }
          }

          /* -------------------------------- */
          /* Reduced Motion                   */
          /* -------------------------------- */

          @media (prefers-reduced-motion: reduce) {
            .hero-symbol {
              animation: none;
              color: rgba(148, 163, 184, 0.28);
            }
          }
        `}
      </style>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </section>
  );
};

export default Hero;