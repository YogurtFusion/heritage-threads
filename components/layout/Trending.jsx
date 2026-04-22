import React from "react";
import SlideCard from "../ui/SlideCards";
import Img1 from "@/assets/Trending/img1.png";
import Img2 from "@/assets/Trending/img2.png";
import Img3 from "@/assets/Trending/img3.png";

const data = [
  {
    id: "id1",
    title: "The Sun God Medallion",
    subhead: "Natural pigment on calfskin",
    img: Img1,
    price: 300,
  },
  {
    id: "id2",
    title: "Aruna Peacock Zip Pull",
    subhead: "Hand-etched brass detailing",
    img: Img2,
    price: 300,
  },
  {
    id: "id3",
    title: "Tree of Life Keychain",
    subhead: "Sustainably sourced leather",
    img: Img3,
    price: 300,
  },
  {
    id: "id4",
    title: "Tree of Life Keychain",
    subhead: "Sustainably sourced leather",
    img: Img3,
    price: 300,
  },
  {
    id: "id5",
    title: "Tree of Life Keychain",
    subhead: "Sustainably sourced leather",
    img: Img3,
    price: 300,
  },
  {
    id: "id6",
    title: "Tree of Life Keychain",
    subhead: "Sustainably sourced leather",
    img: Img3,
    price: 300,
  },
  {
    id: "id7",
    title: "Tree of Life Keychain",
    subhead: "Sustainably sourced leather",
    img: Img3,
    price: 300,
  },
  {
    id: "id8",
    title: "Tree of Life Keychain",
    subhead: "Sustainably sourced leather",
    img: Img3,
    price: 300,
  },
  {
    id: "id9",
    title: "Tree of Life Keychain",
    subhead: "Sustainably sourced leather",
    img: Img3,
    price: 300,
  },
];

const Trending = () => {
  return (
    <section>
      {/* wrap */}
      <div className=" bg-body py-28 ">
        {/* ḥead */}
        <div className="px-6 lg:px-12 mb-12">
          <span className="uppercase text-primary text-xs font-bold leading-4 tracking-[2.4px] block mb-2">
            CURATED SELECTION
          </span>
          <h2 className="text-heading text-4xl leading-[110%] ">
            Trending Now
          </h2>
        </div>

        {/* cards */}
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory  no-scrollbar px-6 lg:px-12 scroll-px-6 lg:scroll-px-12">
          {data.map((item) => (
            <div
              key={item.id}
              className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[25vw] snap-start  "
            >
              <SlideCard {...item} />
            </div>
          ))}

        </div>
        <div className="min-w-[1px] h-1" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default Trending;
