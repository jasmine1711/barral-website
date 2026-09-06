import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { drinks, moodSuggestions } from '../lib/data';
import { useStore } from '../context/StoreContext';
import toast from 'react-hot-toast';

interface MoodSectionProps {
  isNight: boolean;
}

export default function MoodSection({ isNight }: MoodSectionProps) {
  const [active, setActive] = useState('Morning');
  const filtered = drinks.filter(d => d.category === active);
  const currentSuggestion = moodSuggestions.find(m => m.id === active);
  const { addToCart, toggleWishlist } = useStore();

  const handleAddToCart = (drink: any) => {
    addToCart({ id: drink.id, name: drink.name, price: drink.price, image: drink.image, quantity: 1, cupSize: drink.cupSize });
    toast.success(`${drink.name} added to cart!`);
  };

  const handleWishlist = (drink: any) => {
    toggleWishlist(drink.id);
    toast.success(`${drink.name} added to wishlist!`);
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-5xl font-bold mb-12 text-center">Choose Your Mood</h2>
        
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {moodSuggestions.map(m => (
            <button 
              key={m.id} 
              onClick={() => setActive(m.id)} 
              className="px-8 py-4 rounded-full border-2 font-semibold transition-all duration-300 font-display text-lg"
              style={{ 
                borderColor: m.color, 
                color: active === m.id ? 'white' : m.color, 
                background: active === m.id ? m.color : 'transparent'
              }}
            >
              {m.title}
            </button>
          ))}
        </div>

        {/* Suggestion Box */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={active + "suggestion"}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="text-center mb-16 max-w-5xl mx-auto p-8 rounded-3xl border-2"
            style={{ borderColor: currentSuggestion?.color, backgroundColor: isNight ? 'rgba(255,255,255,0.05)' : `${currentSuggestion?.color}15` }}
          >
            <p className="font-display text-2xl font-medium leading-relaxed" style={{ color: isNight ? '#f0d67c' : currentSuggestion?.color }}>
              {currentSuggestion?.suggestion}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Drink Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={active} 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -30 }} 
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {filtered.map((drink, idx) => (
              <motion.div 
                key={drink.id} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: idx * 0.1 }}
                className={`p-8 rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-300 flex gap-8 items-center ${isNight ? 'bg-[#1a1a2e]/60 border border-[#f0d67c]/20' : 'bg-white/70 border border-[#022F70]/10'}`}
              >
                {/* Bigger Product Image */}
                <div className="relative shrink-0">
                  <img 
                    src={drink.image} 
                    className={`w-56 h-56 object-cover rounded-2xl shadow-2xl ${isNight ? 'dark-mode-img' : 'light-mode-img'}`} 
                  />
                  <div className="absolute -bottom-3 -right-3 bg-[#022F70] dark:bg-[#f0d67c] text-white dark:text-black text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                    {drink.cupSize}
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="font-display text-3xl font-bold mb-2">{drink.name}</h3>
                  <p className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: currentSuggestion?.color }}>
                    Mood: {drink.mood}
                  </p>
                  <p className={`text-lg leading-relaxed mb-6 ${isNight ? 'text-[#f0d67c]/80' : 'text-gray-600'}`}>{drink.tagline}</p>
                  
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-3xl font-extrabold">₹{drink.price}</span>
                    
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleWishlist(drink)}
                        className="px-4 py-3 rounded-full border-2 text-lg font-semibold transition transform hover:scale-105"
                        style={{ borderColor: currentSuggestion?.color, color: currentSuggestion?.color }}
                      >
                        Wishlist
                      </button>
                      <button 
                        onClick={() => handleAddToCart(drink)}
                        className="px-8 py-3 rounded-full text-lg font-semibold transition transform hover:scale-105"
                        style={{ backgroundColor: currentSuggestion?.color, color: 'white' }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}