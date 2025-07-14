import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import NewsSection from './components/NewsSection';
import VideoSection from './components/VideoSection';
import TeamsSection from './components/TeamsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <NewsSection />
        <VideoSection />
        <TeamsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;