import React from "react";
import AdminSidebar from "./AdminSidebar";
import StatsGrid from "./StatsGrid";
import OrderTable from "./OrderTable";

const Admin = () => {
  return (
    <div className="flex min-h-screen w-full bg-body">
      <main className="flex-1 p-8 font-inter max-w-7xl mx-auto">
        <StatsGrid />

        <OrderTable />
      </main>
    </div>
  );
};

export default Admin;
