// src/pages/PatientPortal.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PatientPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Patient Portal</h2>

        <p className="mb-4 text-gray-600">
          Please login or register to access your portal.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/patient-login")}
            className="bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/patient-register")}
            className="bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;
