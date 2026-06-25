import Hero from "@/components/sections/Hero";
import Join from "@/components/sections/Join";
import Product from "@/components/sections/Product";
import SectionAccordion from "@/components/sections/SectionAccordion";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <SectionAccordion />
      <Join />
      <Testimonials />
    </>
  );
}
