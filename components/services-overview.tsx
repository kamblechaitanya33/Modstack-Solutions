import Link from "next/link"

const services = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Custom, secure and scalable web solutions tailored to your business needs.",
    icon: "",
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    description:
      "Robust and user-friendly mobile apps for Android and iOS platforms.",
    icon: "",
  },
  {
    id: "ai",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Intelligent solutions that automate, predict, and enhance business operations.",
    icon: "",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 max-w-3xl">

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-4 leading-tight">
            Solutions for growing businesses
          </h2>

          <p className="text-base text-[#64748b]">
            We build scalable, secure, and future-ready digital products tailored to your goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="
                group
                relative
                flex flex-col
                gap-3
                p-6
                rounded-2xl
                bg-white/80 backdrop-blur
                border border-[#2563eb]
                shadow-sm
                hover:shadow-lg
                transition-all duration-300
                hover:-translate-y-0.5
              "
            >
              {/* Subtle gradient hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2563eb]/10 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              <div className="relative z-10 text-3xl">
                {service.icon}
              </div>

              <h3 className="relative z-10 text-lg font-semibold text-[#0f172a]">
                {service.title}
              </h3>

              <p className="relative z-10 text-sm text-[#64748b] leading-relaxed">
                {service.description}
              </p>

              <Link
                href={`/services#${service.id}`}
                className="relative z-10 mt-auto inline-flex items-center gap-1.5 text-sm text-[#2563eb] font-semibold hover:gap-2 transition-all"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="
              inline-flex items-center justify-center
              px-8 py-3
              rounded-lg
              bg-gradient-to-r from-[#2563eb] to-[#1e40af]
              text-sm text-white
              font-semibold
              shadow-md
              hover:shadow-lg
              transition-all
            "
          >
            Explore All Services
          </Link>
        </div>

      </div>
    </section>
  )
}
