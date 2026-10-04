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
    ArrowRight,
} from "lucide-react";

const skills = [
    { name: "HTML", icon: Code2 },
    { name: "CSS", icon: Palette },
    { name: "JavaScript", icon: Braces },
    { name: "React.js", icon: Atom },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Vite", icon: Zap },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: GitBranch },
    { name: "REST APIs", icon: Globe },
    { name: "DOM Manipulation", icon: Layers3 },
    { name: "Responsive Design", icon: Smartphone },
    { name: "Framer Motion", icon: Sparkles },
];

function Skills() {
    const [showAllSkills, setShowAllSkills] = useState(false);

    return (
        <section
            id="skills"
            className="bg-white px-6 py-24 dark:bg-[#111315]"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                        Skills & Technologies
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                        Tools I Work With
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Technologies and tools I use to build modern, responsive, and
                        functional web applications.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    transition={{
                        layout: {
                            duration: 0.45,
                            ease: "easeInOut",
                        },
                    }}
                >
                    {/* First 8 Skills */}
                    {skills.slice(0, 8).map((skill, index) => {
                        const Icon = skill.icon;

                        return (
                            <motion.div
                                layout
                                key={skill.name}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.06,
                                }}
                                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg dark:border-white/[0.07] dark:bg-[#181B1E] dark:hover:border-indigo-500/30 dark:hover:bg-[#1C1F22]"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/10 dark:text-indigo-400 dark:group-hover:bg-indigo-500 dark:group-hover:text-white">
                                    <Icon size={21} strokeWidth={1.8} />
                                </div>

                                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                    {skill.name}
                                </span>
                            </motion.div>
                        );
                    })}

                    {/* Additional Skills */}
                    <AnimatePresence>
                        {showAllSkills &&
                            skills.slice(8).map((skill, index) => {
                                const Icon = skill.icon;

                                return (
                                    <motion.div
                                        layout
                                        key={skill.name}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                            scale: 0.97,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -15,
                                            scale: 0.97,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            delay: index * 0.05,
                                            layout: {
                                                duration: 0.45,
                                                ease: "easeInOut",
                                            },
                                        }}
                                        className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg dark:border-white/[0.07] dark:bg-[#181B1E] dark:hover:border-indigo-500/30 dark:hover:bg-[#1C1F22]"
                                    >
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/10 dark:text-indigo-400 dark:group-hover:bg-indigo-500 dark:group-hover:text-white">
                                            <Icon size={21} strokeWidth={1.8} />
                                        </div>

                                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                    </AnimatePresence>
                </motion.div>

                {/* See More / See Less Button */}
                {skills.length > 8 && (
                    <motion.div
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-12 flex justify-center"
                    >
                        <button
                            type="button"
                            onClick={() => setShowAllSkills((prev) => !prev)}
                            className="group inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-500 p-1 text-sm font-bold tracking-[0.12em] text-white shadow-[0_6px_16px_rgba(49,46,129,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(49,46,129,0.45)]"
                        >
                            <span className="px-8 py-2.5">
                                {showAllSkills ? "SEE LESS" : "SEE MORE"}
                            </span>

                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/15 transition-all duration-300 group-hover:bg-black/25">
                                <ArrowRight
                                    size={17}
                                    className={`transition-transform duration-300 ${showAllSkills
                                            ? "rotate-180"
                                            : "group-hover:translate-x-0.5"
                                        }`}
                                />
                            </span>
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

export default Skills;