import { Heart } from 'lucide-react'

export default function AchievementsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 3D Character Card */}
          <div className="relative bg-[#FFF1EC] rounded-3xl p-8 flex items-center justify-center h-[400px]">
            {/* Image avec style absolu */}
            <img
              src="/smart-tab-girl-pink.webp"
              alt="3D character illustration"
              className="absolute h-[450px] bottom-0 left-1/2 -translate-x-1/2"
            />
          </div>


          {/* World Map Card */}
          <div className="bg-[#4a249d] rounded-3xl p-8 md:col-span-2 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Countries</h3>
              <p className="text-7xl font-bold">20+</p>
            </div>
            <img
              src="/world-map.svg"
              alt="World map dots"
              className="absolute top-0 right-0 w-2/3 h-full object-contain opacity-50"
            />
          </div>

          {/* Design & Development Card */}
          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-3xl font-bold mb-4">DESIGN</h3>
            <Heart className="text-red-500 w-12 h-12 my-4" />
            <h3 className="text-3xl font-bold">DEVELOPMENT</h3>
          </div>

          {/* Projects Completed Card */}
          <div className="bg-[#B19CD9] rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-white text-3xl font-bold mb-2">Projects</h3>
            <h4 className="text-white text-3xl font-bold mb-2">Completed</h4>
            <p className="text-white text-7xl font-bold">50+</p>
          </div>

          {/* Cutting Edge Tech Card */}
          <div className="bg-[#FFD4E5] rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">Cutting</h3>
              <h3 className="text-3xl font-bold mb-2">Edge</h3>
              <h3 className="text-3xl font-bold">Tech.</h3>
            </div>
            <img
              src="/girl-with-laptop.webp"

              alt="3D character with laptop"
              className="absolute bottom-0 right-0 w-2/5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}