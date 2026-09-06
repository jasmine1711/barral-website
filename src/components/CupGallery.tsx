import { motion } from 'framer-motion';
import { cupDesigns } from '../lib/data';

interface CupGalleryProps {
  isNight: boolean;
}

export default function CupGallery({ isNight }: CupGalleryProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl font-bold mb-12 text-center">Collectible Cups</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cupDesigns.map((cup, i) => (
            <motion.div 
              key={cup.id} 
              whileHover={{ scale: 1.05 }} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.1 }} 
              className={`rounded-3xl overflow-hidden shadow-2xl border ${isNight ? 'bg-[#1a1a2e]/60 border-[#f0d67c]/20' : 'bg-white/70 border-[#022F70]/10'}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cup.image} 
                  className={`w-full h-full object-cover transition-transform duration-700 hover:scale-110 ${isNight ? 'dark-mode-img' : 'light-mode-img'}`} 
                />
                <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                  {cup.mood}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-2">{cup.name}</h3>
                <p className={`text-lg leading-relaxed ${isNight ? 'text-[#f0d67c]/80' : 'text-gray-600'}`}>{cup.story}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}