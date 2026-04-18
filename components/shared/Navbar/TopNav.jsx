import React from "react";
import Link from "next/link";
import { SearchIcon } from "@/components/ui/Search";
import { CartIcon } from "@/components/ui/Cart";

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

  return (
    <header className="sticky top-0 w-full bg-white/0  backdrop-blur-md shadow-sm z-50">
      {/* wrap */}
      <div className=" flex  justify-between items-center px-12 py-6  max-w-screen-2xl mx-auto ">

        <nav className="flex justify-between items-center gap-6 font-playfair">
          {nav.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
        {/* logo */}
        <div className="font-semibold tracking-[-0.02em] ">
            <h4>Heritage Threads</h4>
            </div>

        {/* svgs */}
        <div className=" flex justify-between items-center gap-6 ">
          <SearchIcon />

          <CartIcon />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
