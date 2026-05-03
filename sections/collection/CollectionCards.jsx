import React from "react";
import ProductDetailsPage from "@/app/Preview/page";
import AddCartBtn from "@/components/ui/AddCartBtn";
import Image from "next/image";
import Link from "next/link";

export const CollectionCards = ({ img, title, price ,index}) => {
  return (
    <article className="group flex flex-col">
      <Link href={"/productPreview"}>
        <div className="relative aspect-4/5 bg-[#1C2628] mb-5 overflow-hidden">
          <Image
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
            priority={index < 3}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={"eager"}
          />
        </div>
      </Link>
      <h3 className="font-playfair text-xl text-heading mb-1">{title}</h3>
      <p className="text-sm text-muted-text mb-4">₹{price} </p>

      <AddCartBtn />
    </article>
  );
};
