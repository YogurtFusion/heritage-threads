import React from 'react'
import CheckoutForm from './CheckoutForm'
import CheckoutSucess from './CheckoutSucess'

const CheckoutSection = () => {
  return (
    <div>
      <main className="min-h-screen bg-body py-12 px-4 sm:px-6 lg:px-12 ">
      <div className="max-w-6xl mx-auto">
        
        {/* Checkout Section */}
        <CheckoutForm/>

        {/* Visual Divider (Simulation of scrolling to next view) */}
        <hr className="border-border w-full max-w-150 mx-auto my-24" />

        {/* Success / Thank You Section */}
      <CheckoutSucess/>

      </div>
    </main>
    </div>
  )
}

export default CheckoutSection
