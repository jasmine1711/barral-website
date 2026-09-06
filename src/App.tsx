import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import SplashScreen from './components/SplashScreen';
import AgeGate from './components/AgeGate';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MoodSection from './components/MoodSection';
import CupGallery from './components/CupGallery';
import Footer from './components/Footer';
import AlcoholicPage from './components/AlcoholicPage';
import AllBeverages from './components/AllBeverages';
import PreOrder from './components/PreOrder';
import AuthPage from './components/AuthPage';
import CheckoutPage from './components/CheckoutPage';
import { StoreProvider } from './context/StoreContext';

export default function App() {
  const [isSplash, setIsSplash] = useState(true);
  const [isNight, setIsNight] = useState(false);
  const [isAdult, setIsAdult] = useState(false);
  const [showAlcoholic, setShowAlcoholic] = useState(false);
  const [transitionActive, setTransitionActive] = useState(false);
  const location = useLocation();

  // Day/Night video arrays (with Cloudinary q_auto:low for fast loading)
  const dayVideos = [
    'https://res.cloudinary.com/vwg7rayu/video/upload/q_auto:low/v1788708530/caffeine.mp4',
    'https://res.cloudinary.com/vwg7rayu/video/upload/q_auto:low/v1788708394/Juice.mp4'
  ];

  const nightVideos = [
    'https://res.cloudinary.com/vwg7rayu/video/upload/q_auto:low/v1788708328/thinking.mp4',
    'https://res.cloudinary.com/vwg7rayu/video/upload/q_auto:low/v1788708438/ice.mp4'
  ];

  // State to track current video index
  const [dayIndex, setDayIndex] = useState(0);
  const [nightIndex, setNightIndex] = useState(0);

  // Handle video end -> switch to next
  const handleDayVideoEnd = () => {
    setDayIndex((prev) => (prev + 1) % dayVideos.length);
  };

  const handleNightVideoEnd = () => {
    setNightIndex((prev) => (prev + 1) % nightVideos.length);
  };

  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour >= 18 || hour < 6);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsSplash(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTransitionActive(true);
    setTimeout(() => setIsNight(prev => !prev), 400);
    setTimeout(() => setTransitionActive(false), 900);
  };

  const isHome = location.pathname === '/';

  return (
    <StoreProvider>
      <div className={`${isNight ? 'night dark' : 'day'}`}>
        <Toaster position="top-center" reverseOrder={false} />
        
        {transitionActive && <div className="theme-transition active" />}
        {isSplash && <SplashScreen />}

        {/* Background Layer */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {isHome && !isSplash && (
            isNight ? (
              <>
                {/* Sequential Night Videos */}
                <video 
                  key={nightIndex}
                  className="night-bg-video" 
                  autoPlay 
                  muted 
                  loop={false} 
                  playsInline 
                  src={nightVideos[nightIndex]}
                  onEnded={handleNightVideoEnd}
                />
                <div className="night-cozy-glow" />
              </>
            ) : (
              <>
                {/* Sequential Day Videos */}
                <video 
                  key={dayIndex}
                  className="day-bg-video" 
                  autoPlay 
                  muted 
                  loop={false} 
                  playsInline 
                  src={dayVideos[dayIndex]}
                  onEnded={handleDayVideoEnd}
                />
              </>
            )
          )}
        </div>

        {!isSplash && (
          <>
            <Navbar 
              onShowAlcoholic={() => setIsAdult(true)} 
              isNight={isNight} 
              toggleTheme={toggleTheme} 
            />
            
            <div className="relative z-10">
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero isNight={isNight} />
                    <MoodSection isNight={isNight} />
                    <CupGallery isNight={isNight} />
                    <PreOrder isNight={isNight} />
                    <Footer />
                  </>
                } />
                
                <Route path="/all-beverages" element={<AllBeverages />} />
                <Route path="/preorder" element={<PreOrder isNight={isNight} />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </div>
          </>
        )}

        {isAdult && (
          <AgeGate 
            onConfirm={() => { setIsAdult(false); setShowAlcoholic(true); }} 
            onDecline={() => setIsAdult(false)} 
          />
        )}
        
        <AnimatePresence>
          {showAlcoholic && (
            <AlcoholicPage onBack={() => setShowAlcoholic(false)} />
          )}
        </AnimatePresence>
      </div>
    </StoreProvider>
  );
}