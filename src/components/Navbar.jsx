import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-30">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          HealthCare+
        </Link>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/book-appointment">Appointments</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/doctor-portal">Doctor Portal</Link></li>
          <li><Link to="/patient-portal">Patient Portal</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-white shadow-md space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <Link to="/doctors" onClick={() => setIsOpen(false)} className="block">Doctors</Link>
          <Link to="/book-appointment" onClick={() => setIsOpen(false)} className="block">Appointments</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">About</Link>
          <Link to="/doctor-portal" onClick={() => setIsOpen(false)} className="block">Doctor Portal</Link>
          <Link to="/patient-portal" onClick={() => setIsOpen(false)} className="block">Patient Portal</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
