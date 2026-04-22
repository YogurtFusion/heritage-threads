import React from "react";

const MainBtn = ({MainClass, TextHover, HoverClass}) => {
  return (
    <div className={`group uppercase relative ${MainClass}   px-3 py-2 w-fit tracking-wide text-sm   cursor-pointer selection:bg-transparent ease-in-out duration-500 transition-all overflow-hidden `} >
     <span className ={`relative z-10 group-hover:text-card  duration-500`} > EXPLORE COLLECTION</span>
      <div className={`absolute ${HoverClass}  inset-0 duration-500 transition-all -translate-x-full group-hover:translate-x-0 ease-in-out`}   ></div>
    </div>
  );
};

export default MainBtn;
