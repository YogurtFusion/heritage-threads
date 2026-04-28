import React from "react";

export default function  AddCartBtn  () {
  return (
    <button aria-label="add to cart button"
      className={`group uppercase relative flex justify-center items-center  bg-transparent border border-black text-heading w-full tracking-wide text-sm px-6 py-2  cursor-pointer selection:bg-transparent overflow-hidden mx-auto`}
    >
      <span className="relative z-10 inset-0 mx-auto group-active:text-body group-hover:text-body  lg:duration-500 transition-all">Add to cart</span>
      <div className="absolute bg-heading   inset-0  lg:duration-500 transition-all -translate-x-full group-active:translate-x-0 group-hover:translate-x-0 ease-in-out"></div>
    </button>
  );
};


