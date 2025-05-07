import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PromoBanner } from "@/components/PromoBanner";
import { TrendingSection } from "@/components/TrendingSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="netflix-divider" />
        <TrendingSection />
        <PromoBanner />
        <div className="netflix-divider" />
        <FeaturesSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
