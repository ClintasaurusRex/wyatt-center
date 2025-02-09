import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default App;
