"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "How do I start my free demo class?",
        answer: "Starting is simple. Click any 'Book Free Demo Class' button, fill out the application form with your preferred date and time, and our administrative team will reach out via WhatsApp or Email to confirm your session."
    },
    {
        question: "What are the qualifications of your instructors?",
        answer: "All our instructors are certified scholars. Most hold an authentic Ijazah chain (Sanad) reaching back to the Prophet (PBUH) and have years of experience teaching both children and adults globally."
    },
    {
        question: "Do you provide certificates after completion?",
        answer: "Yes, Alhuda Islamic Qur’an Online provides recognized certificates upon the successful completion of each program level, verified by our senior instructional board."
    },
    {
        question: "Is the timing flexible for working professionals?",
        answer: "Absolutely. We operate 24/7 to accommodate students from all time zones. You can choose specific slots that fit your professional or academic schedule during the enrollment process."
    },
    {
        question: "Which software is required for the online classes?",
        answer: "We primarily use Zoom or Google Meet for our one-on-one virtual classrooms. Both provide a stable, high-quality environment for interactive recitation and scholarly guidance."
    },
    {
        question: "Can I choose my preferred teacher?",
        answer: "While we assign teachers based on assessment results and availability, we do take student preferences into account, especially regarding gender-specific instruction (Male/Female teachers)."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-[var(--background)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        <HelpCircle size={14} />
                        Common Inquiries
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter font-serif text-primary">Frequently Asked Questions</h2>
                    <p className="text-[var(--foreground)]/70 text-lg max-w-2xl mx-auto">Everything you need to know about starting your journey with Alhuda.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group border transition-all duration-300 rounded-3xl overflow-hidden ${openIndex === index
                                ? "bg-[var(--card-bg)] border-primary/40 shadow-xl shadow-emerald-900/10"
                                : "bg-[var(--card-bg)]/40 border-primary/5 hover:border-primary/20"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold font-serif tracking-tight transition-colors duration-300 ${openIndex === index ? "text-primary" : "text-[var(--foreground)]"
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary" : "text-[var(--foreground)]/40"
                                    }`}>
                                    <ChevronDown size={20} />
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-8 pb-8 text-[var(--foreground)]/70 leading-relaxed text-base border-t border-primary/5 pt-6">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
