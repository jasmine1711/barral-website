import { motion } from 'framer-motion';

export default function AgeGate({ onConfirm, onDecline }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[900] flex items-center justify-center bg-black/80 backdrop-blur-lg"
    >
      <motion.div
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="bg-lounge-cream text-lounge-burgundy p-10 rounded-3xl max-w-md w-full shadow-2xl"
      >
        <h2 className="text-3xl font-serif mb-4">Aged to Perfection</h2>
        <p className="mb-6 text-sm">Enter the world of Barral Reserve. Are you 21+?</p>
        <div className="flex gap-4">
          <button onClick={onConfirm} className="bg-lounge-burgundy text-white px-6 py-3 rounded-full">Yes</button>
          <button onClick={onDecline} className="bg-gray-200 px-6 py-3 rounded-full">No</button>
        </div>
      </motion.div>
    </motion.div>
  );
}