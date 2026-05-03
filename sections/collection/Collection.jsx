import React from "react";
import { SidebarFilters } from "./SidebarFilters";
import { CollectionCards } from "./CollectionCards";
import DropDownArrow from "@/components/Icons/DropDownArrow";
import { CollectionData } from "@/app/data/collection";

const CollectionSection = () => {
  return (
    <section className="bg-body min-h-screen pb-24 font-inter text-body-text">
      <div>
        <div className="max-w-350 mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 pt-12">
          {/* Sidebar Filters */}
          <SidebarFilters />

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Header & Sorting */}
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-border pb-6 mb-8 gap-4">
              <h1 className="font-playfair text-4xl md:text-5xl text-heading tracking-wide">
                COLLECTION
              </h1>
              <div className="text-xs tracking-widest uppercase text-muted-text pb-2 flex items-center gap-2 cursor-pointer">
                Sort By:{" "}
                <span className="font-semibold text-heading capitalize  tracking-normal text-sm ml-1">
                  Featured
                </span>
                <div className="">
                  <DropDownArrow />
                </div>
              </div>
            </header>

            {/* Product Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {/* cards */}
              {CollectionData.map((item, index) => (
                <CollectionCards
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  index={index}
                />
              ))}
            </section>

            {/* Pagination */}
            <nav className="flex justify-center items-center gap-2 mt-16 pt-16 border-t borde-r)]">
              <button className="w-10 h-10 border border-border text-muted-text flex items-center justify-center hover:border-heading hover:text-heading transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button className="w-10 h-10 bg-primary text-white font-semibold flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 border border-border text-heading font-semibold flex items-center justify-center hover:border-heading transition-colors">
                2
              </button>
              <button className="w-10 h-10 border border-border text-heading font-semibold flex items-center justify-center hover:border-heading transition-colors">
                3
              </button>
              <button className="w-10 h-10 border border-border text-muted-text flex items-center justify-center hover:border-heading hover:text-heading transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </nav>
          </main>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
