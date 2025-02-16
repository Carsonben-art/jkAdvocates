import AdSection from "@/components/home/AdSection";
import CoreValues from "@/components/home/CoreValues";
import Hero from "@/components/home/Hero";
import IndustriesSection from "@/components/home/IndustriesSection";
import LawyerSection from "@/components/home/LawyerSection";
import StatsSection from "@/components/home/StatsSection";
import TrustSection from "@/components/home/TrustSection";

export default function Home() {
  return (
    <div >
      <Hero />
      <CoreValues />
      <LawyerSection />
      <IndustriesSection />
      <StatsSection />
      <AdSection />
      <TrustSection />
    </div>
  );
}
