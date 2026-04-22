import Image from "next/image";
import React from "react";
import AddCartBtn from "./AddCartBtn";

export default function SlideCard({ img, title, subhead, price }) {
  return (
    <div className=" flex flex-col gap-6 max-w-200">
      <div className=" relative  w-full aspect-square  overflow-hidden bg-card">
        <Image
          className=" object-center object-cover "
          src={img}
          alt="Sliding images"
          fill
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 40vw, 30vw "
        />
      </div>
      {/* card body */}
      <div className="flex flex-col gap-4">
      <div className=" flex justify-between items-start ">
        <div className="flex flex-col justify-between ">
          <h3 className="text-heading text-xl font-normal leading-[140%] ">
            {title}
          </h3>
          <span className="text-sm font-light leading-[145%] text-muted-text tracking-wide">
            {subhead}
          </span>
        </div>
        <span className="text-primary text-lg leading-[150%] font-medium">
          ₹{price}
        </span>
      </div>
      <div className=" w-full mx-auto">

      <AddCartBtn/>
      </div>
      </div>
    </div>
  );
}
