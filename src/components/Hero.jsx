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
            className="relative flex h-[90vh] items-center overflow-hidden bg-[#111315] pt-20 text-white"
        >
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

            <div className="pointer-events-none absolute bottom-[-10%] right-[5%] h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

            {/* Very subtle grid */}
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

            <div className="relative mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
                <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

                    {/* LEFT — PROFILE IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-[500px]"
                    >
                        {/* Soft glow behind image */}
                        <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

                        <div className="relative flex items-end justify-center">
                            <img
                                src="/jg_profile_pic_nobackground.png"
                                alt="Nosa-Orhue Osasofure Jeffrey"
                                className="relative z-10 w-full max-w-[480px] object-contain"
                            />

                            {/* Small floating detail */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                                className="absolute left-0 top-12 z-20 hidden w-44 rounded-xl border border-white/10 bg-[#191b1e]/85 p-3.5 shadow-xl backdrop-blur-md sm:block"
                            >
                                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                                    <Code2 size={17} />
                                </div>

                                <p className="text-[11px] text-slate-500">
                                    Currently building
                                </p>

                                <p className="mt-1 text-sm font-semibold text-white">
                                    Modern Web Experiences
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT — CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="max-w-xl"
                    >
                        {/* Small label */}
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-8 bg-indigo-500" />

                            <span className="text-[11px] font-semibold tracking-[0.25em] text-indigo-400">
                                FULL-STACK DEVELOPER
                            </span>
                        </div>

                        {/* Name */}
                        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                            Nosa-Orhue{" "}
                            <span className="text-slate-400">
                                Osasofure
                            </span>{" "}
                            Jeffrey
                            <span className="text-indigo-500">.</span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-lg text-[15px] leading-7 text-slate-400 sm:text-base">
                            I build modern digital experiences across the
                            frontend and backend, turning ideas into
                            responsive, functional, and scalable web
                            applications.
                        </p>

                        {/* Buttons */}
                        <div className="mt-7 flex flex-wrap gap-3">
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
                            >
                                View My Work

                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-indigo-500/50 hover:text-indigo-400"
                            >
                                Let's Talk
                                <Mail size={17} />
                            </a>
                        </div>

                        {/* Availability */}
                        <div className="mt-7 flex items-center gap-2 text-sm text-slate-500">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Available for opportunities
                        </div>

                        {/* Bottom details */}
                        <div className="mt-7 flex flex-wrap items-center gap-6 border-t border-white/[0.08] pt-5">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <MapPin
                                    size={16}
                                    className="text-indigo-400"
                                />
                                Nigeria
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href="https://github.com/JeffJG-maker"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition-all duration-300 hover:border-indigo-500/50 hover:text-indigo-400"
                                >
                                    <FaGithub size={17} />
                                </a>

                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition-all duration-300 hover:border-indigo-500/50 hover:text-indigo-400"
                                >
                                    <FaLinkedin size={17} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;