import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <div className="text-2xl font-bold">
        <Link to="/">MyPortfolio</Link>
      </div>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
        <li><Link to="/experience" className="hover:text-gray-400">Experience</Link></li>
        <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
