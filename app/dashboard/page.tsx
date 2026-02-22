"use client";

import Navbar from "@/components/Navbar";
import { BookOpen, Calendar, Clock, Video, FileText, CreditCard, ChevronRight, User } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    const upcomingClasses = [
        { id: 1, title: "Hifdh Mastery Section", time: "Today, 10:00 AM", teacher: "Sheikh Abdullahi", link: "https://zoom.us/j/..." },
        { id: 2, title: "Tajweed Foundations", time: "Tomorrow, 08:00 AM", teacher: "Ustadha Fatima", link: "#" },
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-12">
                    <h1 className="text-4xl font-extrabold text-primary font-serif tracking-tighter">Scholar Hub</h1>
                    <p className="text-slate-500 font-medium">Welcome back, Salman. May Allah increase your knowledge.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Dashboard Area */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Upcoming Classes */}
                        <section className="card rounded-[2.5rem] shadow-xl shadow-emerald-900/[0.03] p-10 border border-emerald-50/10">
                            <div className="flex justify-between items-center mb-10">
                                <h2 className="text-2xl font-black flex items-center gap-3 text-primary font-serif">
                                    <Calendar className="text-accent" size={24} />
                                    <span>Sacred Appointments</span>
                                </h2>
                                <Link href="#" className="text-xs font-black uppercase tracking-widest text-accent hover:text-primary transition-colors">Digital Schedule</Link>
                            </div>

                            <div className="space-y-6">
                                {upcomingClasses.map((cls) => (
                                    <div key={cls.id} className="group p-8 rounded-3xl border border-emerald-50 hover:border-accent/30 hover:bg-emerald-50/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-center gap-6">
                                            <div className="bg-emerald-900 border border-emerald-800 p-4 rounded-2xl text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                                                <Video size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-primary font-serif">{cls.title}</h3>
                                                <div className="flex items-center text-sm text-slate-400 font-medium gap-4 mt-2">
                                                    <span className="flex items-center gap-2"><Clock size={16} /> <span>{cls.time}</span></span>
                                                    <span className="text-emerald-100">•</span>
                                                    <span className="text-accent">{cls.teacher}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href={cls.link} className="btn-primary py-3 px-8 text-sm font-black uppercase tracking-widest text-center shadow-lg shadow-emerald-900/10 active:scale-95">
                                            Enter Virtual Room
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Assignments and Finances */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="card rounded-[2.5rem] shadow-xl shadow-emerald-900/[0.03] p-10 border border-emerald-50/10">
                                <h2 className="text-xl font-black mb-8 flex items-center gap-3 text-primary font-serif uppercase tracking-widest text-xs">
                                    <FileText className="text-accent" size={20} />
                                    <span>Knowledge Tasks</span>
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Al-Baqarah Revision", status: "Active", due: "Due Fri" },
                                        { title: "Noon Sakinah Rules", status: "Mastered", due: "Sun" },
                                    ].map((task, i) => (
                                        <div key={i} className="flex justify-between items-center bg-emerald-50/20 p-4 rounded-xl border border-emerald-50/10">
                                            <span className="text-sm font-bold text-primary">{task.title}</span>
                                            <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${task.status === 'Mastered' ? 'bg-emerald-500 text-white' : 'bg-accent/10 text-accent'}`}>
                                                {task.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card rounded-[2.5rem] shadow-xl shadow-emerald-900/[0.03] p-10 border border-emerald-50/10">
                                <h2 className="text-xl font-black mb-8 flex items-center gap-3 text-primary font-serif uppercase tracking-widest text-xs">
                                    <CreditCard className="text-accent" size={20} />
                                    <span>Stewardship</span>
                                </h2>
                                <div className="p-6 bg-primary rounded-3xl mb-6 text-white text-center">
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100/40 mb-2">Next Support Contribution</div>
                                    <div className="text-3xl font-black font-serif text-accent mb-1 tracking-tighter">Free Tier</div>
                                    <div className="text-[10px] font-bold text-emerald-100/60 uppercase">Scholarship Student</div>
                                </div>
                                <Link href="#" className="text-accent font-black text-xs uppercase tracking-[0.2em] hover:text-primary transition-all flex items-center justify-center gap-2">
                                    <span>Contribution portal</span>
                                    <ChevronRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Profile Area */}
                    <div className="space-y-10">
                        <section className="bg-primary text-white rounded-[3rem] p-10 shadow-2xl shadow-emerald-900/40 overflow-hidden relative">
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-emerald-900 border-2 border-accent rounded-[2rem] mb-6 flex items-center justify-center relative group">
                                    <User size={40} className="text-accent" />
                                </div>
                                <h2 className="text-2xl font-black mb-1 font-serif tracking-tight">Salman Ahmed</h2>
                                <p className="text-emerald-100/40 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Ref: ALH-2026-042</p>
                                <div className="space-y-4">
                                    <div className="bg-emerald-900/50 rounded-2xl p-5 flex justify-between items-center border border-emerald-800">
                                        <span className="text-xs font-bold text-emerald-100">Attendance</span>
                                        <span className="font-black text-accent tracking-tighter text-lg">94%</span>
                                    </div>
                                    <div className="bg-emerald-900/50 rounded-2xl p-5 flex justify-between items-center border border-emerald-800">
                                        <span className="text-xs font-bold text-emerald-100">Scholarly Tier</span>
                                        <span className="font-black text-accent tracking-tighter text-lg underline decoration-accent/20 underline-offset-4 decoration-2">Level 3</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent opacity-5 rounded-full blur-[100px]"></div>
                        </section>

                        <section className="card rounded-[2.5rem] shadow-xl shadow-emerald-900/[0.03] p-10 border border-emerald-50/10">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-800/40 mb-8 border-b border-emerald-50 pb-4">Knowledge Repository</h2>
                            <div className="space-y-4">
                                {['Mushaf Medina PDF', 'Tajweed Rulebook', 'Arabic Vocabulary Hub'].map((res, i) => (
                                    <Link key={i} href="#" className="flex items-center justify-between p-4 bg-emerald-50/20 border border-emerald-50 rounded-2xl hover:border-accent/40 hover:text-accent font-bold transition-all text-sm text-primary">
                                        <span>{res}</span>
                                        <FileText size={18} />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
