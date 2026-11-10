
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Code2,
} from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Development / IT Training",
    company: "D-XPERTZ COMPUTER TECHNOLOGY",
    period: "May 2026 — September 2026",
    description:
      "Gained hands-on experience building responsive web interfaces and applications. Worked with HTML, CSS, JavaScript, DOM manipulation, event handling, dynamic rendering, API integration, and React.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "REST APIs"],
  },
  {
    type: "project",
    title: "JG Furnitures E-Commerce",
    company: "Personal Project",
    period: "2026",
    description:
      "Built a responsive furniture e-commerce application with product browsing, dynamic product rendering, product details, and shopping cart functionality.",
    technologies: ["React", "JavaScript", "REST APIs", "CSS"],
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

const iconMap = {
  work: BriefcaseBusiness,
  project: Code2,
  education: GraduationCap,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function ExperienceCard({ item }) {
  const Icon = iconMap[item.type];

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="
        group relative
        grid grid-cols-[42px_minmax(0,1fr)]
        sm:grid-cols-[52px_minmax(0,1fr)]
        gap-4 sm:gap-5
        rounded-2xl
        bg-white dark:bg-[#191E27]
        px-5 py-6 sm:px-7 sm:py-7
        shadow-[0_8px_30px_rgba(15,23,42,0.045)]
        dark:shadow-[0_12px_35px_rgba(0,0,0,0.18)]
        transition-shadow duration-300
        hover:shadow-[0_14px_38px_rgba(15,23,42,0.09)]
        dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]
      "
    >
      {/* Icon */}
      <div
        className="
          flex h-11 w-11 sm:h-12 sm:w-12
          items-center justify-center
          rounded-xl
          bg-indigo-50 dark:bg-indigo-400/10
          text-indigo-600 dark:text-indigo-400
          transition-transform duration-300
          group-hover:scale-105
        "
      >
        <Icon size={21} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3 className="text-[17px] sm:text-[19px] font-semibold leading-snug tracking-tight text-[#202630] dark:text-[#F1F3F6]">
              {item.title}
            </h3>

            <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {item.company}
            </p>
          </div>

          <span
            className="
              mt-1 w-fit shrink-0
              rounded-full
              bg-[#F0F3F8] dark:bg-[#252D39]
              px-3 py-1.5
              text-[11px] sm:text-xs font-medium
              text-[#586477] dark:text-[#B4BFCE]
            "
          >
            {item.period}
          </span>
        </div>

        <p className="mt-4 max-w-2xl text-[13px] sm:text-sm leading-[1.8] text-[#697383] dark:text-[#AEB7C5]">
          {item.description}
        </p>

        {item.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-2">
            {item.technologies.map((technology, techIndex) => (
              <span
                key={technology}
                className="flex items-center gap-2.5 text-xs font-medium text-[#667386] dark:text-[#AAB5C4]"
              >
                {technology}

                {techIndex !== item.technologies.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-indigo-400 dark:bg-indigo-400" />
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ fontFamily: "Tahoma, Geneva, sans-serif" }}
      className="
        relative isolate overflow-hidden
        bg-[#F7F8FA] dark:bg-[#101318]
        px-5 sm:px-8
        py-20 sm:py-24 lg:py-28
        transition-colors duration-300
      "
    >
      {/* Dark theme background texture */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10 hidden dark:block
          bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.13),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.07),transparent_40%),linear-gradient(125deg,#11151C_0%,#151A23_48%,#101318_100%)]
        "
      />

      {/* Light theme background detail */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute right-0 top-0 -z-10
          h-[400px] w-[400px] rounded-full
          bg-indigo-100/40 blur-[100px]
          dark:hidden
        "
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

        {/* Left: Section introduction */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:sticky lg:top-28"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-indigo-600 dark:bg-indigo-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
              Experience & Education
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.12] tracking-[-0.045em] text-[#1C232D] dark:text-[#F4F5F7]">
            My Journey
            <span className="text-indigo-600 dark:text-indigo-400">.</span>
          </h2>

          <p className="mt-6 max-w-md text-[15px] sm:text-base leading-[1.9] text-[#697383] dark:text-[#AEB7C5]">
            A look at my practical experience, personal projects, and academic
            journey in software engineering.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-[3px] w-12 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            <span className="h-[3px] w-3 rounded-full bg-indigo-200 dark:bg-indigo-400/30" />
          </div>

          <div className="mt-12 hidden lg:block">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#929BA8] dark:text-[#758194]">
              Learning · Building · Growing
            </p>
          </div>
        </motion.div>

        {/* Right: Experience cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-5 sm:gap-6"
        >
          {experiences.map((item) => (
            <ExperienceCard
              key={item.title}
              item={item}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
