import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
  isNight: boolean;
}

export default function Hero({ isNight }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Text Overlay - Directly above background */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <h1 className={`text-6xl md:text-8xl font-black leading-tight mb-6 ${isNight ? 'text-[#f0d67c]' : 'text-[#022F70]'} drop-shadow-2xl`}>
            Not Just a Drink.
            <br />
            <span className={isNight ? 'text-[#9f200f]' : 'text-[#F17816]'}>An Experience.</span>
          </h1>
          
          <p className={`text-xl max-w-2xl mx-auto mb-10 ${isNight ? 'text-[#f0d67c]/80' : 'text-[#022F70]/80'} drop-shadow-lg`}>
            Barral is the essence of identity, experience, and connection.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/preorder" className={`px-10 py-4 rounded-full font-semibold shadow-2xl transition transform hover:scale-105 ${isNight ? 'bg-[#f0d67c] text-[#04040c]' : 'bg-[#F17816] text-white'}`}>
              Pre-Order Now
            </Link>
            <Link to="/all-beverages" className={`px-10 py-4 rounded-full font-semibold backdrop-blur-md border transition ${isNight ? 'border-[#f0d67c]/40 text-[#f0d67c] hover:bg-[#f0d67c]/10' : 'border-[#022F70]/40 text-[#022F70] hover:bg-[#022F70]/10'}`}>
              Explore All Drinks
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}