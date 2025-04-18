import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-aegean-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">Crafted on the Caldera</h3>
            <p className="text-aegean-100">
              Discover the authentic artisans and craftsmen of Santorini
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#/artisans" className="hover:text-aegean-200">Artisans</a></li>
              <li><a href="#/events" className="hover:text-aegean-200">Events</a></li>
              <li><a href="#/blog" className="hover:text-aegean-200">Blog</a></li>
              <li><a href="#/map" className="hover:text-aegean-200">Map</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-aegean-200"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-aegean-200"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-aegean-200"><FaEnvelope /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-aegean-700 text-center text-sm text-aegean-300">
          © {new Date().getFullYear()} Crafted on the Caldera. All rights reserved.
        </div>
      </div>
    </footer>
  );
}