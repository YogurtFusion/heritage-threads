import SideNav from "@/components/layout/Navbar/SideNav";
import React from "react";
import { UserSidebar } from "./UserSidebar";
import { UserCard } from "./UserCard";
import { LeafIcon } from "@/components/Icons/LeafIcon";

const User = () => {
  return (
    <main className="min-h-screen bg-body text-body-text font-inter py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-300 mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Sidebar Navigation */}
        <UserSidebar />

        {/* Main Content Area */}
        <section className="flex-1 max-w-2xl">
          {/* Header */}
          <div className="mb-10">
            <h2 className="font-playfair text-4xl lg:text-5xl text-heading mb-4">
              Personal Profile
            </h2>
            <p className="text-body-text text-[15px]">
              Manage your details to ensure seamless delivery of your artisanal
              pieces.
            </p>
          </div>

          {/* Details Card */}
          <UserCard />

          {/* Security Card */}

          {/* Preferences Card */}

          {/* Leaf Divider */}
          <div className="flex items-center justify-center gap-4 py-16">
            <div className="h-px bg-border w-24"></div>
            <LeafIcon />
            <div className="h-px bg-border w-24"></div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default User;
