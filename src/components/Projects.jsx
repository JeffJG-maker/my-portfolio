import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
    ArrowUpRight,
    ArrowRight,
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Living Faith Church, Iguosa",
        category: "Church Management & Media Platform",
        description:
            "A modern church platform featuring a public-facing website, sermon and media content, authentication, and an administrative dashboard for managing digital content.",
        technologies: [
            "React",
            "JavaScript",
            "REST APIs",
            "Responsive Design",
        ],
        status: "In Progress",
        github: "https://github.com/JeffJG-maker/My-Church-Website",
        live: "https://lfcwinnersiguosa.netlify.app/",
        cover: "/projects/church/home.png",
        screenshots: [
            {
                src: "/projects/church/home.png",
                label: "Church Website",
            },
            {
                src: "/projects/church/dashboard.png",
                label: "Admin Dashboard",
            },
            {
                src: "/projects/church/sermons.png",
                label: "Sermon Management",
            },
            {
                src: "/projects/church/login.png",
                label: "Authentication",
            },
            {
                src: "/projects/church/contact.png",
                label: "Contact Page",
            },
        ],
    },

    {
        id: 2,
        title: "JG Furnitures E-Commerce",
        category: "E-Commerce Web Application",
        description:
            "A responsive furniture e-commerce application featuring product discovery, catalogue browsing, product details, cart management, and customer contact functionality.",
        technologies: [
            "React",
            "JavaScript",
            "REST APIs",
            "CSS",
            "Responsive Design",
        ],
        status: "In Progress",
        github: "https://github.com/JeffJG-maker/furniture-store-jg",
        live: "https://furniture-store-jg.netlify.app/",
        cover: "/projects/furniture/home.png",
        screenshots: [
            {
                src: "/projects/furniture/home.png",
                label: "Home Page",
            },
            {
                src: "/projects/furniture/catalog-preview.png",
                label: "Popular Products",
            },
            {
                src: "/projects/furniture/catalog.png",
                label: "Product Catalog",
            },
            {
                src: "/projects/furniture/product-details.png",
                label: "Product Details",
            },
            {
                src: "/projects/furniture/about.png",
                label: "About Page",
            },
            {
                src: "/projects/furniture/contact.png",
                label: "Contact Page",
            },
            {
                src: "/projects/furniture/cart.png",
                label: "Shopping Cart",
            },
        ],
    },
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [showAllProjects, setShowAllProjects] = useState(false);

    const openProject = (project) => {
        setSelectedProject(project);
        setCurrentImage(0);
    };

    const closeProject = () => {
        setSelectedProject(null);
        setCurrentImage(0);
    };

    const nextImage = () => {
        setCurrentImage((prev) =>
            prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
        );
    };

    const previousImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
        );
    };

    return (
        <>
            <section
                id="projects"
                className="bg-white px-6 py-24 dark:bg-[#111315]"
            >
                <div className="mx-auto max-w-7xl">
                    {/* Section Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="mb-14 max-w-2xl"
                    >
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                            Selected Work
                        </p>

                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                            Projects I've Built
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            A selection of web applications I've designed and developed,
                            showcasing practical interfaces, functionality, and responsive
                            user experiences.
                        </p>
                    </motion.div>

                    {/* Project Cards */}
                    <motion.div
                        layout
                        className="grid gap-10 lg:grid-cols-2"
                        transition={{
                            layout: {
                                duration: 0.45,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        {/* First Two Projects */}
                        {projects.slice(0, 2).map((project, index) => (
                            <motion.article
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.12,
                                }}
                                className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/[0.07] dark:bg-[#181B1E]"
                            >
                                {/* Project Preview */}
                                <button
                                    type="button"
                                    onClick={() => openProject(project)}
                                    className="relative block w-full overflow-hidden text-left"
                                >
                                    <div className="aspect-[16/10] overflow-hidden">
                                        <img
                                            src={project.cover}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                                        <span className="m-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900">
                                            View Project
                                        </span>
                                    </div>
                                </button>

                                {/* Project Information */}
                                <div className="p-7">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                            {project.category}
                                        </span>

                                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                                            {project.status}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                        {project.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/[0.07] dark:bg-[#1C1F22] dark:text-slate-300"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <div className="mt-7 flex items-center gap-6">
                                        <button
                                            type="button"
                                            onClick={() => openProject(project)}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                                        >
                                            View Case Study
                                            <ArrowUpRight size={17} />
                                        </button>

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                        >
                                            <FaGithub size={17} />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}

                        {/* Additional Projects */}
                        <AnimatePresence>
                            {showAllProjects &&
                                projects.slice(2).map((project, index) => (
                                    <motion.article
                                        layout
                                        key={project.id}
                                        initial={{
                                            opacity: 0,
                                            y: 25,
                                            scale: 0.97,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -20,
                                            scale: 0.97,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.06,
                                            layout: {
                                                duration: 0.45,
                                                ease: "easeInOut",
                                            },
                                        }}
                                        className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/[0.07] dark:bg-[#181B1E]"
                                    >
                                        {/* Project Preview */}
                                        <button
                                            type="button"
                                            onClick={() => openProject(project)}
                                            className="relative block w-full overflow-hidden text-left"
                                        >
                                            <div className="aspect-[16/10] overflow-hidden">
                                                <img
                                                    src={project.cover}
                                                    alt={project.title}
                                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                                                <span className="m-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900">
                                                    View Project
                                                </span>
                                            </div>
                                        </button>

                                        {/* Project Information */}
                                        <div className="p-7">
                                            <div className="mb-4 flex items-center justify-between gap-4">
                                                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                                    {project.category}
                                                </span>

                                                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                                                    {project.status}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                                {project.title}
                                            </h3>

                                            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                                {project.description}
                                            </p>

                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {project.technologies.map((technology) => (
                                                    <span
                                                        key={technology}
                                                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/[0.07] dark:bg-[#1C1F22] dark:text-slate-300"
                                                    >
                                                        {technology}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-7 flex items-center gap-6">
                                                <button
                                                    type="button"
                                                    onClick={() => openProject(project)}
                                                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                                                >
                                                    View Case Study
                                                    <ArrowUpRight size={17} />
                                                </button>

                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                                >
                                                    <FaGithub size={17} />
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* See More / See Less */}
                    {projects.length > 2 && (
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
                                onClick={() =>
                                    setShowAllProjects((prev) => !prev)
                                }
                                className="group inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-500 p-1 text-sm font-bold tracking-[0.12em] text-white shadow-[0_6px_16px_rgba(49,46,129,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(49,46,129,0.45)]"
                            >
                                <span className="px-8 py-2.5">
                                    {showAllProjects ? "SEE LESS" : "SEE MORE"}
                                </span>

                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/15 transition-all duration-300 group-hover:bg-black/25">
                                    <ArrowRight
                                        size={17}
                                        className={`transition-transform duration-300 ${showAllProjects
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

            {/* Project Case Study Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                        onClick={closeProject}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.25 }}
                            onClick={(event) => event.stopPropagation()}
                            className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-[#181B1E]"
                        >
                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={closeProject}
                                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black"
                                aria-label="Close project"
                            >
                                <X size={20} />
                            </button>

                            <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[1.35fr_0.65fr]">
                                {/* Screenshot Viewer */}
                                <div className="relative bg-slate-100 p-4 dark:bg-[#111315]">
                                    <div className="flex min-h-[420px] items-center justify-center overflow-hidden rounded-2xl">
                                        <img
                                            src={selectedProject.screenshots[currentImage].src}
                                            alt={
                                                selectedProject.screenshots[currentImage].label
                                            }
                                            className="max-h-[65vh] w-full object-contain"
                                        />
                                    </div>

                                    {/* Previous */}
                                    <button
                                        type="button"
                                        onClick={previousImage}
                                        className="absolute left-7 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:scale-105"
                                        aria-label="Previous screenshot"
                                    >
                                        <ChevronLeft size={22} />
                                    </button>

                                    {/* Next */}
                                    <button
                                        type="button"
                                        onClick={nextImage}
                                        className="absolute right-7 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:scale-105"
                                        aria-label="Next screenshot"
                                    >
                                        <ChevronRight size={22} />
                                    </button>

                                    {/* Screenshot Counter */}
                                    <div className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                                        {currentImage + 1} /{" "}
                                        {selectedProject.screenshots.length}
                                        {" — "}
                                        {selectedProject.screenshots[currentImage].label}
                                    </div>
                                </div>

                                {/* Case Study Details */}
                                <div className="p-7 sm:p-9">
                                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                                        {selectedProject.category}
                                    </p>

                                    <h3 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                                        {selectedProject.title}
                                    </h3>

                                    <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                                        {selectedProject.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mt-8">
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                                            Technologies
                                        </h4>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {selectedProject.technologies.map(
                                                (technology) => (
                                                    <span
                                                        key={technology}
                                                        className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:bg-[#1C1F22] dark:text-slate-300"
                                                    >
                                                        {technology}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Thumbnail Gallery */}
                                    <div className="mt-8">
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                                            Project Screens
                                        </h4>

                                        <div className="mt-4 grid grid-cols-3 gap-2">
                                            {selectedProject.screenshots.map(
                                                (screen, index) => (
                                                    <button
                                                        type="button"
                                                        key={screen.src}
                                                        onClick={() => setCurrentImage(index)}
                                                        className={`overflow-hidden rounded-lg border-2 transition ${currentImage === index
                                                                ? "border-indigo-600"
                                                                : "border-transparent hover:border-slate-300 dark:hover:border-slate-600"
                                                            }`}
                                                    >
                                                        <img
                                                            src={screen.src}
                                                            alt={screen.label}
                                                            className="aspect-video w-full object-cover"
                                                        />
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* External Links */}
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                                        >
                                            <FaGithub size={17} />
                                            GitHub
                                        </a>

                                        <a
                                            href={selectedProject.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-white/[0.08] dark:text-white dark:hover:bg-[#1C1F22]"
                                        >
                                            Live Demo
                                            <ArrowUpRight size={17} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Projects;