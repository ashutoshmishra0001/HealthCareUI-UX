// DoctorPortalHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorPortalHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Clear tokens/session
    navigate("/doctor-login");
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
          Welcome, Doctor!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">My Appointments</h2>
            <p className="text-gray-700">
              View all upcoming appointments scheduled by patients.
            </p>
            <button
              onClick={() => alert("Redirect to appointments section")}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              View Appointments
            </button>
          </div>

          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Profile</h2>
            <p className="text-gray-700">
              Update your availability, contact info, and specialization.
            </p>
            <button
              onClick={() => alert("Redirect to profile update page")}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Update Profile
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

export default DoctorPortalHome;
