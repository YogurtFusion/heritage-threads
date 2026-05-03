import React from 'react'

export const UserSidebar = () => {
  return (
   <aside className="w-full md:w-48 lg:w-56 shrink-0">
          <h1 className="font-playfair text-3xl text-heading mb-10">
            My Account
          </h1>
          <nav className="flex flex-col space-y-6">
            <a 
              href="#" 
              className="flex justify-between items-center text-primary font-bold tracking-wider text-sm border-b border-primary pb-2"
            >
              Profile
              <span className="text-lg leading-none">→</span>
            </a>
            <a 
              href="#" 
              className="text-heading font-bold tracking-wider text-sm hover:text-primary transition-colors"
            >
              Orders
            </a>
            <a 
              href="#" 
              className="text-heading font-bold tracking-wider text-sm hover:text-primary transition-colors"
            >
              Addresses
            </a>
            <a 
              href="#" 
              className="text-heading font-bold tracking-wider text-sm hover:text-primary transition-colors mt-2"
            >
              Sign Out
            </a>
          </nav>
        </aside>)
}
