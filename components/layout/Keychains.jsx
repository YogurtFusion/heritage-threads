import React from "react";
import SlideCard from "../ui/SlideCards";
import { Keychaindata, Trendingdata } from "@/app/data/product";
import MainBtn from "../ui/MainBtn";

const Keychain = () => {
  return (
    <section className="bg-body">
      {/* wrap */}
      <div className="  py-12 md:py-28 ">
        {/* ḥead */}

        <div className="px-6 lg:px-12 mb-12 flex justify-between items-end">
          <div>
            <span className="uppercase text-primary text-xs font-bold leading-4 tracking-[2.4px] block mb-2">
              CURATED SELECTION
            </span>
            <h2 className="text-heading text-4xl leading-[110%] ">Keychains</h2>
          </div>
          <div className="">
            <MainBtn
              MainClass={
                "border border-primary text-primary group-hover:text-card"
              }
              hidden={"hidden  md:block"}
              HoverClass={"bg-primary"}
              TextHover={"group-hover:text-card"}
            />
          </div>
        </div>

        {/* cards */}
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory  no-scrollbar px-6 lg:px-12 scroll-px-6 lg:scroll-px-12">
          {Keychaindata.map((item) => (
            <div
              key={item.id}
              className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[25vw]"
            >
              <SlideCard {...item} />
            </div>
          ))}

          <div className="min-w-[1px] h-1" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
};

export default Keychain;
