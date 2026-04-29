import AddCartBtn from "@/components/ui/AddCartBtn";
import Image from "next/image";
import React from "react";

export const CollectionCards = ({ img, title, price }) => {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-4/5 bg-[#1C2628] mb-5 overflow-hidden">
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
        />
      </div>
      <h3 className="font-playfair text-xl text-heading mb-1">{title}</h3>
      <p className="text-sm text-muted-text mb-4">₹{price} </p>
      <AddCartBtn />
    </article>
  );
};
