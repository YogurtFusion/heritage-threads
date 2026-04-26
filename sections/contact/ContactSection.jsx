import ChatBubble from "@/components/Icons/ChatBubble";
import { EmailIcon } from "@/components/Icons/EmailIcon";
import LocationIcon from "@/components/Icons/LocationIcon";
import { PhoneIcon } from "@/components/Icons/PhoneIcon";
import SunFlowerIcon from "@/components/Icons/SunFlowerIcon";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import React from "react";
import ContactForm from "./ContactForm";
import ContactBtn from "@/components/ui/ContactBtn";

const Contact = () => {
  return (
    <div>
      <main className="bg-body min-h-screen py-16 px-6 md:px-12 lg:px-24">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto mb-16">
          {/* Playfair Display heading, uppercase, dark text */}
          <h1 className=" text-heading text-5xl md:text-6xl font-bold uppercase mb-6">
            Contact Us
          </h1>
          {/* Inter body text, slightly muted for readability */}
          <p className="font-inter text-body-text max-w-2xl text-lg leading-relaxed">
            For bespoke commissions, artisan inquiries, or simply to learn more
            about our heritage craft. We welcome your correspondence.
          </p>
        </section>

        {/* Main Content Split Layout */}
        {/* Outer border for the entire two-column container */}
        <section className="max-w-6xl mx-auto flex flex-col lg:flex-row border border-border">
          {/* Left Column - Contact Form */}
          {/* Uses the card background variable, relative positioning for the background graphic */}
          <div className="w-full lg:w-1/2 bg-card p-8 md:p-16 relative overflow-hidden">
            <ContactForm />
            {/* Decorative Flower Graphic (Bottom Right) */}
            <div className="absolute -bottom-16 -right-16 text-border opacity-40 pointer-events-none">
              <SunFlowerIcon />
            </div>
          </div>

          {/* Right Column - Contact Information */}
          {/* Uses body background variable to distinguish from form card */}
          <div className="w-full lg:w-1/2 bg-body p-8 md:p-16 flex flex-col justify-center">
            {/* Direct Lines Section */}
            <div className="mb-12">
              <h2 className=" text-heading text-2xl mb-8 font-semibold">
                Direct Lines
              </h2>
              <ul className="space-y-6">
                {/* Email */}
                <li className="flex items-start gap-4 text-body-text font-inter">
                  <EmailIcon />
                  <span>artisan@heritagethreads.com</span>
                </li>
                {/* Phone */}
                <li className="flex items-start gap-4 text-body-text font-inter">
                  <PhoneIcon />
                  <span>+91 800 123 4567</span>
                </li>
                {/* Address */}
                <li className="flex items-start gap-4 text-body-text font-inter">
                  <LocationIcon />
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
              <SunFlowerIcon />
              <div className="flex-1 h-px bg-border"></div>
            </div>

            {/* Immediate Assistance Section */}
            <div>
              <h2 className=" text-heading text-2xl mb-4 font-semibold">
                Immediate Assistance
              </h2>
              <p className="font-inter text-body-text mb-6 text-sm leading-relaxed">
                For urgent bespoke updates or direct artisan consultation, reach
                us on WhatsApp.
              </p>
              {/* Outline Button */}
              {/* <button 
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors py-4 px-6 font-inter text-sm font-semibold tracking-widest uppercase"
            >
              <ChatBubble/>
              Chat on WhatsApp
            </button> */}
              <ContactBtn
                title={"Chat on WhatsApp "}
                mainClass={
                  " text-secondary  border border-secondary text-secondary"
                }
                textHover={"group-hover/btn:text-body"}
                hoverClass={"bg-secondary text-body "}
                href={"/"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
