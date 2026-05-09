import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StoreExperience from "@/components/StoreExperience";
import EditorialBand from "@/components/EditorialBand";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StoreExperience />
        <EditorialBand />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
