"use client";

import Link from "next/link";
import { useBooking } from "@/context/BookingContext";

export default function CTA() {
    const { openModal } = useBooking();
    return (
        <section className="bg-[var(--background)] py-24 border-y border-primary/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                    Enrollment Open 2026
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 tracking-tighter font-serif">
                    Begin Your Journey with <span className="text-primary italic">Alhuda</span> Today
                </h2>
                <p className="text-lg md:text-xl text-[var(--foreground)]/90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                    Join thousands of students worldwide at Alhuda Islamic Qur’an Online. Excellence in traditional Islamic education.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={openModal}
                        className="btn-primary px-12 py-5 text-lg font-black shadow-xl shadow-primary/10"
                    >
                        Apply for Admission
                    </button>
                    <Link href="/contact" className="btn-outline px-12 py-5 text-lg font-bold">
                        Speak with an Advisor
                    </Link>
                </div>
            </div>
        </section>
    );
}
