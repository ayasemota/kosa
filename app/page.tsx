"use client";

import { useEffect, useRef, useState } from "react";
function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1500 ease-out \
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {children}
    </div>
  );
}

import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Interests from "@/components/Interests";
import Education from "@/components/Education";
import Gallery from "@/components/Gallery";
import Quotes from "@/components/Quotes";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="transition-opacity duration-700 opacity-100">
        <Preloader />
      </div>
    );
  }

  return (
    <main className="min-h-screen p-4 transition-opacity duration-700 opacity-100">
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Interests />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <Quotes />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}
