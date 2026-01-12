import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const teamMembers = [
  {
    name: "Mustafa Khan",
    role: "Chief Technology Officer (CTO)",
    bio: "Expert in software architecture, cloud platforms, system scalability, and technical strategy.",
    image: "/mustafa_cto.jpg",
  },
  {
    name: "Sahil Ghodse",
    role: "Chief Operating Officer (COO)",
    bio: "Oversees daily operations, project execution, and process optimization to ensure efficient delivery.",
    image: "/sahil.png",
  },
  {
    name: "Arbaaz Desai",
    role: "Chief Financial Officer (CFO)",
    bio: "Manages company finances, budgeting, compliance, and financial planning for sustainable growth.",
    image: "/arbaz.png",
  },
  {
    name: "Chaitanya Kamble",
    role: "Founder & CEO",
    bio: "Drives company vision, strategy, client relationships, and business growth with a strong tech background.",
    image: "/chaitanya.png",
  },
]

const values = [
  {
    title: "Innovation",
    description: "We stay ahead of technology trends and continuously improve our solutions.",
  },
  {
    title: "Quality",
    description: "Excellence in every line of code and every interaction with our clients.",
  },
  {
    title: "Partnership",
    description: "We treat your success as our success and work as true partners.",
  },
  {
    title: "Transparency",
    description: "Clear communication and honest feedback throughout every project.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Modstack Solutions</h1>
            <p className="text-lg text-[#cbd5e1] max-w-2xl">Transforming businesses through technology</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-[#6b7280]">
              <p>
                Founded in 2025, Modstack Solutions started with a simple vision to deliver world-class IT and software
                solutions that help businesses thrive in the digital age. What began as a small team of passionate
                developers has grown into a full-service technology partner for hundreds of companies.
              </p>
              <p>
                We believe that technology should be a catalyst for business growth, not a barrier. Our approach
                combines deep technical expertise with a genuine understanding of business challenges. We don't just
                build software we build solutions that drive measurable results.
              </p>
              <p>
                Today, we're proud to have helped startups scale to unicorns and enterprises transform their legacy
                systems into modern, efficient platforms  .
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-[#f9fafb]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <div key={i} className="p-8 bg-white rounded-xl border border-[#e5e7eb]">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3">{value.title}</h3>
                  <p className="text-[#6b7280]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <div key={i} className="text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full rounded-lg mb-4 aspect-square object-cover"
                  />
      { <h3 className="text-xl font-bold text-[#0f172a] mb-1">{member.name}</h3> }


                  <p className="text-[#3b82f6] font-semibold mb-2">{member.role}</p>
                  <p className="text-[#6b7280] text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#0f172a] text-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-[#3b82f6] mb-2">200+</div>
                <p className="text-[#cbd5e1]">Projects Delivered</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#3b82f6] mb-2">50+</div>
                <p className="text-[#cbd5e1]">Team Members</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#3b82f6] mb-2">30+</div>
                <p className="text-[#cbd5e1]">Countries Served</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#3b82f6] mb-2">9+</div>
                <p className="text-[#cbd5e1]">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
