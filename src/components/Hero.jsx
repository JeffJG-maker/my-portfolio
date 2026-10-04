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
            {/* Background glow */}
            <div className="pointer-events-none absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

            <div className="pointer-events-none absolute bottom-[-10%] right-[5%] h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

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

            <div className="relative mx-auto w-full max-w-7xl px-6 py-3 lg:px-10 lg:py-8">
                <div className="grid -translate-y-3 items-center gap-3 md:gap-4 lg:translate-y-0 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-[275px] sm:max-w-[300px] md:max-w-[310px] lg:max-w-[500px]"
                    >
                        <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

                        <div className="relative flex items-end justify-center">
                            <img
                                src="/jg_profile_pic_nobackground.png"
                                alt="Nosa-Orhue Osasofure Jeffrey"
                                className="relative z-10 w-full max-w-[275px] object-contain sm:max-w-[300px] md:max-w-[310px] lg:max-w-[480px]"
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
                                className="absolute -left-6 top-2 z-20 hidden w-40 rounded-xl border border-white/10 bg-[#191b1e]/90 p-3 shadow-xl backdrop-blur-md sm:block md:-left-8 md:top-3 lg:-left-2 lg:top-12 lg:w-44 lg:p-3.5"
                            >
                                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 lg:h-8 lg:w-8">
                                    <Code2 size={15} className="lg:hidden" />
                                    <Code2 size={17} className="hidden lg:block" />
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

                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="max-w-xl"
                    >
                        {/* Label */}
                        <div className="mb-2 flex items-center gap-2 md:mb-2 lg:mb-4 lg:gap-3">
                            <span className="h-px w-6 bg-indigo-500 lg:w-8" />

                            <span className="text-[9px] font-semibold tracking-[0.2em] text-indigo-400 sm:text-[10px] lg:text-[11px] lg:tracking-[0.25em]">
                                FULL-STACK DEVELOPER
                            </span>
                        </div>

                        {/* Name */}
                        <h1 className="text-3xl font-bold leading-[1.02] tracking-tight text-white sm:text-4xl md:text-[2.5rem] lg:text-[3.4rem] lg:leading-[1.08]">
                            Nosa-Orhue{" "}
                            <span className="text-slate-400">
                                Osasofure
                            </span>{" "}
                            Jeffrey
                            <span className="text-indigo-500">.</span>
                        </h1>

                        {/* Description */}
                        <p className="mt-3 max-w-lg text-xs leading-5 text-slate-400 sm:text-sm md:mt-3 md:leading-5 lg:mt-6 lg:text-base lg:leading-7">
                            I build modern digital experiences across the frontend and
                            backend, turning ideas into responsive, functional, and
                            scalable web applications.
                        </p>

                        {/* Buttons */}
                        <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 lg:mt-7 lg:gap-3">
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 sm:text-sm lg:gap-2 lg:px-5 lg:py-3"
                            >
                                View My Work

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:h-[17px] lg:w-[17px]"
                                />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs font-semibold text-slate-200 transition-all duration-300 hover:border-indigo-500/50 hover:text-indigo-400 sm:text-sm lg:gap-2 lg:px-5 lg:py-3"
                            >
                                Let's Talk

                                <Mail
                                    size={15}
                                    className="lg:h-[17px] lg:w-[17px]"
                                />
                            </a>
                        </div>

                        {/* Availability */}
                        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 sm:mt-4 sm:text-sm lg:mt-7">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 lg:h-2 lg:w-2" />

                            Available for opportunities
                        </div>

                        {/* Location + Socials */}
                        <div className="mt-3 flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-3 sm:mt-4 sm:gap-5 lg:mt-7 lg:gap-6 lg:pt-5">
                            {/* Location */}
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 sm:text-sm">
                                <MapPin
                                    size={14}
                                    className="text-indigo-400 lg:h-4 lg:w-4"
                                />

                                <span>Nigeria</span>
                            </div>

                            {/* Social icons */}
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
        </section>
    );
};

export default Hero;