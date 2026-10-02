import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Services", href: "#services" },
        // { name: "Contact", href: "#contact" },
    ];

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-[#111315]/45 backdrop-blur-lg">
            <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="group flex items-center gap-3"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950 transition-transform duration-300 group-hover:rotate-6">
                        N
                    </div>

                    <div>
                        <p className="text-sm font-bold tracking-tight text-white">
                            Nosa-Orhue
                        </p>

                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-400">
                            Software Developer
                        </p>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right */}
                <div className="flex items-center gap-3">

                    <ThemeToggle
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />

                    <a
                        href="#contact"
                        className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-400 md:block"
                    >
                        Let's Talk
                    </a>

                    {/* Mobile button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-200 transition hover:border-white/30 hover:bg-white/5 md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 backdrop-blur-xl md:hidden">
                    <nav className="flex flex-col gap-1">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="mt-3 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-indigo-400"
                        >
                            Let's Talk
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;