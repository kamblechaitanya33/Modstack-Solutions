import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"

const detailedServices = [
  {
    id: "web",
    title: "Web Development",
    description: "Custom, secure and scalable web solutions tailored to your business needs.",
    fullDescription:
      "We design and develop high-performance web applications that are visually appealing, user-friendly, and built for scale. Our web solutions focus on speed, security, responsiveness, and seamless integration with your business systems to ensure long-term success.",
    features: [
      "SEO-friendly and fast-loading architecture",
      "Secure authentication and data protection",
      "Custom dashboards and admin panels",
      "Third-party API and payment gateway integration",
      "Responsive design for all devices",
      "Scalable cloud-ready deployments",
    ],
    technologies: ["React", "Next.js", "ASP.NET", "Node.js", "PostgreSQL"],
    icon: "",
    imagePath: "web_development_icon.png",
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    description: "Robust and user-friendly mobile apps for Android and iOS platforms.",
    fullDescription:
      "We build powerful mobile applications that enhance customer engagement and streamline business operations. From native Android and iOS apps to cross-platform solutions, we ensure performance, reliability, and an excellent user experience.",
    features: [
      "Native Android and iOS development",
      "Cross-platform Flutter and React Native apps",
      "Offline access and data synchronization",
      "Push notifications and real-time updates",
      "App store deployment and optimization",
      "Analytics and crash monitoring",
    ],
    technologies: ["Android", "iOS", "Flutter", "React Native"],
    icon: "",
    imagePath: "mobile_applicaion_icon.png",
  },
  {
    id: "cloud",
    title: "API & Cloud Solutions",
    description: "Secure, scalable APIs and cloud infrastructure to power your applications.",
    fullDescription:
      "We design and implement secure APIs and cloud architectures that ensure your systems are reliable, scalable, and future-ready. Our cloud services help you modernize infrastructure, improve performance, and reduce operational costs.",
    features: [
      "REST & GraphQL API development",
      "Cloud migration and modernization",

      "Serverless and containerized deployments",
      "High availability and backup strategies",
      "Security and compliance management",
      "Microservices architecture",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
    icon: "",
    imagePath: "api_icon.png",
  },

  {
    id: "ai",
    title: "Artificial Intelligence & Machine Learning",
    description: "Intelligent solutions that automate, predict, and enhance business operations.",
    fullDescription:
      "We build AI-powered solutions that help businesses automate processes, gain insights from data, and deliver smarter user experiences. From predictive analytics to intelligent automation, our AI services are designed to be scalable, secure, and business-focused.",
    features: [
      "Custom AI and machine learning model development",
      "Predictive analytics and forecasting",
      "Natural language processing (NLP) solutions",
      "AI-powered chatbots and virtual assistants",
      "Computer vision and image recognition",
      "Data analysis, model training, and optimization",
    ],
    technologies: [
      "OpenAI API",
      "Python",
      "TensorFlow",
      "PyTorch",
    ],
    icon: "",
    imagePath: "ai_image.jpg",
  },

  {
    id: "exe",
    title: "Desktop & Executable Solutions",
    description: "Reliable desktop and executable software for business automation.",
    fullDescription:
      "We develop secure and efficient desktop and executable applications to automate workflows, manage data, and support internal business operations with reliability and performance.",
    features: [
      "Custom Windows desktop applications",
      "Performance-optimized architecture",
      "Ongoing updates and enhancements",
      "Executable tools for automation",
      "Integration with existing databases",
      "Secure local data handling",
    ],
    technologies: [".NET", "C#", "SQLite", "PostgreSQL"],
    icon: "",
    imagePath: "exe_icon.png",
  },
  {
    id: "uiux",
    title: "UI/UX & Graphic Design",
    description: "Visually compelling and user-centered designs that elevate your brand.",
    fullDescription:
      "Our design team creates intuitive user interfaces and engaging visual experiences that reflect your brand identity and improve user satisfaction across web and mobile platforms.",
    features: [
      "User research and wireframing",
      "High-fidelity UI mockups",
      "UX flow optimization",
      "Brand identity and graphic design",
      "Design systems and consistency",
      "Accessibility-focused layouts",
    ],
    technologies: ["Figma", "Photoshop", "Illustrator"],
    icon: "",
    imagePath: "uiux_icon.png",
  },
  {
    id: "support",
    title: "Support & Maintenance",
    description: "Reliable support, monitoring, and continuous improvement for your systems.",
    fullDescription:
      "We provide proactive support and maintenance to ensure your applications remain secure, stable, and up to date. Our team monitors performance, resolves issues quickly, and continuously improves your systems.",
    features: [
      "24/7 system monitoring",
      "Security updates and patching",
      "Performance tuning and optimization",
      "Backup and disaster recovery planning",
      "Technical documentation and reporting",
      "Bug fixes and enhancements",

    ],
    technologies: ["DevOps", "CI/CD", "Monitoring Tools", "Automated Testing"],
    icon: "",
    imagePath: "it_support_icon.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white py-20">
          {/* Radial Glow Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_70%)]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Our Services
            </h1>

            <p className="text-lg text-slate-300">
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
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-24 text-white">
          {/* Decorative background blur */}
          <div className="absolute inset-0">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Ready to Transform Your Business?
            </h2>

            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let’s discuss how our services can help you achieve your goals.
              Get in touch with us today for a <span className="font-semibold text-white">free consultation</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-blue-50"
              >
                Start Your Project
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}