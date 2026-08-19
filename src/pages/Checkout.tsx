import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/sampleData";

const Checkout: React.FC = () => {
  const [step, setStep] = useState(1);
  const cartItems = [
    { ...products[0], quantity: 2 },
    { ...products[1], quantity: 1 }
  ];

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
          className="text-4xl font-bold text-primary mb-12 text-center"
        >
          Checkout
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Steps */}
              <div className="flex items-center gap-4 mb-12">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                        s <= step ? "bg-accent text-white" : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && <div className={`w-24 h-1 ${s < step ? "bg-accent" : "bg-gray-200"}`} />}
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-8">Shipping Information</h2>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="John" />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="Doe" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Address</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="123 Fashion Street" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">City</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="New York" />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">State</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="NY" />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">Zip Code</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="10001" />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full bg-accent text-white py-4 rounded-xl font-semibold text-lg hover:bg-accent/90 transition-colors"
                      >
                        Continue to Payment
                      </button>
                    </form>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-8">Payment Information</h2>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="MM/YY" />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none" placeholder="123" />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 border-2 border-gray-200 text-gray-700 py-4 rounded-xl font-semibold text-lg hover:border-accent hover:text-accent transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="flex-1 bg-accent text-white py-4 rounded-xl font-semibold text-lg hover:bg-accent/90 transition-colors"
                        >
                          Complete Order
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {step === 3 && (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl">
                      ✓
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Order Confirmed!</h2>
                    <p className="text-gray-600 text-lg mb-8">Thank you for your purchase. Your order number is #12345.</p>
                    <Link to="/" className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent/90 transition-colors">
                      Continue Shopping
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                    <div className="flex-1">
                      <h3 className="font-bold text-primary">{item.name}</h3>
                      <p className="text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-primary">₹{(item.price * item.quantity).toFixed(0)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-primary pt-3">
                  <span>Total</span>
                  <span>₹{total.toFixed(0)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
