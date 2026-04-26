import React from "react";
import SlideCard from "../../components/ui/SlideCards";
import { Trendingdata } from "@/app/data/product";
import MainBtn from "../../components/ui/HomeBtn";

const Trending = () => {
  return (
    <section className="bg-body">
      {/* wrap */}
      <div className="  my-12 lg:my-28 ">
        {/* ḥead */}

        <div className="px-6 lg:px-12 mb-12 flex flex-row justify-between   items-end">
          <div>
            <span className="uppercase text-primary text-xs font-bold leading-4 tracking-[2.4px] block mb-2">
              CURATED SELECTION
            </span>
            <h2 className="text-heading text-4xl leading-[110%] ">
              Trending
            </h2>
          </div>
          <div className=" ">
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
          {Trendingdata.map((item) => (
            <div
              key={item.id}
              className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[25vw]"
            >
              <SlideCard {...item} />
            </div>
          ))}

          <div className="min-w-px h-1" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
