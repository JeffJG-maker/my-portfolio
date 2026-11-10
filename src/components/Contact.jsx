
import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Send,
    CheckCircle2,
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

    const headingText = darkMode
        ? "text-white"
        : "text-[#191B1F]";

    const mutedText = darkMode
        ? "text-[#A0A4AA]"
        : "text-[#70757D]";

    const labelStyles = `block text-xs font-medium ${darkMode ? "text-gray-300" : "text-[#555B63]"
        }`;

    const fieldStyles = `mt-2 w-full rounded-lg border-0 px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-[#92979E] focus:ring-2 focus:ring-indigo-500/40 ${darkMode
            ? "bg-[#24272B] text-white focus:bg-[#292D32]"
            : "bg-[#F2F3F4] text-[#191B1F] focus:bg-[#F7F7F8]"
        }`;

    const socialStyles = `flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 ${darkMode
            ? "bg-[#202327] text-gray-300 hover:bg-white hover:text-[#17191C]"
            : "bg-[#F0F1F2] text-[#343940] hover:bg-[#191B1F] hover:text-white"
        }`;

    return (
        <section
            id="contact"
            style={{ fontFamily: "Tahoma, Geneva, sans-serif" }}
            className={`transition-colors duration-300 ${darkMode
                    ? "bg-[#111315] text-white"
                    : "bg-[#F8F9FA] text-[#191B1F]"
                }`}
        >
            <div className="mx-auto flex min-h-[min(760px,100svh)] max-w-7xl flex-col justify-center px-5 py-12 sm:px-8 lg:min-h-[min(760px,100svh)] lg:px-12 lg:py-10">

                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 lg:mb-12"
                >
                    <p
                        className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${darkMode ? "text-gray-400" : "text-[#777D85]"
                            }`}
                    >
                        Get in touch
                    </p>

                    <h2
                        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px] ${headingText}`}
                    >
                        Contact me.
                    </h2>
                </motion.div>

                {/* Main layout */}
                <div className="grid min-w-0 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

                    {/* Left column */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="min-w-0 lg:pt-1"
                    >
                        <h3
                            className={`max-w-md text-2xl font-semibold leading-snug sm:text-3xl ${headingText}`}
                        >
                            Let's create something meaningful together.
                        </h3>

                        <p
                            className={`mt-4 max-w-md text-sm leading-7 ${mutedText}`}
                        >
                            I'm always open to interesting collaborations,
                            professional connections, and opportunities to
                            build useful digital experiences.
                        </p>

                        {/* Contact details */}
                        <div className="mt-9 space-y-6">

                            <a
                                href="mailto:josasofure@gmail.com"
                                className="group flex items-center gap-4"
                            >
                                <span
                                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${darkMode
                                            ? "bg-[#202327] text-gray-300"
                                            : "bg-[#ECEEF0] text-[#343940]"
                                        }`}
                                >
                                    <Mail size={18} />
                                </span>

                                <span className="min-w-0">
                                    <span
                                        className={`block text-xs ${darkMode ? "text-gray-500" : "text-[#858A91]"
                                            }`}
                                    >
                                        Email
                                    </span>

                                    <span
                                        className={`mt-1 block break-all text-sm font-medium transition-colors group-hover:text-indigo-500 ${darkMode ? "text-gray-200" : "text-[#30343A]"
                                            }`}
                                    >
                                        josasofure@gmail.com
                                    </span>
                                </span>

                                <ArrowUpRight
                                    size={16}
                                    className="ml-auto shrink-0 text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>

                            <div className="flex items-center gap-4">
                                <span
                                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${darkMode
                                            ? "bg-[#202327] text-gray-300"
                                            : "bg-[#ECEEF0] text-[#343940]"
                                        }`}
                                >
                                    <MapPin size={18} />
                                </span>

                                <span>
                                    <span
                                        className={`block text-xs ${darkMode ? "text-gray-500" : "text-[#858A91]"
                                            }`}
                                    >
                                        Location
                                    </span>

                                    <span
                                        className={`mt-1 block text-sm font-medium ${darkMode ? "text-gray-200" : "text-[#30343A]"
                                            }`}
                                    >
                                        Nigeria
                                    </span>
                                </span>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="mt-9">
                            <p
                                className={`mb-3 text-xs font-medium ${darkMode ? "text-gray-500" : "text-[#858A91]"
                                    }`}
                            >
                                Connect with me
                            </p>

                            <div className="flex items-center gap-3">
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
                            </div>
                        </div>

                        {/* Availability note */}
                        <div
                            className={`mt-9 flex items-center gap-2 text-xs ${darkMode ? "text-gray-500" : "text-[#858A91]"
                                }`}
                        >
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Available for new opportunities
                        </div>
                    </motion.div>

                    {/* Right column: Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.08,
                            ease: "easeOut",
                        }}
                        onSubmit={handleSubmit}
                        className={`min-w-0 rounded-xl p-5 shadow-[0_10px_40px_rgba(15,23,42,0.045)] transition-colors duration-300 sm:p-7 lg:p-8 ${darkMode
                                ? "bg-[#191C20] shadow-[0_10px_40px_rgba(0,0,0,0.14)]"
                                : "bg-white"
                            }`}
                    >
                        <div className="mb-7">
                            <h3 className={`text-xl font-semibold ${headingText}`}>
                                Send a message
                            </h3>

                            <p className={`mt-2 text-sm ${mutedText}`}>
                                Fill in the form below.
                            </p>
                        </div>

                        {/* Name and email */}
                        <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                            <div className="min-w-0">
                                <label
                                    htmlFor="contact-name"
                                    className={labelStyles}
                                >
                                    Full name
                                </label>

                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    required
                                    className={fieldStyles}
                                />
                            </div>

                            <div className="min-w-0">
                                <label
                                    htmlFor="contact-email"
                                    className={labelStyles}
                                >
                                    Email address
                                </label>

                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your Email Address"
                                    required
                                    className={fieldStyles}
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="mt-5">
                            <label
                                htmlFor="contact-subject"
                                className={labelStyles}
                            >
                                Subject
                            </label>

                            <input
                                id="contact-subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject of your message"
                                required
                                className={fieldStyles}
                            />
                        </div>

                        {/* Message */}
                        <div className="mt-5">
                            <label
                                htmlFor="contact-message"
                                className={labelStyles}
                            >
                                Message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here..."
                                required
                                className={`${fieldStyles} min-h-[110px] resize-y`}
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
                            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSending ? "Sending..." : "Send Message"}

                            <Send size={15} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
