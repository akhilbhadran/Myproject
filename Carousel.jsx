"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image"; // ✅ Next.js optimized image
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../styles/carousel.css";

const slides = [
  {
    img: "/images/img1.jpg",
    title: "Let's Make Your Space Shine",
    desc: "Let our expert team bring a fresh, shining look to every corner",
  },
  {
    img: "/images/img2.jpg",
    title: "Latest Equipments",
    desc: "Expert cleaning and reliable pest control",
  },
  {
    img: "/images/img3.jpg",
    title: "Cleaning Excellence by Many!",
    desc: "We go above and beyond to deliver impeccable results every time",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  // ✅ Preload images for smooth transitions
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.img;
    });
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay(); // prevent duplicate intervals
    intervalRef.current = setInterval(() => {
      const nextIndex = (current + 1) % slides.length;
      triggerSlide(nextIndex);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [current]);

  const triggerSlide = (index) => {
    if (index === current || isAnimating) return;
    stopAutoPlay();
    setNext(index);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
      setNext(null);
      startAutoPlay();
    }, 2200);
  };

  return (
    <section id="carousel" className="relative w-full">
      <div className="overlay-container fixed top-0 left-0 w-full h-screen z-0">
        {/* ✅ Current Slide */}
        <Image
          key={`current-${current}`}
          src={slides[current].img}
          alt={slides[current].title}
          fill
          priority={current === 0} // preload first image
          className={`carousel-img ${isAnimating ? "outgoing-zoom" : ""} overlay object-cover`}
        />

        {/* ✅ Next Slide during transition */}
        {isAnimating && next !== null && (
          <div className="overlay-container">
            <Image
              key={`next-${next}`}
              src={slides[next].img}
              alt={slides[next].title}
              fill
              className="carousel-img incoming-wipe-left overlay object-cover"
            />
          </div>
        )}

        {/* ✅ Captions */}
        <div className="carousel-caption text-center px-4">
          <div className={`caption-content ${isAnimating ? "animate-captionExit" : ""}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              {slides[current].title}
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/90">{slides[current].desc}</p>
          </div>
          {isAnimating && next !== null && (
            <div className="caption-content animate-captionEnter">
              <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                {slides[next].title}
              </h2>
              <p className="mt-4 text-lg md:text-xl text-white/90">{slides[next].desc}</p>
            </div>
          )}
        </div>

        {/* ✅ Navigation Dots */}
        <div className="carousel-dots flex justify-center gap-2 mt-6 absolute bottom-6 w-full">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => triggerSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`dot w-3 h-3 rounded-full ${
                idx === current ? "bg-white" : "bg-gray-400/60"
              } transition-colors`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
