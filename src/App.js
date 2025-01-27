import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import AppHeader from './components/header/Header';
import PricingSection from './pages/pricing';
import HomeSection from './pages/home';
import ContactSection from './pages/contact';
import SignUp from './pages/signup';
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import ResumeAnalyzer from './pages/resumeAnalyze';

function App() {
  const isAuthenticated = true;

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };
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
          <Route path="/dashboard" element={<ProtectedRoute element={<div>Dashboard Page</div>} />} />
          <Route path="/profile" element={<ProtectedRoute element={<div>Profile Page</div>} />} />
          <Route path="/resume-analysis" element={<ProtectedRoute element={<ResumeAnalyzer/>} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
