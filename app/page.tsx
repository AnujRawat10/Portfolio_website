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

      <ProductsForPets
        products={[
          {
            id: 1,
            name: "Kyroi – Shampoo",
            price: 20,
            currency: "USD",
            type: "Physical",
            image: "/ProductsForPets/p1.jpg",
            href: "/product/kyroi-1",
          },
          {
            id: 2,
            name: "Moly Moly – Shampoo",
            price: 20,
            currency: "USD",
            type: "Physical",
            image: "/ProductsForPets/p2.jpg",
            href: "/product/moly-1",
          },
        ]}
        viewAllHref='/shop'
        onAddToCart={(p) => console.log("Add to cart:", p)}
      />

      <InstaPlayingCardsLite
        heading='My Social Media'
        profileUrl='https://www.instagram.com/anujrawat1/'
        items={[
          {
            id: "ig1",
            title: "Reel 1",
            poster: "/insta/1.jpeg",
            shortcode: "DD2lmHEKkwX",
            angle: -10,
            badge: "New",
          },
          {
            id: "ig2",
            title: "Reel 2",
            poster: "/insta/2.jpeg",
            shortcode: "DGkqYy7JsBE",
            angle: 8,
            badge: "Featured",
          },
          {
            id: "ig3",
            title: "Reel 3",
            poster: "/insta/3.jpeg",
            shortcode: "DI9Sb5yypcE",
            angle: -6,
          },
        ]}
      />

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
