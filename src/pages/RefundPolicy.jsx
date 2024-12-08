import React from 'react'

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-3xl p-10">
        <h1 className="text-4xl font-bold text-[#5D3B8C] mb-8 text-center">
          Refund Policy
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Refund Eligibility
            </h2>
            <p>
              We strive to deliver high-quality digital services. Refunds are considered 
              on a case-by-case basis based on project scope and client satisfaction.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Refund Process
            </h2>
            <p>
              If you are unsatisfied with our services, please contact our support team 
              to discuss your concerns and potential resolution.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}