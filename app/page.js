import Footer from "@/components/Footer";
import AdSection from "@/components/home/AdSection";
import CoreValues from "@/components/home/CoreValues";
import Hero from "@/components/home/Hero";
import IndustriesSection from "@/components/home/IndustriesSection";
import LawyerSection from "@/components/home/LawyerSection";
import StatsSection from "@/components/home/StatsSection";
import TeamSection from "@/components/home/TeamSection";
import TrustSection from "@/components/home/TrustSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div >
      {/* <Navbar /> */}
      <Hero />
      <CoreValues />
      <LawyerSection />
      <IndustriesSection />
      <StatsSection />
      <AdSection />
      <TrustSection />
      <TeamSection />
      {/* <Footer /> */}
    </div>
  );
}
