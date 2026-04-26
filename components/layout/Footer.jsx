import React from 'react';
import Link from 'next/link';
import InstaIcon from '../Icons/InstagramIcon';
import RedditIcon from '../Icons/RedditIcon';

const Footer = () => {
  // Array for links makes the code cleaner and easier to update
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Keychains', href: '/keychains' },
    { name: 'Zipchains', href: '/zipchains' },
    { name: 'Contact us', href: '/contact' },
  ];

  return (
    <footer className='bg-footer border-t border-heading/10'>
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <h3 className='text-heading text-xl font-medium tracking-tight'>
              Heritage Threads
            </h3>
            <p className='text-heading/50 text-xs md:text-xs leading-relaxed tracking-[0.15em] uppercase max-w-xs'>
              © 2024 THE CURATED CANVAS. <br className="hidden md:block" />
              PRESERVING THE MADHUBANI LEGACY.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className='text-heading/60 text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-primary'
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-5">
            <Link href="#" className="opacity-60 hover:opacity-100 transition-opacity">
              <InstaIcon />
            </Link>
            <Link href="#" className="opacity-60 hover:opacity-100 transition-opacity">
              <RedditIcon />
            </Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;