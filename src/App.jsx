import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import OtpVerification from "./auth/OtpVerification";
import Terms from "./terms_conditions/Terms";
import PatientProtectedRoute from './components/PatientProtectedRoute';
import PatientDashboard from "./pages/patient/PatientDashboard";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/otp-verification" element={<OtpVerification/>}/>
        <Route path="/terms-&-conditions" element={<Terms/>}/>
        <Route element={<PatientProtectedRoute/>}>
          <Route path='/patient-dashboard' element={<PatientDashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
