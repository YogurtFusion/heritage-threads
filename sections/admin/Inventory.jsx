import React from "react";
import InventoryTable from "./InventoryTable";
import PrimaryBtn from "@/components/ui/PrimaryBtn";

const Inventory = () => {
  return (
    <div className="bg-body max-w-6xl mx-auto space-y-8 ">
      <div className="text-left flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-primary">Inventory</h1>
          <p className=" text-base text-muted-text tracking-tight">
            Manage your artisanal inventory and listings.
          </p>
        </div>
        <PrimaryBtn
          title={"Add Product"}
          href={"/admin/inventory"}
          mainClass={" text-white bg-primary px-3 py-2"}
          hoverClass={"bg-primary-hover"}
        />
      </div>

      <InventoryTable />
    </div>
  );
};

export default Inventory;
