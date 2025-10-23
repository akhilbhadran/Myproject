// src/app/page.js
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}
