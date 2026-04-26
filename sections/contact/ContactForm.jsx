import PrimaryBtn from "@/components/ui/PrimaryBtn";
import React from "react";

const ContactForm = () => {
  return (
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
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
      <PrimaryBtn
        title={"Send Message"}
        mainClass={" text-white bg-primary px-3 py-2"}
        hoverClass={"bg-primary-hover"}
        href={"/"}
      />
    </form>
  );
};

export default ContactForm;
