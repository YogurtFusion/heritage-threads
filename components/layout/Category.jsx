import React from "react";
import CategoryCard from "../ui/CategoryCard";
import KeyChains from "@/assets/category/key-chains.png";
import ZipChains from "@/assets/category/zip-chains.png";

const Category = () => {
  return (
    <section className="bg-section/10 w-full ">
      {/* wrap */}
      <div className=" max-w-screen-2xl h-[90vh]  mx-auto py-0 px-12  flex items-center ">
        {/* cards */}
        <div className="  grid grid-cols-2   gap-6 w-full h-[80%] ">
          <CategoryCard img={KeyChains} title={"Zipchains"} />
          <CategoryCard img={ZipChains} title={"KeyChains"} />
        </div>
      </div>
    </section>
  );
};

export default Category;
