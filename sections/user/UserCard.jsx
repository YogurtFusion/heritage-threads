import React from 'react'

export const UserCard = () => {
  return (
       <article className="bg-card border border-border p-8 md:p-10 mb-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-playfair text-2xl text-heading">
                Details
              </h3>
              <button aria-label="Edit Details">
                <svg className="w-5 h-5 text-heading" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest text-heading mb-2 uppercase">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    defaultValue="Elena" 
                    className="w-full bg-body border border-border p-3 text-heading focus:outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-heading mb-2 uppercase">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    defaultValue="Rostova" 
                    className="w-full bg-body border border-border p-3 text-heading focus:outline-none" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold tracking-widest text-heading mb-2 uppercase">
                  Email Address
                </label>
                <input 
                  type="email" 
                  defaultValue="elena.r@example.com" 
                  className="w-full bg-body border border-border p-3 text-heading focus:outline-none" 
                />
              </div>
              
              <div className="pb-4">
                <label className="block text-xs font-bold tracking-widest text-heading mb-2 uppercase">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  defaultValue="+1 (555) 019-2834" 
                  className="w-full bg-body border border-border p-3 text-heading focus:outline-none" 
                />
              </div>
              
              <button 
                type="button"
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold tracking-widest text-sm uppercase py-4 transition-colors"
              >
                Save Changes
              </button>
            </form>
          </article>
  )
}
