// src/pages/PatientPortalHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PatientPortalHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/patient-login");
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
          Welcome, Patient!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              Book an Appointment
            </h2>
            <p className="text-gray-700">
              Choose a doctor and schedule an appointment easily.
            </p>
            <button
              onClick={() => navigate("/book-appointment")}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Book Now
            </button>
          </div>

          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              My Appointments
            </h2>
            <p className="text-gray-700">
              View and manage all your upcoming or past appointments.
            </p>
            <button
              onClick={() => alert("Redirect to appointment history")}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              View Appointments
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientPortalHome;
