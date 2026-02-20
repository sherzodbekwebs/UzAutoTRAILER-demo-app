import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import AboutCompany from './components/aboutCompany/aboutcompany';
import Contacts from './components/contact/contact';
import Production from './components/Production/Production';
import Configurator from './components/Configurator/Configurator';
import SpecialTech from './components/SpecialTech/SpecialTech';
import Trailers from './components/Trailers/Trailers';
import TruckDetail from './components/TruckDetail/TruckDetail'; // 1. Yangi sahifani import qildik
import Footer from './components/footer/Footer';
import ChatAI from './components/ChatAI/ChatAI';

function App() {
  const [lang, setLang] = useState('ru');
  const [currentPage, setCurrentPage] = useState('about');
  const [selectedTruckId, setSelectedTruckId] = useState(null); // 2. Tanlangan mashina ID-si shu yerda saqlanadi

  // Sahifa o'zgarganda scrollni har doim tepaga qaytarish
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* NAVBAR */}
      <Navbar
        lang={lang}
        setLang={setLang}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      {/* ASOSIY KONTENT */}
      <main className="flex-grow">
        {/* Umumiy sahifalar */}
        {currentPage === 'about' && <AboutCompany lang={lang} setCurrentPage={setCurrentPage} />}
        {currentPage === 'contacts' && <Contacts lang={lang} />}
        {currentPage === 'production' && <Production lang={lang} setCurrentPage={setCurrentPage} />}

        {/* Katalog sahifalar (Hammasiga setSelectedTruckId uzatildi) */}
        {currentPage === 'special_tech' && (
          <SpecialTech 
            lang={lang} 
            setCurrentPage={setCurrentPage} 
            setSelectedTruckId={setSelectedTruckId} 
          />
        )}
        {currentPage === 'configurator' && (
          <Configurator 
            lang={lang} 
            setCurrentPage={setCurrentPage} 
            setSelectedTruckId={setSelectedTruckId} 
          />
        )}
        {currentPage === 'trailers' && (
          <Trailers 
            lang={lang} 
            setCurrentPage={setCurrentPage} 
            setSelectedTruckId={setSelectedTruckId} 
          />
        )}

        {/* 3. MASHINA HAQIDA TO'LIQ MA'LUMOT SAHIFASI (TruckDetail) */}
        {currentPage === 'truck_detail' && (
          <TruckDetail 
            lang={lang} 
            truckId={selectedTruckId} 
            setCurrentPage={setCurrentPage} 
          />
        )}
      </main>

      {/* FOOTER */}
      <Footer lang={lang} setCurrentPage={setCurrentPage} />

      {/* AI CHATBOT */}
      {/* <ChatAI lang={lang} /> */}
    </div>
  );
}

export default App;