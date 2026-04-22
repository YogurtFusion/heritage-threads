import React from "react";

const MainBtn = ({MainClass, hoverClass}) => {
  return (
    <div className={`group uppercase relative ${MainClass} px-3 py-2 w-fit tracking-wide text-sm   cursor-pointer selection:bg-transparent overflow-hidden`} >
     <span className="relative z-10"> EXPLORE COLLECTION</span>
      <div className={`absolute ${hoverClass} inset-0 duration-500 transition-all -translate-x-full group-hover:translate-x-0`}   ></div>
    </div>
  );
};

export default MainBtn;
