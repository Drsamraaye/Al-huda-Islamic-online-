"use client";

import Link from "next/link";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";

interface CourseCardProps {
    title: string;
    slug: string;
    description: string;
    duration: string;
    image: string;
}

export default function CourseCard({ title, slug, description, duration, image }: CourseCardProps) {
    const { openModal } = useBooking();
    return (
        <div className="card h-full flex flex-col group border-primary/10 hover:border-primary/40 shadow-xl shadow-black/[0.02] transition-all duration-500 rounded-[2rem]">
            <div className="relative h-56 w-full mb-8 overflow-hidden rounded-[1.5rem] bg-primary/5 border border-primary/10 p-4">
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/40 to-transparent"></div>
                </div>
            </div>
            <div className="px-4 pb-4 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-black mb-4 text-primary font-serif leading-tight group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-[var(--foreground)]/70 text-sm mb-8 leading-relaxed flex-grow">{description}</p>
                <div className="flex items-center justify-center gap-4 mt-auto pt-6 border-t border-primary/10">
                    <span className="text-[10px] font-black text-primary bg-primary/10 px-4 py-2 rounded-full uppercase tracking-widest">{duration}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Link href={`/courses/${slug}`} className="btn-outline py-3 text-xs font-bold uppercase tracking-widest text-center">
                        Details
                    </Link>
                    <button
                        onClick={openModal}
                        className="w-full bg-primary text-[var(--background)] py-3 rounded-lg text-xs font-black uppercase tracking-widest text-center hover:opacity-90 transition-all font-sans"
                    >
                        Enroll
                    </button>
                </div>
            </div>
        </div>
    );
}
