// ProductDetailsPage.jsx

export default function ProductDetailsPage() {
  return (
    <main className="bg-[var(--color-body)] min-h-screen py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Section: Product Image Gallery */}
          <section className="flex flex-col gap-6">
            
            {/* Main Product Image */}
            <div className="relative border border-[var(--color-border)] bg-white">
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-[var(--color-section)] border border-black/20 px-3 py-1.5">
                <span className="font-inter text-xs font-bold tracking-widest uppercase text-[var(--color-heading)]">
                  Handcrafted
                </span>
              </div>
              <img 
                src="/placeholder-main-keychain.jpg" 
                alt="Matsya Mithila Keychain Front" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-[var(--color-border)] bg-white">
                <img 
                  src="/placeholder-thumb-1.jpg" 
                  alt="Keychain Detail Back" 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="border border-[var(--color-border)] bg-white">
                <img 
                  src="/placeholder-thumb-2.jpg" 
                  alt="Keychain Detail Flatlay" 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </div>
          </section>

          {/* Right Section: Product Information */}
          <section className="flex flex-col py-4 lg:py-8">
            
            {/* Breadcrumbs */}
            <nav className="font-inter text-[10px] tracking-[0.15em] uppercase mb-8">
              <span className="text-[var(--color-muted-text)]">Collection</span>
              <span className="text-[var(--color-muted-text)] mx-2">/</span>
              <span className="text-[var(--color-muted-text)]">Accessories</span>
              <span className="text-[var(--color-muted-text)] mx-2">/</span>
              <span className="text-[var(--color-heading)] font-semibold">Mithila Keychain</span>
            </nav>

            {/* Product Title & Price */}
            <h1 className="font-playfair text-4xl lg:text-5xl text-[var(--color-heading)] leading-[1.1] mb-6">
              Matsya Mithila<br />Keychain
            </h1>
            <p className="font-playfair text-2xl text-[var(--color-primary)] font-semibold mb-10">
              ₹1,250
            </p>

            {/* Product Description */}
            <p className="font-inter text-[var(--color-body-text)] text-sm leading-[1.8] mb-12">
              A utilitarian piece of art. This keychain features the traditional Matsya (fish) motif, symbolizing fertility and prosperity in Mithila culture, hand-painted with precision on sustainably sourced mahogany wood.
            </p>

            {/* Call to Action */}
            <button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-inter text-[11px] font-bold tracking-[0.2em] uppercase py-5 transition-colors flex items-center justify-center gap-3">
              Add to Cart 
              <span aria-hidden="true" className="text-lg leading-none">&rarr;</span>
            </button>
            
            {/* Shipping Info */}
            <p className="text-center font-inter text-[var(--color-muted-text)] text-[9px] font-medium tracking-[0.2em] uppercase mt-5 mb-12">
              Free shipping on orders over ₹5,000
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-12">
              <div className="w-16 h-[1px] bg-[var(--color-border)]"></div>
              <svg className="w-5 h-5 mx-4 text-[var(--color-muted-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <div className="w-16 h-[1px] bg-[var(--color-border)]"></div>
            </div>

            {/* Artisan Story Card */}
            <article className="border border-[var(--color-border)] bg-transparent p-7">
              <h2 className="font-inter text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--color-heading)] mb-5">
                The Artisan's Story
              </h2>
              <div className="flex gap-5">
                <div className="w-16 h-16 shrink-0 bg-gray-200">
                  <img 
                    src="/placeholder-artisan.jpg" 
                    alt="Sunita Devi" 
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <p className="font-inter text-[13px] text-[var(--color-muted-text)] leading-[1.7]">
                  Crafted by Sunita Devi in Madhubani, Bihar. With over 20 years of experience, Sunita translates her family's traditional wall mural techniques into miniature, durable accessories for everyday carry.
                </p>
              </div>
            </article>

          </section>
        </div>
      </div>
    </main>
  );
}