// CartPage.jsx
export default function CartPage() {
  return (
    <div className="bg-[var(--color-body)] min-h-screen py-16 font-inter text-[var(--color-body-text)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <header className="flex justify-between items-end border-b border-[var(--color-border)] pb-6 mb-10">
          <h1 className="font-playfair text-6xl md:text-7xl text-[var(--color-heading)] tracking-wide">
            CART
          </h1>
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-heading)] pb-2">
            3 Items
          </span>
        </header>

        <section className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* Left Column: Cart Items List */}
          <div className="flex-1">
            
            {/* Table Headers (Hidden on small mobile) */}
            <div className="hidden sm:flex justify-between text-xs font-bold uppercase tracking-widest text-[var(--color-heading)] pb-4 mb-4">
              <span className="w-1/2">Product</span>
              <span className="w-1/4 text-center">Quantity</span>
              <span className="w-1/4 text-right">Total</span>
            </div>

            {/* Cart Items Container */}
            <div className="space-y-4">
              
              {/* Item 1 */}
              <article className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#F7F1E9] p-4 gap-6 sm:gap-0">
                <div className="flex items-center gap-6 w-full sm:w-1/2">
                  <div className="w-24 h-24 bg-white flex-shrink-0 flex items-center justify-center p-2">
                    <img src="/placeholder-coat.jpg" alt="Artisan Chore Coat" className="max-w-full max-h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl text-[var(--color-heading)] uppercase mb-1">
                      Artisan Chore Coat
                    </h3>
                    <p className="text-sm text-[var(--color-body-text)] mb-3">
                      Indigo / M
                    </p>
                    <button className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-heading)] border-b border-[var(--color-heading)] pb-0.5 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="w-full sm:w-1/4 flex justify-start sm:justify-center">
                  <div className="flex border border-[var(--color-border)] bg-white h-10">
                    <button className="w-10 flex items-center justify-center text-[var(--color-heading)] hover:bg-gray-50 transition-colors">
                      &minus;
                    </button>
                    <div className="w-10 flex items-center justify-center font-semibold text-[var(--color-heading)] border-x border-[var(--color-border)] text-sm">
                      1
                    </div>
                    <button className="w-10 flex items-center justify-center text-[var(--color-heading)] hover:bg-gray-50 transition-colors">
                      &#43;
                    </button>
                  </div>
                </div>

                <div className="w-full sm:w-1/4 text-left sm:text-right font-inter text-lg text-[var(--color-heading)]">
                  $245.00
                </div>
              </article>

              {/* Item 2 */}
              <article className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#F7F1E9] p-4 gap-6 sm:gap-0">
                <div className="flex items-center gap-6 w-full sm:w-1/2">
                  <div className="w-24 h-24 bg-white flex-shrink-0 flex items-center justify-center p-2">
                    <img src="/placeholder-tee.jpg" alt="Heavyweight Tee" className="max-w-full max-h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl text-[var(--color-heading)] uppercase mb-1">
                      Heavyweight Tee
                    </h3>
                    <p className="text-sm text-[var(--color-body-text)] mb-3">
                      Natural / L
                    </p>
                    <button className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-heading)] border-b border-[var(--color-heading)] pb-0.5 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="w-full sm:w-1/4 flex justify-start sm:justify-center">
                  <div className="flex border border-[var(--color-border)] bg-white h-10">
                    <button className="w-10 flex items-center justify-center text-[var(--color-heading)] hover:bg-gray-50 transition-colors">
                      &minus;
                    </button>
                    <div className="w-10 flex items-center justify-center font-semibold text-[var(--color-heading)] border-x border-[var(--color-border)] text-sm">
                      2
                    </div>
                    <button className="w-10 flex items-center justify-center text-[var(--color-heading)] hover:bg-gray-50 transition-colors">
                      &#43;
                    </button>
                  </div>
                </div>

                <div className="w-full sm:w-1/4 text-left sm:text-right font-inter text-lg text-[var(--color-heading)]">
                  $130.00
                </div>
              </article>

            </div>
          </div>

          {/* Right Column: Order Summary */}
          <aside className="w-full lg:w-[400px] flex-shrink-0">
            <div className="border border-[var(--color-border)] p-8">
              
              <h2 className="font-playfair text-3xl text-[var(--color-heading)] border-b border-[var(--color-border)] pb-6 mb-6">
                SUMMARY
              </h2>
              
              <div className="space-y-5 mb-8 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--color-body-text)]">Subtotal</span>
                  <span className="text-[var(--color-heading)]">$375.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-body-text)]">Shipping</span>
                  <span className="text-[var(--color-muted-text)]">Calculated at next step</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-body-text)]">Taxes</span>
                  <span className="text-[var(--color-muted-text)]">Calculated at next step</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-8 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-heading)]">
                  Estimated Total
                </span>
                <span className="font-playfair text-2xl text-[var(--color-heading)] font-semibold">
                  $375.00
                </span>
              </div>

              <button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-bold tracking-widest uppercase py-4 transition-colors mb-6">
                CHECKOUT
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[var(--color-muted-text)]">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure Checkout</span>
              </div>

            </div>
          </aside>

        </section>
      </div>
    </div>
  )
}