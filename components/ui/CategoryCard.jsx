import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ img ,title}) => {
  return (
    <Link href={"/"} className="group relative w-full h-full aspect-[4/5] overflow-hidden cursor-pointer ">
      <Image
        src={img}
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        fill
        alt="category image"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Text */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-80 "/>
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <h3 className=" relative w-fit text-3xl text-white tracking-wide translate-y-2 transition-transform duration-300 group-hover:translate-y-0  ">{title}<span className=" absolute w-0 h-[0.5px] bg-white  transition-all duration-300 group-hover:w-full bottom-0 origin-left left-0 "></span> </h3>

      
      </div>
    </Link>
  );
};

export default CategoryCard;
