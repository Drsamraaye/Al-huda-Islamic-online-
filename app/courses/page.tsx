import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import CTA from "@/components/CTA";
import { courses } from "@/lib/data";

export default function CoursesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="bg-[var(--background)] py-24 text-[var(--foreground)] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <span className="text-accent font-black text-xs uppercase tracking-[0.4em] mb-6 block">Our Curriculum</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter font-serif">Sacred Knowledge</h1>
                    <p className="text-xl opacity-60 max-w-3xl mx-auto leading-relaxed">
                        Explore our professionally structured programs designed to guide you from foundation to mastery.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {courses.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
