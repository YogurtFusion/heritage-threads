// ContactPage.jsx
export default function ContactPage() {
  return (
    // Main container using the body background variable
    <main className="bg-body min-h-screen py-16 px-6 md:px-12 lg:px-24">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-16">
        {/* Playfair Display heading, uppercase, dark text */}
        <h1 className="font-playfair text-heading text-5xl md:text-6xl font-bold uppercase mb-6">
          Contact Us
        </h1>
        {/* Inter body text, slightly muted for readability */}
        <p className="font-inter text-body-text max-w-2xl text-lg leading-relaxed">
          For bespoke commissions, artisan inquiries, or simply to learn more about our 
          heritage craft. We welcome your correspondence.
        </p>
      </section>

      {/* Main Content Split Layout */}
      {/* Outer border for the entire two-column container */}
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row border border-border">
        
        {/* Left Column - Contact Form */}
        {/* Uses the card background variable, relative positioning for the background graphic */}
        <div className="w-full lg:w-1/2 bg-card p-8 md:p-16 relative overflow-hidden">
          
          <form className="relative z-10">
            {/* Full Name Field */}
            <div className="mb-8">
              <label className="block font-inter text-xs font-bold tracking-widest text-heading uppercase mb-2">
                Full Name
              </label>
              {/* Bottom border only, transparent background */}
              <input 
                type="text" 
                placeholder="e.g. Anjali Desai" 
                className="w-full bg-transparent border-b border-heading py-2 font-inter text-body-text placeholder-[va-text)] us:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="mb-8">
              <label className="block font-inter text-xs font-bold tracking-widest text-heading uppercase mb-2">
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="anjali@example.com" 
                className="w-full bg-transparent border-b border-heading py-2 font-inter text-body-text placeholder-[va-text)] us:outline-none"
              />
            </div>

            {/* Inquiry Type Dropdown */}
            <div className="mb-8 relative">
              <label className="block font-inter text-xs font-bold tracking-widest text-heading uppercase mb-2">
                Inquiry Type
              </label>
              <select className="w-full bg-transparent border-b border-heading py-2 font-inter text-body-text appearance-none focus:outline-none">
                <option>General Inquiry</option>
                <option>Bespoke Commission</option>
                <option>Artisan Application</option>
              </select>
              {/* Custom dropdown arrow */}
              <div className="absolute right-0 bottom-3 pointer-events-none text-heading">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-12">
              <label className="block font-inter text-xs font-bold tracking-widest text-heading uppercase mb-2">
                Message
              </label>
              <textarea 
                placeholder="How may we assist you?" 
                rows="4"
                className="w-full bg-transparent border-b border-heading py-2 font-inter text-body-text placeholder-[va-text)] us:outline-none resize-none"
              ></textarea>
            </div>

            {/* Primary Button */}
            <button 
              type="button"
              className="bg-primary hover:bg-primary-hover text-white font-inter text-sm font-semibold tracking-widest uppercase py-4 px-8 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Decorative Flower Graphic (Bottom Right) */}
          <div className="absolute -bottom-16 -right-16 text-border opacity-40 pointer-events-none">
            <svg width="300" height="300" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0C110 30 130 40 150 40C180 40 200 60 200 90C200 110 180 130 160 140C180 160 180 190 150 200C130 200 110 180 100 160C90 180 70 200 50 200C20 200 20 160 40 140C20 130 0 110 0 90C0 60 20 40 50 40C70 40 90 30 100 0Z" />
              <circle cx="100" cy="100" r="30" fill="var(--color-card)" />
            </svg>
          </div>
        </div>

        {/* Right Column - Contact Information */}
        {/* Uses body background variable to distinguish from form card */}
        <div className="w-full lg:w-1/2 bg-body p-8 md:p-16 flex flex-col justify-center">
          
          {/* Direct Lines Section */}
          <div className="mb-12">
            <h2 className="font-playfair text-heading text-2xl mb-8 font-semibold">
              Direct Lines
            </h2>
            <ul className="space-y-6">
              {/* Email */}
              <li className="flex items-start gap-4 text-body-text font-inter">
                <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                </svg>
                <span>artisan@heritagethreads.com</span>
              </li>
              {/* Phone */}
              <li className="flex items-start gap-4 text-body-text font-inter">
                <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.06 21 2 12.94 2 3C2 2.45 2.45 2 3 2H6.5C7.05 2 7.5 2.45 7.5 3C7.5 4.25 7.7 5.45 8.07 6.57C8.18 6.92 8.1 7.31 7.82 7.59L6.62 10.79Z"/>
                </svg>
                <span>+91 800 123 4567</span>
              </li>
              {/* Address */}
              <li className="flex items-start gap-4 text-body-text font-inter">
                <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
                </svg>
                <div>
                  <p>Studio 4A, Weaver's Enclave</p>
                  <p>Textile District, Mumbai</p>
                  <p>India 400001</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-border"></div>
            {/* Small Sun/Flower Icon */}
            <div className="text-muted-text">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Immediate Assistance Section */}
          <div>
            <h2 className="font-playfair text-heading text-2xl mb-4 font-semibold">
              Immediate Assistance
            </h2>
            <p className="font-inter text-body-text mb-6 text-sm leading-relaxed">
              For urgent bespoke updates or direct artisan consultation, reach us on WhatsApp.
            </p>
            {/* Outline Button */}
            <button 
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors py-4 px-6 font-inter text-sm font-semibold tracking-widest uppercase"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766 0 1.252.398 2.455 1.135 3.44l-.791 2.88 2.96-.777c.95.666 2.062 1.018 3.23 1.018h.004c3.18 0 5.768-2.586 5.768-5.766 0-3.181-2.587-5.767-5.768-5.767zm3.173 8.163c-.173.491-.941.932-1.312.982-.338.046-.788.136-2.222-.461-1.728-.718-2.839-2.493-2.923-2.604-.083-.111-.698-.927-.698-1.767 0-.84.44-1.25.594-1.416.155-.166.335-.208.447-.208.111 0 .222.001.318.005.105.005.247-.04.38.283.138.334.471 1.147.514 1.233.042.086.069.186.014.296-.055.111-.083.18-.166.277-.083.097-.174.215-.249.299-.084.093-.173.195-.078.36.094.164.42 6.96.883 1.077.464.382.932.417 1.042.417.111 0 .252-.294.346-.464.094-.171.189-.143.346-.084.156.06.988.466 1.157.551.168.085.281.127.322.197.042.07.042.41-.131.901zM12 2C6.477 2 2 6.477 2 12c0 1.765.46 3.468 1.306 4.981L2 22l5.166-1.282C8.618 21.543 10.286 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}