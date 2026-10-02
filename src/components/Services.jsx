import { motion } from "framer-motion";
import {
    Code2,
    Server,
    Globe2,
    Database,
    Smartphone,
    Layers3,
} from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Full-Stack Development",
        description:
            "Building complete web applications across the frontend and backend with a focus on clean architecture, usability, and maintainability.",
    },
    {
        icon: Globe2,
        title: "Frontend Development",
        description:
            "Creating modern, responsive, and interactive user interfaces that provide a smooth experience across different screen sizes.",
    },
    {
        icon: Server,
        title: "Backend Development",
        description:
            "Developing server-side functionality and APIs that support reliable communication between applications and their data.",
    },
    {
        icon: Database,
        title: "API Integration",
        description:
            "Connecting web applications to APIs and efficiently working with external data to create dynamic and functional experiences.",
    },
    {
        icon: Smartphone,
        title: "Responsive Web Design",
        description:
            "Designing interfaces that adapt naturally to desktops, tablets, and mobile devices.",
    },
    {
        icon: Layers3,
        title: "Web Applications",
        description:
            "Turning ideas and requirements into practical web applications with reusable components and scalable structures.",
    },
];

function Services() {
    return (
        <section
            id="services"
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
                        Services
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                        What I Can Build
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        I build modern web solutions with a focus on clean interfaces,
                        useful functionality, responsiveness, and maintainable code.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg dark:border-white/[0.07] dark:bg-[#181B1E] dark:hover:border-indigo-500/30 dark:hover:bg-[#1C1F22]"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/10 dark:text-indigo-400 dark:group-hover:bg-indigo-500 dark:group-hover:text-white">
                                    <Icon size={22} strokeWidth={1.8} />
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                                    {service.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center dark:border-white/[0.07] dark:bg-[#181B1E]"
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Have a project in mind?
                    </h3>

                    <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
                        Let's turn your idea into a functional and polished web
                        experience.
                    </p>

                    <a
                        href="#contact"
                        className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-500 dark:hover:text-white"
                    >
                        Let's Talk
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Services;