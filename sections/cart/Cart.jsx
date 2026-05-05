"use client";
import React, { useState } from "react";
import CartProductCard from "./CartCards";
import CartSummary from "./CartSummary";
import { initialCardData } from "@/data/cart";

const CartSection = () => {
const [cartItems, setCartItems]=useState(initialCardData)
  return (
    <div>
      <div className="bg-body min-h-screen py-16  text-body-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header Section */}
          <header className="flex justify-between items-end border-b border-border pb-6 mb-10">
            <h1 className=" text-6xl md:text-7xl text-heading tracking-wide">
              CART
            </h1>
            <span className="text-xs font-bold uppercase tracking-widest text-heading pb-2">
              3 Items
            </span>
          </header>

          <section className="flex flex-col lg:flex-row gap-12 lg:gap-8">
            {/* Left Column: Cart Items List */}
            <div className="flex-1">
              {/* Table Headers (Hidden on small mobile) */}
              <div className="hidden sm:flex justify-between text-xs font-bold uppercase tracking-widest text-heading pb-4 mb-4">
                <span className="w-1/2">Product</span>
                <span className="w-1/4 text-center">Quantity</span>
                <span className="w-1/4 text-right">Total</span>
              </div>

              {/* Cart Items Container */}
              <div className="space-y-4">
                {/* Item  */}
                {cartItems.map((item) => (
                  <CartProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Right Column: Order Summary */}
           
              <CartSummary cartItems={cartItems}  />
           
          </section>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
