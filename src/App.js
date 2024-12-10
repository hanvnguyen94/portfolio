import React from "react";
//import pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import ContactForm from "./pages/ContactForm";
import About from "./pages/About";
import Work from "./pages/Work";
import FAQ from "./pages/FAQ";
import ProjectDetails from "./pages/ProjectDetails";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
