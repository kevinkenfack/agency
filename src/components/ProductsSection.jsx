export default function ProductsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl sm:text-7xl font-bold text-center mb-16">
          Our Products
        </h2>

        <div className="space-y-16">
          {/* NextLink Product */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#FDF6F0] rounded-lg flex items-center justify-center shrink-0">
                <span className="font-bold text-sm">NEXT LINK.</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">NextLink</h3>
                <p className="text-gray-600">
                  Build your digital presence, add your socials, important links, in one single page. Make QR code, or Digital V-Card.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src="/restopro-ss.webp"
         
                alt="NextLink marketing screenshot"
                className="rounded-2xl w-full"
              />
              <img
                src="/nextlink-ss.webp"

                alt="NextLink app interface"
                className="rounded-2xl w-full"
              />
            </div>
          </div>

          {/* RestroPRO Product */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#2B4332] rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">Restro</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">RestroPRO SaaS</h3>
                <p className="text-gray-600">
                  Effortlessly manage your restaurant, cafe, hotel, bars using our All-in-One POS system. Which includes features like POS, Live Order Announcements, Reports, Realtime Sync.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/restopro-ss.webp"
                alt="RestroPRO dashboard interface"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
