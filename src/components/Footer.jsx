import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-50 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">HealthCare+</h2>
          <p className="text-gray-600">Your trusted partner in digital healthcare. Book appointments, consult doctors, and manage your health efficiently.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
            <li><Link to="/book-appointment" className="text-gray-600 hover:text-blue-600">Appointments</Link></li>
            <li><Link to="/doctors" className="text-gray-600 hover:text-blue-600">Doctors</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Contact Us</h3>
          <p className="text-gray-600">Email: support@healthcareplus.com</p>
          <p className="text-gray-600">Phone: +91-98xxxxxxxx</p>
          <p className="text-gray-600">Location: Greater Noida, India</p>
        </div>
      </div>

      <div className="bg-blue-100 text-center text-sm text-gray-600 py-4">
        &copy; {new Date().getFullYear()} HealthCare+. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
