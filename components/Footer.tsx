"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function Footer() {
    const { openModal } = useBooking();
    return (
        <footer className="bg-[#064E3B] text-white pt-20 pb-10 border-t border-white/10 transition-colors duration-400 relative overflow-hidden bg-islamic-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center mb-6 group">
                            <div className="relative w-12 h-12 transition-transform group-hover:scale-110 duration-500">
                                <Image
                                    src="/Logo.png"
                                    alt="Al-Huda Online Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-black text-white tracking-tighter ml-3">ALHUDA</span>
                        </Link>
                        <p className="text-white/90 text-sm leading-relaxed mb-8">
                            Excellence in Online Qur’an and Islamic Studies. Guided by certified scholars from around the world.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="p-2 bg-accent/10 rounded-lg text-accent hover:bg-accent hover:text-[var(--background)] transition-all"><Facebook size={18} /></Link>
                            <Link href="#" className="p-2 bg-accent/10 rounded-lg text-accent hover:bg-accent hover:text-[var(--background)] transition-all"><Twitter size={18} /></Link>
                            <Link href="#" className="p-2 bg-accent/10 rounded-lg text-accent hover:bg-accent hover:text-[var(--background)] transition-all"><Instagram size={18} /></Link>
                            <Link href="#" className="p-2 bg-accent/10 rounded-lg text-accent hover:bg-accent hover:text-[var(--background)] transition-all"><Youtube size={18} /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-[#EAB308] mb-8">Programs</h4>
                        <ul className="space-y-4 text-white/90 text-sm font-medium">
                            <li><Link href="/" className="hover:text-accent transition-colors">Homepage</Link></li>
                            <li><Link href="/courses" className="hover:text-accent transition-colors">Courses</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-[#EAB308] mb-8">Quick Links</h4>
                        <ul className="space-y-4 text-white/90 text-sm font-medium">
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-[#EAB308] mb-8">Contact Us</h4>
                        <ul className="space-y-6 text-white/90 text-sm font-medium">
                            <li className="flex items-center gap-4">
                                <div className="bg-white/10 p-2 rounded-lg text-white"><Mail size={18} /></div>
                                <span>alhuda@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-white/10 p-2 rounded-lg text-white"><Phone size={18} /></div>
                                <span>+252 63 4817117</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-white/10 p-2 rounded-lg text-white"><MapPin size={18} /></div>
                                <span>Hargeisa, Somaliland </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 text-center">
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                        © 2026 Alhuda Islamic Qur’an Online. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
