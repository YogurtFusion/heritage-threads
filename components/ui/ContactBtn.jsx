import React from "react";
import Link from "next/link";
import ChatBubble from "../Icons/ChatBubble";

const ContactBtn = ({title ,  mainClass, textHover, hoverClass,  href }) => {
  return (
<Link href={href}>
    <div
      className={`group/btn uppercase relative ${mainClass} px-4 py-3 w-fit tracking-wide text-sm cursor-pointer selection:bg-transparent selection:text-Contact ease-in-out  lg:duration-300 transition-all overflow-hidden text-body`}
      >
    
      <p className={`relative z-10 ${textHover}   lg:duration-300 flex gap-2`}> <ChatBubble/> {title}
      </p>
    
      <div
        className={`absolute ${hoverClass}  inset-0  lg:duration-300 transition-all -translate-x-full group-active/btn:translate-x-0 group-hover/btn:translate-x-0 ease-in-out`}
        ></div>
    </div>
        </Link>
  );
};

export default ContactBtn;
