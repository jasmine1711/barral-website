import { drinks } from '../lib/data';
import { useStore } from '../context/StoreContext';
import toast from 'react-hot-toast';

export default function AllBeverages() {
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
    <div className="pt-28 pb-16 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-serif mb-8">All Beverages</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {drinks.map(d => (
          <div key={d.id} className="bg-white p-6 rounded-2xl shadow-md">
            <img src={d.image} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-bold">{d.name}</h3>
            <p className="text-gray-500 mt-2">{d.tagline}</p>
            
            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold">₹{d.price}</span>
              <span className="text-sm text-gray-500">{d.cupSize}</span>
            </div>

            <div className="mt-6 flex gap-3">
              <button 
                onClick={() => handleWishlist(d)}
                className="flex-1 px-4 py-2 rounded-full border-2 font-semibold"
                style={{ borderColor: '#17D1A5', color: '#17D1A5' }}
              >
                Wishlist
              </button>
              <button 
                onClick={() => handleAddToCart(d)}
                className="flex-1 px-4 py-2 rounded-full font-semibold text-white"
                style={{ backgroundColor: '#17D1A5' }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}