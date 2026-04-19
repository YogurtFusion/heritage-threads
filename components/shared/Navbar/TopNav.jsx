"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SearchIcon } from "@/components/ui/Search";
import { CartIcon } from "@/components/ui/Cart";
import CloseIcons  from "@/components/ui/Close";

const TopNav = () => {
  const nav = [
    {
      id: "id1",
      title: "Home",
      href: "/",
    },
    {
      id: "id2",
      title: "Products",
      href: "/",
    },
    {
      id: "id3",
      title: "Contact US",
      href: "/",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 w-full bg-white/0  backdrop-blur-md shadow-sm z-50">
      {/* wrap */}
      <div className=" flex  justify-between items-center px-12 py-6  max-w-screen-2xl mx-auto ">
        <nav className="flex justify-between items-center gap-6 font-playfair">
          {nav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="hover:text-accent active:text-accent duration-300 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {/* logo */}
        <div className="font-semibold tracking-[-0.02em] ">
          <Link href={"/"}>
            <h4>Heritage Threads</h4>
          </Link>
        </div>

        {/* Right Icons */}
        <div className=" flex justify-end items-center gap-2 ">
          <div
            className={`flex justify-start items-center transition-all duration-500 ease-in-out  ${
              isOpen
                ? " border border-border  rounded-full px-2 py-1 "
                : "border-transparent"
            } `}
            // className={`  ${isOpen && " border border-border  rounded-full cursor-pointer  flex justify-start items-center gap-2 px-2 py-1 "} `}
          >
            <div
              className={`cursor-pointer px-4 `}
              onClick={() => setIsOpen(true)}
            >
              {/* <div className={`cursor-pointer ${!isOpen?"px-6":"px-0"}`} onClick={() => setIsOpen(true)}> */}
              <SearchIcon />
            </div>

            <div
              className={` flex items-center overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-w-xs opacity-100 ml-2" : "max-w-0 opacity-0 ml-0 pointer-events-none"
              }`}
            >
              <input
                ref={inputRef}
                name="search"
                type="text"
                placeholder="Search"
                // className={` outline-none transition-all duration-500 ease-in-out focus:text-heading text-base ${isOpen?"w-full max-w-60 opacity-100 ml-2":"w-0 opacity-0 ml-0"} `}
                className="outline-none focus:text-heading text-base bg-transparent w-40"
              />
              <div
                className="text-muted-text cursor-pointer ml-1 "
                onClick={() => setIsOpen(false)}
              >
                <CloseIcons />
              </div>
            </div>
          </div>
          <div className="w-fit">
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
