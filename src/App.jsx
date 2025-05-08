import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Contexts/AuthContext';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UserDashboard from './Pages/UserDashboard';
import Footer from './Components/Footer';
import { Navigate } from 'react-router-dom';
import Profile from './Pages/Profile';
import DashboardLayout from './Components/DashboardLayout';
import DashboardNavbar from './Components/DashboardNavBar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Get user and logout function from context
  const hideNavBar = ['/dashboard'];

  const isDashboard =
    location.pathname === '/dashboard' || location.pathname.startsWith('/dashboard/');

  const handleLogout = () => {
    logout(); // Use logout function from context
    navigate('/'); // Redirect to homepage after logout
  };

  const navLinks = [
    { label: 'Home', path: '/', onClick: () => navigate('/') },
    {
      label: 'Dashboard',
      path: '/dashboard',
      onClick: () => navigate('/dashboard'),
      isProtected: true,
    },
    { label: 'Contact', path: '/contact', onClick: () => navigate('/contact') },
    { label: 'About', path: '/about', onClick: () => navigate('/about') },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      {!isDashboard && <NavBar user={user} onLogout={logout} links={navLinks} />}

      {isDashboard && <DashboardNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        {/* Redirect to Login if the user is not authenticated and tries to access the dashboard */}
        <Route path="/dashboard" element={user ? <DashboardLayout /> : <Navigate to="/login" />}>
          <Route index element={<UserDashboard />} />
          <Route path="/analyzer" element={<UserDashboard />} />
          <Route path="/tracker" element={<UserDashboard />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
