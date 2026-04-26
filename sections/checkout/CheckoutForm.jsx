import React from "react";
import CheckoutSummary from "./CheckoutSummary";
import { indianStates } from "@/app/data/Checkout";

const CheckoutForm = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
      {/* Left Column: Form Details */}
      <div className="flex-1">
        <div className="flex items-end justify-between border-b border-border pb-4 mb-8">
          <h1 className="font-playfair text-3xl text-heading">Checkout</h1>
          <span className="text-xs font-semibold tracking-widest text-heading uppercase">
            Secure Server
          </span>
        </div>

        <form>
          {/* 1. Contact Information */}
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest text-heading mb-4 uppercase">
              1. Contact Information
            </p>
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full border border-border bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-muted-text tex-body-t)]"
            />
          </div>

          {/* 2. Shipping Address */}
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest text-heading mb-4 uppercase">
              2. Shipping Address
            </p>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-4 relative">
                <select className="w-full border border-border bg-transparent p-3.5 text-sm focus:outline-none text-body-text appearance-none cursor-pointer">
                  <option value="state"></option>
                  {indianStates.map((item)=>(
                    <option value="text-body-text text-sm" key={item}>{item} </option>
                  ))}
                </select>
                <svg
                  className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-text pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="FIRST NAME"
                className="col-span-2 border border-border bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-muted-text tex-body-t)]"
              />
              <input
                type="text"
                placeholder="LAST NAME"
                className="col-span-2 border border-border bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-muted-text tex-body-t)]"
              />
              <input
                type="text"
                placeholder="STREET ADDRESS"
                className="col-span-4 border border-border bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-muted-text tex-body-t)]"
              />
              <input
                type="text"
                placeholder="CITY"
                className="col-span-4 md:col-span-2 border border-border bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-muted-text tex-body-t)]"
              />
              <input
                type="text"
                placeholder="STATE"
                className="col-span-2 md:col-span-1 border border-border bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-muted-text tex-body-t)]"
              />
              <input
                type="text"
                placeholder="ZIP"
                className="col-span-2 md:col-span-1 border border-border bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-muted-text tex-body-t)]"
              />
            </div>
          </div>

          {/* 3. Payment */}
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest text-heading mb-4 uppercase">
              3. Payment
            </p>
            <div className="border border-border p-4 bg-transparent">
              <div className="flex items-center border border-border bg-white mb-4 px-3.5 py-3">
                <input
                  type="text"
                  placeholder="CARD NUMBER"
                  className="w-full text-sm focus:outline-none placeholder:text-muted-text tex-body-t)]"
                />
                {/* Placeholder Credit Card Icon */}
                <div className="w-8 h-5 bg-[#333] rounded-xs flex items-center justify-center relative overflow-hidden">
                  <div className="w-full h-px bg-[#999] absolute top-1"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="border border-border bg-white p-3.5 text-sm focus:outline-none placeholder:text-muted-text tex-body-t)]"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="border border-border bg-white p-3.5 text-sm focus:outline-none placeholder:text-muted-text tex-body-t)]"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full bg-primary hover:bg-primary-hover text-white py-4 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
          >
            Place Order
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>

      {/* Right Column: Order Summary */}
      <CheckoutSummary />
    </section>
  );
};

export default CheckoutForm;
