import Link from "next/link"

const services = [
  {
    id: "web",
    title: "Web Development",
    description: "Modern, responsive web applications built with latest technologies.",
    icon: "🌐",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    icon: "📱",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    icon: "☁️",
  },
  {
    id: "consulting",
    title: "IT Consulting",
    description: "Strategic technology guidance and architecture design.",
    icon: "💼",
  },
  {
    id: "support",
    title: "Support & Maintenance",
    description: "24/7 monitoring, updates, and technical support.",
    icon: "🔧",
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "Custom AI solutions and workflow automation.",
    icon: "🤖",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">Our Services</h2>
          <p className="text-lg text-[#6b7280] max-w-2xl">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-xl border border-[#e5e7eb] hover:border-[#3b82f6] hover:shadow-lg transition bg-white"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">{service.title}</h3>
              <p className="text-[#6b7280] mb-4">{service.description}</p>
              <Link
                href={`/services#${service.id}`}
                className="text-[#3b82f6] font-semibold hover:text-[#1e40af] transition"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="px-8 py-4 bg-[#3b82f6] text-white rounded-lg font-semibold hover:bg-[#1e40af] transition inline-block"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
