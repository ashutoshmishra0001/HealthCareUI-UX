import React from "react";

const doctors = [
  { name: "Dr. Priya Sharma", specialty: "Cardiologist", location: "Delhi" },
  { name: "Dr. A.K. Verma", specialty: "Dermatologist", location: "Kanpur" },
  { name: "Dr. Sneha Rai", specialty: "Pediatrician", location: "Lucknow" },
];

const Doctors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-8">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-10">Meet Our Specialists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
          >
            <div className="mb-4">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(doc.name)}&background=0D8ABC&color=fff&size=128`}
                alt={doc.name}
                className="w-24 h-24 mx-auto rounded-full shadow"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{doc.name}</h3>
            <p className="text-blue-600 font-medium">{doc.specialty}</p>
            <p className="text-gray-500">{doc.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
