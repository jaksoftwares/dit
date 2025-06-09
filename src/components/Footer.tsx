import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">DIT</h2>
          <p className="mt-2 text-sm text-gray-400">
            Dovepeak Institute of Technology (DIT) offers hands-on, practical IT training for the modern world. Join our hybrid programs and elevate your tech career.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/courses" className="hover:text-blue-400">Courses</Link></li>
            <li><Link href="/apply" className="hover:text-blue-400">Apply</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-blue-400 mt-1" />
              <span>Juja, Kiambu, Kenya – Hybrid Classes (Online & Physical)</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-blue-400" />
              <span>+254 115749711</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-blue-400" />
              <span>dovepeakdigital@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-400"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dovepeak Institute of Technology. All rights reserved.
      </div>
    </footer>
  );
}
