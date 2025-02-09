import { WrapperMarquee } from "@/src/components/magicui/WrapperMarquee";
import FaqComponent from "@/src/myComponents/landingPage/FAQComponent/FaqComponent";
import FeatureCard from "@/src/myComponents/landingPage/FeatureCard/FeatureCard";
import { Hero7 } from "@/src/myComponents/landingPage/heroSection/Hero7";
import { LogoBlock } from "@/src/myComponents/landingPage/logoClient/LogoBlock";
import CustomPricing from "@/src/myComponents/landingPage/pricing/CustomPricing";
import SectionProductImage from "@/src/myComponents/landingPage/sectionProductImage/SectionProductImage";
import { AuroraBackground } from "@/src/myComponents/UI/aurora-background";
import WelcomePageNavBar from "@/src/myComponents/welcomePageNavBar/WelcomePageNavBar";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <WelcomePageNavBar />
      {/* section hero */}
      <main className="mx-auto">
        <div className="flex flex-col">
          <AuroraBackground>
            <Hero7 />
          </AuroraBackground>
          {/* section product image */}
          <section className="w-full px-2">
            <SectionProductImage />
          </section>
          {/* trsut logo */}
          <section className="py-20">
            <LogoBlock />
          </section>
          {/* features sections */}
          <section className="relative w-full" id="features">
            <FeatureCard />
          </section>
          {/* Princing */}
          <section id="pricing">
            <CustomPricing />
          </section>
          {/* Testimonials */}
          <section>
            <WrapperMarquee />
          </section>
          <section>
            <FaqComponent />
          </section>
        </div>
      </main>
    </div>
  );
}
