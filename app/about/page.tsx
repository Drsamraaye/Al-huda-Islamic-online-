import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { ShieldCheck, Target, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="bg-[var(--background)] py-24 text-[var(--foreground)] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <span className="text-[var(--primary)] font-black text-xs uppercase tracking-[0.4em] mb-6 block">Our Heritage</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter font-serif">About Alhuda</h1>
                    <p className="text-xl opacity-60 max-w-3xl mx-auto leading-relaxed italic font-serif">
                        A beacon of traditional Islamic learning in the digital age.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            </section>

            <section className="py-24 bg-[var(--background)]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black text-primary font-serif tracking-tighter">Our Noble Mission</h2>
                            <p className="text-lg text-[var(--foreground)]/70 leading-relaxed">
                                Alhuda Islamic Qur’an Online was founded to preserve and propagate the authentic recitation and understanding of the Holy Qur’an. Our vision is to connect every Muslim household with the Light of Revelation through world-class educators.
                            </p>
                            <div className="flex items-center gap-4 p-6 bg-[var(--primary)]/5 rounded-2xl border border-[var(--primary)]/10">
                                <ShieldCheck className="text-[var(--primary)] shrink-0" size={32} />
                                <p className="text-sm font-bold opacity-80 leading-relaxed">
                                    Every teacher at Alhuda holds an authentic Ijazah chain (Sanad) reaching back to the Prophet (PBUH).
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="p-8 bg-primary rounded-[2.5rem] text-[var(--background)]">
                                <h3 className="text-xl font-bold mb-4 font-serif text-[var(--background)]/90">Who We Are</h3>
                                <p className="text-[var(--background)]/70 text-sm leading-relaxed">
                                    A global collective of certified scholars and professionals dedicated to delivering the highest caliber of Islamic education since 2019.
                                </p>
                            </div>
                            <div className="p-8 bg-[var(--primary)]/5 rounded-[2.5rem] border border-[var(--primary)]/10">
                                <h3 className="text-xl font-bold mb-4 font-serif text-primary">Why Alhuda?</h3>
                                <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                                    We combine ancient pedagogical wisdom with modern technology, providing a seamless, one-on-one virtual classroom environment.
                                </p>
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
