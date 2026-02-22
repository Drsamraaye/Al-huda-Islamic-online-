import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function PricingPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="bg-[var(--background)] py-24 text-[var(--foreground)] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <span className="text-accent font-black text-xs uppercase tracking-[0.4em] mb-6 block">Investment in Deen</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter font-serif">Simple Pricing</h1>
                    <p className="text-xl opacity-60 max-w-3xl mx-auto leading-relaxed">
                        Access high-quality Islamic education with our flexible and transparent pricing plans.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent opacity-[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            </section>

            <Pricing />

            <CTA />
            <Footer />
        </main>
    );
}
