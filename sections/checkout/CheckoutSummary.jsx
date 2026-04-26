import React from 'react'
import Img from "@/assets/cart/img1.png"
import Image from 'next/image'

const CheckoutSummary = () => {
  return (
    <div>
        <aside className="w-full lg:w-105">
            <div className="bg-card p-8">
              <h2 className="text-xs font-bold tracking-widest text-heading mb-6 border-b border-border pb-4 uppercase">
                Order Summary
              </h2>

              <div className="flex gap-4 mb-8">
                <div className="w-21 h-25 bg-gray-200 shrink-0">
                  <Image
                    src={Img}
                    alt="Artisan Loom Jacket"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-semibold text-xs tracking-wide text-heading uppercase">
                      Artisan Loom Jacket
                    </p>
                  </div>
                  <p className="text-muted-text text-xs mb-4">
                    Size: M | Color: Raw Umber
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-muted-text text-xs">QTY: 1</p>
                    <span className="text-body-text text-sm">$245.00</span>
                  </div>
                </div>
              </div>

              <div className="border-y border-border py-5 mb-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-body-text">Subtotal</span>
                  <span className="text-body-text">$245.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-body-text">Shipping</span>
                  <span className="text-body-text">Calculated at next step</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-body-text">Taxes</span>
                  <span className="text-body-text">$0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <span className=" text-2xl text-heading font-semibold">Total</span>
                <div className="flex items-baseline gap-1">
                  {/* <span className="text-[10px] font-bold text-muted-text tracking-wider">USD</span> */}
                  <span className=" text-xl text-heading font-semibold">₹245.00</span>
                </div>
              </div>
            </div>
          </aside>
    </div>
  )
}

export default CheckoutSummary
