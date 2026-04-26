"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SearchIcon } from "@/components/Icons/SearchIcon";
import { CartIcon } from "@/components/Icons/CartIcon";
import CloseIcons from "@/components/ui/Close";
import { usePathname } from "next/navigation";
import MenuIcon from "@/components/Icons/MenuIcon";

const TopNav = () => {
  const pathname = usePathname();
  const nav = [
    {
      id: "id1",
      title: "Home",
      href: "/",
    },
    {
      id: "id2",
      title: "Products",
      href: "/collection",
    },
    {
      id: "id4",
      title: "About US",
      href: "/about",
    },
    {
      id: "id3",
      title: "Contact US",
      href: "/contact",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 w-full bg-white/5  backdrop-blur-md shadow-md  z-50 ">
      {/* wrap */}
      <div className=" flex  justify-between items-center px-6 md:px-12 py-3  max-w-screen-2xl mx-auto min-h-14 ">
        <nav className=" hidden md:flex justify-between items-center gap-6 font-playfair">
          {nav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`hover:text-secondary active:text-secondary duration-300 transition-colors text-sm ${pathname === item.href ? "text-primary font-semibold" : "text-body-text hover:text-primary"}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <nav className="md:hidden text-heading ">
    <MenuIcon/>
        </nav>
        {/* logo */}

        <Link
          className="absolute left-1/2 -translate-x-1/2 font-playfair font-semibold text-xl  tracking-tight hover:text-primary transition-colors "
          href={"/"}
        >
          Heritage Threads
        </Link>

        {/* Right Icons */}
        <div className=" flex justify-end items-center gap-1 ">
          <div
            className={`flex justify-start items-center transition-all duration-500 ease-in-out h-9  ${
              isOpen
                ? " border border-border  rounded-full px-2  "
                : "border-transparent px-0"
            } `}
          >
            <button
              className={`p-2 hover:opacity-70 transition-opacity rounded-full hover:bg-border/30`}
              aria-label="Open search"
              onClick={() => setIsOpen(true)}
            >
              {/* <div className={`cursor-pointer ${!isOpen?"px-6":"px-0"}`} onClick={() => setIsOpen(true)}> */}
              <SearchIcon />
            </button>

            <div
              className={` flex items-center overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen
                  ? "max-w-xs opacity-100 ml-1"
                  : "max-w-0 opacity-0 ml-0 pointer-events-none"
              }`}
            >
              <input
                ref={inputRef}
                name="search"
                type="text"
                placeholder="Search"
                className="outline-none text-sm bg-transparent w-32 placeholder:text-muted-text focus:text-heading"
              />
              <button
                aria-label="close search"
                className="text-muted-text hover:text-heading p-1 transition-colors  cursor-pointer hover:bg-border/30 rounded-full  "
                onClick={() => setIsOpen(false)}
              >
                <CloseIcons />
              </button>
            </div>
          </div>
          <button
            aria-label="cart"
            className="p-2 hover:opacity-70 rounded-full hover:bg-border/30 transition-opacity "
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
