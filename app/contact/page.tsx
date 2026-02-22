"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Contact error:", error);
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="bg-[var(--background)] py-24 text-[var(--foreground)] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <span className="text-[var(--primary)] font-black text-xs uppercase tracking-[0.4em] mb-6 block">Support Center</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter font-serif text-[var(--primary)]">Get in Touch</h1>
                    <p className="text-xl opacity-60 max-w-3xl mx-auto leading-relaxed">
                        Have questions about our programs or assessment process? <br /> Our administrative team is here to assist you.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        <div className="space-y-12">
                            <h2 className="text-4xl font-extrabold text-primary font-serif tracking-tighter">Connect with Alhuda</h2>
                            <p className="text-lg text-[var(--foreground)]/70 leading-relaxed">
                                Whether you're a new student or an existing member of the Alhuda family, we are committed to providing a seamless communication experience.
                            </p>

                            <div className="space-y-10">
                                <div className="flex items-start space-x-6 group">
                                    <div className="bg-emerald-50 p-4 rounded-2xl text-[var(--primary)] border border-emerald-100 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-1 font-serif tracking-tight">Email Correspondence</h3>
                                        <p className="text-[var(--foreground)]/80 font-medium">samraayeinaxuseen@gmail.com</p>
                                        <p className="text-[var(--foreground)]/40 text-sm">Response within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="bg-emerald-50 p-4 rounded-2xl text-[var(--primary)] border border-emerald-100 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-1 font-serif tracking-tight">WhatsApp Helpline</h3>
                                        <p className="text-[var(--foreground)]/80 font-medium">+252 63 4817117</p>
                                        <p className="text-xs font-black text-primary/60 uppercase tracking-widest mt-1">Live Support Available</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="bg-emerald-50 p-4 rounded-2xl text-[var(--primary)] border border-emerald-100 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-1 font-serif tracking-tight">Global Presence</h3>
                                        <p className="text-[var(--foreground)]/80 font-medium">Headquarters: Hargeisa Somaliland</p>
                                        <p className="text-[var(--foreground)]/40 text-sm">Serving the Ummah worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[var(--card-bg)] rounded-[3rem] shadow-2xl shadow-black/5 p-12 lg:p-16 border border-accent/10">
                            <h2 className="text-3xl font-bold text-primary mb-10 font-serif tracking-tight">Direct Inquiry</h2>

                            {status === "success" ? (
                                <div className="text-center py-20 space-y-6 animate-in fade-in zoom-in duration-500">
                                    <div className="flex justify-center">
                                        <CheckCircle2 size={100} className="text-accent" />
                                    </div>
                                    <h3 className="text-3xl font-black text-primary">Message Sent!</h3>
                                    <p className="text-lg text-[var(--foreground)]/70">Thank you for reaching out. We will get back to you shortly.</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="inline-flex items-center justify-center px-10 py-3 text-sm font-black tracking-widest uppercase border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-xl"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="space-y-3">
                                        <label className="block text-[10px] font-black text-primary/60 uppercase tracking-[0.3em] ml-2">Your Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-primary/5 border border-primary/10 focus:bg-[var(--card-bg)] focus:ring-2 focus:ring-primary outline-none font-bold text-[var(--foreground)]"
                                            placeholder="Enter full name"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-[10px] font-black text-primary/60 uppercase tracking-[0.3em] ml-2">Email Identity</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-primary/5 border border-primary/10 focus:bg-[var(--card-bg)] focus:ring-2 focus:ring-primary outline-none font-bold text-[var(--foreground)]"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-[10px] font-black text-primary/60 uppercase tracking-[0.3em] ml-2">Inquiry Details</label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-primary/5 border border-primary/10 focus:bg-[var(--card-bg)] focus:ring-2 focus:ring-primary outline-none font-bold text-[var(--foreground)]"
                                            placeholder="How can we assist you?"
                                        ></textarea>
                                    </div>

                                    {status === "error" && (
                                        <div className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                                            <AlertCircle size={20} />
                                            <span className="text-sm font-bold">Failed to send message. Please try again.</span>
                                        </div>
                                    )}

                                    <button
                                        disabled={status === "loading"}
                                        type="submit"
                                        className="w-full bg-primary text-[var(--background)] py-5 rounded-2xl text-lg font-black uppercase tracking-widest shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-4 hover:opacity-90 transition-all disabled:opacity-50"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <span>Sending...</span>
                                                <Loader2 size={20} className="animate-spin" />
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Inquiry</span>
                                                <Send size={20} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
