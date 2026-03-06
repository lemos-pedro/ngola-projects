import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <PricingSection />
      </div>
      <Footer />
    </div>
  );
}
