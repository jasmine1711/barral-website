import { useState } from 'react';
import { drinks } from '../lib/data';

interface PreOrderProps {
  isNight: boolean;
}

export default function PreOrder({ isNight }: PreOrderProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) => setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-4xl font-bold mb-8 text-center">Pre-Order Your Pack</h2>
        
        <div className={`space-y-4 rounded-3xl p-8 border ${isNight ? 'bg-[#1a1a2e]/60 border-[#f0d67c]/20' : 'bg-white/70 border-[#022F70]/10'}`}>
          {drinks.map(d => (
            <div 
              key={d.id} 
              className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${selected.includes(d.id) ? 'border-[#f17816] bg-[#f17816]/10' : isNight ? 'border-[#f0d67c]/20' : 'border-gray-200'}`}
            >
              <div className="flex gap-5 items-center">
                <img 
                  src={d.image} 
                  className={`w-20 h-20 object-cover rounded-xl ${isNight ? 'dark-mode-img' : 'light-mode-img'}`} 
                />
                <div>
                  <h3 className="font-display text-xl font-bold">{d.name}</h3>
                  <p className={`text-sm ${isNight ? 'text-[#f0d67c]/80' : 'text-gray-500'}`}>
                    {d.category} · {d.cupSize} · ₹{d.price}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => toggle(d.id)} 
                className="px-5 py-2.5 rounded-full font-bold text-white transition transform hover:scale-105"
                style={{ backgroundColor: selected.includes(d.id) ? '#f17816' : (isNight ? '#f0d67c' : '#022F70') }}
              >
                {selected.includes(d.id) ? 'Selected' : 'Add'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}