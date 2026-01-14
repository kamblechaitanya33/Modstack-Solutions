import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-white/60 backdrop-blur-xl border-t border-white/30 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-sm text-neutral-700">

          <div>
            <h3 className="text-[15px] font-semibold mb-3 text-neutral-900">Modstack Solutions</h3>
            <p className="leading-relaxed">
              Complete IT and software services delivering reliable, modern, and scalable digital solutions.
            </p>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold mb-3 text-neutral-900">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#web" className="hover:text-black transition">Web Development</Link></li>
              <li><Link href="/services#mobile" className="hover:text-black transition">Mobile Apps</Link></li>
              <li><Link href="/services#cloud" className="hover:text-black transition">API & Cloud Solutions</Link></li>
              <li><Link href="/services#exe" className="hover:text-black transition">Desktop & Executable Solutions</Link></li>
              <li><Link href="/services#uiux" className="hover:text-black transition">UI/UX & Graphic Design</Link></li>
              <li><Link href="/services#support" className="hover:text-black transition">Support & Maintenance</Link></li>

            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold mb-3 text-neutral-900">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-black transition">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-black transition">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-black transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-black transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold mb-3 text-neutral-900">Get in Touch</h4>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:modstacksolutions@gmail.com" className="hover:text-black transition">modstacksolutions@gmail.com</a></li>
              <li>Phone: <a href="tel:+919702571015" className="hover:text-black transition">+91 9702571015</a></li>
              <li>Address: Mumbai, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
          <p>© {currentYear} Modstack Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="#" className="hover:text-black transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}