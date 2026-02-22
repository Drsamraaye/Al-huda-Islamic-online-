"use client";

import { useState } from "react";
import Link from "next/link";
import { User, BookOpen, Mail, Globe, Calendar, Clock, ArrowRight, UserCheck, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DemoBookingPage() {
    const [formData, setFormData] = useState({
        role: "Student",
        level: "",
        name: "",
        email: "",
        country: "",
        date: "",
        time: ""
    });

    const timeSlots = [
        "9:00 AM - 10:00 AM",
        "10:00 AM - 11:00 AM",
        "11:00 AM - 12:00 PM",
        "12:00 PM - 1:00 PM",
        "2:00 PM - 3:00 PM",
        "3:00 PM - 4:00 PM",
        "4:00 PM - 5:00 PM",
        "5:00 PM - 6:00 PM",
        "6:00 PM - 7:00 PM",
        "7:00 PM - 8:00 PM"
    ];

    const courseLevels = [
        "Level 1 (Kids 6-10 Years)",
        "Level 2 (Teens 11-14 Years)",
        "Level 3 (Adults 15+ Years)"
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const dateObj = new Date(formData.date);
        const formattedDate = formData.date ? dateObj.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }) : "Not specified";

        const message = `Hi, I want to book a FREE DEMO CLASS.

Role: ${formData.role}
Course Level: ${formData.level}
Name: ${formData.name}
Email: ${formData.email}
Country: ${formData.country}
Preferred Date: ${formattedDate}
Preferred Time: ${formData.time}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/252634817117?text=${encodedMessage}`, "_blank");
    };

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <div className="py-20 px-4 flex items-center justify-center min-h-[calc(100vh-80px)]">
                <div className="w-full max-w-xl relative">
                    <div className="bg-[var(--card-bg)] p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-black/10 border border-primary/10 relative">
                        {/* Close Button */}
                        <Link href="/" className="absolute top-8 right-8 text-[var(--foreground)] opacity-40 hover:opacity-100 transition-opacity">
                            <X size={24} />
                        </Link>

                        <div className="mb-10 text-left">
                            <h1 className="text-3xl font-black text-primary mb-3 font-serif tracking-tight">Book Your Free Demo Class</h1>
                            <p className="text-[var(--foreground)]/80 font-medium text-xs leading-relaxed">
                                Fill in your details below and we'll contact you on WhatsApp to confirm your demo class.
                            </p>
                        </div>

                        {/* Class Schedule Info Box */}
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500/50 p-6 rounded-2xl mb-10 flex items-start gap-4">
                            <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-700 dark:text-emerald-400">
                                <Calendar size={18} />
                            </div>
                            <div>
                                <h3 className="text-[10px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-widest mb-1">Class Schedule</h3>
                                <p className="text-xs text-emerald-900/90 dark:text-emerald-100 font-bold leading-relaxed">
                                    Classes are held 5 days a week, with the 6th day dedicated to fun activities and practical application!
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Course Level Selector */}
                            <div className="space-y-2">
                                <label className="block text-xs font-black text-primary uppercase tracking-widest ml-1">Course Level</label>
                                <div className="relative group">
                                    <select
                                        required
                                        className="w-full px-6 py-4 rounded-xl bg-primary/5 border border-primary/20 focus:border-primary ring-0 outline-none font-bold text-[var(--foreground)] appearance-none cursor-pointer transition-all hover:bg-primary/10"
                                        value={formData.level}
                                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                                    >
                                        <option value="" disabled>Select course level</option>
                                        {courseLevels.map(lvl => (
                                            <option key={lvl} value={lvl}>{lvl}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary/60">
                                        <ArrowRight size={14} className="rotate-90 text-primary" />
                                    </div>
                                </div>
                            </div>

                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="block text-xs font-black text-primary uppercase tracking-widest ml-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full px-6 py-4 rounded-xl bg-primary/5 border border-primary/10 focus:border-primary outline-none font-bold text-[var(--foreground)] placeholder:text-[var(--foreground)]/40 transition-all hover:bg-primary/10"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            {/* Email Address */}
                            <div className="space-y-2">
                                <label className="block text-xs font-black text-primary uppercase tracking-widest ml-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full px-6 py-4 rounded-xl bg-primary/5 border border-primary/10 focus:border-primary outline-none font-bold text-[var(--foreground)] placeholder:text-[var(--foreground)]/40 transition-all hover:bg-primary/10"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            {/* Country */}
                            <div className="space-y-2">
                                <label className="block text-xs font-black text-primary uppercase tracking-widest ml-1">Country</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your country"
                                    className="w-full px-6 py-4 rounded-xl bg-primary/5 border border-primary/10 focus:border-primary outline-none font-bold text-[var(--foreground)] placeholder:text-[var(--foreground)]/40 transition-all hover:bg-primary/10"
                                    value={formData.country}
                                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                />
                            </div>

                            {/* Preferred Date */}
                            <div className="space-y-2">
                                <label className="block text-xs font-black text-primary uppercase tracking-widest ml-1">Preferred Date</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        required
                                        className="w-full px-6 py-4 rounded-xl bg-primary/5 border border-primary/10 focus:border-primary outline-none font-bold text-[var(--foreground)] appearance-none transition-all hover:bg-primary/10 custom-date-input"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Preferred Time */}
                            <div className="space-y-2">
                                <label className="block text-xs font-black text-primary uppercase tracking-widest ml-1">Preferred Time</label>
                                <div className="relative group">
                                    <select
                                        required
                                        className="w-full px-6 py-4 rounded-xl bg-primary/5 border border-primary/10 focus:border-primary outline-none font-bold text-[var(--foreground)] appearance-none cursor-pointer transition-all hover:bg-primary/10"
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    >
                                        <option value="" disabled>Select time slot</option>
                                        {timeSlots.map(slot => (
                                            <option key={slot} value={slot}>{slot}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary/60">
                                        <ArrowRight size={14} className="rotate-90 text-primary" />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-[var(--background)] py-5 rounded-xl text-lg font-black transition-all shadow-xl shadow-emerald-900/20 active:scale-[0.98] mt-4 uppercase tracking-widest"
                            >
                                Book Demo Class
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />

            <style jsx>{`
                .custom-date-input::-webkit-calendar-picker-indicator {
                    opacity: 0.6;
                    filter: invert(var(--calendar-invert, 0));
                    cursor: pointer;
                }
            `}</style>
        </main>
    );
}
