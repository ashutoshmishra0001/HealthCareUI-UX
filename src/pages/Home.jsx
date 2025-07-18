import React from "react";
import { Link } from "react-router-dom";
import { FaUserMd, FaCalendarCheck, FaHeartbeat } from "react-icons/fa";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            Welcome to HealthCare+
          </h1>
          <p className="text-md sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Book appointments with trusted doctors and manage your healthcare with ease. Your well-being, our priority.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/book-appointment"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm sm:text-base hover:bg-blue-700 transition"
            >
              Book Appointment
            </Link>
            <Link
              to="/about"
              className="text-blue-600 border border-blue-600 px-6 py-3 rounded-xl text-sm sm:text-base hover:bg-blue-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose HealthCare+
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <FaUserMd className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Experienced Doctors</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Our platform connects you with top-rated and verified healthcare professionals.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <FaCalendarCheck className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Schedule appointments instantly from anywhere at your convenience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <FaHeartbeat className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Patient First</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We are committed to providing compassionate and accessible care to all patients.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-14 sm:py-16 text-white text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="text-md sm:text-lg mb-6">Join HealthCare+ and simplify your healthcare journey.</p>
        <Link
          to="/book-appointment"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl text-sm sm:text-base hover:bg-gray-100 transition"
        >
          Book an Appointment
        </Link>
      </section>
    </div>
  );
};

export default Home;
