import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import WhyChokoLa from "@/components/WhyChokoLa";
import BestSellers from "@/components/BestSellers";
import SolarLights from "@/components/SolarLights";
import OfferingsSection from "@/components/OfferingsSection";
import GiftsSection from "@/components/GiftsSection";
import CorporateBanner from "@/components/CorporateBanner";
import WorldOfChokoLa from "@/components/WorldOfChokoLa";
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
        {/* <BestSellers /> */}
        <SolarLights />
        <OfferingsSection />
        <GiftsSection />
        <CorporateBanner />
        <WorldOfChokoLa />
        <Testimonials />
        <StoreLocations />
        <FeaturesBar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
