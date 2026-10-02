import { motion } from "framer-motion";

import {
    Code2,
    Gauge,
    Layout,
    Smartphone,
} from "lucide-react";

const qualities = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing organized and maintainable code that is easy to understand.",
    },
    {
        icon: Layout,
        title: "Modern UI",
        description:
            "Building clean and intuitive interfaces focused on user experience.",
    },
    {
        icon: Smartphone,
        title: "Responsive",
        description:
            "Creating experiences that work smoothly across different devices.",
    },
    {
        icon: Gauge,
        title: "Performance",
        description:
            "Building efficient applications with speed and usability in mind.",
    },
];

function About() {
    return (
        <section
            id="about"
            className="bg-slate-50 px-6 py-24 dark:bg-[#111315]"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                            About Me
                        </p>

                        <h2 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                            Turning ideas into useful digital experiences.
                        </h2>

                        <div className="mt-7 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-400">
                            <p>
                                I'm{" "}
                                <span className="font-semibold text-slate-900 dark:text-white">
                                    Nosa-Orhue Osasofure Jeffrey
                                </span>
                                , a Full-Stack Developer passionate about creating modern web
                                applications that are functional, responsive, and easy to use.
                            </p>

                            <p>
                                I enjoy transforming ideas into practical digital experiences,
                                working across the frontend and backend while continuously
                                improving my understanding of modern web technologies.
                            </p>

                            <p>
                                My approach is centered around clean code, thoughtful
                                interfaces, responsive design, and building solutions that
                                provide real value to users.
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-500 dark:hover:text-white"
                        >
                            Let's Work Together
                        </a>
                    </motion.div>

                    {/* Right */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {qualities.map((quality, index) => {
                            const Icon = quality.icon;

                            return (
                                <motion.div
                                    key={quality.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg dark:border-white/[0.07] dark:bg-[#181B1E] dark:hover:border-indigo-500/30"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/10 dark:text-indigo-400 dark:group-hover:bg-indigo-500 dark:group-hover:text-white">
                                        <Icon size={22} strokeWidth={1.8} />
                                    </div>

                                    <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">
                                        {quality.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                        {quality.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;