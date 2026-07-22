import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Specialties } from "@/components/Specialties";
import { Testimonials } from "@/components/Testimonials";
import { WhatsappButton } from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip bg-white">
        <Hero />
        <Specialties />
        <Benefits />
        <About />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
