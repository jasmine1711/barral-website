import { motion } from 'framer-motion';

interface AlcoholicPageProps {
  onBack: () => void;
}

export default function AlcoholicPage({ onBack }: AlcoholicPageProps) {
  const drinks = [
    { id: 1, name: 'Velvet Gold', price: '₹299', desc: 'Smokey bourbon, old money class.', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80' },
    { id: 2, name: 'Spiced Ember Punch', price: '₹349', desc: 'Tropical, spicy, dangerously smooth.', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80' },
    { id: 3, name: 'Botanical Mist', price: '₹329', desc: 'Crisp gin, botanical, perfectly sharp.', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80' },
    { id: 4, name: 'Saffron Margarita', price: '₹319', desc: 'Smooth agave, a hint of orange.', image: 'https://images.unsplash.com/photo-1556855810-ac404aa91e85?w=400&q=80' },
    { id: 5, name: 'Midnight Espresso', price: '₹359', desc: 'Bold caffeine, dark liqueur.', image: 'https://images.unsplash.com/photo-1545438102-799c3991ffb2?w=400&q=80' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="fixed inset-0 z-[950] overflow-y-auto bg-[#1a0f0f] text-[#f5f0e1]"
    >
      <div className="min-h-full bg-gradient-to-br from-[#1a0f0f] via-[#2a1414] to-[#0d0d0d] p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <button 
            onClick={onBack} 
            className="text-[#d4af37] mb-8 hover:text-[#f5f0e1] transition"
          >
            &larr; Back to Main
          </button>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-serif mb-4"
          >
            Barral Reserve
          </motion.h1>
          
          <p className="text-[#d4af37] text-xl font-light mb-12 tracking-widest uppercase">
            Old Money Lounge
          </p>

          {/* Drinks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinks.map((drink, i) => (
              <motion.div
                key={drink.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ scale: 1.03, boxShadow: '0 15px 40px rgba(212, 175, 55, 0.15)' }}
                className="bg-[#2a1414] border border-[#d4af37]/20 rounded-2xl p-6 cursor-pointer"
              >
                <div className="h-52 overflow-hidden rounded-xl mb-5">
                  <img 
                    src={drink.image} 
                    alt={drink.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-serif mb-1">{drink.name}</h3>
                    <p className="text-sm text-[#f5f0e1]/60">{drink.desc}</p>
                  </div>
                  <span className="text-[#d4af37] font-bold text-xl">{drink.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}