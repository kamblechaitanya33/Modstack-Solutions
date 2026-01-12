import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Modstack Solutions</h3>
            <p className="text-[#cbd5e1] text-sm">
              Complete IT and software services delivering reliable, modern, and scalable digital solutions.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#cbd5e1]">
              <li>
                <Link href="/services#web" className="hover:text-white transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile" className="hover:text-white transition">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services#cloud" className="hover:text-white transition">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="hover:text-white transition">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#support" className="hover:text-white transition">
                  Support & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[#cbd5e1]">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-[#cbd5e1]">
              <li>
                Email:{" "}
                <a href="mailto:hello@modstack.io" className="hover:text-white transition">
                  hello@modstack.io
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li>Address: San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#334155] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#cbd5e1]">
          <p>&copy; {currentYear} Modstack Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
