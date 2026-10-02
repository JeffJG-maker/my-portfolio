import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/[0.07] dark:bg-[#111315]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Nosa-Orhue Osasofure Jeffrey
            </a>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Full-Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {/* GitHub */}
            <a
              href="https://github.com/JeffJG-maker"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 dark:border-white/[0.07] dark:text-slate-400 dark:hover:border-indigo-500/30 dark:hover:bg-[#1C1F22] dark:hover:text-indigo-400"
            >
              <FaGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 dark:border-white/[0.07] dark:text-slate-400 dark:hover:border-indigo-500/30 dark:hover:bg-[#1C1F22] dark:hover:text-indigo-400"
            >
              <FaLinkedin size={18} />
            </a>

            {/* Back to Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white transition hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-500 dark:hover:text-white"
            >
              <ArrowUp size={18} />
            </a>
          </motion.div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 dark:border-white/[0.07]">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} Nosa-Orhue Osasofure Jeffrey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;