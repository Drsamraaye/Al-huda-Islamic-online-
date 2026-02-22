"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useBooking } from "@/context/BookingContext";

export default function Navbar() {
    const { openModal } = useBooking();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Courses", href: "/courses" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="bg-[var(--background)] text-[var(--foreground)] sticky top-0 z-50 shadow-sm border-b border-[var(--primary)]/5 transition-colors duration-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center group">
                            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform group-hover:scale-110 duration-500">
                                <Image
                                    src="/Logo.png"
                                    alt="Al-Huda Online Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="ml-3 hidden sm:block">
                                <span className="text-xl font-black text-[#064E3B] tracking-tighter block leading-none">AL-HUDA</span>
                                <span className="text-[10px] font-black text-[#064E3B]/60 tracking-[0.2em] uppercase">Online Academy</span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-center space-x-8 text-[13px] font-bold">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[var(--foreground)]/90 hover:text-[var(--primary)] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )
                            )}

                            <div className="flex items-center space-x-4">
                                <ThemeToggle />
                                <button
                                    onClick={openModal}
                                    className="bg-[#EAB308] text-black px-6 py-2.5 rounded-lg font-black hover:bg-[#D4A017] transition-all shadow-md shadow-yellow-600/10"
                                >
                                    Free Demo Class
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#064E3B] hover:bg-emerald-50 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-slate-100">
                    <div className="px-4 pt-4 pb-8 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block py-4 text-lg font-semibold text-slate-700 hover:text-[#064E3B]"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => { setIsOpen(false); openModal(); }}
                            className="block w-full text-center bg-[#EAB308] text-black py-4 rounded-lg font-black mt-6"
                        >
                            Free Demo Class
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
