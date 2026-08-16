import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import Process from "../components/Process";
import WhyUs from "../components/WhyUs";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Process />
      <WhyUs />
      <CTA />
    </>
  );
}