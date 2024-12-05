import { Database, Server, Code2, Smartphone, Palette, Layout, Apple, SmartphoneIcon as Android, Globe } from 'lucide-react'

export default function DomainsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Full Stack Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#5D3B8C]">
            Full Stack
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Need a web solution, but overwhelmed by the tech props? We've got you covered! Our full-stack expertise tackles SaaS, web apps, e-commerce, and landing pages. We make tech simple.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Server className="w-8 h-8 text-blue-500" />
            <Database className="w-8 h-8 text-green-500" />
            <Globe className="w-8 h-8 text-purple-500" />
            <Code2 className="w-8 h-8 text-yellow-500" />
            {/* Add more tech stack icons as needed */}
          </div>
        </div>

        {/* Mobile Apps Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#5D3B8C]">
            Mobile Apps
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Level up your mobile strategy. Let's build your next big app.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Apple className="w-8 h-8" />
            <Android className="w-8 h-8 text-green-500" />
            <Smartphone className="w-8 h-8 text-blue-500" />
            {/* Add more mobile platform icons as needed */}
          </div>
        </div>

        {/* UI/UX & Design Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#5D3B8C]">
            UI/UX & Design
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Bridge the gap between user and tech. Strategic UI/UX design for success.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Palette className="w-8 h-8 text-pink-500" />
            <Layout className="w-8 h-8 text-purple-500" />
            {/* Add more design tool icons as needed */}
          </div>
        </div>
      </div>
    </section>
  )
}

