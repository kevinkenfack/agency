import { 
  Database, 
  Server, 
  Code2, 
  Smartphone, 
  Palette, 
  Layout, 
  Apple, 
  Globe 
} from 'lucide-react'

export default function DomainsSection() {
  const domains = [
    {
      title: "Full Stack",
      description: "Need a web solution, but overwhelmed by the tech props? We've got you covered! Our full-stack expertise tackles SaaS, web apps, e-commerce, and landing pages. We make tech simple.",
      icons: [
        { Icon: Server, color: "text-blue-500" },
        { Icon: Database, color: "text-green-500" },
        { Icon: Globe, color: "text-purple-500" },
        { Icon: Code2, color: "text-yellow-500" }
      ]
    },
    {
      title: "Mobile Apps",
      description: "Level up your mobile strategy. Let's build your next big app.",
      icons: [
        { Icon: Apple, color: "text-gray-800" },
        { Icon: Smartphone, color: "text-green-500" },
        { Icon: Globe, color: "text-blue-500" }
      ]
    },
    {
      title: "UI/UX & Design",
      description: "Bridge the gap between user and tech. Strategic UI/UX design for success.",
      icons: [
        { Icon: Palette, color: "text-pink-500" },
        { Icon: Layout, color: "text-purple-500" }
      ]
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        {domains.map((domain, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-lg p-8 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#5D3B8C]">
              {domain.title}
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto">
              {domain.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              {domain.icons.map((icon, iconIndex) => {
                const { Icon, color } = icon;
                return <Icon key={iconIndex} className={`w-8 h-8 ${color}`} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}