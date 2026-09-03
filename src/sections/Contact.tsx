import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const socials = [
    {
      name: "GitHub",
      icon: FaGithub,
      handle: "Aditya19-Jena",
      href: "https://github.com/Aditya19-Jena",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      handle: "aditya-kumar-jena",
      href: "https://www.linkedin.com/in/aditya-kumar-jena-962348323/",
    },
    {
      name: "X",
      icon: FaXTwitter,
      handle: "AdityaKumarTech",
      href: "https://x.com/AdityaKumarTech",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b0b0c] text-zinc-100"
    >
      <div className="mx-auto max-w-5xl px-8 pt-12 pb-20 md:px-12 md:pt-12 md:pb-20 lg:px-16">

        {/* TOP BORDER */}
        <div className="border-t border-zinc-800" />

        {/* SECTION HEADER */}
        <div className="flex items-center justify-between pt-14">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            08 / Contact
          </h2>

          <span className="text-[11px] text-zinc-600">
            Let&apos;s connect
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-12 pt-14 md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-16">

          {/* LEFT — CTA */}
          <div className="max-w-sm">

            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-400">
              Get in touch
            </p>

            <h3 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-zinc-500">
                meaningful.
              </span>
            </h3>

            <p className="mt-6 max-w-xs text-sm leading-6 text-zinc-500">
              Open to software engineering opportunities,
              full-stack projects, and interesting collaborations.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:adi.jena1904@gmail.com"
              className="group mt-8 inline-flex items-center gap-3 border-b border-zinc-700 pb-2 text-sm text-zinc-300 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              <Mail size={14} />

              <span>
                adi.jena1904@gmail.com
              </span>

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* RIGHT — DETAILS */}
          <div>

            {/* CONNECT */}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                Connect
              </p>

              <div className="mt-5">
                {socials.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group -mx-3 flex items-center rounded-sm px-3 py-4 text-xs transition-all duration-300 hover:bg-zinc-900/50 ${
                        index !== socials.length - 1
                          ? "border-b border-zinc-800"
                          : ""
                      }`}
                    >
                      {/* PLATFORM */}
                      <div className="flex w-28 shrink-0 items-center gap-2 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
                        <Icon size={13} />

                        <span>
                          {social.name}
                        </span>
                      </div>

                      {/* HANDLE */}
                      <span className="text-zinc-400 transition-colors duration-300 group-hover:text-cyan-400">
                        {social.handle}
                      </span>

                      {/* ARROW */}
                      <ArrowUpRight
                        size={11}
                        className="ml-auto text-zinc-700 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-400"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="mt-10">

              <div className="flex items-center justify-between gap-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                  Availability
                </p>

                <div className="flex items-center gap-2">                 
                  <span className="text-xs text-zinc-400">
                    Available for opportunities
                  </span>
                </div>
              </div>

              {/* DETAILS */}
              <div className="mt-6 grid grid-cols-1 gap-3 text-[11px] sm:grid-cols-3">

                {/* LOCATION */}
                <div className="border-t border-zinc-800 pt-3">
                  <span className="block text-zinc-600">
                    Location
                  </span>

                  <span className="mt-1 block text-zinc-400">
                    India
                  </span>
                </div>

                {/* WORK */}
                <div className="border-t border-zinc-800 pt-3">
                  <span className="block text-zinc-600">
                    Work
                  </span>

                  <span className="mt-1 block text-zinc-400">
                    Remote / Hybrid
                  </span>
                </div>

                {/* FOCUS */}
                <div className="border-t border-zinc-800 pt-3">
                  <span className="block text-zinc-600">
                    Focus
                  </span>

                  <span className="mt-1 block text-zinc-400">
                    Full-stack + AI
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;