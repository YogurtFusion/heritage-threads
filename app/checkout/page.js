// CheckoutFlow.jsx

export default function CheckoutFlow() {
  return (
    <main className="min-h-screen bg-[var(--color-body)] py-12 px-4 sm:px-6 lg:px-12 font-inter">
      <div className="max-w-6xl mx-auto">
        
        {/* Checkout Section */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Left Column: Form Details */}
          <div className="flex-1">
            <div className="flex items-end justify-between border-b border-[var(--color-border)] pb-4 mb-8">
              <h1 className="font-playfair text-3xl text-[var(--color-heading)]">Checkout</h1>
              <span className="text-xs font-semibold tracking-[0.1em] text-[var(--color-heading)] uppercase">
                Secure Server
              </span>
            </div>

            <form>
              {/* 1. Contact Information */}
              <div className="mb-10">
                <h2 className="text-xs font-bold tracking-widest text-[var(--color-heading)] mb-4 uppercase">
                  1. Contact Information
                </h2>
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full border border-[var(--color-border)] bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-[var(--color-muted-text)] text-[var(--color-body-text)]"
                />
              </div>

              {/* 2. Shipping Address */}
              <div className="mb-10">
                <h2 className="text-xs font-bold tracking-widest text-[var(--color-heading)] mb-4 uppercase">
                  2. Shipping Address
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-4 relative">
                    <select className="w-full border border-[var(--color-border)] bg-transparent p-3.5 text-sm focus:outline-none text-[var(--color-body-text)] appearance-none cursor-pointer">
                      <option>United States</option>
                    </select>
                    <svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-muted-text)] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="FIRST NAME"
                    className="col-span-2 border border-[var(--color-border)] bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-[var(--color-muted-text)] text-[var(--color-body-text)]"
                  />
                  <input
                    type="text"
                    placeholder="LAST NAME"
                    className="col-span-2 border border-[var(--color-border)] bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-[var(--color-muted-text)] text-[var(--color-body-text)]"
                  />
                  <input
                    type="text"
                    placeholder="STREET ADDRESS"
                    className="col-span-4 border border-[var(--color-border)] bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-[var(--color-muted-text)] text-[var(--color-body-text)]"
                  />
                  <input
                    type="text"
                    placeholder="CITY"
                    className="col-span-4 md:col-span-2 border border-[var(--color-border)] bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-[var(--color-muted-text)] text-[var(--color-body-text)]"
                  />
                  <input
                    type="text"
                    placeholder="STATE"
                    className="col-span-2 md:col-span-1 border border-[var(--color-border)] bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-[var(--color-muted-text)] text-[var(--color-body-text)]"
                  />
                  <input
                    type="text"
                    placeholder="ZIP"
                    className="col-span-2 md:col-span-1 border border-[var(--color-border)] bg-transparent p-3.5 text-sm focus:outline-none placeholder:text-[var(--color-muted-text)] text-[var(--color-body-text)]"
                  />
                </div>
              </div>

              {/* 3. Payment */}
              <div className="mb-10">
                <h2 className="text-xs font-bold tracking-widest text-[var(--color-heading)] mb-4 uppercase">
                  3. Payment
                </h2>
                <div className="border border-[var(--color-border)] p-4 bg-transparent">
                  <div className="flex items-center border border-[var(--color-border)] bg-white mb-4 px-3.5 py-3">
                    <input
                      type="text"
                      placeholder="CARD NUMBER"
                      className="w-full text-sm focus:outline-none placeholder:text-[var(--color-muted-text)] text-[var(--color-body-text)]"
                    />
                    {/* Placeholder Credit Card Icon */}
                    <div className="w-8 h-5 bg-[#333] rounded-[2px] flex items-center justify-center relative overflow-hidden">
                       <div className="w-full h-[3px] bg-[#999] absolute top-1"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border border-[var(--color-border)] bg-white p-3.5 text-sm focus:outline-none placeholder:text-[var(--color-muted-text)] text-[var(--color-body-text)]"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="border border-[var(--color-border)] bg-white p-3.5 text-sm focus:outline-none placeholder:text-[var(--color-muted-text)] text-[var(--color-body-text)]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white py-4 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
              >
                Place Order
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <aside className="w-full lg:w-[420px]">
            <div className="bg-[var(--color-card)] p-8">
              <h2 className="text-xs font-bold tracking-widest text-[var(--color-heading)] mb-6 border-b border-[var(--color-border)] pb-4 uppercase">
                Order Summary
              </h2>

              <div className="flex gap-4 mb-8">
                <div className="w-[84px] h-[100px] bg-gray-200 shrink-0">
                  <img
                    src="/placeholder-jacket.jpg"
                    alt="Artisan Loom Jacket"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-xs tracking-wide text-[var(--color-heading)] uppercase">
                      Artisan Loom Jacket
                    </h3>
                  </div>
                  <p className="text-[var(--color-muted-text)] text-xs mb-4">
                    Size: M | Color: Raw Umber
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-[var(--color-muted-text)] text-xs">QTY: 1</p>
                    <span className="text-[var(--color-body-text)] text-sm">$245.00</span>
                  </div>
                </div>
              </div>

              <div className="border-y border-[var(--color-border)] py-5 mb-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-body-text)]">Subtotal</span>
                  <span className="text-[var(--color-body-text)]">$245.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-body-text)]">Shipping</span>
                  <span className="text-[var(--color-body-text)]">Calculated at next step</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-body-text)]">Taxes</span>
                  <span className="text-[var(--color-body-text)]">$0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <span className="font-playfair text-2xl text-[var(--color-heading)] font-semibold">Total</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[10px] font-bold text-[var(--color-muted-text)] tracking-wider">USD</span>
                  <span className="font-playfair text-xl text-[var(--color-heading)] font-semibold">$245.00</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* Visual Divider (Simulation of scrolling to next view) */}
        <hr className="border-[var(--color-border)] w-full max-w-[600px] mx-auto my-24" />

        {/* Success / Thank You Section */}
        <section className="max-w-[600px] mx-auto text-center pb-16">
          <div className="w-14 h-14 bg-[var(--color-tertiary)] mx-auto flex items-center justify-center mb-8">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="font-playfair text-4xl text-[var(--color-heading)] mb-4 font-semibold">
            Thank you for your order.
          </h2>
          <p className="text-[var(--color-body-text)] text-[15px] mb-12 leading-relaxed">
            Your artisanal piece is being prepared for its journey. We have sent a <br className="hidden sm:block"/>
            confirmation email with detailed tracking information.
          </p>

          <div className="bg-transparent border border-[var(--color-border)] p-8 text-left mb-12">
            <h3 className="text-xs font-bold tracking-widest text-[var(--color-heading)] mb-6 border-b border-[var(--color-border)] pb-4 uppercase">
              Order Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
              <div>
                <p className="text-[9px] font-bold text-[var(--color-muted-text)] tracking-widest uppercase mb-1.5">
                  Order Number
                </p>
                <p className="text-[var(--color-heading)] text-sm font-medium">
                  #HT-88492
                </p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-[var(--color-muted-text)] tracking-widest uppercase mb-1.5">
                  Date
                </p>
                <p className="text-[var(--color-heading)] text-sm font-medium">
                  October 24, 2024
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-[9px] font-bold text-[var(--color-muted-text)] tracking-widest uppercase mb-1.5">
                  Confirmation Sent To
                </p>
                <p className="text-[var(--color-heading)] text-sm font-medium">
                  customer@example.com
                </p>
              </div>
            </div>
          </div>

          <button className="border border-[var(--color-heading)] text-[var(--color-heading)] bg-transparent hover:bg-[var(--color-heading)] hover:text-[var(--color-body)] px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors">
            Return to Collection
          </button>
        </section>

      </div>
    </main>
  );
}