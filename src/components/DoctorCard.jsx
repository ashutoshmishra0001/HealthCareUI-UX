import { Link } from 'react-router-dom';

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center">
      <img
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=0D8ABC&color=fff&size=128`}
        alt={doctor.name}
        className="w-20 h-20 mx-auto rounded-full shadow mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
      <p className="text-blue-600 font-medium">{doctor.specialty}</p>

      <Link
        to="/book"
        className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition"
      >
        Book Now
      </Link>
    </div>
  );
}
