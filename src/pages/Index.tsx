
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TeamSection from '../components/TeamSection';
import NewsSection from '../components/NewsSection';
import ScheduleSection from '../components/ScheduleSection';
import StoreSection from '../components/StoreSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-furia-dark text-white">
      <Navbar />
      <Hero />
      <TeamSection />
      <NewsSection />
      <ScheduleSection />
      <StoreSection />
      <Footer />
    </div>
  );
};

export default Index;
