import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeacherCard from "@/components/TeacherCard";
import CTA from "@/components/CTA";
import { teachers } from "@/lib/data";

export default function TeachersPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="bg-[var(--background)] py-24 text-[var(--foreground)] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <span className="text-accent font-black text-xs uppercase tracking-[0.4em] mb-6 block">The Faculty</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter font-serif">Honored Teachers</h1>
                    <p className="text-xl opacity-60 max-w-3xl mx-auto leading-relaxed">
                        Learn from world-class scholars who bring decades of teaching experience and professional certification.
                    </p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent opacity-[0.02] rounded-full blur-[150px]"></div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {teachers.map((teacher) => (
                            <TeacherCard key={teacher.id} {...teacher} />
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
