import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Code2,
    Mail,
    MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-[55vh] overflow-hidden bg-[#111315] text-white lg:h-[90vh]"
        >
            {/* Background glows */}
            <div className="pointer-events-none absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-indigo-600/10 blur-3xl sm:h-64 sm:w-64 lg:h-72 lg:w-72" />

            <div className="pointer-events-none absolute bottom-[-10%] right-[5%] h-56 w-56 rounded-full bg-violet-600/10 blur-3xl sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

            {/* Grid background */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "70px 70px",
                    }}
                />
            </div>

            {/* ============================================= */}
            {/* SMALL MOBILE LAYOUT — below 640px              */}
            {/* ============================================= */}
            <div className="relative flex h-full flex-col justify-center px-4 pt-8 sm:hidden">
                <div className="grid grid-cols-[1.08fr_0.92fr] items-center gap-1">
                    {/* Mobile text */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                        className="relative z-10 min-w-0"
                    >
                        <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.13em] text-indigo-400">
                            Full-Stack Developer
                        </p>

                        <h1 className="break-words text-[clamp(1.35rem,6vw,2rem)] font-bold leading-[1.08] tracking-tight">
                            Nosa-Orhue{" "}
                            <span className="text-slate-400">Osasofure</span>{" "}
                            Jeffrey<span className="text-indigo-500">.</span>
                        </h1>

                        <p className="mt-2 max-w-[190px] text-[10px] leading-4 text-slate-400">
                            I build modern web experiences.
                        </p>

                        {/* Mobile social icons */}
                        <div className="mt-4 flex items-center gap-2">
                            <a
                                href="https://github.com/JeffJG-maker"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-indigo-500/30 bg-white/[0.03] text-slate-300 transition hover:bg-indigo-500/15 hover:text-indigo-400"
                            >
                                <FaGithub size={15} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/nosa-orhue-osasofure-jeffrey-43332530a/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-indigo-500/30 bg-white/[0.03] text-slate-300 transition hover:bg-indigo-500/15 hover:text-indigo-400"
                            >
                                <FaLinkedin size={15} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Mobile portrait */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                        className="relative flex min-w-0 items-center justify-center"
                    >
                        <div className="absolute h-[85%] w-[85%] rounded-full bg-indigo-500/20 blur-2xl" />

                        <img
                            src="/jg_profile_pic_nobackground.png"
                            alt="Nosa-Orhue Osasofure Jeffrey"
                            className="relative z-10 h-auto max-h-[27vh] w-full object-contain object-center"
                        />
                    </motion.div>
                </div>

                {/* Mobile action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.2 }}
                    className="mt-5 grid grid-cols-2 gap-2"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-1 rounded-full bg-indigo-600 px-2 py-2.5 text-[10px] font-semibold text-white transition hover:bg-indigo-500"
                    >
                        View My Work
                        <ArrowUpRight size={14} />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-1 rounded-full border border-white/15 bg-white/[0.03] px-2 py-2.5 text-[10px] font-semibold text-white transition hover:border-indigo-500/50"
                    >
                        Let's Talk
                        <Mail size={13} />
                    </a>
                </motion.div>
            </div>

            {/* ============================================= */}
            {/* TABLET AND DESKTOP — original-style layout     */}
            {/* ============================================= */}
            <div className="relative hidden h-full items-center sm:flex">
                <div className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-4 lg:px-10 lg:py-8">
                    <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-4 md:gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
                        {/* Portrait column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                            className="relative mx-auto flex w-full min-w-0 items-center justify-center"
                        >
                            <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

                            <div className="relative flex w-full items-end justify-center">
                                <img
                                    src="/jg_profile_pic_nobackground.png"
                                    alt="Nosa-Orhue Osasofure Jeffrey"
                                    className="relative z-10 h-auto max-h-[34vh] w-full max-w-[250px] object-contain object-center md:max-h-[40vh] md:max-w-[290px] lg:max-h-[65vh] lg:max-w-[480px]"
                                />

                                {/* Floating card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 0.5,
                                        ease: "easeOut",
                                    }}
                                    className="absolute -left-2 top-2 z-20 hidden w-40 rounded-xl border border-white/10 bg-[#191b1e]/90 p-3 shadow-xl backdrop-blur-md md:block lg:left-0 lg:top-12 lg:w-44 lg:p-3.5"
                                >
                                    <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 lg:h-8 lg:w-8">
                                        <Code2 size={17} />
                                    </div>

                                    <p className="text-[10px] text-slate-500 lg:text-[11px]">
                                        Currently building
                                    </p>

                                    <p className="mt-1 text-xs font-semibold leading-4 text-white lg:text-sm lg:leading-5">
                                        Modern Web Experiences
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Text column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                            className="mx-auto w-full max-w-xl min-w-0 text-center lg:mx-0 lg:text-left"
                        >
                            <div className="mb-3 flex items-center justify-center gap-2 lg:mb-4 lg:justify-start lg:gap-3">
                                <span className="h-px w-6 bg-indigo-500 lg:w-8" />

                                <span className="text-[10px] font-semibold tracking-[0.2em] text-indigo-400 lg:text-[11px] lg:tracking-[0.25em]">
                                    FULL-STACK DEVELOPER
                                </span>
                            </div>

                            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-[2.5rem] lg:text-[3.4rem]">
                                Nosa-Orhue{" "}
                                <span className="text-slate-400">Osasofure</span>{" "}
                                Jeffrey<span className="text-indigo-500">.</span>
                            </h1>

                            <p className="mx-auto mt-3 max-w-lg text-sm leading-5 text-slate-400 md:mt-3 md:leading-5 lg:mx-0 lg:mt-6 lg:text-base lg:leading-7">
                                I build modern digital experiences across the frontend and
                                backend, turning ideas into responsive, functional, and
                                scalable web applications.
                            </p>

                            {/* Action buttons */}
                            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:mt-7 lg:justify-start lg:gap-3">
                                <a
                                    href="#projects"
                                    className="group inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 lg:gap-2 lg:px-5 lg:py-3"
                                >
                                    View My Work
                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:h-[17px] lg:w-[17px]"
                                    />
                                </a>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-indigo-500/50 hover:text-indigo-400 lg:gap-2 lg:px-5 lg:py-3"
                                >
                                    Let's Talk
                                    <Mail size={15} className="lg:h-[17px] lg:w-[17px]" />
                                </a>
                            </div>

                            {/* Availability */}
                            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 lg:mt-7 lg:justify-start">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 lg:h-2 lg:w-2" />
                                Available for opportunities
                            </div>

                            {/* Location and social links */}
                            <div className="mt-4 flex flex-wrap items-center justify-center gap-5 border-t border-white/[0.08] pt-4 lg:mt-7 lg:justify-start lg:gap-6 lg:pt-5">
                                <div className="flex items-center gap-1.5 text-sm text-slate-400">
                                    <MapPin
                                        size={14}
                                        className="text-indigo-400 lg:h-4 lg:w-4"
                                    />
                                    <span>Nigeria</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <a
                                        href="https://github.com/JeffJG-maker"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="GitHub"
                                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400 lg:h-9 lg:w-9"
                                    >
                                        <FaGithub size={15} />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/nosa-orhue-osasofure-jeffrey-43332530a/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="LinkedIn"
                                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400 lg:h-9 lg:w-9"
                                    >
                                        <FaLinkedin size={15} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;