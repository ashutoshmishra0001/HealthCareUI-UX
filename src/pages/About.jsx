import React from "react";
import { FaHandsHelping, FaHospitalUser, FaStethoscope } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About HealthCare+</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          At HealthCare+, we aim to simplify healthcare by connecting patients with trusted doctors for seamless and secure appointment booking.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To make healthcare accessible, transparent, and convenient for everyone through smart technology and trusted medical professionals.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To be India’s most reliable online healthcare platform by fostering trust, care, and innovation.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why People Trust Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-md">
            <FaStethoscope className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
            <p className="text-gray-600">Verified, experienced, and caring doctors across specialties.</p>
          </div>
          <div className="text-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-md">
            <FaHospitalUser className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Patient-Centric</h3>
            <p className="text-gray-600">We prioritize your health, convenience, and trust.</p>
          </div>
          <div className="text-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-md">
            <FaHandsHelping className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Seamless Support</h3>
            <p className="text-gray-600">Our team ensures smooth experience from booking to consultation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
