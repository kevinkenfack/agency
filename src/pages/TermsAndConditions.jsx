import React from 'react'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-3xl p-10">
        <h1 className="text-4xl font-bold text-[#5D3B8C] mb-8 text-center">
          Terms & Conditions
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Service Agreement
            </h2>
            <p>
              By using UIROOM services, you agree to the terms outlined herein. 
              We provide digital services with the highest standard of professionalism.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Intellectual Property
            </h2>
            <p>
              All work created by UIROOM is subject to our intellectual property rights. 
              Clients receive usage rights as specified in individual project agreements.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}