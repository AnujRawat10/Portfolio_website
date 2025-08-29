"use client";

import { useState } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
// import GameLauncher from "@/app/components/GameLauncher";
import ServicesSection from "./components/ServicesSection";
import ProductsForPets from "./components/ProductsForPets";
import TestimonialsSection from "./components/TestimonialsSection";
// import BeforeAfter from "@/app/components/BeforeAfter";
import InstaPlayingCardsLite from "@/app/components/InstaPlayingCards";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const [bgColor, setBgColor] = useState("#e0ce8a");

  return (
    <div className='min-h-screen'>
      <div className='h-screen flex flex-col'>
        <div className='flex-none'>
          <Navigation currentBgColor={bgColor} />
        </div>
        <div className='flex-1'>
          <HeroSection onBgColorChange={setBgColor} />
        </div>
      </div>

      <ServicesSection />

      <ProductsForPets />

      <TestimonialsSection />
      {/* <BeforeAfter />

// or custom images
<BeforeAfter
  beforeSrc="/beforeafter/dog-before.jpg"
  afterSrc="/beforeafter/dog-after.jpg"
  labelBefore="Before"
  labelAfter="After"
/> */}

      <FAQSection />

      <ContactSection
        heroImage='/contact/hero.jpg'
        badgeImage='/contact/badge.jpg'
        // Optional overrides:
        // eyebrow="Vertic pet solutions"
        // highlight="wellness"
        // panelBg="#cfe8f6"
        // primaryHref="mailto:hello@wouff.com"
        // secondaryHref="#services"
      />

      <Footer />
    </div>
  );
}
