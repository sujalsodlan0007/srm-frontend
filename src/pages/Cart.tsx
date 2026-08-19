import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { products } from "../data/sampleData";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 2 },
    { ...products[1], quantity: 1 }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(item.moq, item.quantity + change) }
        : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-primary mb-12"
        >
          Shopping Cart
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {cartItems.length === 0 ? (
                <div className="p-12 text-center">
                  <h2 className="text-2xl font-bold text-primary mb-4">Your cart is empty</h2>
                  <Link to="/shop" className="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold">
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-6 p-6 border-b border-gray-100 last:border-b-0"
                  >
                    <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-xl" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.category}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                            <FaMinus size={12} />
                          </button>
                          <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                            <FaPlus size={12} />
                          </button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                          <FaTrash size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">₹{(item.price * item.quantity).toFixed(0)}</p>
                      <p className="text-gray-400 line-through">₹{(item.originalPrice * item.quantity).toFixed(0)}</p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold text-primary">
                  <span>Total</span>
                  <span>₹{total.toFixed(0)}</span>
                </div>
              </div>
              <Link to="/checkout" className="block bg-accent text-white text-center py-4 rounded-xl font-semibold text-lg hover:bg-accent/90 transition-colors">
                Proceed to Checkout
              </Link>
              <div className="mt-6">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none mb-3"
                />
                <button className="w-full border-2 border-accent text-accent py-3 rounded-xl font-semibold hover:bg-accent hover:text-white transition-colors">
                  Apply Coupon
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
