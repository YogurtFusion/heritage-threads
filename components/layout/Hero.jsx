import React from "react";
import Image from "next/image";
import HeroImg from "@/assets/hero/hero.png";
import MobileImg from "@/assets/hero/mobile.png";
import MainBtn from "../ui/MainBtn";

const Hero = () => {
  return (
    <section className=" relative min-h-[80vh] w-full overflow-hidden bg-body">
      {/* wrap */}
      <div className=" relative flex flex-col md:flex-row  justify-between items-center gap-6 w-full h-full  ">
        {/* img */}
        <Image
          src={HeroImg}
          className=" hidden md:block max-w-2/3 w-full h-full object-cover"
          alt="hero background"
          loading="eager"
        />
        <Image
          src={MobileImg}
          className=" absolute inset-0 z-0 w-full h-full object-center object-cover  md:hidden"
          alt="hero background"
          loading="eager"
          fill
        />

        {/* body */}
        <div className=" relative z-10 w-full h-full flex flex-col justify-center items-center gap-4 lg:gap-6 md:items-start text-center md:text-left p-6 md:p-12  md:max-w-1/3 ">
          <h1 className=" text-4xl md:text-5xl font-semibold">
            Carry a 3,000year-old <span className="text-primary">legacy</span>
            in your pocket.
          </h1>

          <MainBtn
            MainClass={" text-white bg-primary "}
            HoverClass={"bg-primary-hover"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
