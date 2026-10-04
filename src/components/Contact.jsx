import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
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
            const response = await fetch("/.netlify/functions/contact", {
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

    return (
        <section
            id="contact"
            className="bg-slate-50 px-6 py-24 dark:bg-[#111315]"
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

                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                        Let's Work Together
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
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
                        className="min-w-0 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/[0.07] dark:bg-[#181B1E]"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Available for opportunities
                        </div>

                        <h3 className="mt-7 text-2xl font-bold text-slate-900 dark:text-white">
                            Get in touch
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                            Whether you have a project in mind or simply want to connect,
                            feel free to reach out.
                        </p>

                        <div className="mt-8 space-y-5">
                            {/* Email */}
                            <a
                                href="mailto:josasofure@gmail.com"
                                className="group flex items-center gap-4"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/10 dark:text-indigo-400 dark:group-hover:bg-indigo-500 dark:group-hover:text-white">
                                    <Mail size={19} />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        Email
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
                                        josasofure@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
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
                        <div className="mt-9 border-t border-slate-200 pt-7 dark:border-white/[0.07]">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                Find me online
                            </p>

                            <div className="mt-4 flex gap-3">
                                <a
                                    href="https://github.com/JeffJG-maker"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 dark:border-white/[0.07] dark:text-slate-400 dark:hover:border-indigo-500/30 dark:hover:bg-[#1C1F22] dark:hover:text-indigo-400"
                                >
                                    <FaGithub size={18} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/nosa-orhue-osasofure-jeffrey-43332530a/"
                                    aria-label="LinkedIn"
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 dark:border-white/[0.07] dark:text-slate-400 dark:hover:border-indigo-500/30 dark:hover:bg-[#1C1F22] dark:hover:text-indigo-400"
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
                        className="min-w-0 max-w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/[0.07] dark:bg-[#181B1E]"
                    >
                        <div className="grid min-w-0 gap-6 sm:grid-cols-2">
                            {/* Name */}
                            <div className="min-w-0">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold text-slate-900 dark:text-white"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    className="mt-2 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-white/[0.07] dark:bg-[#1C1F22] dark:text-white"
                                />
                            </div>

                            {/* Email */}
                            <div className="min-w-0">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-slate-900 dark:text-white"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className="mt-2 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-white/[0.07] dark:bg-[#1C1F22] dark:text-white"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="mt-6 min-w-0">
                            <label
                                htmlFor="subject"
                                className="text-sm font-semibold text-slate-900 dark:text-white"
                            >
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
                                className="mt-2 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-white/[0.07] dark:bg-[#1C1F22] dark:text-white"
                            />
                        </div>

                        {/* Message */}
                        <div className="mt-6 min-w-0">
                            <label
                                htmlFor="message"
                                className="text-sm font-semibold text-slate-900 dark:text-white"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me a little about your project..."
                                required
                                className="mt-2 w-full min-w-0 resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-white/[0.07] dark:bg-[#1C1F22] dark:text-white"
                            />
                        </div>

                        {/* Status Message */}
                        {status.message && (
                            <div
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
                            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-500 dark:hover:text-white"
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