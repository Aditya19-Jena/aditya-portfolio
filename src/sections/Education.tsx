const education = [
  {
    period: "2023 — 2027",
    type: "Undergraduate",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Vellore Institute of Technology, Amaravati",
    description:
      "Developing a strong foundation in computer science while applying it to full-stack engineering, artificial intelligence, and real-world software systems.",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence",
    ],
    accent: "text-cyan-400",
  },
  {
    period: "2018 — 2022",
    type: "School",
    title: "Class 10th & 12th",
    institution: "Delhi Public School, Kalinga",
    description:
      "Built the academic foundation that led to an interest in computing, problem solving, and technology.",
    coursework: [],
    accent: "text-violet-400",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#0b0b0c] text-zinc-100"
    >
      <div className="mx-auto max-w-5xl px-8 pt-12 pb-20 md:px-12 md:pt-12 md:pb-12 lg:px-16">

        {/* TOP BORDER */}
        <div className="border-t border-zinc-800" />

        {/* SECTION HEADER */}
        <div className="flex items-center justify-between pt-14">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            07 / Education
          </h2>

          <span className="text-[11px] text-zinc-600">
            Academic Background
          </span>
        </div>

        {/* EDUCATION */}
        <div className="pt-10">

          {education.map((item, index) => (
            <article
              key={item.period}
              className={`grid gap-8 py-8 md:grid-cols-[150px_1px_1fr] md:gap-0 md:py-10 ${
                index !== education.length - 1
                  ? "border-b border-zinc-800"
                  : ""
              }`}
            >

              {/* YEAR */}
              <div className="md:pr-8">
                <span className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
                  {item.period}
                </span>
              </div>

              {/* VERTICAL LINE */}
              <div className="hidden bg-zinc-800 md:block" />

              {/* CONTENT */}
              <div className="md:pl-10">

                {/* TYPE */}
                <p
                  className={`text-xs font-medium uppercase tracking-[0.18em] ${item.accent}`}
                >
                  {item.type}
                </p>

                {/* DEGREE */}
                <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
                  {item.title}
                </h3>

                {/* INSTITUTION */}
                <p className="mt-2 text-sm text-zinc-400">
                  {item.institution}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>

                {/* COURSEWORK */}
                {item.coursework.length > 0 && (
                  <div className="mt-7">

                    <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-zinc-600">
                      Coursework
                    </p>

                    <div className="flex max-w-2xl flex-wrap gap-x-4 gap-y-2">
                      {item.coursework.map((topic, topicIndex) => (
                        <span
                          key={topic}
                          className="text-xs text-zinc-500"
                        >
                          {topic}

                          {topicIndex !== item.coursework.length - 1 && (
                            <span className="ml-4 text-zinc-800">
                              /
                            </span>
                          )}
                        </span>
                      ))}
                    </div>

                  </div>
                )}

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;