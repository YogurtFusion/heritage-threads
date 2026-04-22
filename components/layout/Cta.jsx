import React from "react";
import Image from "next/image";
import CtaBg from "@/assets/cta/cta-bg.png";
import MainBtn from "../ui/MainBtn";

const Cta = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-body ">
      <div className=" absolute inset-0 z-0 w-full h-full">
        <Image
          src={CtaBg}
          className=" object-center object-cover"
          alt="background image of cta"
          fill
          priority
          sizes="100vw"
        />
        <div className=" absolute inset-0  bg-black/40 backdrop-brightness-70 "></div>
        {/* <div className=" absolute inset-0  bg-[#92271B]/20 brightness-75 "></div> */}
      </div>

      {/* content */}

      <div className="relative z-10 flex justify-center items-center  gap-8 flex-col h-full">
        <h2 className="text-white text-center text-6xl leading-[100%] w-full max-w-xl">
          Own a <span className="text-secondary" >piece</span>  of the story.
        </h2>
        <div className="relative">
          <p className=" relative z-10 text-white text-center text-lg font-light w-full max-w-xl ">
            Every purchase supports our community of 40+ women artisans in
            Madhubani, preserving their heritage for generations to come.
          </p>
          <div className=" z-0 absolute bg-heading/30 inset-0 blur-md"></div>
        </div>
        <MainBtn
        MainClass={" bg-body text-secondary "}
        HoverClass={"bg-card"}
        TextHover={"group-hover:text-secondary  "}
        />
      </div>
    </section>
  );
};

export default Cta;
