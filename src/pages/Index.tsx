import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import WhyChokoLa from "@/components/WhyChokoLa";
import SolarLights from "@/components/SolarLights";
import OfferingsSection from "@/components/OfferingsSection";
import Testimonials from "@/components/Testimonials";
import StoreLocations from "@/components/StoreLocations";
import FeaturesBar from "@/components/FeaturesBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <WhyChokoLa />
        <SolarLights />
        <OfferingsSection />
        <FeaturesBar />
        <Testimonials />
        <StoreLocations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
