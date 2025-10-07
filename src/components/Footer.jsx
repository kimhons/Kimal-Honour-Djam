import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">Kimal Academy</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming lives through the intersection of cutting-edge science and human potential. 
              Led by Kimal Honour Djam, practicing radiation oncology physicist and certified leadership coach.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span>info@kimalhonour.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span>Maryland, USA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</Link></li>
              <li><Link to="/books" className="text-gray-300 hover:text-yellow-400 transition-colors">Books</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-yellow-400 transition-colors">Courses</Link></li>
              <li><Link to="/podcast" className="text-gray-300 hover:text-yellow-400 transition-colors">Podcast</Link></li>
              <li><Link to="/coaching" className="text-gray-300 hover:text-yellow-400 transition-colors">Coaching</Link></li>
              <li><Link to="/newsletter" className="text-gray-300 hover:text-yellow-400 transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Free Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Media Kit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Speaking Inquiries</a></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Stay Connected</h4>
            <p className="text-gray-300 text-sm">
              Get weekly insights on neuroscience, wealth creation, and peak performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Professional Credentials */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center space-y-4">
            <h5 className="text-lg font-semibold text-yellow-400">Professional Credentials</h5>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <span>PhD Medical Physics (CAMPEP Accredited)</span>
              <span>•</span>
              <span>U.S. Army Medical Nuclear Science Officer</span>
              <span>•</span>
              <span>John Maxwell Certified Leadership Coach</span>
              <span>•</span>
              <span>Chief Radiation Safety Officer</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Kimal Academy. All rights reserved. | Kimal Honour Djam
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Cookie Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
