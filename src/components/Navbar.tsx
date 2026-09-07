import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

interface NavbarProps {
  onShowAlcoholic: () => void;
  isNight: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ onShowAlcoholic, isNight, toggleTheme }: NavbarProps) {
  const { cart, wishlist, user, signOut } = useStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <>
      <Link to="/" className="fixed top-6 left-6 z-50 flex flex-col items-center group w-[200px]">
        <img 
          src="https://res.cloudinary.com/vwg7rayu/image/upload/v1788708726/logo_symbol.png" 
          alt="Barral Symbol" 
          className="h-24 w-24 md:h-32 md:w-32 object-contain drop-shadow-2xl transition-transform group-hover:scale-105" 
        />
        <img 
          src="https://res.cloudinary.com/vwg7rayu/image/upload/v1788707941/logo_written.png" 
          alt="Barral Text" 
          className="h-16 md:h-20 object-contain mt-2 drop-shadow-2xl transition-transform group-hover:scale-105" 
        />
      </Link>

      <div className="fixed top-6 right-6 z-50 w-[300px] md:w-auto flex gap-3 items-center p-2 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <Link 
          to="/" 
          className={`px-4 py-2 rounded-full font-semibold text-sm hover:opacity-80 ${isNight ? 'text-[#f0d67c]' : 'text-[#022F70]'}`}
        >
          Home
        </Link>
        <Link 
          to="/all-beverages" 
          className={`px-4 py-2 rounded-full font-semibold text-sm hover:opacity-80 ${isNight ? 'text-[#f0d67c]' : 'text-[#022F70]'}`}
        >
          Drinks
        </Link>
        
        <button 
          onClick={() => navigate('/checkout')} 
          className="relative p-2.5 rounded-full bg-white/20 hover:bg-white/40 transition flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#022F70] dark:text-[#f0d67c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-[#9f200f] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cart.length}</span>}
        </button>

        <button className="relative p-2.5 rounded-full bg-white/20 hover:bg-white/40 transition flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#022F70] dark:text-[#f0d67c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {wishlist.length > 0 && <span className="absolute -top-1 -right-1 bg-[#17D1A5] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{wishlist.length}</span>}
        </button>

        <button 
          onClick={toggleTheme} 
          className="p-2.5 rounded-full bg-white/20 hover:bg-white/40 transition flex items-center justify-center"
        >
          {isNight ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f0d67c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#022F70]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>

        <button 
          onClick={onShowAlcoholic} 
          className="p-2.5 rounded-full bg-white/20 hover:bg-white/40 transition flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9f200f] dark:text-[#f0d67c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </button>

        {user ? (
          <button onClick={handleLogout} className="px-4 py-2 rounded-full text-sm font-semibold bg-[#9f200f] text-white hover:bg-[#7c8d30] transition">Logout</button>
        ) : (
          <Link to="/auth" className="px-4 py-2 rounded-full text-sm font-semibold bg-[#17D1A5] text-white hover:opacity-80 transition">Login</Link>
        )}
      </div>
    </>
  );
}