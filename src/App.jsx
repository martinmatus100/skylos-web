import React from 'react';
import { Layout } from './features/Layout/Layout';
import { Hero } from './features/Hero/Hero';
import { About } from './features/About/About';
import { Services } from './features/Services/Services';
import { Portfolio } from './features/Portfolio/Portfolio';
import { Clients } from './features/Clients/Clients';
import { Testimonials } from './features/Testimonials/Testimonials';
import { Contact } from './features/Contact/Contact';
import './App.css';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
