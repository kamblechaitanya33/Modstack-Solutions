import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Digital Transformation",
    excerpt:
      "Discover the key strategies for successful digital transformation in your organization. Learn from industry experts and real-world case studies.",
    category: "Strategy",
    date: "January 8, 2025",
    readTime: "5 min read",
    author: "Alex Johnson",
  },
  {
    id: 2,
    title: "React vs Vue: Choosing the Right Framework",
    excerpt:
      "An in-depth comparison of two popular JavaScript frameworks. Understand their strengths, weaknesses, and when to use each.",
    category: "Technology",
    date: "January 5, 2025",
    readTime: "8 min read",
    author: "Sarah Chen",
  },
  {
    id: 3,
    title: "The Future of Cloud Computing",
    excerpt:
      "Explore emerging trends in cloud technology including edge computing, serverless architecture, and multi-cloud strategies.",
    category: "Cloud",
    date: "December 30, 2024",
    readTime: "6 min read",
    author: "Michael Rodriguez",
  },
  {
    id: 4,
    title: "Building Scalable Microservices Architecture",
    excerpt:
      "Learn how to design and implement microservices that grow with your business. Best practices and common pitfalls.",
    category: "Architecture",
    date: "December 25, 2024",
    readTime: "7 min read",
    author: "Emily Watson",
  },
  {
    id: 5,
    title: "Security Best Practices for Web Applications",
    excerpt:
      "Essential security considerations for modern web applications. Protect your users and data with these proven techniques.",
    category: "Security",
    date: "December 20, 2024",
    readTime: "9 min read",
    author: "Alex Johnson",
  },
  {
    id: 6,
    title: "Mobile-First Design: Creating Responsive Apps",
    excerpt:
      "Master the mobile-first approach to design. Build applications that work seamlessly across all devices and screen sizes.",
    category: "Design",
    date: "December 15, 2024",
    readTime: "6 min read",
    author: "Sarah Chen",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-[#cbd5e1] max-w-2xl">
              Insights, tips, and best practices from our team of technology experts
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden border border-[#e5e7eb] hover:shadow-lg transition cursor-pointer"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-[#eff6ff] text-[#3b82f6] text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-[#9ca3af] text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-[#6b7280] mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#e5e7eb]">
                      <div>
                        <p className="text-xs text-[#9ca3af]">By {post.author}</p>
                        <p className="text-xs text-[#9ca3af]">{post.date}</p>
                      </div>
                      <a href="#" className="text-[#3b82f6] font-semibold text-sm hover:text-[#1e40af] transition">
                        Read →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#f9fafb] py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-[#6b7280] mb-8">Get the latest insights and best practices delivered to your inbox.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-[#d1d5db] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6] outline-none transition"
              />
              <button className="px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-semibold hover:bg-[#1e40af] transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
