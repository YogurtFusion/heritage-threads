import { useState, useEffect } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [heroSlide1, heroSlide2, heroSlide3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
        {/* Left - Static text */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] text-foreground">
            Carry a 3,000-year-old legacy in your pocket
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground font-body leading-relaxed max-w-md">
            Each piece is hand-painted by Mithila artisans using techniques passed down through generations. No two are alike.
          </p>
          <div>
            <a
              href="#trending"
              className="inline-block bg-foreground text-primary-foreground px-8 py-3.5 text-xs font-body tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
            >
              Explore Collection
            </a>
          </div>
        </div>

        {/* Right - Image slider with fade */}
        <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden">
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Madhubani art product"
              width={960}
              height={1080}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
              {...(i === 0 ? {} : { loading: "lazy" as const })}
            />
          ))}
          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-8 h-0.5 transition-colors ${
                  i === current ? "bg-foreground" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
