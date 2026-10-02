import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

function ThemeToggle({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const selectTheme = (theme) => {
        setDarkMode(theme === "dark");
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Theme Button */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-lg bg-transparent px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 "
                aria-expanded={isOpen}
                aria-haspopup="menu"
            >
                <span>{darkMode ? "Dark" : "Light"}</span>

                <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div
                    className="absolute right-0 top-full z-50 mt-2 w-28 overflow-hidden rounded-lg border border-slate-200 bg-white p-1.5 shadow-xl dark:border-white/10 dark:bg-slate-900"
                    role="menu"
                >
                    <button
                        type="button"
                        onClick={() => selectTheme("light")}
                        className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${!darkMode
                                ? "bg-slate-100 font-semibold text-slate-900"
                                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                            }`}
                        role="menuitem"
                    >
                        Light
                    </button>

                    <button
                        type="button"
                        onClick={() => selectTheme("dark")}
                        className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${darkMode
                                ? "bg-slate-800 font-semibold text-white"
                                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                            }`}
                        role="menuitem"
                    >
                        Dark
                    </button>
                </div>
            )}
        </div>
    );
}

export default ThemeToggle;