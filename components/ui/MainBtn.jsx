import React from "react";

const MainBtn = () => {
  return (
    <div className="group uppercase relative text-white bg-primary w-fit tracking-wide text-sm px-3 py-2  cursor-pointer selection:bg-transparent overflow-hidden ">
     <span className="relative z-10"> EXPLORE COLLECTION</span>
      <div className="absolute bg-primary-hover inset-0 duration-500 transition-all translate-x-full group-hover:translate-x-0   "></div>
    </div>
  );
};

export default MainBtn;
