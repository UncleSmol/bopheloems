import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Header from "./components/header/Header";

// Import your page components
// You'll need to create these files if they don't exist
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import CareersPage from "./pages/CareersPage";
// import ServicesPage from "./pages/ServicesPage";
// import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
