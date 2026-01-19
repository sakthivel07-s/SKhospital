import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import OurServices from '../pages/OurServices';
import OurDoctors from '../pages/OurDoctors';
import LabTest from '../pages/LabTest';
import Contact from '../pages/Contact';
import Appointment from '../pages/Appointment';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services" element={<OurServices />} />
        <Route path="doctors" element={<OurDoctors />} />
        <Route path="lab-test" element={<LabTest />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appointment" element={<Appointment />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
