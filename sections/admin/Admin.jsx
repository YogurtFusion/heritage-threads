import React from "react";
import AdminSidebar from "./navbar/AdminSidebar";
import StatsGrid from "./StatsGrid";
import OrderTable from "./RecentOrders";

const Admin = () => {
  return (
    <div className="flex min-h-screen w-full bg-body">
      <main className="flex-1 md:p-8 font-inter max-w-7xl mx-auto">
        <StatsGrid />
<div className="hidden lg:block">
        <OrderTable/>
</div>
      </main>
    </div>
  );
};

export default Admin;
