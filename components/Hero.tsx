"use client";

import Link from "next/link";
import { BookOpen, UserCheck, Trophy, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function Hero() {
    const { openModal } = useBooking();
    return (
        <section className="relative bg-[#064E3B] py-12 md:py-16 overflow-hidden bg-islamic-pattern">
            {/* Dark gradient overlay for typography focus */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
                    <div className="lg:col-span-5 py-4">
                        <div className="mb-10 inline-block">
                            <span className="text-white text-xs md:text-sm font-black tracking-[0.4em] uppercase border-b border-[#EAB308] pb-2">
                                Al-huda online academy
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter font-serif">
                            <span className="text-[#EAB308] block mb-2">AL-HUDA</span>
                            <span className="text-white"> ONLINE QUR'AN</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/95 mb-12 max-w-xl leading-relaxed font-medium">
                            From beginners to Hifdh — comprehensive Islamic education designed for students of every age, ability, and schedule.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                            <button
                                onClick={openModal}
                                className="bg-[#EAB308] text-black px-10 py-5 rounded-lg font-black text-lg hover:bg-[#D4A017] transition-all shadow-xl shadow-yellow-900/20 w-full sm:w-auto text-center"
                            >
                                Book Free Demo Class
                            </button>
                            <Link href="/courses" className="border-2 border-white/30 text-white hover:bg-white hover:text-[#064E3B] px-10 py-4.5 rounded-lg font-black text-lg transition-all w-full sm:w-auto text-center">
                                View Courses
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 text-white/90">
                            <span className="text-xs font-black uppercase tracking-widest text-white/70">Follow us:</span>
                            <div className="flex items-center gap-4">
                                <Link href="#" className="hover:text-[#EAB308] transition-colors"><Instagram size={18} /></Link>
                                <Link href="#" className="hover:text-[#EAB308] transition-colors"><Facebook size={18} /></Link>
                                <Link href="#" className="hover:text-[#EAB308] transition-colors"><Youtube size={18} /></Link>
                                <Link href="#" className="hover:text-[#EAB308] transition-colors"><MessageCircle size={18} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Premium Image (Enlarged) */}
                    <div className="lg:col-span-7 relative group hidden lg:block">
                        <div className="absolute -inset-10 bg-[#EAB308]/10 rounded-[4rem] blur-3xl group-hover:bg-[#EAB308]/20 transition-all duration-500 "></div>
                        <div className="relative rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl transform transition-all duration-700  hover:scale-[1.01] hover:rotate-1">
                            <img
                                src="/courses/06b17d3c-b464-44b4-8e9d-aff1a64a8a41.jpg"
                                alt="Alhuda Online Academy - Excellence in Qur'an Education"
                                className="w-full h-auto object-cover scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/40 to-transparent"></div>
                        </div>

                        {/* Floating elements for depth */}
                        <div className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 animate-bounce transition-all duration-1000">
                            <div className="text-[#EAB308] font-black text-xs uppercase tracking-widest">Live Classes</div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-[#EAB308] text-emerald-900 p-5 rounded-2xl font-black text-xl shadow-2xl flex items-center gap-3">
                            <UserCheck size={28} />
                            <div className="leading-tight">
                                <span className="block text-[10px] uppercase font-bold text-emerald-900/60 leading-none">Qualified</span>
                                Teachers
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-white/10 pt-16">
                    <div className="flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-[#EAB308] border border-white/10 group-hover:bg-[#EAB308] group-hover:text-emerald-900 transition-all">
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <div className="text-lg font-black text-white leading-tight">3 Course Levels</div>
                            <div className="text-xs text-white/80 font-bold uppercase tracking-wider">Beginner to Advanced</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-[#EAB308] border border-white/10 group-hover:bg-[#EAB308] group-hover:text-emerald-900 transition-all">
                            <UserCheck size={24} />
                        </div>
                        <div>
                            <div className="text-lg font-black text-white leading-tight">Expert Teachers</div>
                            <div className="text-xs text-white/80 font-bold uppercase tracking-wider">Qualified & Experienced</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-[#EAB308] border border-white/10 group-hover:bg-[#EAB308] group-hover:text-emerald-900 transition-all">
                            <Trophy size={24} />
                        </div>
                        <div>
                            <div className="text-lg font-black text-white leading-tight">Certified Programs</div>
                            <div className="text-xs text-white/80 font-bold uppercase tracking-wider">Get Recognized Certificates</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
