import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Grid from "./Components/Grid";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoLogin = () => navigate("/login");
  const handleGoHome = () => navigate("/");
  const handleGoAbout = () => navigate("/about");
  const handleGoContact = () => navigate("/contact");
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const navLinks = [
    { label: "Home", path: "/", onClick: handleGoHome }, // ✅ Fixed function reference
    { label: "About", path: "/about", onClick: handleGoAbout },
    { label: "Contact", path: "/contact", onClick: handleGoContact },
    {
      label: isLoggedIn ? "Logout" : "Login",
      path: isLoggedIn ? "/" : "/login",
      onClick: isLoggedIn ? handleLogout : handleGoLogin,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <NavBar links={navLinks} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Hero />
              <Grid />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;
