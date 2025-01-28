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
import ResourcesSection from './pages/resources';
import JobPortalSection from './components/matchedJobs';
import MockInterview from './pages/mockInterview';
import Education from './pages/courses';
import EducationUdemy from './pages/courses/index2';

function App() {
  const isAuthenticated = true;

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };
  return (
    <BrowserRouter>
      <div>
        <AppHeader/>
       <div style={{paddingTop:'50px'}}>
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
          <Route path="/resources" element={<ProtectedRoute element={<ResourcesSection/>} />} />
          <Route path="/jobs" element={<ProtectedRoute element={<JobPortalSection/>} />} />
          <Route path="/mock-interview" element={<ProtectedRoute element={<MockInterview/>} />} />
          <Route path="/courses" element={<ProtectedRoute element={<EducationUdemy/>} />} />
        </Routes>
       </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
