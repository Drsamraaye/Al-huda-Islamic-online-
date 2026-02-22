"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    if (theme === null) return null;

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center h-8 w-16 bg-[var(--primary)]/10 rounded-full p-1 cursor-pointer transition-all duration-300 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40"
            aria-label="Toggle Theme"
        >
            <div
                className={`flex items-center justify-center h-6 w-6 rounded-full shadow-lg transition-transform duration-300 ${theme === "dark" ? "translate-x-8 bg-accent" : "translate-x-0 bg-white"
                    }`}
            >
                {theme === "dark" ? (
                    <Moon size={14} className="text-primary font-black" />
                ) : (
                    <Sun size={14} className="text-accent font-black" />
                )}
            </div>
            <span className="absolute left-2 text-[8px] font-black uppercase text-emerald-100/40 select-none">
                {theme === "dark" ? "" : "OFF"}
            </span>
            <span className="absolute right-2 text-[8px] font-black uppercase text-accent/40 select-none">
                {theme === "dark" ? "ON" : ""}
            </span>
        </button>
    );
}
