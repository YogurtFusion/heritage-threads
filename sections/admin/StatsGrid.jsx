import BellIcon from "@/components/Icons/BellIcon";
import React from "react";

const STATS_DATA = [
  {
    title: "Total Orders",
    value: "148",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    title: "Total Revenue",
    value: "₹1,24,500",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    ),
  },
  {
    title: "Active Products",
    value: "24",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    ),
  },
  {
    title: "Pending Orders",
    value: "12",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

const StatsGrid = () => {
  return (
    <div>
      <header className="flex items-center justify-between border-b border-border pb-6 mb-8">
        <h1 className=" text-4xl text-heading font-semibold">
          Dashboard Overview
        </h1>
        <div className="flex items-center gap-6">
          <button
            aria-label="Notifications"
            className="text-body-text hover:text-primary transition-colors"
          >
           <BellIcon/>
          </button>
        
        </div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

        {STATS_DATA.map((stat) => (
          <article
            key={stat.title}
            className="bg-card border border-border rounded-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-semibold tracking-widest text-body-text uppercase">
                {stat.title}
              </p>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-muted-text"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {stat.icon}
              </svg>
            </div>
            <p className=" text-4xl text-heading">{stat.value}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default StatsGrid;
