import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, totalAmount } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-[85vh] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-6xl font-black text-white flex items-center justify-center gap-4 drop-shadow-2xl">
            <ShoppingBag className="w-14 h-14 text-white drop-shadow-md" />
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-none">Cart</span>
          </h1>
          <p className="text-white/90 mt-4 text-xl font-medium drop-shadow-md">Review and checkout your items securely.</p>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center bg-black/20 backdrop-blur-2xl rounded-[40px] p-24 shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-white/20"
          >
            <ShoppingBag className="w-32 h-32 text-white/50 mb-8 drop-shadow-md" />
            <h2 className="text-4xl font-black text-white mb-8 drop-shadow-lg">Your cart feels lonely</h2>
            <button 
              onClick={() => navigate('/shop')}
              className="bg-white/20 backdrop-blur-md text-white px-12 py-5 rounded-3xl font-bold text-xl hover:bg-white/30 transition-all shadow-[0_8px_32px_rgba(255,255,255,0.2)] border border-white/40"
            >
              Explore Shop
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                    key={item.id}
                    className="bg-black/20 backdrop-blur-xl rounded-[30px] p-6 shadow-xl border border-white/20 flex flex-col sm:flex-row items-center gap-8 group hover:bg-black/30 transition-all"
                  >
                    <div className="w-36 h-36 bg-white/10 rounded-2xl p-4 flex shrink-0 border border-white/20 relative overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-bold text-white line-clamp-1 drop-shadow-md">{item.title}</h3>
                      <p className="text-white font-black text-3xl mt-3 drop-shadow-lg">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>

                    <div className="flex flex-col items-center gap-5 shrink-0">
                      <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-inner">
                        <button onClick={() => decreaseQuantity(item.id)} className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl hover:bg-white/30 hover:shadow-lg text-white transition-all font-black text-xl">
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="w-10 text-center font-black text-2xl text-white drop-shadow-md">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl hover:bg-white/30 hover:shadow-lg text-white transition-all font-black text-xl">
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-white flex items-center justify-center gap-2 bg-red-500/20 hover:bg-red-500/50 w-full py-3 rounded-xl transition-all font-bold border border-red-500/40 shadow-lg"
                      >
                        <Trash2 className="w-5 h-5" /> Remove
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/20 backdrop-blur-2xl rounded-[40px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-white/20 h-fit sticky top-32"
            >
              <h3 className="text-3xl font-black text-white mb-8 drop-shadow-md">Summary</h3>
              <div className="space-y-6 border-b border-white/20 pb-8 mb-8 text-lg font-medium">
                <div className="flex justify-between text-white/90">
                  <span>Subtotal ({cart.length} items)</span>
                  <span className="font-bold text-white drop-shadow-sm">₹{totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/90">
                  <span>Shipping</span>
                  <span className="font-black text-yellow-300 drop-shadow-sm">Free</span>
                </div>
              </div>
              <div className="flex justify-between text-4xl font-black mb-10 text-white drop-shadow-lg">
                <span>Total</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
              
              <button className="w-full bg-white/20 backdrop-blur-lg border border-white/40 text-white font-black text-2xl py-5 rounded-2xl shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/30">
                Checkout Now
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
