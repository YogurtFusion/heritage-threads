import Link from "next/link";
import React from "react";
const NAV_LINKS = [
  {
    name: "Dashboard",
    href: "#",
    active: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    ),
  },
  {
    name: "Orders",
    href: "#",
    active: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    ),
  },
  {
    name: "Inventory",
    href: "#",
    active: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    ),
  },
  {
    name: "Artisans",
    href: "#",
    active: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    ),
  },
  {
    name: "Settings",
    href: "#",
    active: false,
    icon: (
      <>
        {" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />{" "}
      </>
    ),
  },
];
const AdminSidebar = () => {
  return (
    <aside className="max-w-3xs w-full shrink-0 bg-card border-r border-border flex flex-col justify-between">
      <div>
        <div className="p-8 pb-10">
          <h1 className=" text-2xl font-bold leading-tight text-primary">
            Heritage
            <br />
            Threads
          </h1>
          <p className="text-sm text-muted-text mt-2 ">
            Artisanal Curator
          </p>
        </div>

        <nav className="flex flex-col gap-1 px-4 text-sm font-medium ">
          {/* Improved: Mapped over NAV_LINKS array. Added aria-current for screen readers. */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                link.active
                  ? "bg-body text-primary shadow-sm border border-border/50"
                  : "text-body-text hover:text-primary"
              }`}
            >
              {/* Improved: Added aria-hidden="true" to decorative SVGs */}
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {link.icon}
              </svg>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-6 ">
        <Link
          href="#"
          className="flex items-center gap-3 px-2 py-3 text-sm font-medium text-body-text hover:text-heading transition-colors"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Help Center
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
