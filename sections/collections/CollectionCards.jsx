import AddCartBtn from "@/components/ui/AddCartBtn";
import Image from "next/image";
import React from "react";

export const CollectionCards = ({img, title, price}) => {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-4/5 bg-[#1C2628] mb-5 overflow-hidden">
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
        />
      </div>
      <h3 className="font-playfair text-xl text-heading mb-1">
{title}
      </h3>
      <p className="text-sm text-muted-text mb-4">₹{price} </p>
    <AddCartBtn/>
    </article>
  );
};
            
            {/* Card 1 */}
            <article className="group flex flex-col">
              <div className="relative aspect-4/5 bg-gray-100 mb-5 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-section text-heading text-[10px] font-bold px-2 py-1 uppercase tracking-widest shadow-sm">
                  Handcrafted
                </div>
                <img src="/placeholder-keychain.jpg" alt="Artisan Loop Keychain" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <h3 className="font-playfair text-xl text-heading mb-1">Artisan Loop Keychain</h3>
              <p className="text-sm text-muted-text mb-4">$45.00</p>
              <button className="mt-auto w-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold tracking-wide py-3 px-4 transition-colors">
                ADD TO CART
              </button>
            </article>

            {/* Card 2 */}


            {/* Card 3 */}
            <article className="group flex flex-col">
              <div className="relative aspect-4/5 bg-[#F5F5F5] mb-5 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-section text-heading text-[10px] font-bold px-2 py-1 uppercase tracking-widest shadow-sm">
                  Limited Edition
                </div>
                <img src="/placeholder-woven.jpg" alt="Woven Heritage Tag" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <h3 className="font-playfair text-xl text-heading mb-1">Woven Heritage Tag</h3>
              <p className="text-sm text-muted-text mb-4">$35.00</p>
              <button className="mt-auto w-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold tracking-wide py-3 px-4 transition-colors">
                ADD TO CART
              </button>
            </article>

            {/* Card 4 */}
            <article className="group flex flex-col">
              <div className="relative aspect-4/5 bg-gray-800 mb-5 overflow-hidden">
                <img src="/placeholder-clasp.jpg" alt="Utility Clasp Chain" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <h3 className="font-playfair text-xl text-heading mb-1">Utility Clasp Chain</h3>
              <p className="text-sm text-muted-text mb-4">$55.00</p>
              <button className="mt-auto w-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold tracking-wide py-3 px-4 transition-colors">
                ADD TO CART
              </button>
            </article>

            {/* Card 5 */}
            <article className="group flex flex-col">
              <div className="relative aspect-4/5 bg-[#F4EFE6] mb-5 overflow-hidden">
                <img src="/placeholder-stitched.jpg" alt="Stitched Zip Pull" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <h3 className="font-playfair text-xl text-heading mb-1">Stitched Zip Pull</h3>
              <p className="text-sm text-muted-text mb-4">$25.00</p>
              <button className="mt-auto w-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold tracking-wide py-3 px-4 transition-colors">
                ADD TO CART
              </button>
            </article>

            {/* Card 6 */}
            <article className="group flex flex-col">
              <div className="relative aspect-4/5 bg-[#1E2322] mb-5 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-section text-heading text-[10px] font-bold px-2 py-1 uppercase tracking-widest shadow-sm">
                  Handcrafted
                </div>
                <img src="/placeholder-mithila.jpg" alt="Mithila Fob" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <h3 className="font-playfair text-xl text-heading mb-1">Mithila Fob</h3>
              <p className="text-sm text-muted-text mb-4">$48.00</p>
              <button className="mt-auto w-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold tracking-wide py-3 px-4 transition-colors">
                ADD TO CART
              </button>
            </article>