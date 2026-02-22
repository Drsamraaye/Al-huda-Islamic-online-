"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function BookingModal() {
    const { isOpen, closeModal } = useBooking();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        role: "Student",
        level: "",
        name: "",
        email: "",
        country: "",
        date: "",
        time: ""
    });

    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [closeModal]);

    if (!isOpen) return null;

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
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => { setSubmitted(false); closeModal(); }} />
                <div className="bg-[var(--card-bg)] p-12 rounded-[2.5rem] shadow-2xl border border-primary/10 text-center max-w-lg w-full relative z-10 animate-fade-in">
                    <button onClick={() => { setSubmitted(false); closeModal(); }} className="absolute top-8 right-8 text-slate-400 hover:text-primary transition-colors">
                        <X size={24} />
                    </button>
                    <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-primary mb-4 font-serif">Alhamdulillah!</h2>
                    <p className="text-slate-500 leading-relaxed mb-8">
                        Your request has been sent via WhatsApp. Our team will contact you shortly to confirm your session.
                    </p>
                    <button
                        onClick={() => { setSubmitted(false); closeModal(); }}
                        className="w-full bg-[#064E3B] text-white py-5 rounded-2xl font-black uppercase tracking-widest"
                    >
                        Close Window
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />

            <div className="bg-[var(--card-bg)] p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-primary/10 relative z-10 w-full max-w-md my-auto animate-float-in">
                <button onClick={closeModal} className="absolute top-6 right-6 text-slate-400 hover:text-primary transition-colors">
                    <X size={24} />
                </button>

                <div className="mb-8 flex items-center justify-center space-x-4">
                    <div className="relative w-16 h-16">
                        <Image
                            src="/Logo.png"
                            alt="Al-Huda Online Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-black text-[#064E3B] mb-2 font-serif tracking-tight text-left">Book Your Free Demo Class</h2>
                    <p className="text-slate-500 font-medium text-[11px] leading-relaxed text-left">
                        Fill in your details below and we'll contact you on WhatsApp to confirm your demo class.
                    </p>
                </div>

                {/* Class Schedule Info Box */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500/50 p-5 rounded-2xl mb-8 flex items-start gap-4">
                    <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-700">
                        <Calendar size={18} />
                    </div>
                    <div>
                        <h3 className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-1">Class Schedule</h3>
                        <p className="text-[11px] text-emerald-900/70 font-bold leading-relaxed">
                            Classes are held 5 days a week, with the 6th day dedicated to fun activities and practical application!
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                        <label className="block text-[10px] font-black text-[#064E3B] uppercase tracking-widest ml-1">Course Level</label>
                        <select
                            required
                            className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#064E3B] outline-none font-bold text-slate-700 text-sm appearance-none cursor-pointer"
                            value={formData.level}
                            onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        >
                            <option value="">Select course level</option>
                            {courseLevels.map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
                        </select>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-[10px] font-black text-[#064E3B] uppercase tracking-widest ml-1">Full Name</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your full name"
                            className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#064E3B] outline-none font-bold text-slate-700 text-sm"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-[10px] font-black text-[#064E3B] uppercase tracking-widest ml-1">Email Address</label>
                        <input
                            type="email"
                            required
                            placeholder="your.email@example.com"
                            className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#064E3B] outline-none font-bold text-slate-700 text-sm"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-[10px] font-black text-[#064E3B] uppercase tracking-widest ml-1">Country</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your country"
                            className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#064E3B] outline-none font-bold text-slate-700 text-sm"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="block text-[10px] font-black text-[#064E3B] uppercase tracking-widest ml-1">Preferred Date</label>
                            <input
                                type="date"
                                required
                                className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#064E3B] outline-none font-bold text-slate-700 text-sm"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="block text-[10px] font-black text-[#064E3B] uppercase tracking-widest ml-1">Preferred Time</label>
                            <select
                                required
                                className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#064E3B] outline-none font-bold text-slate-700 text-sm appearance-none cursor-pointer"
                                value={formData.time}
                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            >
                                <option value="">Select time slot</option>
                                {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#1e5c54] text-white py-4 rounded-xl text-base font-black transition-all shadow-lg shadow-emerald-900/10 active:scale-[0.98] mt-4"
                    >
                        Book Demo Class
                    </button>
                </form>
            </div>
        </div>
    );
}
