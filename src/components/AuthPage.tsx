import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import toast from 'react-hot-toast';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        await signIn(email, password);
        toast.success('Logged in successfully!');
      } else {
        await signUp(email, password, name);
        toast.success('Account created! Please check your email to verify.');
      }
      navigate('/');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-12 px-6 bg-gradient-to-br from-[#FEF1CF] to-[#fdf3e5] dark:from-[#04040c] dark:to-[#1a1a2e]">
      <div className="w-full max-w-md bg-[#FEF1CF] dark:bg-[#1a1a2e] rounded-3xl shadow-2xl p-8 border border-[#17D1A5]/30 dark:border-[#f0d67c]/20">
        <h2 className="text-3xl font-bold mb-6 text-center font-display text-[#022F70] dark:text-[#f0d67c]">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#022F70] dark:text-[#f0d67c]">Full Name</label>
              <input 
                type="text" 
                placeholder="Your name" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                className="w-full px-4 py-3 rounded-xl border border-[#17D1A5]/40 focus:outline-none focus:ring-2 focus:ring-[#17D1A5] bg-transparent text-[#022F70] dark:text-[#f0d67c]" 
                required 
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#022F70] dark:text-[#f0d67c]">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="w-full px-4 py-3 rounded-xl border border-[#17D1A5]/40 focus:outline-none focus:ring-2 focus:ring-[#17D1A5] bg-transparent text-[#022F70] dark:text-[#f0d67c]" 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-[#022F70] dark:text-[#f0d67c]">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="w-full px-4 py-3 rounded-xl border border-[#17D1A5]/40 focus:outline-none focus:ring-2 focus:ring-[#17D1A5] bg-transparent text-[#022F70] dark:text-[#f0d67c]" 
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-3 rounded-xl bg-[#17D1A5] text-white font-bold hover:bg-[#22b99a] transition disabled:opacity-50"
          >
            {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-sm text-[#022F70] dark:text-[#f0d67c] hover:underline"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}