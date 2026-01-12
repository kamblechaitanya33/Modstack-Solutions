const testimonials = [
  {
    name: "David Park",
    company: "TechStart Inc",
    role: "CEO",
    content:
      "Modstack Solutions transformed our outdated system into a modern, scalable platform. Their team was professional and delivered on time.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    company: "RetailPro",
    role: "CTO",
    content:
      "Working with Modstack was a game-changer. They understood our vision and delivered a solution that exceeded our expectations.",
    rating: 5,
  },
  {
    name: "James Mitchell",
    company: "CloudWorks",
    role: "Product Manager",
    content:
      "The team's expertise in cloud architecture was invaluable. They helped us optimize costs while improving performance by 300%.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    company: "FitLife Corp",
    role: "Founder",
    content:
      "From concept to launch, Modstack was amazing. Their attention to detail and commitment to excellence is unmatched.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#0f172a] mb-4 text-center">What Our Clients Say</h2>
        <p className="text-lg text-[#6b7280] text-center mb-12 max-w-2xl mx-auto">
          Real feedback from companies we've partnered with to transform their business
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-[#e5e7eb] hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, j) => (
                    <span key={j} className="text-yellow-400">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-[#6b7280] mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="border-t border-[#e5e7eb] pt-4">
                <p className="font-semibold text-[#0f172a]">{testimonial.name}</p>
                <p className="text-sm text-[#3b82f6]">{testimonial.role}</p>
                <p className="text-sm text-[#6b7280]">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
