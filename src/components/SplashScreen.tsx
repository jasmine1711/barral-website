import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden flex items-center justify-center">
      
      {/* 1. The Start.jpeg Image with Diagonal Reveal */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708125/Start.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          transformOrigin: 'center'
        }}
        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        animate={{ clipPath: [
          'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          'polygon(0 0, 100% 0, 70% 100%, 30% 100%)',
          'polygon(0 0, 100% 0, 0 0, 0 0)'
        ]}}
        transition={{ delay: 2, duration: 2.2, ease: 'easeInOut' }}
      />

      {/* 2. The Big Logo (Symbol above Text, Tightly aligned) */}
      <motion.div
        className="absolute z-20 flex flex-col items-center -mt-10"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {/* Large Symbol */}
        <img 
          src="https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708726/logo_symbol.png" 
          alt="Barral Symbol" 
          className="h-32 w-32 object-contain mb-1 drop-shadow-2xl"
        />
        {/* Tightly below Symbol */}
        <img 
          src="https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788707941/logo_written.png" 
          alt="Barral Text" 
          className="h-14 object-contain drop-shadow-2xl -mt-2"
        />
      </motion.div>

      {/* 3. Fading black overlay to end screen */}
      <motion.div 
        className="absolute inset-0 z-30 bg-black"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 4.0, duration: 0.5 }} 
      />
    </div>
  );
}