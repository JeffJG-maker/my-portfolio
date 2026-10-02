import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Development / IT Training",
    company: "D-XPERTZ COMPUTER TECHNOLOGY",
    period: "May 2026 — September 2026",
    description:
      "Gained hands-on experience building responsive web interfaces and applications. Worked with HTML, CSS, JavaScript, DOM manipulation, event handling, dynamic rendering, API integration, and React.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "REST APIs",
    ],
  },
  {
    type: "project",
    title: "JG Furnitures E-Commerce",
    company: "Personal Project",
    period: "2026",
    description:
      "Built a responsive furniture e-commerce application with product browsing, dynamic product rendering, product details, and shopping cart functionality.",
    technologies: [
      "React",
      "JavaScript",
      "REST APIs",
      "CSS",
    ],
  },
  {
    type: "education",
    title: "Software Engineering",
    company: "Wellspring University",
    period: "Current",
    description:
      "Developing a strong foundation in software engineering principles, programming, web development, and modern software development practices.",
    technologies: [],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-50 px-6 py-24 dark:bg-[#111315]"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            My Journey
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            My journey through practical development experience, personal
            projects, and software engineering education.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-200 sm:block dark:bg-white/[0.07]" />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const Icon =
                experience.type === "education"
                  ? GraduationCap
                  : BriefcaseBusiness;

              return (
                <motion.div
                  key={`${experience.title}-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-indigo-200 bg-white text-indigo-600 shadow-sm sm:flex dark:border-indigo-500/20 dark:bg-[#181B1E] dark:text-indigo-400">
                    <Icon size={18} />
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/[0.07] dark:bg-[#181B1E]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {experience.title}
                        </h3>

                        <p className="mt-1 font-medium text-indigo-600 dark:text-indigo-400">
                          {experience.company}
                        </p>
                      </div>

                      <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-[#1C1F22] dark:text-slate-300">
                        {experience.period}
                      </span>
                    </div>

                    <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                      {experience.description}
                    </p>

                    {experience.technologies.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/[0.07] dark:text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;