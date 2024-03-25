import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import Terms from "./terms_conditions/Terms";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/terms-&-conditions" element={<Terms/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
