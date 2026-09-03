const capabilities = [
  {
    title: "Frontend",
    skills: [
      "React", "JavaScript", "TypeScript", "Tailwind CSS", "Responsive UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js", "Express", "MongoDB", "REST APIs", "Socket.IO",
    ],
  },
  {
    title: "AI / Engineering",
    skills: [
      "Python", "Machine Learning", "NLP", "Computer Vision", "LLMs", "System Design",
    ],
  },
]

const Capabilities = () => {
  return (
    <section
      id="capabilities"
      className = "relative overflow-hidden bg-[#0b0b0c] text-zinc-100"
    >      
      <div className = "mx-auto max-w-5xl px-8 pt-12 pb-20 md:px-12 md:pt-12 md:pb-12 lg:px-16">

        {/* TOP BORDER */}
        <div className="border-t border-zinc-800"/>

        {/* SECTION HEADER */}
        <div className = "flex items-center justify-between pt-14 md:pt-14">
          <h2 className = "text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            03 / Capabilities
          </h2>

          <span className = "text-[11px] text-zinc-600">
            What I work with
          </span>
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title} className={`py-10 md:px-7 ${ index !== 0 ? "border-t border-zinc-800 md:border-t-0 md:border-l" : "" }`}>
                <h3 className="text-lg font-semibold tracking-tight"> {capability.title} </h3>

                <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2 text-[15px] leading-6 text-zinc-500"> {capability.skills.map((skill, skillIndex) => ( <span key={skill}> {skill} {skillIndex !== capability.skills.length - 1 && ( <span className="ml-2 text-zinc-700">/</span> )} </span> ))} </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;