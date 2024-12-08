import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-3xl p-10">
        <h1 className="text-4xl font-bold text-[#5D3B8C] mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Information We Collect
            </h2>
            <p>
              At UIROOM, we are committed to protecting your privacy. We collect minimal 
              personal information necessary to provide our digital services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              How We Use Your Information
            </h2>
            <p>
              We use the information collected to provide, maintain, and improve our services, 
              communicate with you, and ensure the best possible user experience.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}