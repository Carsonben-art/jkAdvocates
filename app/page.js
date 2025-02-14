import CoreValues from "@/components/home/CoreValues";
import Hero from "@/components/home/Hero";
import IndustriesSection from "@/components/home/IndustriesSection";
import LawyerSection from "@/components/home/LawyerSection";

export default function Home() {
  return (
    <div >
      <Hero />
      <CoreValues />
      <LawyerSection />
      <IndustriesSection />
    </div>
  );
}
