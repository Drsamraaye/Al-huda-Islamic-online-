"use client";

import { Check, Users, User, Rocket } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function Pricing() {
    const { openModal } = useBooking();

    const plans = [
        {
            name: "Standard Plan",
            price: "30",
            period: "per person",
            description: "Perfect for individual students looking for personalized Islamic education.",
            features: [
                "1-on-1 Personalized Classes",
                "Qualified Teachers",
                "Flexible Scheduling",
                "Detailed Progress Reports",
                "All Subjects Included"
            ],
            icon: <User className="text-[#EAB308]" size={24} />,
            highlight: false,
            buttonText: "Get Started"
        },
        {
            name: "Family Package",
            price: "100",
            period: "for 4 persons",
            description: "Best value for families. Enroll 4 people and pay for only 3—one person is free!",
            features: [
                "4 Students Included",
                "Save $20 Monthly",
                "Dedicated Family Support",
                "Individual Study Plans",
                "Shared Billing Dashboard",
                "1 Person Completely FREE"
            ],
            icon: <Users className="text-white" size={24} />,
            highlight: true,
            buttonText: "Enroll Family"
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#064E3B]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#EAB308]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#064E3B] font-black text-xs uppercase tracking-[0.3em] mb-4 block">Fair & Simple Pricing</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tighter font-serif">
                        Invest in Your <span className="text-[#064E3B]">Future</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        High-quality Islamic education should be accessible to everyone. We offer competitive rates and special family discounts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 md:p-12 rounded-[2.5rem] border-2 transition-all duration-500 hover:scale-[1.02] ${plan.highlight
                                ? "bg-[#064E3B] border-[#064E3B] text-white shadow-2xl shadow-emerald-900/20"
                                : "bg-gray-50 border-gray-100 text-gray-900"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#EAB308] text-black text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                                    Best Value & Most Popular
                                </div>
                            )}

                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${plan.highlight ? "bg-white/10" : "bg-white shadow-sm"}`}>
                                    {plan.icon}
                                </div>
                                <h3 className={`text-2xl font-bold tracking-tight font-serif ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-5xl md:text-6xl font-black tracking-tighter ${plan.highlight ? "text-white" : "text-gray-900"}`}>${plan.price}</span>
                                    <span className={`text-lg font-medium ${plan.highlight ? "text-white/60" : "text-gray-500"}`}>/{plan.period.split(' ')[0]}</span>
                                </div>
                                <div className={`mt-2 text-sm font-bold uppercase tracking-wider ${plan.highlight ? "text-[#EAB308]" : "text-[#064E3B]"}`}>
                                    {plan.period}
                                </div>
                            </div>

                            <p className={`mb-10 leading-relaxed ${plan.highlight ? "text-white/80" : "text-gray-600"}`}>
                                {plan.description}
                            </p>

                            <ul className="space-y-4 mb-12">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3">
                                        <div className={`p-1 rounded-full ${plan.highlight ? "bg-white/20 text-[#EAB308]" : "bg-[#064E3B]/10 text-[#064E3B]"}`}>
                                            <Check size={14} strokeWidth={4} />
                                        </div>
                                        <span className={`font-medium ${plan.highlight ? "text-white/90" : "text-gray-700"}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={openModal}
                                className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${plan.highlight
                                    ? "bg-[#EAB308] text-black hover:bg-white hover:text-[#064E3B] shadow-xl shadow-yellow-900/20"
                                    : "bg-[#064E3B] text-white hover:bg-black shadow-lg shadow-emerald-900/10"
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl">
                        <Rocket className="text-[#064E3B]" size={20} />
                        <span className="text-gray-700 font-medium">Ready to start? The first session is <span className="font-bold text-[#064E3B]">completely free</span>. No commitment required.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
