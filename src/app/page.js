import Navbar from "@/components/common/Navbar";
import About from "@/components/home/About";
import Counter from "@/components/home/Counter";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Service from "@/components/home/Service";
import Testimonial from "@/components/home/Testimonial";
import Work from "@/components/home/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Pricing />
      {/* <Counter /> */}
      {/* <Faq /> */}
      <Work />
      <Testimonial />
      <Footer />

    </>
  );
}
