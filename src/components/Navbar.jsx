import { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle menu for mobile

  return (
    <nav className="bg-gray-900 text-white px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">MyPortfolio</Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/experience" className="hover:text-gray-400">Experience</Link></li>
          <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4">
          <li><Link to="/" className="block hover:text-gray-400">Home</Link></li>
          <li><Link to="/projects" className="block hover:text-gray-400">Projects</Link></li>
          <li><Link to="/experience" className="block hover:text-gray-400">Experience</Link></li>
          <li><Link to="/services" className="block hover:text-gray-400">Services</Link></li>
          <li><Link to="/contact" className="block hover:text-gray-400">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
