import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import { courses } from "@/lib/data";
import { GraduationCap, Globe, ShieldCheck, Trophy } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Students", value: "1000+", icon: <GraduationCap className="text-primary" /> },
    { label: "Scholars", value: "25+", icon: <ShieldCheck className="text-primary" /> },
    { label: "Global Reach", value: "20+", icon: <Globe className="text-primary" /> },
    { label: "Years of Trust", value: "7+", icon: <Trophy className="text-primary" /> },
  ];

  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Navbar />
      <Hero />

      {/* Trust Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 bg-emerald-50/5 p-12 rounded-[3rem] border border-emerald-100/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6 transition-transform duration-500 group-hover:-translate-y-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-primary/60 font-black text-[10px] uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8">
            <div className="text-center md:text-left">
              <span className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-4 block">Academy Programs</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tighter font-serif">Featured Courses</h2>
              <p className="text-[var(--foreground)]/70 max-w-xl text-lg leading-relaxed">Excellence in education, guided by the Light of the Qur’an.</p>
            </div>
            <a href="/courses" className="btn-outline py-4 px-10 text-sm font-black uppercase tracking-widest flex items-center gap-3">
              View All Programs <span>→</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Teaching Method */}
      <section className="py-32 bg-[var(--background)] text-[var(--foreground)] overflow-hidden relative border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-4 block">Instructional Path</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter font-serif text-primary">Why Choose Us</h2>
            <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto text-lg leading-relaxed">Experience quality Islamic education with modern teaching methods and traditional values</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { title: "Personal Assessment", desc: "A rigorous initial evaluation of recitation, tajweed, and level to ensure precise placement." },
              { title: "Individualized Plan", desc: "Each student follows a unique academic roadmap tailored to their pace and objectives." },
              { title: "Scholarly Oversight", desc: "Weekly evaluations by senior instructors to maintain the highest standards of accuracy." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center md:items-start group">
                <div className="w-16 h-16 bg-primary/5 border border-primary/20 rounded-2xl flex items-center justify-center mb-10 text-2xl font-black text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight font-serif text-[var(--foreground)]">{item.title}</h3>
                <p className="text-[var(--foreground)]/70 leading-relaxed text-center md:text-left">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative flair */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(6,78,59,0.03),transparent_50%)]"></div>
      </section>

      <FAQ />

      <Pricing />

      <CTA />
      <Footer />
    </main>
  );
}
