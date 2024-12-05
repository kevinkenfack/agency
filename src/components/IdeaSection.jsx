import { Mail, Phone } from 'lucide-react'

export default function IdeaSection() {
  const contactInfo = [
    {
      icon: Mail,
      href: "mailto:hi@uiflow.in",
      text: "hi@uiflow.in",
      ariaLabel: "Send us an email"
    },
    {
      icon: Phone,
      href: "tel:+919499888170",
      text: "+91 94 99 888 170",
      ariaLabel: "Call us"
    }
  ]

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
          Have an idea?
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-600">
          SaaS, Web App, Mobile App, UI/UX, Graphic Design, connect with us.
          Our team will respond in 24hr with estimate.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 relative">
            <div className="relative w-64 h-64 mx-auto">
              <div 
                className="absolute inset-0 bg-purple-100 rounded-full"
                aria-hidden="true"
              />
              <img
                src="/profile.png"
                alt="Cartoon woman with laptop"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <info.icon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <a 
                  href={info.href}
                  className="text-xl hover:underline text-gray-800 transition-colors duration-200"
                  aria-label={info.ariaLabel}
                >
                  {info.text}
                </a>
              </div>
            ))}
            <p className="text-sm text-gray-500 mt-4">
              *Our Team will respond in 24hrs on Business Days IST (Indian Standard Time)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}