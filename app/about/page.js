// AboutPage.jsx

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-body)] min-h-screen py-16 px-6 md:px-12 lg:px-24">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 mb-24 pt-8">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-playfair text-[var(--color-heading)] text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Artisanal <br />
            Integrity.
          </h1>
          <p className="font-inter text-[var(--color-body-text)] text-base md:text-lg leading-relaxed max-w-md">
            Weaving a 3,000-year legacy of Madhubani art into modern, structured utility. Every thread tells a story of heritage and precision.
          </p>
        </div>

        {/* Right: Featured Image */}
        <div className="w-full lg:w-1/2">
          <div className="aspect-[4/5] bg-[var(--color-card)] relative overflow-hidden">
            {/* Pattern overlay simulation (optional decorative element) */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,var(--color-heading)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none z-10 mix-blend-overlay"></div>
            <img 
              src="/placeholder-artisan.jpg" 
              alt="Artisan working on Madhubani art" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </section>

      {/* Full-width Divider */}
      <hr className="border-[var(--color-border)] max-w-7xl mx-auto mb-24" />

      {/* The Legacy Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 mb-24">
        
        {/* Left: Title & Badge */}
        <div className="w-full md:w-5/12 shrink-0">
          <div className="inline-block bg-[var(--color-section)]/40 px-2 py-1 mb-6">
            <span className="font-inter text-[var(--color-heading)] text-[10px] font-bold tracking-[0.2em] uppercase">
              The Legacy
            </span>
          </div>
          <h2 className="font-playfair text-[var(--color-heading)] text-4xl md:text-5xl font-bold leading-tight pr-4">
            3,000 Years of <br />
            Structured <br />
            Warmth.
          </h2>
        </div>

        {/* Right: Description (with vertical border on desktop) */}
        <div className="w-full md:w-7/12 md:border-l border-[var(--color-section)]/30 md:pl-12 lg:pl-16 flex flex-col justify-center">
          <p className="font-inter text-[var(--color-body-text)] text-sm md:text-base leading-relaxed mb-6">
            Originating in the Mithila region, our art form was born as a communal expression, painted on freshly plastered mud walls. Today, Heritage Threads translates this historic visual language into high-contrast minimalism.
          </p>
          <p className="font-inter text-[var(--color-body-text)] text-sm md:text-base leading-relaxed">
            We reject the superficial. Our design philosophy merges the rugged, grid-dominant architecture of urban technical gear with the soulful, hand-painted precision of our ancestors. The result is an artifact of modern utility, as durable as a messenger bag, yet as organic as hand-loomed silk.
          </p>
        </div>

      </section>

      {/* Decorative Separator Icon */}
      <div className="flex justify-center mb-24 text-[var(--color-heading)]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="M4.93 4.93l1.41 1.41"></path>
          <path d="M17.66 17.66l1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="M6.34 17.66l-1.41 1.41"></path>
          <path d="M19.07 4.93l-1.41 1.41"></path>
        </svg>
      </div>

      {/* Mission Block Section */}
      <section className="max-w-6xl mx-auto bg-[var(--color-section-2)] px-8 py-20 md:py-24 flex flex-col items-center justify-center text-center">
        
        {/* Drafting/Compass Icon */}
        <div className="text-[var(--color-primary)] mb-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l-5.5 14h11z"></path>
            <path d="M12 16v6"></path>
            <circle cx="12" cy="5" r="2"></circle>
            <path d="M8 11.5l8-2"></path>
          </svg>
        </div>

        {/* Mission Statement */}
        <h3 className="font-playfair text-[var(--color-heading)] text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-4xl mb-8">
          "To preserve the hand-painted precision of Mithila art within the rigid architecture of contemporary design."
        </h3>

        {/* Label */}
        <span className="font-inter text-[var(--color-heading)] text-[10px] font-bold tracking-[0.2em] uppercase">
          Our Mission
        </span>

      </section>

    </main>
  )
}