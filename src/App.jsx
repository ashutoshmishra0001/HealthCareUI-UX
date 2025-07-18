import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";

import DoctorPortal from "./pages/DoctorPortal";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorRegister from "./pages/DoctorRegister";

import PatientPortal from "./pages/PatientPortal"; // updated
import PatientPortalHome from "./pages/PatientPortalHome"; // new route
import PatientLogin from "./pages/PatientLogin";
import PatientRegister from "./pages/PatientRegister";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          {/* General Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/book-appointment" element={<BookAppointment />} />

          {/* Doctor Routes */}
          <Route path="/doctor-portal" element={<DoctorPortal />} />
          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/doctor-register" element={<DoctorRegister />} />

          {/* Patient Routes */}
          <Route path="/patient-portal" element={<PatientPortal />} /> {/* Shows login/register */}
          <Route path="/patient-dashboard" element={<PatientPortalHome />} /> {/* Actual dashboard */}
          <Route path="/patient-login" element={<PatientLogin />} />
          <Route path="/patient-register" element={<PatientRegister />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
