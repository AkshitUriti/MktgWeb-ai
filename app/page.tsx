import HeroSection from "@/components/hero-section"; // {{ edit_1 }}
import WhyChooseUsSection from "@/components/why-choose-us-section"; // {{ edit_2 }}
import { Navbar } from "@/components/navbar"; // {{ edit_1 }}
import { ServicesOverview } from "@/components/services-overview"; // {{ edit_1 }}
import { OurProcess } from "@/components/our-process";
import { TeamSection } from "@/components/team-section"; // {{ edit_1 }}
import PricingPlans from "@/components/pricing-plans"; // {{ edit_1 }}
import CreativeContact from "@/components/creative-contact"; // {{ edit_1 }}

export default function Home() {
  return (
    <>
      <Navbar /> {/* {{ edit_2 }} */}
      <HeroSection />      
      <ServicesOverview /> {/* {{ edit_3 }} */}
      <WhyChooseUsSection /> {/* {{ edit_4 }} */}
      <OurProcess />
      <PricingPlans /> {/* {{ edit_5 }} */}
      <TeamSection /> {/* {{ edit_2 }} */}
      <CreativeContact /> {/* {{ edit_6 }} */}
    </>
  );
}
