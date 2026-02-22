"use client";

import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { courses } from "@/lib/data";
import { notFound } from "next/navigation";
import { Clock, BookOpen, Target, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";

export default function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { openModal } = useBooking();
    const course = courses.find((c) => c.slug === slug);

    if (!course) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <section className="bg-[#064E3B] pt-32 pb-48 text-white relative overflow-hidden bg-islamic-pattern">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row gap-20 items-center">
                        <div className="flex-[1.2] text-center md:text-left">
                            <nav className="flex items-center space-x-3 text-[#EAB308] mb-10 justify-center md:justify-start">
                                <Link href="/" className="hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]">Home</Link>
                                <ChevronRight size={10} className="opacity-40" />
                                <Link href="/courses" className="hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]">Programs</Link>
                                <ChevronRight size={10} className="opacity-40" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{course.title}</span>
                            </nav>
                            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight font-serif text-white">
                                <span className="text-[#EAB308] block text-sm md:text-lg mb-4 tracking-[0.3em] font-sans">ALHUDA ACADEMY</span>
                                {course.title}
                            </h1>
                            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed italic font-serif">
                                {course.description} A journey of spiritual and academic excellence at Alhuda.
                            </p>
                            <button
                                onClick={openModal}
                                className="bg-[#EAB308] text-emerald-950 px-14 py-5 rounded-lg text-xl font-black uppercase tracking-[0.2em] hover:bg-[#D4A017] transition-all shadow-2xl shadow-yellow-900/20 inline-block"
                            >
                                Apply Now
                            </button>
                        </div>
                        <div className="flex-1 w-full max-w-lg aspect-square relative group">
                            {/* Premium Frame */}
                            <div className="absolute inset-0 bg-[#EAB308] rounded-[4rem] rotate-3 opacity-20 transition-transform group-hover:rotate-6 duration-700"></div>
                            <div className="absolute inset-0 bg-[#064E3B] rounded-[4rem] -rotate-3 border border-[#EAB308]/20 transition-transform group-hover:-rotate-1 duration-700"></div>

                            <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden border-4 border-[#EAB308]/30 shadow-2xl">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#EAB308] opacity-[0.05] rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EAB308] opacity-[0.03] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
            </section>

            <section className="py-24 -mt-24 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-12">
                            <div className="bg-[var(--card-bg)] rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-black/5 border border-accent/10">
                                <h2 className="text-3xl md:text-5xl font-black text-primary mb-12 font-serif tracking-tight">Curriculum Overview</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {[
                                        "Advanced Tajweed and Phonetic precision.",
                                        "Personalized tracking by senior Scholars.",
                                        "Historical context and linguistic depth.",
                                        "Practical articulation and fluency drills.",
                                        "Authentic Ijazah upon graduation.",
                                        "Lifetime scholarly support and community."
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="mt-1 bg-accent/5 rounded-lg p-1.5 text-accent border border-accent/20">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <span className="text-[var(--foreground)]/70 font-medium leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[var(--background)] border border-accent/20 rounded-[3rem] p-12 md:p-20 text-[var(--foreground)] relative overflow-hidden">
                                <h2 className="text-3xl md:text-5xl font-black mb-8 font-serif tracking-tight relative z-10 text-primary">World Class Faculty</h2>
                                <p className="text-primary/60 text-lg leading-relaxed relative z-10">
                                    Our instructors represent the highest echelon of Islamic academia, holding prestigious certifications from global institutions like Madinah University and beyond. At Alhuda, we never compromise on the quality of your guide.
                                </p>
                                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl"></div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-[var(--card-bg)] rounded-[3rem] p-10 shadow-2xl shadow-black/5 border border-accent/10 md:sticky md:top-28">
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary/40 mb-10 border-b border-primary/10 pb-6">Program Specifications</h3>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6 group">
                                        <div className="bg-primary/5 p-4 rounded-2xl text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300"><Clock size={24} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-1">Duration</div>
                                            <div className="text-xl font-black text-primary font-serif tracking-tight">{course.duration}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 group">
                                        <div className="bg-primary/5 p-4 rounded-2xl text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300"><Target size={24} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-1">Academic Level</div>
                                            <div className="text-xl font-black text-primary font-serif tracking-tight">{course.level}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 group">
                                        <div className="bg-primary/5 p-4 rounded-2xl text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300"><BookOpen size={24} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-1">Sessions</div>
                                            <div className="text-xl font-black text-primary font-serif tracking-tight">3 Classes / week</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 p-8 bg-primary/5 border border-primary/10 rounded-[2rem] text-center shadow-xl shadow-black/5">
                                    <div className="text-primary/40 text-[10px] font-black uppercase tracking-widest mb-2">Contribution</div>
                                    <div className="text-4xl font-black text-primary font-serif tracking-tighter mb-8">$30 <span className="text-xs text-primary/40">/ mo</span></div>
                                    <button
                                        onClick={openModal}
                                        className="btn-primary w-full py-4 text-xs font-black uppercase tracking-[0.2em]"
                                    >
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
