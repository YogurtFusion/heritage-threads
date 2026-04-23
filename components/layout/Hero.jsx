import React from "react";
import Image from "next/image";
import HeroImg from "@/assets/hero/hero.png";
import MainBtn from "../ui/MainBtn";

const Hero = () => {
  return (
    // Added relative, flex, and md:flex-row to handle the layout transition
    <section className="relative flex flex-col md:flex-row items-center justify-between w-full h-screen overflow-hidden">
      
      {/* Mobile: absolute inset-0 and -z-10 makes it a background covering the section.
        Desktop (md:): static resets it to a normal element, w-2/3 takes up 66% width.
      */}
      <Image
        src={HeroImg}
        alt="hero background"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover -z-10 md:static md:w-2/3 md:h-auto md:object-contain"
      />

      {/* Mobile: relative z-10 keeps text above the image, centered. 
        Desktop (md:): w-1/3 takes remaining space, aligns left.
      */}
      <div className="relative z-10 w-full flex flex-col items-center text-center p-6 md:w-1/3 md:items-start md:text-left md:p-0 md:pr-12">
        
        {/* Mobile: bg-white/80 adds a frosted glass effect so text is readable over the image. 
          Desktop (md:): bg-transparent removes the box since it sits on the normal background.
        */}
        <div className="bg-white/80 p-6 rounded-xl md:bg-transparent md:p-0 md:rounded-none flex flex-col items-center md:items-start gap-4">
          
          {/* Scaled text down slightly for mobile screens (text-4xl), back to 5xl on desktop */}
          <h1 className="text-4xl md:text-5xl font-semibold">
            Carry a 3,000-year-old <span className="text-primary">legacy</span> in your pocket.
          </h1>

          <MainBtn MainClass={"text-white bg-primary"} HoverClass={"bg-primary-hover"} />
        </div>

      </div>
    </section>
  );
};

export default Hero;