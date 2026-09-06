import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import toast from 'react-hot-toast';

export default function CheckoutPage() {
  const { cart, getCartTotal, placeOrder, updateQuantity, removeFromCart } = useStore();
  const [details, setDetails] = useState({
    name: '', email: '', phone: '', address: '', city: '', state: '', pincode: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const total = getCartTotal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return toast.error('Your cart is empty!');
    setLoading(true);
    const result = await placeOrder(details, total);
    setLoading(false);
    if (result.success) {
      toast.success('Order placed successfully! We will call you for confirmation.');
      navigate('/');
    } else {
      toast.error(result.error || 'Failed to place order');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-28 bg-[#FEF1CF] dark:bg-[#04040c]">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#022F70] dark:text-[#f0d67c]">Your Cart is Empty</h2>
          <button onClick={() => navigate('/all-beverages')} className="px-6 py-3 bg-[#17D1A5] text-white rounded-full">Browse Drinks</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-12 px-6 bg-[#FEF1CF] dark:bg-[#04040c] transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 font-display text-[#022F70] dark:text-[#f0d67c]">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Cart Summary */}
          <div className="bg-[#fdf3e5] dark:bg-[#1a1a2e] p-6 rounded-2xl border border-[#17D1A5]/20">
            <h3 className="text-xl font-bold mb-4 text-[#022F70] dark:text-[#f0d67c]">Your Items</h3>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-4 border-[#022F70]/10 dark:border-[#f0d67c]/10">
                  <div className="flex gap-4 items-center">
                    <img src={item.image} className="w-16 h-16 object-cover rounded-lg" />
                    <div>
                      <h4 className="font-semibold text-[#022F70] dark:text-[#f0d67c]">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.cupSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 border rounded text-[#022F70] dark:text-[#f0d67c]">-</button>
                    <span className="text-[#022F70] dark:text-[#f0d67c]">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 border rounded text-[#022F70] dark:text-[#f0d67c]">+</button>
                    <span className="font-bold text-[#022F70] dark:text-[#f0d67c]">₹{item.price * item.quantity}</span>
                    <button onClick={() => removeFromCart(item.id)} className="text-[#9f200f]">Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-right">
              <h3 className="text-2xl font-bold text-[#022F70] dark:text-[#f0d67c]">Total: ₹{total}</h3>
            </div>
          </div>

          {/* COD Form */}
          <form onSubmit={handlePlaceOrder} className="bg-[#fdf3e5] dark:bg-[#1a1a2e] p-6 rounded-2xl space-y-4 border border-[#17D1A5]/20">
            <h3 className="text-xl font-bold mb-4 text-[#022F70] dark:text-[#f0d67c]">Delivery Details (Cash on Delivery)</h3>
            <input type="text" placeholder="Full Name" name="name" value={details.name} onChange={handleChange} className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17D1A5] bg-transparent text-[#022F70] dark:text-[#f0d67c]" required />
            <input type="email" placeholder="Email" name="email" value={details.email} onChange={handleChange} className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17D1A5] bg-transparent text-[#022F70] dark:text-[#f0d67c]" required />
            <input type="tel" placeholder="Phone" name="phone" value={details.phone} onChange={handleChange} className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17D1A5] bg-transparent text-[#022F70] dark:text-[#f0d67c]" required />
            <input type="text" placeholder="Address" name="address" value={details.address} onChange={handleChange} className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17D1A5] bg-transparent text-[#022F70] dark:text-[#f0d67c]" required />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="City" name="city" value={details.city} onChange={handleChange} className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17D1A5] bg-transparent text-[#022F70] dark:text-[#f0d67c]" required />
              <input type="text" placeholder="State" name="state" value={details.state} onChange={handleChange} className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17D1A5] bg-transparent text-[#022F70] dark:text-[#f0d67c]" required />
            </div>
            <input type="text" placeholder="Pincode" name="pincode" value={details.pincode} onChange={handleChange} className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17D1A5] bg-transparent text-[#022F70] dark:text-[#f0d67c]" required />
            
            <button type="submit" disabled={loading} className="w-full py-4 bg-[#9f200f] text-white rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50">
              {loading ? 'Placing Order...' : 'Place COD Order'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}