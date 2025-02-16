import CoreValues from "@/components/home/CoreValues";
import Hero from "@/components/home/Hero";
import IndustriesSection from "@/components/home/IndustriesSection";
import LawyerSection from "@/components/home/LawyerSection";
import StatsSection from "@/components/home/StatsSection";

export default function Home() {
  return (
    <div >
      <Hero />
      <CoreValues />
      <LawyerSection />
      <IndustriesSection />
      <StatsSection />
    </div>
  );
}
