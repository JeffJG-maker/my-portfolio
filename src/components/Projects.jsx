import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {

    ArrowUpRight,

    ArrowLeft,

    ArrowRight,

    X,

    ChevronLeft,

    ChevronRight,

    Images,

    Monitor,

    ExternalLink,

} from "lucide-react";

import { FaGithub } from "react-icons/fa";



const projects = [

    {

        id: 1,

        number: "01",

        title: "Living Faith Church, Iguosa",

        category: "Church Management & Media Platform",

        description:

            "A church website featuring sermon and media content, authentication, and an administrative dashboard for managing digital content.",

        status: "In Progress",

        github: "https://github.com/JeffJG-maker/My-Church-Website",

        live: "https://lfcwinnersiguosa.onrender.com/",

        cover: "/projects/church/home.png",

        screenshots: [

            { src: "/projects/church/home.png", label: "Church Website" },

            { src: "/projects/church/dashboard.png", label: "Admin Dashboard" },

            { src: "/projects/church/sermons.png", label: "Sermon Management" },

            { src: "/projects/church/login.png", label: "Authentication" },

            { src: "/projects/church/contact.png", label: "Contact Page" },

        ],

    },

    {

        id: 2,

        number: "02",

        title: "JG Furnitures E-Commerce",

        category: "E-Commerce Web Application",

        description:

            "A furniture shopping application featuring product discovery, catalogue browsing, product details, shopping cart functionality, and customer contact information.",

        status: "In Progress",

        github: "https://github.com/JeffJG-maker/furniture-store-jg",

        live: "https://furniture-store-jg.netlify.app/",

        cover: "/projects/furniture/home.png",

        screenshots: [

            { src: "/projects/furniture/home.png", label: "Home Page" },

            {

                src: "/projects/furniture/catalog-preview.png",

                label: "Popular Products",

            },

            { src: "/projects/furniture/catalog.png", label: "Product Catalog" },

            {

                src: "/projects/furniture/product-details.png",

                label: "Product Details",

            },

            { src: "/projects/furniture/about.png", label: "About Page" },

            { src: "/projects/furniture/contact.png", label: "Contact Page" },

            { src: "/projects/furniture/cart.png", label: "Shopping Cart" },

        ],

    },

];



