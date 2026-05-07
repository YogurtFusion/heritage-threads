"use client";

import React, { useState } from "react";

// Mock data matching your previous image
const mockOrders = [
  {
    id: "#ORD-092",
    customer: "Anya Sharma",
    date: "Oct 24, 2023",
    total: "₹12,400",
    status: "Processing",
  },
  {
    id: "#ORD-091",
    customer: "Rohan Gupta",
    date: "Oct 23, 2023",
    total: "₹8,900",
    status: "Shipped",
  },
  {
    id: "#ORD-090",
    customer: "Meera Patel",
    date: "Oct 22, 2023",
    total: "₹24,500",
    status: "Shipped",
  },
  {
    id: "#ORD-089",
    customer: "Vikram Singh",
    date: "Oct 20, 2023",
    total: "₹4,200",
    status: "Delivered",
  },
  {
    id: "#ORD-088",
    customer: "Priya Desai",
    date: "Oct 19, 2023",
    total: "₹15,600",
    status: "Delivered",
  },
  {
    id: "#ORD-087",
    customer: "Arjun Reddy",
    date: "Oct 18, 2023",
    total: "₹3,150",
    status: "Processing",
  },
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

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-card border-b border-border">
            <th className="py-4 px-6 text-xs font-semibold text-muted-text uppercase tracking-wider">
              Order ID
            </th>
            <th className=" hidden sm:table-cell py-4 px-6 text-xs font-semibold text-muted-text uppercase tracking-wider">
              Customer
            </th>
            <th className="py-4 px-6 text-xs font-semibold text-muted-text uppercase tracking-wider">
              Date
            </th>
            <th className=" hidden sm:table-cell py-4 px-6 text-xs font-semibold text-muted-text uppercase tracking-wider">
              Total
            </th>
            <th className="py-4 px-6 text-xs font-semibold text-muted-text uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {mockOrders.map((order) => (
            <tr key={order.id} className="hover:bg-card transition-colors">
              <td className="py-4 px-6 text-sm font-medium text-heading">
                {order.id}
              </td>
              <td className="py-4 px-6 text-sm text-body-text">
                {order.customer}
              </td>
              <td className="py-4 px-6 text-sm text-body-text">
                
                <span className="sm:hidden">{order.date.split(','[0])} </span>
                <span className="hidden sm:inline">{order.date}</span>
                </td>
              <td className=" hidden sm:table-cell py-4 px-6 text-sm font-medium text-heading">
                {order.total}
              </td>
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
    </div>
  );
}
