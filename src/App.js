import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AppHeader from './components/header/Header';
import PricingSection from './pages/pricing';
import HomeSection from './pages/home';
import ContactSection from './pages/contact';
import SignUp from './pages/signup';
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppHeader/>
        <Routes>
          <Route path="/" element={<HomeSection/>} />
          <Route path="/pricing" element={<PricingSection/>} />
          <Route path="/contact" element={<ContactSection/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
