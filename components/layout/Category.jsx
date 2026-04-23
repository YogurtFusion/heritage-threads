import React from "react";
import CategoryCard from "../ui/CategoryCard";
import ZipChains from "@/assets/category/key-chains.png";
import KeyChains from "@/assets/category/zip-chains.png";

const Category = () => {
  return (
    <section className="bg-section/10 w-full  ">
      {/* wrap */}
      <div className=" max-w-screen-2xl min-h-[90vh] md:h-[90vh]  mx-auto py-10 md:py-0 px-4 md:px-12  flex items-center ">
        {/* cards */}
        <div className="  grid grid-cols-1 md:grid-cols-2   gap-6 w-full h-auto md:h-[80%] ">
          <CategoryCard img={ZipChains} title={"Zipchains"} />
          <CategoryCard img={KeyChains} title={"KeyChains"} />
        </div>
      </div>
    </section>
  );
};

export default Category;
