export default function DomainsSection() {
  const domains = [
    {
      title: "Full Stack",
      description: "Need a web solution, but overwhelmed by the tech props? We've got you covered! Our full-stack expertise tackles SaaS, web apps, e-commerce, and landing pages. We make tech simple.",
      technologies: [
        { placeholder: "/icon-tech/nextjs.svg" },
        { placeholder: "/icon-tech/typescript-color.svg" },
        { placeholder: "/icon-tech/tailwind-color.svg" },
        { placeholder: "/icon-tech/vue-color.svg" },
        { placeholder: "/icon-tech/nuxt-color.svg" },
        { placeholder: "/icon-tech/node-js-seeklogo.svg" },
        { placeholder: "/icon-tech/shopify-color.svg" },
        { placeholder: "/icon-tech/react.svg" },
        { placeholder: "/icon-tech/mongodb.svg" }
      ]
    },
    {
      title: "Mobile Apps",
      description: "Level up your mobile strategy. Let's build your next big app.",
      technologies: [
        { placeholder: "/icon-tech/flutter.svg" },
        { placeholder: "/icon-tech/apple.svg" },
        { placeholder: "/icon-tech/android.svg" }
      ]
    },
    {
      title: "UI/UX & Design",
      description: "Bridge the gap between user and tech. Strategic UI/UX design for success.",
      technologies: [
        { placeholder: "/icon-tech/lightroom-color.svg" },
        { placeholder: "/icon-tech/photoshop-color.svg" },
        { placeholder: "/icon-tech/figma-color.svg" },
        { placeholder: "/icon-tech/illustrator-color.svg" }
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
              {domain.technologies.map((tech, iconIndex) => (
                <img 
                  key={iconIndex}
                  src={tech.placeholder} 
                  alt="Technology icon" 
                  className="w-12 h-12 rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}