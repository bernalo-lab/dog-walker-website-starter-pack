
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-heart-fill text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                Paws & Play Dog Walkers
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional dog walking services with love, care, and attention to detail. Your furry friends deserve the best exercise and companionship while you're away.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Our Services</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
              <li><Link to="/service-areas" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Service Areas</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <i className="ri-phone-line"></i>
                <span>(555) 123-PAWS</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-mail-line"></i>
                <span>hello@pawsandplay.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-map-pin-line"></i>
                <span>Downtown & Surrounding Areas</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-time-line"></i>
                <span>Mon-Fri: 7AM-7PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Paws & Play Dog Walkers. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer mt-2 md:mt-0"
          >
            Website Builder
          </a>
        </div>
      </div>
    </footer>
  );
}
