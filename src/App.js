import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import './App.css';

function App() {
  return (
    <div className='index-page'>
      <Header />
      <main className='main'>
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default App;
