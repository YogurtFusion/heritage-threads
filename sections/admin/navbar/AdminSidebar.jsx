"use client";
import BoxIcon from "@/components/Icons/BoxIcon";
import { CartIcon } from "@/components/Icons/CartIcon";
import Dashboard from "@/components/Icons/DashboardIcon";
import MenuIcon from "@/components/Icons/MenuIcon";
import CloseIcons from "@/components/ui/Close";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const AdminSidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return()=> window.removeEventListener("keydown",handleEscape)
    }
  } , [isOpen]);

  const navLinks = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: Dashboard,
    },
    { title: "Orders", href: "/admin/orders", icon: CartIcon },
    { title: "Inventory", href: "/admin/inventory", icon: BoxIcon },
  ];
  return (
    <div className="">
      <div
        className=" m-4  cursor-pointer text-secondary hover:text-primary active:text-primary"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </div>

      {/* <div className={`fixed`} > */}
        <div
          className={`fixed inset-0 bg-heading/50 z-40 transition-opacity duration-300 ${isOpen?"opacity-100 pointer-events-auto":" opacity-0 pointer-events-none"}` } 
          onClick={() => setIsOpen(false)}
        ></div>
        <aside className={` fixed top-0 left-0 z-50 h-screen w-64  border-r border-border bg-card flex flex-col py-8 px-4 shadow-2xl transition-transform duration-300 ease-in-out ${isOpen?"translate-x-0":"-translate-x-full"}`} >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-muted-text hover:text-primary text-xl"
          >
            <CloseIcons />
          </button>

          <div className="px-4 py-3">
            <h2 className="text-2xl  font-semibold text-primary">
              Heritage Threads
            </h2>
            <p className="text-sm text-gray-500 mt-1">Artisanal Curator</p>
          </div>
          <nav className="flex flex-col gap-2 mt-4">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${isActive ? "bg-body text-primary shadow-md font-medium" : "text-muted-text hover:bg-border/50"}`}
                  href={item.href}
                >
                  <Icon className={"text-xl text-muted-text"} />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </aside>
      {/* </div> */}
    </div>
  );
};

export default AdminSidebar;
