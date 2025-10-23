'use client';

import dynamic from "next/dynamic";
import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

// Dynamically load Swiper component (no SSR)
const SwiperComponent = dynamic(() => import("./SwiperComponent"), { ssr: false });

const steps = [
  {
    title: "1. Request & Consultation",
    desc: "Seamless booking and personalized consultation to kickstart your service journey.",
    align: "left",
  },
  {
    title: "2. Site Evaluation",
    desc: "On-site analysis to prepare a tailored cleaning strategy with care.",
    align: "right",
  },
  {
    title: "3. Deep Cleaning",
    desc: "Meticulous deep-cleaning using eco-friendly, advanced equipment.",
    align: "left",
  },
  {
    title: "4. Final Touch & Feedback",
    desc: "Final walkthrough, refinements, and your feedback – to ensure excellence.",
    align: "right",
  },
];

const services = [
  {
    title: "Residential Cleaning",
    desc: "Deep-clean your home using eco-friendly products for a healthier living space.",
    img: "/images/Services_img1.png",
    link: "/services#residential",
  },
  {
    title: "Commercial Cleaning",
    desc: "Maintain a professional workspace with our expert office cleaning services.",
    img: "/images/Services_img2.png",
    link: "/services#commercial",
  },
  {
    title: "Pest Control",
    desc: "Safe, effective pest management tailored to your environment.",
    img: "/images/Services_img3.png",
    link: "/services#pest",
  },
];

const Home = () => {
  return (
    <div className="relative z-10 bg-white rounded-t-[60px] shadow-2xl overflow-hidden">

      {/* About Section */}
      <section className="pt-36 bg-transparent flex justify-center">
        <div className="max-w-3xl w-full px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: easeOut }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h1>
            <div className="mx-auto mb-6">
              <div className="h-1 w-24 bg-red-600 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600">
              Driven by 15+ years of excellence in delivering safe, hygienic, and pest-free spaces across the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <div className="flex flex-col md:flex-row mt-[150px] mb-[150px] gap-6 items-center">
        {/* Text */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: easeOut }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Clean Spaces. Safe Lives – Backed by 15+ Years of Trust.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Al Fateen Cleaning Service & Pest Control is committed to creating cleaner, healthier, and pest-free environments throughout the UAE. 
              With over 15 years of hands-on industry experience and expert leadership, we specialize in delivering reliable, high-quality cleaning 
              and pest control services tailored to residential, commercial, and industrial needs.
            </p>
            <div className="mt-10">
              <a
                href="#about"
                className="text-white text-[18px] font-semibold bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full transition"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/About_img1.jpg"
              alt="Cleaning staff working in a modern interior"
              width={900}
              height={800}
              className="rounded-2xl shadow-lg object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} items-center gap-8 mb-16`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 200 : -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-full md:w-[30%]"
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={500}
                    height={400}
                    className="rounded-xl shadow-md object-cover"
                  />
                </motion.div>
                <motion.div
                  className="md:w-1/2"
                  initial={{ opacity: 0, x: isEven ? -200 : 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <a href={service.link} className="text-red-600 font-medium hover:underline">
                    Learn More →
                  </a>
                </motion.div>
              </div>
            );
          })}

          <div className="flex justify-center mt-20">
            <a
              href="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-semibold rounded-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 transition shadow-lg"
            >
              Explore All Our Services
              <span className="transform group-hover:translate-x-1 transition">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative w-full bg-white overflow-hidden py-32">
        <div className="max-w-6xl mx-auto px-6 text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Signature Cleaning Process</h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Each step is crafted to deliver cleanliness with care and confidence.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[calc(100%-10rem)] w-[2px] bg-gradient-to-b from-red-500 via-red-400 to-transparent z-0" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-40">
          {steps.map((step, index) => {
            const isLeft = step.align === "left";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.4 }}
                className={`flex items-center justify-${isLeft ? "start" : "end"} w-full relative`}
              >
                <div className={`w-1/2 ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-500 mt-2">{step.desc}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-red-600 rounded-full shadow-lg border-[4px] border-white z-10"></div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#eaf6f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-16">Why Choose Us</h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Proven Experience",
                desc: "Led by professionals with UAE Armed Forces backgrounds and certifications, delivering services backed by 15+ years of expertise.",
              },
              {
                title: "Comprehensive Services",
                desc: "From industrial sites to residential homes, we cover it all with specialized cleaning and pest control solutions.",
              },
              {
                title: "Health and Safety Focus",
                desc: "Our practices are designed to protect both human health and the ecosystem, using safe, eco-friendly techniques.",
              },
              {
                title: "Customized Solutions",
                desc: "Every client is unique. We tailor our services to your needs for maximum effectiveness and satisfaction.",
              },
              {
                title: "Commitment to Excellence",
                desc: "At Al Fateen, quality isn’t just a promise — it’s our standard. We ensure professionalism and attention to detail.",
              },
              {
                title: "Affordable Pricing",
                desc: "Premium services at competitive rates, making quality cleaning and pest control accessible.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl shadow-md p-8 pt-20 text-center transition hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg text-3xl">
                  🎖️
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews (Dynamic Swiper) */}
      <section className="bg-white text-center py-24 mb-[100px] mt-[80px]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Customer Reviews</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Hear from our happy customers who trust our cleaning and pest control expertise.
          </p>
        </div>
        <SwiperComponent />
      </section>

      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
