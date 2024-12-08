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
              By using UIROOM services, you agree to the terms and conditions outlined herein. These terms represent a legally binding agreement between you (the "Client") and UIROOM (the "Company"). Our goal is to provide digital services with the highest standard of professionalism, ensuring that all your needs are met efficiently and effectively.
            </p>
            <p>
              Services provided by UIROOM include but are not limited to website development, digital design, consultation, and software solutions. By engaging with UIROOM, you confirm that you understand and accept these terms, including our payment and delivery schedules.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Scope of Services
            </h2>
            <p>
              The services provided by UIROOM will be defined in individual project agreements. These agreements will specify the deliverables, timelines, and costs associated with the project. The scope of services is determined based on mutual agreement between the Client and the Company prior to the start of any project.
            </p>
            <p>
              Any changes to the agreed scope during the project may result in additional charges or a change in timelines. The Company reserves the right to adjust the scope of the work if necessary to accommodate unforeseen circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Payment Terms
            </h2>
            <p>
              Payment for services rendered by UIROOM is required as per the agreed-upon terms in the individual project agreement. A deposit may be required before the start of the project, with the balance due upon completion and delivery.
            </p>
            <p>
              All invoices must be paid in full before the final deliverables are provided. Failure to make timely payments may result in delays in project completion or suspension of services.
            </p>
            <p>
              UIROOM accepts payments through various methods, which will be specified during the project agreement. Clients are responsible for ensuring timely payment as per the agreed schedule.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Intellectual Property
            </h2>
            <p>
              All work created by UIROOM, including but not limited to code, designs, and content, is protected by intellectual property laws. Upon full payment for a project, clients will receive a limited, non-exclusive license to use the work as specified in the project agreement.
            </p>
            <p>
              The Client may not sell, distribute, or otherwise use the work for purposes beyond the scope of the original agreement without obtaining prior written consent from UIROOM.
            </p>
            <p>
              Any content provided by the Client to UIROOM, such as logos, images, or text, remains the intellectual property of the Client. UIROOM does not claim any ownership over the content provided by the Client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Confidentiality
            </h2>
            <p>
              UIROOM is committed to maintaining the confidentiality of any sensitive information shared by the Client during the course of the project. Both parties agree not to disclose confidential information to third parties unless required by law or with prior consent.
            </p>
            <p>
              This confidentiality obligation applies both during and after the completion of the project.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Limitation of Liability
            </h2>
            <p>
              UIROOM will not be held liable for any indirect, incidental, or consequential damages arising from the use of its services, including but not limited to lost profits, business interruption, or data loss.
            </p>
            <p>
              The total liability of UIROOM, whether in contract, tort, or otherwise, will be limited to the amount paid by the Client for the services directly related to the event causing the liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Termination
            </h2>
            <p>
              Either party may terminate the agreement with written notice if the other party fails to meet the terms of the agreement. If the Client terminates the agreement, UIROOM may retain any payments made up to that point, and no further work will be completed.
            </p>
            <p>
              If UIROOM terminates the agreement, the Client will be entitled to a refund for any work not yet completed. Termination will be handled in accordance with the terms outlined in the individual project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Governing Law and Dispute Resolution
            </h2>
            <p>
              These terms and conditions shall be governed by and construed in accordance with the laws of [Insert Country/State]. Any disputes arising out of or in connection with these terms shall be resolved through negotiation. If the parties are unable to resolve the dispute through negotiation, the matter may be submitted to arbitration or litigation as agreed upon in the project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Changes to Terms
            </h2>
            <p>
              UIROOM reserves the right to update or modify these terms and conditions at any time. Any changes will be communicated to the Client, and continued use of the services after such changes will constitute acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#5D3B8C] mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns about these Terms and Conditions, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:hi@uiroom.in" className="text-[#5D3B8C]">hi@uiroom.in</a>
            </p>
            <p>
              <strong>Phone:</strong> +91 94 99 888 170
            </p>
            <p>
              <strong>Address:</strong> UIROOM, [Your Address Here], France
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
