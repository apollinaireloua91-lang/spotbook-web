import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import HowItWorks from "@/components/landing/HowItWorks";
import FeatureGrid from "@/components/landing/FeatureGrid";
import ForPros from "@/components/landing/ForPros";
import Testimonials from "@/components/landing/Testimonials";
import DownloadCTA from "@/components/landing/DownloadCTA";
import CursorGlow from "@/components/ui/CursorGlow";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <FeatureGrid />
        <ForPros />
        <Testimonials />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
