import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import './App.css';

// ok now Im thinking I need to add admin capabilities in the sense that in an admin can change all aspects of the about us section and add and remove photos from the gallery section, Will i need a database for that and if so can I use supabase for that

function App() {
  return (
    <BrowserRouter>
      <div className='index-page'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <main className='main'>
                <Hero />
                <OurStory />
              </main>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
