import { Mail, Phone } from 'lucide-react'

export default function IdeaSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-4">
          Have an idea?
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          SaaS, Web App, Mobile App, UI/UX, Graphic Design, connect with us.
          Our team will respond in 24hr with estimate.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-purple-100 rounded-full"></div>
              {/* Assure-toi que l'image existe dans le dossier public */}
              <img
                src="/placeholder.svg" // Vérifie que ce fichier existe dans public
                alt="Cartoon woman with laptop"
                className="z-10 w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-purple-600" />
              <a href="mailto:hi@uiflow.in" className="text-xl hover:underline">
                hi@uiflow.in
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-purple-600" />
              <a href="tel:+919499888170" className="text-xl hover:underline">
                +91 94 99 888 170
              </a>
            </div>
            <p className="text-sm text-gray-500">
              *Our Team will respond in 24hrs on Business Days IST (Indian Standard Time)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
