
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
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
        setStatus({
            type: "",
            message: "",
        });

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
                message: "Message sent successfully! I'll get back to you soon.",
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

    // Matches the shadow color and intensity used in Skills.jsx.
    const cardShadow = darkMode
        ? "shadow-[0_8px_24px_rgba(104,91,255,0.08)] hover:shadow-[0_12px_30px_rgba(104,91,255,0.16)]"
        : "shadow-[0_8px_24px_rgba(104,91,255,0.14)] hover:shadow-[0_12px_30px_rgba(104,91,255,0.25)]";

    const inputStyles =
        "mt-2 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-white/[0.07] dark:bg-[#1C1F22] dark:text-white";

    const labelStyles =
        "text-sm font-semibold text-slate-900 dark:text-white";

    return (
        <section
            id="contact"
            className={`px-6 py-24 transition-colors duration-300 ${darkMode
                    ? "bg-[#111315] text-white"
                    : "bg-slate-50 text-slate-900"
                }`}
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
                        Contact
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Let's Work Together
                    </h2>

                    <p
                        className={`mt-5 text-lg leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"
                            }`}
                    >
                        Have a project, idea, or opportunity in mind? I'd love to hear
                        about it and explore how we can bring it to life.
                    </p>
                </motion.div>

                <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className={`min-w-0 rounded-3xl border border-transparent p-8 transition-[box-shadow,background-color] duration-300 ${darkMode
                                ? "bg-[#181B1E] border-white/[0.04]"
                                : "bg-white"
                            } ${cardShadow}`}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Available for opportunities
                        </div>

                        <h3 className="mt-7 text-2xl font-bold">
                            Get in touch
                        </h3>

                        <p
                            className={`mt-3 leading-7 ${darkMode ? "text-slate-400" : "text-slate-600"
                                }`}
                        >
                            Whether you have a project in mind or simply want to connect,
                            feel free to reach out.
                        </p>

                        {/* Contact Details */}
                        <div className="mt-8 space-y-5">
                            {/* Email */}
                            <a
                                href="mailto:josasofure@gmail.com"
                                className="group flex items-center gap-4"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shadow-[0_4px_18px_rgba(104,91,255,0.10)] transition duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-[0_6px_22px_rgba(104,91,255,0.22)] dark:bg-indigo-500/10 dark:text-indigo-400 dark:group-hover:bg-indigo-500 dark:group-hover:text-white">
                                    <Mail size={19} />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        Email
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-slate-800 transition-colors group-hover:text-indigo-600 dark:text-slate-200 dark:group-hover:text-indigo-400">
                                        josasofure@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shadow-[0_4px_18px_rgba(104,91,255,0.10)] dark:bg-indigo-500/10 dark:text-indigo-400">
                                    <MapPin size={19} />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        Location
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
                                        Nigeria
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-9 border-t border-slate-100 pt-7 dark:border-white/[0.06]">
                            <p className="text-sm font-semibold">
                                Find me online
                            </p>

                            <div className="mt-4 flex gap-3">
                                <a
                                    href="https://github.com/JeffJG-maker"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="flex h-11 w-11 items-center border justify-center rounded-xl bg-slate-50 text-slate-600 shadow-[0_4px_18px_rgba(104,91,255,0.10)] transition duration-300 hover:-translate-y-1 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-[0_8px_24px_rgba(104,91,255,0.25)] dark:bg-[#1C1F22] dark:text-slate-400 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
                                >
                                    <FaGithub size={18} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/nosa-orhue-osasofure-jeffrey-43332530a/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                    className="flex h-11 w-11 items-center border justify-center rounded-xl bg-slate-50 text-slate-600 shadow-[0_4px_18px_rgba(104,91,255,0.10)] transition duration-300 hover:-translate-y-1 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-[0_8px_24px_rgba(104,91,255,0.25)] dark:bg-[#1C1F22] dark:text-slate-400 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
                                >
                                    <FaLinkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className={`min-w-0 max-w-full rounded-3xl border border-transparent p-8 transition-[box-shadow,background-color] duration-300 ${darkMode
                                ? "bg-[#181B1E] border-white/[0.04]"
                                : "bg-white"
                            } ${cardShadow}`}
                    >
                        <div className="grid min-w-0 gap-6 sm:grid-cols-2">
                            {/* Name */}
                            <div className="min-w-0">
                                <label htmlFor="name" className={labelStyles}>
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    className={inputStyles}
                                />
                            </div>

                            {/* Email */}
                            <div className="min-w-0">
                                <label htmlFor="email" className={labelStyles}>
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className={inputStyles}
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="mt-6 min-w-0">
                            <label htmlFor="subject" className={labelStyles}>
                                Subject
                            </label>

                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="What would you like to discuss?"
                                required
                                className={inputStyles}
                            />
                        </div>

                        {/* Message */}
                        <div className="mt-6 min-w-0">
                            <label htmlFor="message" className={labelStyles}>
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me a little about your project..."
                                required
                                className={`${inputStyles} resize-none`}
                            />
                        </div>

                        {/* Status Message */}
                        {status.message && (
                            <div
                                role="status"
                                aria-live="polite"
                                className={`mt-5 rounded-xl px-4 py-3 text-sm font-medium ${status.type === "success"
                                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                                        : "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                                    }`}
                            >
                                {status.message}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSending}
                            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(104,91,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-[0_8px_28px_rgba(104,91,255,0.25)] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-500 dark:hover:text-white"
                        >
                            {isSending ? "Sending..." : "Send Message"}
                            <Send size={17} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
