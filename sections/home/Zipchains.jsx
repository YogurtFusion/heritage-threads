import React from "react";
import SlideCard from "../../components/ui/SlideCards";
import { Trendingdata, Zipchaindata } from "@/app/data/product";
import MainBtn from "../../components/ui/MainBtn";

const Zipchains = () => {
  return (
    <section>
      {/* wrap */}
      <div className=" bg-body mb-12 lg:mb-28 ">        {/* ḥead */}

        <div className="px-6 lg:px-12 mb-12 flex justify-between items-end">
          <div>
            <span className="uppercase text-primary text-xs font-bold leading-4 tracking-[2.4px] block mb-2">
              CURATED SELECTION
            </span>
            <h2 className="text-heading text-4xl leading-[110%] ">Zipchains</h2>
          </div>
          <div className="">
            <MainBtn
              mainClass={
                "border border-primary text-primary group-hover/btn:text-card px-3 py-2"
              }
              hidden={"hidden  md:block"}
              hoverClass={"bg-primary"}
              textHover={"group-hover/btn:text-card group-active/btn:text-card"}
            href={"/"}
            />
          </div>
        </div>

        {/* cards */}
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory  no-scrollbar px-6 lg:px-12 scroll-px-6 lg:scroll-px-12">
          {Zipchaindata.map((item) => (
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

export default Zipchains;
