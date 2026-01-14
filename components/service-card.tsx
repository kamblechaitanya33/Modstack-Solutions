export function ServiceCard({
  service,
  index,
}: {
  service: {
    id: string
    title: string
    description: string
    fullDescription: string
    features: string[]
    technologies: string[]
    icon: string
    imagePath: string
  }
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <div id={service.id} className="scroll-mt-20">
      <div
        className={`flex flex-col-reverse ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-10 items-center border border-[#3b82f6] hover:border-[#2563eb] p-6 sm:p-10 rounded-3xl bg-white shadow-md transition-all duration-300`}
      >
        {/* Content */}
        <div className="flex-1 w-full">
          <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            {service.title}
          </h2>
          <p className="text-base sm:text-lg text-[#6b7280] mb-6">
            {service.fullDescription}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#0f172a] mb-4">
              Key Features:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#3b82f6] font-bold mt-1">✓</span>
                  <span className="text-[#374151]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-[#0f172a] mb-3">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#eff6ff] text-[#3b82f6] rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full flex justify-center">
          <img
            src={service.imagePath}
            alt={service.title}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>

      {/* <div className="border-b border-[#e5e7eb] my-12"></div> */}
    </div>
  )
}