'use client'
import React, { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
  const [isScrolledPastCarousel, setIsScrolledPastCarousel] = useState(false);

  useEffect(() => {
    const carousel = document.getElementById("carousel");
    if (!carousel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledPastCarousel(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" } 
    );

    observer.observe(carousel);

    return () => observer.disconnect();
  }, []);


  return (
    <header className={`header ${isScrolledPastCarousel ? "scrolled" : ""}`}>
      <nav className="nav">
        <ul className="w-full flex justify-end px-6 py-4">
          <li href="#home" className="nav-link">Home</li>
          <li href="/About" className="nav-link">About</li>
          <li href="#home" className="nav-link">Service</li>
          <li href="#home" className="nav-link">Contact</li>
          <button className=" text-[30px] px-6 py-4 text-white font-medium rounded-full bg-gradient-to-r from-red-600 to-neutral-800">
  Contact Us
</button>

        </ul>
        
      </nav>
    </header>
  );
}

export default Header;
