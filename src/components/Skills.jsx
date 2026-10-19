import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Wind,
  Zap,
  GitBranch,
  Globe,
  Smartphone,
  Sparkles,
  Layers3,
  Server,
  Database,
  Mail,
  Terminal,
  Package,
  Boxes,
  FileCode2,
  MonitorCog,
  Cloud,
  Send,
  Wrench,
  Laptop,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "React.js", icon: Atom },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Responsive Design", icon: Smartphone },
      { name: "Framer Motion", icon: Sparkles },
      { name: "DOM Manipulation", icon: Layers3 },
      { name: "Vite", icon: Zap },
      { name: "Dynamic Rendering", icon: FileCode2 },
      { name: "Event Listeners", icon: MonitorCog },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Boxes },
      { name: "REST APIs", icon: Globe },
      { name: "CRUD Operations", icon: Database },
      { name: "API Integration", icon: Cloud },
      { name: "Fetch API", icon: Code2 },
      { name: "Email Integration", icon: Mail },
      { name: "Form Validation", icon: FileCode2 },
    ],
  },
  {
    id: "database",
    name: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "Mongoose", icon: Boxes },
      { name: "JSON", icon: Braces },
    ],
  },
  {
    id: "tools",
    name: "Tools & Deployment",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FileCode2 },
      { name: "npm", icon: Package },
      { name: "Render", icon: Cloud },
      { name: "Netlify", icon: Globe },
      { name: "Terminal", icon: Terminal },
      { name: "Browser DevTools", icon: MonitorCog },
    ],
  },
  {
    id: "other",
    name: "Other Skills",
    icon: Laptop,
    skills: [
      { name: "Resend API", icon: Send },
      { name: "SEO Fundamentals", icon: Globe },
      { name: "Environment Variables", icon: Terminal },
      { name: "Component Architecture", icon: Boxes },
    ],
  },
];

const INITIAL_SKILLS_TO_SHOW = 4;

export default function Skills({ darkMode = false }) {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [showAll, setShowAll] = useState(false);

  const selectedCategory = skillCategories.find(
    (category) => category.id === activeCategory
  );

  const visibleSkills = showAll
    ? selectedCategory.skills
    : selectedCategory.skills.slice(0, INITIAL_SKILLS_TO_SHOW);

  const changeCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setShowAll(false);
  };

  const sectionClasses = darkMode
    ? "bg-[#111315] text-white"
    : "bg-white text-gray-900";

  const panelClasses = darkMode
    ? "border-white/[0.07] bg-[#181B1E]"
    : "border-gray-100 bg-white";

  // Consistent purplish-blue shadows in both themes.
  const cardClasses = darkMode
    ? "border-white/[0.04] bg-[#1C1F22] shadow-[0_8px_24px_rgba(104,91,255,0.08)] hover:shadow-[0_12px_30px_rgba(104,91,255,0.16)]"
    : "border-transparent bg-white shadow-[0_8px_24px_rgba(104,91,255,0.14)] hover:shadow-[0_12px_30px_rgba(104,91,255,0.25)]";

  return (
    <section
      id="skills"
      className={`px-5 py-16 transition-colors duration-300 sm:px-8 lg:px-12 lg:py-20 ${sectionClasses}`}
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500 sm:text-sm">
            Skills & Technologies
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Tools I Work With
          </h2>

          <p
            className={`mx-auto mt-3 max-w-xl text-sm sm:text-base ${darkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            Technologies and tools I use to build responsive, functional, and
            user-friendly web applications.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div
          className={`mb-6 flex flex-wrap justify-center gap-2 rounded-2xl border p-2 transition-colors duration-300 ${panelClasses}`}
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => changeCategory(category.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium transition-all duration-200 sm:px-4 sm:text-sm ${isActive
                    ? "bg-indigo-600 text-white shadow-[0_5px_16px_rgba(104,91,255,0.22)]"
                    : darkMode
                      ? "bg-indigo-500/10 text-indigo-200 shadow-sm hover:bg-indigo-500/15 hover:text-white lg:bg-transparent lg:shadow-none"
                      : "bg-indigo-50/70 text-indigo-700 shadow-sm hover:bg-indigo-100 hover:text-indigo-800 lg:bg-transparent lg:shadow-none"
                  }`}
              >
                <CategoryIcon size={16} />

                {category.name}

                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${isActive
                    ? "bg-white/20 text-white"
                    : darkMode
                      ? "bg-white/[0.07] text-gray-400"
                      : "bg-gray-100 text-gray-600"
                    }`}
                >
                  {category.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills panel */}
        <div
          className={`rounded-2xl border p-4 transition-colors duration-300 sm:p-6 ${panelClasses}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Category heading */}
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold sm:text-lg">
                    {selectedCategory.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {selectedCategory.skills.length} skills and technologies
                  </p>
                </div>

                <span
                  className={`rounded-lg px-3 py-1.5 text-xs ${darkMode
                    ? "bg-white/[0.05] text-gray-400"
                    : "bg-gray-50 text-gray-500"
                    }`}
                >
                  {visibleSkills.length} of {selectedCategory.skills.length}
                </span>
              </div>

              {/* Skill cards */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {visibleSkills.map((skill, index) => {
                  const SkillIcon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.035,
                      }}
                      className={`flex min-h-[76px] items-center gap-3 rounded-xl border p-3 transition-[box-shadow,background-color] duration-300 hover:shadow-[0_12px_30px_rgba(104,91,255,0.25)] dark:hover:shadow-[0_12px_30px_rgba(104,91,255,0.16)] ${cardClasses}`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${darkMode
                          ? "bg-indigo-400/10 text-indigo-300"
                          : "bg-indigo-50 text-indigo-600"
                          }`}
                      >
                        <SkillIcon size={18} />
                      </span>

                      <span className="text-xs font-medium leading-5 sm:text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* View all / Show less */}
              {selectedCategory.skills.length > INITIAL_SKILLS_TO_SHOW && (
                <div className="mt-5 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAll((previous) => !previous)}
                    aria-expanded={showAll}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${darkMode
                      ? "text-indigo-300 hover:bg-indigo-400/10"
                      : "text-indigo-600 hover:bg-indigo-50"
                      }`}
                  >
                    {showAll ? (
                      <>
                        Show less <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        View all {selectedCategory.skills.length} skills
                        <ChevronDown size={16} />
                      </>
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}