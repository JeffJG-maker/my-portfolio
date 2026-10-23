
import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Mail,
    MapPin,
    Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact({ darkMode = false }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);

    const API_URL = import.meta.env.DEV
        ? "http://localhost:5000"
        : "https://nj-portfolio-api.onrender.com";

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSending(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong.");
            }

            setStatus({
                type: "success",
                message:
                    "Message sent successfully! I'll get back to you soon.",
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setStatus({
                type: "error",
                message:
                    error.message ||
                    "Unable to send your message. Please try again.",
            });
        } finally {
            setIsSending(false);
        }
    };

    const headingText = darkMode
        ? "text-white"
        : "text-[#17191C]";

    const mutedText = darkMode
        ? "text-gray-400"
        : "text-slate-600";

    const fieldStyles = `mt-1.5 w-full min-w-0 rounded-lg border-0 px-3.5 py-3 text-sm outline-none transition-colors duration-200 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500/50 ${darkMode
            ? "bg-[#24272B] text-white focus:bg-[#292D32]"
            : "bg-[#F3F4F5] text-[#17191C] focus:bg-white"
        }`;

    const labelStyles = `text-xs font-semibold ${darkMode ? "text-gray-300" : "text-slate-700"
        }`;

    const socialStyles = `flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-600 hover:text-white ${darkMode
            ? "bg-white/[0.05] text-gray-300"
            : "bg-[#F0F1F2] text-slate-700"
        }`;

    const iconSurface = darkMode
        ? "bg-white/[0.06] text-gray-300"
        : "bg-[#F0F1F2] text-slate-700";

    return (
        <section
            id="contact"
            className={`relative isolate overflow-hidden transition-colors duration-300 ${darkMode
                    ? "bg-[#111315] text-white"
                    : "bg-[#F8F9FA] text-[#17191C]"
                }`}
        >
            <div className="mx-auto flex min-h-[min(760px,100svh)] max-w-7xl flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[min(760px,100svh)] lg:px-12 lg:py-8">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-7 text-center sm:mb-9 lg:mb-7"
                >
                    <p
                        className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${darkMode ? "text-gray-400" : "text-slate-500"
                            }`}
                    >
                        Contact
                    </p>

                    <h2
                        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${headingText}`}
                    >
                        Have an idea? Let's build it.
                    </h2>

                    <p
                        className={`mx-auto mt-3 max-w-xl text-sm leading-6 sm:text-base ${mutedText}`}
                    >
                        Have a project in mind? Tell me about it, and let's
                        turn your idea into something exceptional.
                    </p>
                </motion.div>

                {/* Main two-column layout */}
                <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 xl:gap-16">
                    {/* Left: Introduction and contact details */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="min-w-0 lg:pr-2"
                    >
                        <div className="mb-4 inline-flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            <span
                                className={`text-xs font-medium ${darkMode ? "text-gray-400" : "text-slate-600"
                                    }`}
                            >
                                Available for new opportunities
                            </span>
                        </div>

                        <h3
                            className={`max-w-md text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${headingText}`}
                        >
                            Let's make your next idea happen.
                        </h3>

                        <p
                            className={`mt-4 max-w-md text-sm leading-6 sm:text-base sm:leading-7 ${mutedText}`}
                        >
                            Whether it's a website, a web application, or a
                            creative project, I'm ready to listen, collaborate,
                            and build something meaningful with you.
                        </p>

                        {/* Email */}
                        <a
                            href="mailto:josasofure@gmail.com"
                            className="group mt-6 inline-flex max-w-full items-center gap-3 rounded-lg py-2 transition-colors hover:text-indigo-500"
                        >
                            <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconSurface}`}
                            >
                                <Mail size={18} />
                            </span>

                            <span className="min-w-0">
                                <span className="block text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400">
                                    Email address
                                </span>

                                <span
                                    className={`mt-1 block break-all text-sm font-semibold ${darkMode ? "text-gray-200" : "text-slate-800"
                                        }`}
                                >
                                    josasofure@gmail.com
                                </span>
                            </span>

                            <ArrowUpRight
                                size={16}
                                className="ml-auto shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>

                        {/* Location */}
                        <div className="mt-3 flex items-center gap-3">
                            <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconSurface}`}
                            >
                                <MapPin size={18} />
                            </span>

                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400">
                                    Location
                                </p>

                                <p
                                    className={`mt-1 text-sm font-semibold ${darkMode ? "text-gray-200" : "text-slate-800"
                                        }`}
                                >
                                    Nigeria · Available worldwide
                                </p>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="https://github.com/JeffJG-maker"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className={socialStyles}
                            >
                                <FaGithub size={18} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/nosa-orhue-osasofure-jeffrey-43332530a/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className={socialStyles}
                            >
                                <FaLinkedin size={18} />
                            </a>

                            <span
                                className={`ml-1 text-xs ${darkMode ? "text-gray-500" : "text-slate-500"
                                    }`}
                            >
                                Find me online
                            </span>
                        </div>

                        {/* Direction toward the form */}
                        <div className="mt-7 hidden items-center gap-3 lg:flex">
                            <span
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${darkMode
                                        ? "bg-white text-[#17191C]"
                                        : "bg-[#17191C] text-white"
                                    }`}
                            >
                                <ArrowRight size={17} />
                            </span>

                            <div
                                className={`h-px w-16 xl:w-24 ${darkMode ? "bg-white/20" : "bg-slate-300"
                                    }`}
                            />

                            <span
                                className={`text-xs ${darkMode ? "text-gray-500" : "text-slate-500"
                                    }`}
                            >
                                Tell me about your project
                            </span>
                        </div>
                    </motion.div>

                    {/* Right: Compact contact form */}
                    <motion.form
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.08,
                            ease: "easeOut",
                        }}
                        onSubmit={handleSubmit}
                        className={`min-w-0 rounded-2xl p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-colors duration-300 sm:p-7 lg:p-7 xl:p-8 ${darkMode
                                ? "bg-[#191C20] shadow-[0_12px_40px_rgba(0,0,0,0.16)]"
                                : "bg-white"
                            }`}
                    >
                        <div className="mb-5">
                            <p
                                className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${darkMode ? "text-gray-400" : "text-slate-500"
                                    }`}
                            >
                                Start a project
                            </p>

                            <h3
                                className={`mt-1.5 text-xl font-bold sm:text-2xl ${headingText}`}
                            >
                                Send me a message.
                            </h3>

                            <p className={`mt-1.5 text-xs leading-5 ${mutedText}`}>
                                I'll get back to you as soon as I can.
                            </p>
                        </div>

                        {/* Name and email */}
                        <div className="grid min-w-0 gap-4 sm:grid-cols-2">
                            <div className="min-w-0">
                                <label htmlFor="contact-name" className={labelStyles}>
                                    Your name
                                </label>

                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className={fieldStyles}
                                />
                            </div>

                            <div className="min-w-0">
                                <label htmlFor="contact-email" className={labelStyles}>
                                    Email address
                                </label>

                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                    className={fieldStyles}
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="mt-4 min-w-0">
                            <label htmlFor="contact-subject" className={labelStyles}>
                                Subject
                            </label>

                            <input
                                id="contact-subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="What would you like to discuss?"
                                required
                                className={fieldStyles}
                            />
                        </div>

                        {/* Message */}
                        <div className="mt-4 min-w-0">
                            <label htmlFor="contact-message" className={labelStyles}>
                                Your message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me a little about your project..."
                                required
                                className={`${fieldStyles} min-h-[90px] resize-y`}
                            />
                        </div>

                        {/* Submission feedback */}
                        {status.message && (
                            <div
                                role="status"
                                aria-live="polite"
                                className={`mt-4 flex items-start gap-2 rounded-lg px-3.5 py-3 text-xs font-medium leading-5 ${status.type === "success"
                                        ? darkMode
                                            ? "bg-emerald-500/10 text-emerald-400"
                                            : "bg-emerald-50 text-emerald-700"
                                        : darkMode
                                            ? "bg-red-500/10 text-red-400"
                                            : "bg-red-50 text-red-700"
                                    }`}
                            >
                                {status.type === "success" && (
                                    <CheckCircle2
                                        size={15}
                                        className="mt-0.5 shrink-0"
                                    />
                                )}

                                <span>{status.message}</span>
                            </div>
                        )}

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={isSending}
                            className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSending ? "Sending message..." : "Send Message"}

                            <Send
                                size={15}
                                className="transition-transform duration-200 group-hover:translate-x-0.5"
                            />
                        </button>

                        <p
                            className={`mt-3 text-center text-[10px] leading-5 ${darkMode ? "text-gray-500" : "text-slate-400"
                                }`}
                        >
                            Your details are only used to respond to your enquiry.
                        </p>
                    </motion.form>
                </div>

                {/* Minimal footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className={`mt-7 flex flex-col items-center justify-between gap-2 text-xs sm:flex-row ${darkMode ? "text-gray-500" : "text-slate-500"
                        }`}
                >
                    <p>Have a great idea? Let's make it happen.</p>

                    <a
                        href="mailto:josasofure@gmail.com"
                        className="inline-flex items-center gap-1 font-medium transition-colors hover:text-indigo-500"
                    >
                        Get in touch <ArrowUpRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;
