"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SearchIcon } from "@/components/Icons/SearchIcon";
import { CartIcon } from "@/components/Icons/CartIcon";
import CloseIcons from "@/components/ui/Close";
import { usePathname } from "next/navigation";
import MenuIcon from "@/components/Icons/MenuIcon";
import { useCart } from "@/context/cartContext";

const SideNav = () => {
  const pathname = usePathname();
    const { cartCount } = useCart();
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    <>
      <header className="sticky top-0 w-full bg-white/5  backdrop-blur-md shadow-md  z-50 ">
        {/* wrap */}
        <div className=" flex  justify-between items-center px-3 md:px-12 py-3  max-w-screen-2xl mx-auto min-h-14 ">
          <div className="w-10 shrink-0">
            <button
              onClick={() => setIsSidebarOpen(true)}
              aria-label="open true"
              className="text-secondary"
            >
              <MenuIcon />
            </button>
          </div>

          {/* logo */}

          <Link
            className={` flex-1 text-center font-playfair font-semibold tracking-tight hover:text-primary transition-all duration-500 ease-in-out `}
            href={"/"}
          >
            <div className="relative h-7 flex items-center justify-center">
              <span
                className={` absolute transition-all duration-500 whitespace-nowrap text-xl ${isOpen ? "opacity-0 scale-90 -translate-x-4 pointer-events-none" : "opacity-100 scale-100 translate-x-0"}  `}
              >
                Heritage Threads
              </span>
              <span
                className={` transition-all duration-500 text-lg ${isOpen ? "opacity-100 scale-100 translate-x-0" : " opacity-0 scale-75 pointer-events-none  "} `}
              >
                HT
              </span>
            </div>
          </Link>

          {/* Right Icons */}
          <div className=" flex justify-end items-center gap-1 min-w-10 ">
            <div
              className={`flex  items-center transition-all duration-500 ease-in-out h-9   z-10 ${
                isOpen
                  ? " border border-border  rounded-full px-2  "
                  : "border-transparent px-0"
              } `}
            >
              <button
                className={`p-2 active:bg-border/30 hover:bg-border/30 transition-opacity rounded-full text-secondary `}
                aria-label="Open search"
                onClick={() => setIsOpen(true)}
              >
                <SearchIcon />
              </button>

              <div
                className={` flex items-center overflow-hidden transition-all duration-500 ease-in-out  ${
                  isOpen
                    ? "max-w-3xs opacity-100 ml-1  "
                    : "max-w-0 opacity-0 ml-0 pointer-events-none"
                }`}
              >
                <input
                  ref={inputRef}
                  name="search"
                  type="text"
                  placeholder="Search"
                  autoComplete="off"
                  className="outline-none text-sm bg-transparent w-32 placeholder:text-muted-text focus:text-heading"
                />
                <button
                  aria-label="close search"
                  className="text-secondary hover:text-heading p-1 transition-colors  cursor-pointer hover:bg-border/30 rounded-full  "
                  onClick={() => setIsOpen(false)}
                >
                  <CloseIcons />
                </button>
              </div>
            </div>
            <Link
              href={"/cart"}
              aria-label="cart"
              className=" relative p-2 active:opacity-70 hover:opacity-70 rounded-full text-secondary hover:bg-border/30 transition-opacity "
            >
                <CartIcon />
            {cartCount>0&&(
              <span className="absolute top-1 right-1 bg-primary text-body text-xs w-4 h-4 rounded-full flex items-center justify-center" >{cartCount} </span>
            )}
            </Link>
          </div>
        </div>
      </header>

      <aside
        className={`fixed top-0 left-0 h-screen w-64  bg-card shadow-2xl z-50 transition-transform duration-300 ease-in-out  flex flex-col gap-6 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} font-playfair`}
      >
        <div className="flex justify-between items-center p-6 border-b border-border/50">
          <span className="font-playfair font-semibold text-lg"> Menu</span>
          <button
            aria-label="close search"
            className="text-secondary hover:text-heading p-2 transition-colors  cursor-pointer active:bg-border/30 hover:bg-border/30 rounded-full  "
            onClick={() => setIsSidebarOpen(false)}
          >
            <CloseIcons />
          </button>
        </div>
        <nav className="flex flex-col gap-6 p-6  font-playfair mt-4">
          {nav.map((item) => (
            <Link
              onClick={() => setIsSidebarOpen(false)}
              key={item.id}
              href={item.href}
              className={` duration-300 transition-colors text-sm ${pathname === item.href ? "text-primary font-semibold hover:text-primary-hover" : "text-secondary active:text-primary hover:text-primary"}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default SideNav;
