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
  <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-24 text-white">
  {/* Decorative background blur */}
  <div className="absolute inset-0">
    <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
    <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
      What Our Clients Say
    </h2>

    <p className="text-lg md:text-xl text-blue-100 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
      Real feedback from companies we’ve partnered with to transform their business.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {testimonials.map((testimonial, i) => (
        <div
          key={i}
          className="group rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl"
        >
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {Array(testimonial.rating)
              .fill(0)
              .map((_, j) => (
                <span key={j} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
          </div>

          {/* Content */}
          <p className="text-blue-100 mb-6 leading-relaxed">
            “{testimonial.content}”
          </p>

          {/* Author */}
          <div className="border-t border-white/20 pt-4">
            <p className="font-semibold text-white">{testimonial.name}</p>
            <p className="text-sm text-blue-200">{testimonial.role}</p>
            <p className="text-sm text-blue-300">{testimonial.company}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}
