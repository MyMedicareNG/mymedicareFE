import React from 'react';
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import OtpVerification from "./auth/OtpVerification";
import Terms from "./terms_conditions/Terms";
import PatientProtectedRoute from './components/PatientProtectedRoute';
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientAppointments from "./pages/patient/PatientAppointments";
import PatientPrescription from "./pages/patient/patientPrescription";
import Testpage from './pages/patient/Testpage';
import CreatePassword from './auth/CreatePassword';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/otp-verification" element={<OtpVerification/>}/>
        <Route path="/create-password" element={<CreatePassword/>}/>
        <Route path="/terms-&-conditions" element={<Terms/>}/>
        <Route path="/test-page" element={<Testpage/>}/>
        <Route element={<PatientProtectedRoute/>}>
          <Route path='/patient-dashboard' element={<PatientDashboard/>}/>
          <Route path='/patient-appointments' element={<PatientAppointments/>}/>
          <Route path='/patient-prescription' element={<PatientPrescription/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
