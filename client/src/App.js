import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="index-page">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main className="main">
                <Hero />
                <OurStory />
              </main>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element=<div>Gallery Here</div> />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
