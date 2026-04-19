"use client"; // Required for state in Next.js
import React, { useState } from "react"; // Import React and useState
import Link from "next/link"; // Import Link for navigation
import { SearchIcon } from "@/components/ui/Search"; // Import Search Icon
import { CartIcon } from "@/components/ui/Cart"; // Import Cart Icon
import CloseIcons from "@/components/ui/Close";


const TopNav = () => { // Define component
  const nav = [ // Nav items array
    { id: "id1", title: "Home", href: "/" }, // Home link
    { id: "id2", title: "Products", href: "/" }, // Products link
    { id: "id3", title: "Contact US", href: "/" }, // Contact link
  ];
  const [isOpen, setIsOpen] = useState(false); // State to track if search is open

  return ( // UI Layout
    <header className="sticky top-0 w-full bg-white/0 backdrop-blur-md shadow-sm z-50"> {/* Header container */}
      <div className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto"> {/* Main wrapper */}
        <nav className="flex justify-between items-center gap-6 font-playfair"> {/* Left Nav links */}
          {nav.map((item) => ( // Loop through links
            <Link key={item.id} href={item.href} className="hover:text-accent duration-300"> {/* Link item */}
              {item.title} {/* Link text */}
            </Link>
          ))}
        </nav>

        <div className="font-semibold tracking-[-0.02em]"> {/* Center Logo */}
          <Link href={"/"}> {/* Logo link */}
            <h4>Heritage Threads</h4> {/* Brand name */}
          </Link>
        </div>

        <div className="flex justify-end items-center gap-2"> {/* Right side icons */}
          {/* Main search container: we keep this always, just toggle the border/padding */}
          <div className={`flex items-center transition-all duration-500 ease-in-out ${isOpen ? "border border-border rounded-full px-2 py-1" : "border-transparent"}`}> 
            
            <div className="cursor-pointer px-4" onClick={() => setIsOpen(true)}> {/* Click to open */}
              <SearchIcon /> {/* Search Icon */}
            </div>

            {/* Instead of {isOpen && ...}, we use classes to hide/show width and opacity */}
            <div className={`flex items-center overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-w-xs opacity-100 ml-2" : "max-w-0 opacity-0 ml-0"}`}> 
              <input
                type="text" // Input type
                placeholder="Search" // Placeholder
                className="outline-none bg-transparent text-base w-40" // Styling
              />
              <div className="text-muted-text cursor-pointer ml-1" onClick={() => setIsOpen(false)}> {/* Click to close */}
                <CloseIcons /> {/* Close Icon */}
              </div>
            </div>
          </div>

          <div className="w-fit"> {/* Cart wrapper */}
            <CartIcon /> {/* Cart Icon */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav; 

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { SearchIcon } from "@/components/ui/Search";
// import { CartIcon } from "@/components/ui/Cart";
// import { CloseIcons } from "@/components/ui/Close";

// const TopNav = () => {
//   const nav = [
//     {
//       id: "id1",
//       title: "Home",
//       href: "/",
//     },
//     {
//       id: "id2",
//       title: "Products",
//       href: "/",
//     },
//     {
//       id: "id3",
//       title: "Contact US",
//       href: "/",
//     },
//   ];
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <header className="sticky top-0 w-full bg-white/0  backdrop-blur-md shadow-sm z-50">
//       {/* wrap */}
//       <div className=" flex  justify-between items-center px-12 py-6  max-w-screen-2xl mx-auto ">
//         <nav className="flex justify-between items-center gap-6 font-playfair">
//           {nav.map((item) => (
//             <Link
//               key={item.id}
//               href={item.href}
//               className="hover:text-accent active:text-accent duration-300 transition-colors"
//             >
//               {item.title}
//             </Link>
//           ))}
//         </nav>
//         {/* logo */}
//         <div className="font-semibold tracking-[-0.02em] ">
//           <Link href={"/"}>
//             <h4>Heritage Threads</h4>
//           </Link>
//         </div>

//         {/* svgs */}
//         <div className=" flex justify-end items-center gap-2 ">
//           <div
//             className={`flex justify-start items-center transition-all duration-500 ease-in-out  ${isOpen ? " border border-border  rounded-full px-2 py-1 ":"border-transparent"} `}
//             // className={`  ${isOpen && " border border-border  rounded-full cursor-pointer  flex justify-start items-center gap-2 px-2 py-1 "} `}
//           >
//             <div className={`cursor-pointer `} onClick={() => setIsOpen(true)}>
//             {/* <div className={`cursor-pointer ${!isOpen?"px-6":"px-0"}`} onClick={() => setIsOpen(true)}> */}
//               <SearchIcon />
//             </div>

//             {isOpen && (
//               <div className={` flex items-center overflow-hidden transition-all duration-500 ease-in-out ${isOpen?"max-w-xs opacity-100 ml-2":"max-w-0 opacity-0 ml-0"}`}>
//                 <input
//                 name="search"
//                   type="text"
//                   placeholder="Search"
//                   // className={` outline-none transition-all duration-500 ease-in-out focus:text-heading text-base ${isOpen?"w-full max-w-60 opacity-100 ml-2":"w-0 opacity-0 ml-0"} `}
//                 className="outline-none focus:text-heading text-base bg-transparent w-40"
//                 />
//                 <div className="text-accent cursor-pointer " onClick={()=> setIsOpen(false)} >
//                   <CloseIcons />
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="w-fit">
//             <CartIcon />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopNav;
