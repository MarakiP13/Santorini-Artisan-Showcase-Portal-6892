import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Navbar() {
  const location = useLocation();
  
  const links = [
    { to: '/', label: 'Home' },
    { to: '/artisans', label: 'Artisans' },
    { to: '/events', label: 'Events' },
    { to: '/blog', label: 'Blog' },
    { to: '/map', label: 'Map', icon: FaMapMarkerAlt },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl text-aegean-800">
              Crafted on the Caldera
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="relative flex items-center text-aegean-600 hover:text-aegean-800"
              >
                {location.pathname === to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-x-0 -bottom-2 h-0.5 bg-aegean-500"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                {Icon && <Icon className="mr-1" />}
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}