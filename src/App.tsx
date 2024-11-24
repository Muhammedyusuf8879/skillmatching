import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SmartMatching from './components/matching/SmartMatching';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-dark-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SmartMatching />
        <CTA />
      </main>
      <footer className="bg-dark-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-400">
            © 2024 SkillSwap. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;