function Projects() {

    const [activeIndex, setActiveIndex] = useState(0);

    const [selectedProject, setSelectedProject] = useState(null);

    const [currentImage, setCurrentImage] = useState(0);



    const activeProject = projects[activeIndex];

    const nextIndex = (activeIndex + 1) % projects.length;

    const previousIndex =

        (activeIndex - 1 + projects.length) % projects.length;

    const nextProject = projects[nextIndex];



    const openProject = (project) => {

        setSelectedProject(project);

        setCurrentImage(0);

    };



    const closeProject = () => {

        setSelectedProject(null);

        setCurrentImage(0);

    };



    const showNextImage = () => {

        if (!selectedProject) return;



        setCurrentImage(

            (index) => (index + 1) % selectedProject.screenshots.length

        );

    };



    const showPreviousImage = () => {

        if (!selectedProject) return;



        setCurrentImage(

            (index) =>

                (index - 1 + selectedProject.screenshots.length) %

                selectedProject.screenshots.length

        );

    };



    return (

        <section

            id="projects"

            className="relative h-[100svh] min-h-0 overflow-hidden bg-slate-50 px-3 py-3 text-slate-900 transition-colors duration-300 dark:bg-[#111315] dark:text-white sm:h-auto sm:min-h-0 sm:overflow-hidden sm:px-6 sm:py-20 lg:px-10 lg:py-24"

        >

            <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center sm:h-auto sm:justify-start">

                {/*  Section heading  */}

                <motion.div

                    initial={{ opacity: 0, y: 18 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true, amount: 0.2 }}

                    transition={{ duration: 0.5 }}

                    className="mb-3 flex shrink-0 flex-col justify-between gap-2 sm:mb-9 sm:gap-5 sm:flex-row sm:items-end"

                >

                    <div>

                        <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 sm:mb-3 sm:text-xs sm:tracking-[0.25em]">

                            Selected work

                        </p>



                        <h2 className="text-xl font-bold tracking-tight sm:text-4xl lg:text-5xl">

                            Projects I&apos;ve built.

                        </h2>



                        <p className="mt-1 max-w-xl text-[11px] leading-4 text-slate-600 dark:text-gray-400 sm:mt-3 sm:text-base sm:leading-6">

                            A closer look at the websites and applications I&apos;ve

                            developed.

                        </p>

                    </div>



                    <div className="flex items-center gap-2 sm:gap-3">

                        <span className="mr-1 text-xs font-medium text-slate-500 dark:text-gray-400 sm:text-sm">

                            {String(activeIndex + 1).padStart(2, "0")} /{" "}

                            {String(projects.length).padStart(2, "0")}

                        </span>



                        <button

                            type="button"

                            onClick={() => setActiveIndex(previousIndex)}

                            aria-label="Previous project"

                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 shadow-[0_5px_18px_rgba(104,91,255,0.12)] transition-colors hover:text-indigo-600 dark:bg-[#1c1f22] dark:text-gray-200 dark:shadow-[0_5px_18px_rgba(104,91,255,0.08)] dark:hover:text-indigo-400 sm:h-10 sm:w-10"

                        >

                            <ArrowLeft size={18} />

                        </button>



                        <button

                            type="button"

                            onClick={() => setActiveIndex(nextIndex)}

                            aria-label="Next project"

                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 shadow-[0_5px_18px_rgba(104,91,255,0.12)] transition-colors hover:text-indigo-600 dark:bg-[#1c1f22] dark:text-gray-200 dark:shadow-[0_5px_18px_rgba(104,91,255,0.08)] dark:hover:text-indigo-400 sm:h-10 sm:w-10"

                        >

                            <ArrowRight size={18} />

                        </button>

                    </div>

                </motion.div>



                {/*  Project carousel  */}

                <AnimatePresence mode="wait">

                    <motion.div

                        key={activeProject.id}

                        initial={{ opacity: 0, x: 18 }}

                        animate={{ opacity: 1, x: 0 }}

                        exit={{ opacity: 0, x: -18 }}

                        transition={{ duration: 0.28 }}

                        className="flex min-h-0 min-w-0 shrink-0 items-stretch gap-3 sm:gap-5"

                    >

                        {/*  Main project card  */}

                        <article className="min-w-0 flex-1 overflow-hidden rounded-3xl bg-white shadow-[0_12px_35px_rgba(104,91,255,0.18)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(104,91,255,0.25)] dark:bg-[#181b1e] dark:shadow-[0_12px_35px_rgba(104,91,255,0.10)] dark:hover:shadow-[0_16px_40px_rgba(104,91,255,0.16)]">

                            <div className="grid h-full grid-cols-1 lg:grid-cols-[1.12fr_0.88fr]">

                                {/*  Project preview  */}

                                <div className="relative min-w-0">

                                    <button

                                        type="button"

                                        onClick={() => openProject(activeProject)}

                                        aria-label={`View ${activeProject.title} screenshots`}

                                        className="group relative block h-[clamp(250px,40svh,350px)] w-full min-h-0 overflow-hidden bg-slate-200 text-left dark:bg-[#202428] sm:h-auto sm:min-h-[300px] lg:min-h-[430px]"

                                    >

                                        <img

                                            src={activeProject.cover}

                                            alt={`${activeProject.title} preview`}

                                            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"

                                        />



                                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />



                                        <div className="absolute left-2.5 top-2.5 rounded-full bg-black/45 px-2.5 py-1 text-[9px] font-semibold text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-3 sm:py-1.5 sm:text-xs">

                                            Project {activeProject.number}

                                        </div>



                                        <div className="absolute bottom-2.5 left-3 right-3 hidden items-end justify-between gap-2 sm:bottom-6 sm:left-6 sm:right-6 sm:flex">

                                            <div>

                                                <p className="mb-0.5 text-[9px] text-white/75 sm:mb-1 sm:text-xs">

                                                    Preview project

                                                </p>



                                                <p className="text-sm font-semibold text-white sm:text-xl">

                                                    {activeProject.title}

                                                </p>

                                            </div>



                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 transition-colors group-hover:bg-indigo-600 group-hover:text-white sm:h-10 sm:w-10">

                                                <Images size={18} />

                                            </span>

                                        </div>

                                    </button>

                                    {/* Floating actions for mobile; desktop keeps its original information panel. */}
                                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 sm:hidden">
                                        <a
                                            href={activeProject.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(event) => event.stopPropagation()}
                                            aria-label={`Open live demo for ${activeProject.title}`}
                                            className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-2 text-[11px] font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-indigo-700"
                                        >
                                            Live Demo <ArrowUpRight size={14} />
                                        </a>
                                        <a
                                            href={activeProject.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(event) => event.stopPropagation()}
                                            aria-label={`Open GitHub repository for ${activeProject.title}`}
                                            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-lg transition-colors hover:bg-white dark:bg-[#1c1f22] dark:text-white"
                                        >
                                            <FaGithub size={17} />
                                        </a>
                                        <button
                                            type="button"
                                            onClick={() => openProject(activeProject)}
                                            aria-label={`View screenshots and details for ${activeProject.title}`}
                                            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-lg transition-colors hover:bg-white dark:bg-[#1c1f22] dark:text-white"
                                        >
                                            <Images size={17} />
                                        </button>
                                    </div>
                                </div>



                                {/*  Project information  */}

                                <div className="hidden min-w-0 flex-col justify-center p-2.5 sm:flex sm:p-7 lg:p-8">

                                    <div className="mb-1.5 flex flex-wrap items-center gap-1 sm:mb-5 sm:gap-2">

                                        <span className="rounded-full bg-indigo-50 px-2 py-1 text-[9px] font-semibold leading-tight text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 sm:px-3 sm:py-1.5 sm:text-[11px]">

                                            {activeProject.category}

                                        </span>



                                        <span className="rounded-full bg-amber-50 px-2 py-1 text-[9px] font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-300 sm:px-3 sm:py-1.5 sm:text-[11px]">

                                            {activeProject.status}

                                        </span>

                                    </div>



                                    <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400 sm:mb-2 sm:text-xs sm:tracking-[0.2em]">

                                        Featured project

                                    </p>



                                    <h3 className="text-sm font-bold leading-tight tracking-tight sm:text-3xl">

                                        {activeProject.title}

                                    </h3>



                                    <p className="mt-1.5 line-clamp-2 text-[10px] leading-[1.35] text-slate-600 dark:text-gray-400 sm:mt-4 sm:line-clamp-none sm:text-sm sm:leading-7">

                                        {activeProject.description}

                                    </p>



                                    {/*  Project links  */}

                                    <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:mt-7 sm:gap-3">

                                        <a

                                            href={activeProject.live}

                                            target="_blank"

                                            rel="noreferrer"

                                            className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-2 py-1.5 text-[9px] font-semibold text-white shadow-[0_6px_18px_rgba(104,91,255,0.22)] transition-colors hover:bg-indigo-700 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"

                                        >

                                            Live Demo <ArrowUpRight size={17} />

                                        </a>



                                        <a

                                            href={activeProject.github}

                                            target="_blank"

                                            rel="noreferrer"

                                            className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1.5 text-[9px] font-semibold text-slate-800 transition-colors hover:bg-slate-200 dark:bg-[#25292d] dark:text-white dark:hover:bg-[#30353a] sm:gap-2 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"

                                        >

                                            <FaGithub size={17} /> GitHub

                                        </a>

                                    </div>



                                    <button

                                        type="button"

                                        onClick={() => openProject(activeProject)}

                                        className="mt-1.5 inline-flex w-fit items-center gap-1 text-[9px] font-semibold text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 sm:mt-5 sm:gap-2 sm:text-sm"

                                    >

                                        Explore project <ArrowUpRight size={16} />

                                    </button>

                                </div>

                            </div>

                        </article>



                        {/*  Next project preview: fixed width, no container scaling  */}

                        <button

                            type="button"

                            onClick={() => setActiveIndex(nextIndex)}

                            aria-label={`View next project: ${nextProject.title}`}

                            className="group relative hidden w-[145px] shrink-0 overflow-hidden rounded-2xl bg-slate-200 text-left shadow-[0_12px_35px_rgba(104,91,255,0.18)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(104,91,255,0.25)] dark:bg-[#202428] dark:shadow-[0_12px_35px_rgba(104,91,255,0.10)] dark:hover:shadow-[0_16px_40px_rgba(104,91,255,0.16)] sm:block lg:w-[190px]"

                        >

                            <img

                                src={nextProject.cover}

                                alt=""

                                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"

                            />



                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />



                            <div className="absolute left-3 top-4 sm:left-4 sm:top-5">

                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/75">

                                    Next

                                </span>



                                <span className="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors group-hover:bg-indigo-600">

                                    <ArrowRight size={16} />

                                </span>

                            </div>



                            <div className="absolute bottom-4 left-3 right-2 sm:bottom-5 sm:left-4 sm:right-3">

                                <span className="mb-2 block text-[10px] font-medium text-white/70">

                                    {nextProject.number}

                                </span>



                                <span className="block text-xs font-bold leading-5 text-white sm:text-base">

                                    {nextProject.title}

                                </span>

                            </div>

                        </button>

                    </motion.div>

                </AnimatePresence>



                {/*  Project indicators  */}

                <div className="mt-2 flex shrink-0 items-center justify-center gap-2 sm:mt-6">

                    {projects.map((project, index) => (

                        <button

                            key={project.id}

                            type="button"

                            onClick={() => setActiveIndex(index)}

                            aria-label={`Show project ${index + 1}`}

                            className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex

                                ? "w-9 bg-indigo-600 dark:bg-indigo-400"

                                : "w-3 bg-slate-300 hover:bg-slate-400 dark:bg-[#34383d] dark:hover:bg-gray-500"

                                }`}

                        />

                    ))}

                </div>

            </div>



            {/*  Project details modal  */}

            <AnimatePresence>

                {selectedProject && (

                    <motion.div

                        key="project-modal"

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        exit={{ opacity: 0 }}

                        transition={{ duration: 0.2 }}

                        onClick={closeProject}

                        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/75 p-3 backdrop-blur-md sm:p-5"

                    >

                        <motion.div

                            initial={{ opacity: 0, scale: 0.97, y: 8 }}

                            animate={{ opacity: 1, scale: 1, y: 0 }}

                            exit={{ opacity: 0, scale: 0.98, y: 6 }}

                            transition={{ duration: 0.22 }}

                            onClick={(event) => event.stopPropagation()}

                            role="dialog"

                            aria-modal="true"

                            aria-label={`${selectedProject.title} project details`}

                            className="relative flex max-h-[88dvh] w-full max-w-[900px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(104,91,255,0.18)] dark:bg-[#181b1e] dark:shadow-[0_20px_60px_rgba(104,91,255,0.10)] sm:rounded-3xl"

                        >

                            {/*  Modal header  */}

                            <div className="flex shrink-0 items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">

                                <div className="flex min-w-0 items-center gap-3">

                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">

                                        <Monitor size={18} />

                                    </div>



                                    <div className="min-w-0">

                                        <p className="truncate text-sm font-bold text-slate-900 dark:text-white sm:text-base">

                                            {selectedProject.title}

                                        </p>



                                        <p className="truncate text-[11px] text-slate-500 dark:text-gray-400 sm:text-xs">

                                            Project overview and screenshots

                                        </p>

                                    </div>

                                </div>



                                <button

                                    type="button"

                                    onClick={closeProject}

                                    aria-label="Close project details"

                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:bg-[#292d31] dark:text-gray-300 dark:hover:bg-[#353a40] dark:hover:text-white"

                                >

                                    <X size={18} />

                                </button>

                            </div>



                            <div className="h-px shrink-0 bg-slate-100 dark:bg-white/[0.06]" />



                            {/*  Main modal content  */}

                            <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden md:grid-cols-[1.12fr_0.88fr]">

                                {/*  Screenshot gallery  */}

                                <div className="flex min-h-0 flex-col gap-2.5 bg-slate-50 p-3 dark:bg-[#141618] sm:gap-3 sm:p-4">

                                    <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-xl bg-slate-200 dark:bg-[#202428]">

                                        <img

                                            src={selectedProject.screenshots[currentImage].src}

                                            alt={selectedProject.screenshots[currentImage].label}

                                            className="h-full w-full object-contain"

                                        />



                                        {selectedProject.screenshots.length > 1 && (

                                            <>

                                                <button

                                                    type="button"

                                                    onClick={showPreviousImage}

                                                    aria-label="Previous screenshot"

                                                    className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-indigo-600 sm:h-9 sm:w-9"

                                                >

                                                    <ChevronLeft size={19} />

                                                </button>



                                                <button

                                                    type="button"

                                                    onClick={showNextImage}

                                                    aria-label="Next screenshot"

                                                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-indigo-600 sm:h-9 sm:w-9"

                                                >

                                                    <ChevronRight size={19} />

                                                </button>

                                            </>

                                        )}



                                        <span className="absolute bottom-2 right-2 rounded-lg bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">

                                            {currentImage + 1} / {selectedProject.screenshots.length}

                                        </span>

                                    </div>



                                    {/*  Screenshot thumbnails  */}

                                    <div className="flex shrink-0 items-center gap-2 overflow-hidden">

                                        {selectedProject.screenshots.map((screenshot, index) => (

                                            <button

                                                key={screenshot.src}

                                                type="button"

                                                onClick={() => setCurrentImage(index)}

                                                aria-label={`View ${screenshot.label}`}

                                                title={screenshot.label}

                                                className={`relative h-10 min-w-0 flex-1 overflow-hidden rounded-lg bg-slate-200 transition-opacity sm:h-12 ${currentImage === index

                                                    ? "ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-[#141618]"

                                                    : "opacity-60 hover:opacity-100"

                                                    }`}

                                            >

                                                <img

                                                    src={screenshot.src}

                                                    alt=""

                                                    className="h-full w-full object-cover object-top"

                                                />

                                            </button>

                                        ))}

                                    </div>



                                    <p className="shrink-0 truncate text-center text-[11px] font-medium text-slate-500 dark:text-gray-400">

                                        {selectedProject.screenshots[currentImage].label}

                                    </p>

                                </div>



                                {/*  Project details  */}

                                <div className="flex min-h-0 flex-col justify-center overflow-hidden p-4 sm:p-5 lg:p-6">

                                    <div className="mb-3 flex flex-wrap items-center gap-2">

                                        <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">

                                            {selectedProject.category}

                                        </span>



                                        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">

                                            {selectedProject.status}

                                        </span>

                                    </div>



                                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">

                                        About the project

                                    </p>



                                    <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-2xl">

                                        {selectedProject.title}

                                    </h3>



                                    <p className="mt-3 text-xs leading-5 text-slate-600 dark:text-gray-400 sm:text-sm sm:leading-6">

                                        {selectedProject.description}

                                    </p>



                                    {/*  Project links  */}

                                    <div className="mt-5 grid grid-cols-2 gap-2">

                                        <a

                                            href={selectedProject.live}

                                            target="_blank"

                                            rel="noreferrer"

                                            className="inline-flex min-w-0 items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-3 text-xs font-semibold text-white shadow-[0_5px_16px_rgba(104,91,255,0.20)] transition-colors hover:bg-indigo-700 sm:text-sm"

                                        >

                                            Live Demo <ExternalLink size={14} />

                                        </a>



                                        <a

                                            href={selectedProject.github}

                                            target="_blank"

                                            rel="noreferrer"

                                            className="inline-flex min-w-0 items-center justify-center gap-1.5 rounded-xl bg-slate-100 px-3 py-3 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-200 dark:bg-[#292d31] dark:text-white dark:hover:bg-[#353a40] sm:text-sm"

                                        >

                                            <FaGithub size={15} /> GitHub

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </section>

    );

}



export default Projects;