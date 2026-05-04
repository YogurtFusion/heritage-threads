"use client";
import { SearchIcon } from "@/components/Icons/SearchIcon";
import React, { useState } from "react";

const mockOrders = [
  { id: "#ORD-092", customer: "Anya Sharma", date: "Oct 24, 2023", total: "₹12,400", status: "Processing" },
  { id: "#ORD-091", customer: "Rohan Gupta", date: "Oct 23, 2023", total: "₹8,900", status: "Shipped" },
  { id: "#ORD-090", customer: "Meera Patel", date: "Oct 22, 2023", total: "₹24,500", status: "Shipped" },
  { id: "#ORD-089", customer: "Vikram Singh", date: "Oct 20, 2023", total: "₹4,200", status: "Delivered" },
  { id: "#ORD-088", customer: "Priya Desai", date: "Oct 19, 2023", total: "₹15,600", status: "Delivered" },
  { id: "#ORD-087", customer: "Arjun Reddy", date: "Oct 18, 2023", total: "₹3,150", status: "Processing" },
];

// Helper utilizing your specific @theme colors
const getStatusStyles = (status) => {
  switch (status) {
    case "Processing":
      return "bg-section text-primary"; 
    case "Shipped":
      return "bg-section-2 text-primary"; 
    case "Delivered":
      return "bg-border text-muted-text"; 
    default:
      return "bg-card text-body-text";
  }
};
const AdminOrder = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-7xl mx-auto space-y-8 bg-body">
      
      {/* HEADER */}
      <div className="flex items-center justify-between">
        {/* Notice: No font-playfair class here because your globals.css handles it! */}
        <h1 className="text-3xl font-semibold text-primary">
          Orders
        </h1>
        <button className="px-4 py-2 bg-body border border-border text-sm font-medium text-body-text rounded-md hover:bg-card transition-colors shadow-sm">
          Export CSV
        </button>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center justify-between bg-white p-4 border border-border rounded-lg shadow-sm">
        <div className="relative w-72">
          {/* Search Icon */}
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-body text-body-text placeholder:text-muted-text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select className="px-4 py-2 text-sm border border-border rounded-md bg-body focus:outline-none focus:ring-1 focus:ring-primary text-body-text">
          <option value="all">All Statuses</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-white border border-border rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-card border-b border-border">
              <th className="py-4 px-6 text-xs font-semibold text-muted-text uppercase tracking-wider">Order ID</th>
              <th className="py-4 px-6 text-xs font-semibold text-muted-text uppercase tracking-wider">Customer</th>
              <th className="py-4 px-6 text-xs font-semibold text-muted-text uppercase tracking-wider">Date</th>
              <th className="py-4 px-6 text-xs font-semibold text-muted-text uppercase tracking-wider">Total</th>
              <th className="py-4 px-6 text-xs font-semibold text-muted-text uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockOrders.map((order) => (
              <tr key={order.id} className="hover:bg-card transition-colors">
                <td className="py-4 px-6 text-sm font-medium text-heading">{order.id}</td>
                <td className="py-4 px-6 text-sm text-body-text">{order.customer}</td>
                <td className="py-4 px-6 text-sm text-body-text">{order.date}</td>
                <td className="py-4 px-6 text-sm font-medium text-heading">{order.total}</td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="bg-card border-t border-border px-6 py-4 flex items-center justify-between">
          <span className="text-sm text-muted-text">Showing 1 to 6 of 24 orders</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-border rounded bg-white text-sm text-muted-text hover:bg-body disabled:opacity-50" disabled>
              Prev
            </button>
            <button className="px-3 py-1 border border-border rounded bg-white text-sm text-body-text hover:bg-body">
              Next
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AdminOrder;
