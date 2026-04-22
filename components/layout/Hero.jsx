import React from "react";
import Image from "next/image";
import HeroImg from "@/assets/hero/hero.png";
import MainBtn from "../ui/MainBtn";

const Hero = () => {
  return (
    <section className="h-screen">
      {/* wrap */}
      <div className=" flex  justify-between items-center gap-6 ">
        {/* img */}
        <Image
          src={HeroImg}
          className="max-w-2/3 w-full "
          alt="hero background"
          loading="eager"
        />

        {/* body */}
        <div className="max-w-1/3 w-full flex flex-col gap-2 lg:gap-6 items-start ">
          <h1 className="text-5xl font-semibold">
            Carry a 3,000year-old <span className="text-primary">legacy</span>{" "}
            in your pocket.
          </h1>

          <MainBtn MainClass={" text-white bg-primary "} hoverClass={"bg-primary-hover"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
