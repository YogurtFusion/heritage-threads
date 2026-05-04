"use client";
import BoxIcon from "@/components/Icons/BoxIcon";
import { CartIcon } from "@/components/Icons/CartIcon";
import Dashboard from "@/components/Icons/DashboardIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AdminSidebar = () => {
  const pathname = usePathname();
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
    <aside className="w-64 border-r border-border bg-card flex flex-col py-8 px-4 ">
      <div className="">
        <h2 className="text-2xl  font-semibold text-primary">
          Heritage Threads
        </h2>
        <p className="text-sm text-gray-500 mt-1">Artisanal Curator</p>
      </div>
      <nav className="flex flex-col gap-2">
        {navLinks.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.title} className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${isActive?"bg-body text-primary shadow-md font-medium":"text-muted-text hover:bg-border/50"}`} href={item.href}>
              <Icon className={"text-xl text-muted-text"} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
