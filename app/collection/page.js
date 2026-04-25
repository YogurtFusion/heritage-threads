// CollectionPage.jsx
export default function CollectionPage() {
  return (
    <div className="bg-body min-h-screen pb-24 font-inter text-body-text">
      <div className="max-w-350 mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 pt-12">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-56 shrink-0">
          
          {/* Category Filter */}
          <div className="border-t border-border pt-6 mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-heading mb-6">
              Category
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded-sm border-border accent-primary" 
                />
                <span className="text-sm">All Categories</span>
              </li>
              <li className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  defaultChecked 
                  className="w-4 h-4 rounded-sm border-border accent-primary" 
                />
                <span className="text-sm text-heading">Keychains</span>
              </li>
              <li className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded-sm border-border accent-primary" 
                />
                <span className="text-sm">Zipchains</span>
              </li>
              <li className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded-sm border-border accent-primary" 
                />
                <span className="text-sm">Textiles</span>
              </li>
            </ul>
          </div>

          {/* Price Filter */}
          <div className="border-t border-border pt-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-heading mb-6">
              Price
            </h2>
            
            {/* Visual Slider Track */}
            <div className="relative h-0.5 bg-border mb-6 mt-4 w-full">
              <div className="absolute left-0 right-[20%] h-full b-r)]"></div>
              <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"></div>
            </div>

            {/* Price Inputs */}
            <div className="flex items-center justify-between gap-4">
              <div className="border border-border px-4 py-2 text-sm w-full text-center bg-transparent">
                $0
              </div>
              <span className="text-muted-text">-</span>
              <div className="border border-border px-4 py-2 text-sm w-full text-center bg-transparent">
                $200+
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          
          {/* Header & Sorting */}
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-border pb-6 mb-8 gap-4">
            <h1 className="font-playfair text-4xl md:text-5xl text-heading tracking-wide">
              COLLECTION
            </h1>
            <div className="text-xs tracking-widest uppercase text-muted-text pb-2 flex items-center gap-2 cursor-pointer">
              Sort By: <span className="font-semibold text-heading capitalize  tracking-normal text-sm ml-1">Featured</span>
              <svg className="w-4 h-4 text-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </header>

          {/* Product Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            
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
            <article className="group flex flex-col">
              <div className="relative aspect-4/5 bg-[#1C2628] mb-5 overflow-hidden">
                <img src="/placeholder-zipchain.jpg" alt="Brass Zipchain" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90" />
              </div>
              <h3 className="font-playfair text-xl text-heading mb-1">Brass Zipchain</h3>
              <p className="text-sm text-muted-text mb-4">$65.00</p>
              <button className="mt-auto w-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold tracking-wide py-3 px-4 transition-colors">
                ADD TO CART
              </button>
            </article>

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

          </section>

          {/* Pagination */}
          <nav className="flex justify-center items-center gap-2 mt-16 pt-16 border-t borde-r)]">
            <button className="w-10 h-10 border border-border text-muted-text flex items-center justify-center hover:border-heading hover:text-heading transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button className="w-10 h-10 bg-primary text-white font-semibold flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 border border-border text-heading font-semibold flex items-center justify-center hover:border-heading transition-colors">
              2
            </button>
            <button className="w-10 h-10 border border-border text-heading font-semibold flex items-center justify-center hover:border-heading transition-colors">
              3
            </button>
            <button className="w-10 h-10 border border-border text-muted-text flex items-center justify-center hover:border-heading hover:text-heading transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </nav>

        </main>
      </div>
    </div>
  )
}