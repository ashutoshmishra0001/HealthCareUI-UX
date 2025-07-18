import React, { useState } from "react";
import Calendar from "../components/Calendar";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    doctor: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDateSelect = (selectedDate) => {
    setFormData((prev) => ({ ...prev, date: selectedDate }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    // TODO: connect to backend API
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Book an Appointment
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 space-y-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={formData.name}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Select Appointment Date</label>
          <Calendar onSelectDate={handleDateSelect} />
          {formData.date && (
            <p className="mt-2 text-green-600 font-semibold">
              Selected Date: {formData.date}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Doctor Name</label>
          <input
            type="text"
            name="doctor"
            required
            onChange={handleChange}
            value={formData.doctor}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Reason for Visit</label>
          <textarea
            name="reason"
            rows="3"
            required
            onChange={handleChange}
            value={formData.reason}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition duration-300"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
