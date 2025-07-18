// DoctorPortal.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Doctor Portal</h1>
        <p className="text-gray-600 mb-8">
          Login or Register to manage appointments, availability and patient communication.
        </p>
        <div className="space-y-4">
          <button
            onClick={() => navigate("/doctor-login")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/doctor-register")}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorPortal;
