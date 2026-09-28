import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Services from "@/components/Services";
import ServiceAreas from "@/components/ServiceAreas";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <ProofStrip />
      <Services />
      <ServiceAreas />
      <HowItWorks />
      <Pricing />
      <Reviews />
      <FinalCta />
    </main>
  );
}
