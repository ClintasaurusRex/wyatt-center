import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Hero />
      </main>
      <OurStory />

      <Footer />
    </div>
  );
}

export default App;
