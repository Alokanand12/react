import React from "react";
import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full bg-black/20 backdrop-blur-2xl rounded-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/20 overflow-hidden hover:bg-black/30 transition-all duration-300 flex flex-col group h-full"
    >
      {/* Image */}
      <div
        onClick={() => navigate(`/pd/${product.id}`)}
        className="h-64 w-full p-6 flex items-center justify-center bg-white/10 border-b border-white/10 cursor-pointer relative overflow-hidden"
      >
        <motion.img
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.5 }}
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain drop-shadow-2xl transition-all"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h2 
          onClick={() => navigate(`/pd/${product.id}`)}
          className="text-xl font-bold text-white line-clamp-1 cursor-pointer hover:text-yellow-300 transition-colors drop-shadow-md"
        >
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-white/70 mt-2 line-clamp-2 min-h-[40px] font-medium">
          {product.description}
        </p>

        {/* Space filler to push button down */}
        <div className="flex-1" />

        {/* Price + Rating */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-3xl font-black text-white drop-shadow-lg">
            ₹{product.price}
          </span>
        </div>

        {/* Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(product)}
          className="w-full mt-6 bg-white/20 backdrop-blur-md text-white font-bold py-3.5 flex items-center justify-center gap-2 rounded-xl hover:bg-white/30 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.2)] border border-white/30"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;