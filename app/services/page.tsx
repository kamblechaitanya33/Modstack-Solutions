import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"

const detailedServices = [
  {
    id: "web",
    title: "Web Development",
    description: "Modern, responsive web applications built with latest technologies.",
    fullDescription:
      "We create stunning, high-performance web applications that drive business growth. Our team specializes in building scalable solutions using React, Next.js, Node.js, and cloud technologies.",
    features: [
      "Responsive design for all devices",
      "Fast performance and SEO optimization",
      "Secure authentication and data handling",
      "Integration with third-party services",
      "Scalable cloud deployment",
      "Real-time analytics and monitoring",
    ],
    technologies: [
      "React",
      "Next.js",
      "ASP.NET",
      "PostgreSQL",
    ],
    icon: "🌐",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    fullDescription:
      "We develop powerful mobile applications that engage users and drive business results. From native iOS, Android to cross-platform solutions using Flutter and React Native.",
    features: [
      "Native iOS and Android development",
      "Cross-platform React Native apps",
      "Offline functionality and sync",
      "Push notifications and real-time updates",
      "App store optimization",
      "User analytics and crash reporting",
    ],
    technologies: ["Android", "Flutter", "IOS", "React Native"],
    icon: "📱",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    fullDescription:
      "Transform your infrastructure with cloud solutions that scale with your business. We help you migrate, optimize, and manage cloud environments securely.",
    features: [
      "Cloud migration and strategy",
      "Infrastructure as Code",
      "Serverless architecture design",
      "Database optimization and replication",
      "Security and compliance management",
      "Cost optimization strategies",
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
    icon: "☁️",
  },
  {
    id: "consulting",
    title: "IT Consulting",
    description: "Strategic technology guidance and architecture design.",
    fullDescription:
      "Get expert guidance from our experienced consultants. We help you make informed technology decisions that align with your business goals.",
    features: [
      "Technology strategy and roadmap",
      "System architecture design",
      "Legacy system modernization",
      "Team scaling and mentoring",
      "Security audits and assessments",
      "Performance optimization reviews",
    ],
    technologies: ["Architecture Design", "Best Practices", "Code Reviews", "Training"],
    icon: "💼",
  },
  {
    id: "support",
    title: "Support & Maintenance",
    description: "24/7 monitoring, updates, and technical support.",
    fullDescription:
      "Keep your systems running smoothly with our comprehensive support and maintenance services. We provide proactive monitoring and rapid issue resolution.",
    features: [
      "24/7 monitoring and alerts",
      "Regular security updates",
      "Performance optimization",
      "Bug fixes and enhancements",
      "Disaster recovery planning",
      "Technical documentation",
    ],
    technologies: ["Monitoring", "DevOps", "CI/CD", "Automated Testing"],
    icon: "🔧",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-[#cbd5e1] max-w-2xl">
              Comprehensive technology solutions designed to solve your business challenges and drive growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12">
              {detailedServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#3b82f6] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-[#dbeafe] mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals. Contact us for a free consultation.
            </p>
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-[#3b82f6] rounded-lg font-semibold hover:bg-[#f0f9ff] transition inline-block"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
