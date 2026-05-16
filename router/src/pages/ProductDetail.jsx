import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowLeft, Star, ShieldCheck, Truck } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full drop-shadow-2xl"
        />
      </div>
    );
  }

  if (!product) return <div className="text-center mt-20 text-3xl font-bold text-white drop-shadow-lg">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white hover:bg-white/20 transition-all duration-300 mb-10 font-bold text-lg bg-black/20 backdrop-blur-lg px-6 py-2.5 rounded-full border border-white/30 w-fit shadow-lg hover:shadow-xl"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Shop
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-black/20 backdrop-blur-2xl p-8 rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-white/20">
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-center bg-white/10 rounded-[32px] p-10 h-[500px] border border-white/20 shadow-inner"
        >
          <motion.img 
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={product.image} 
            alt={product.title} 
            className="max-h-full max-w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]" 
          />
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-md">
              {product.category}
            </span>
            <div className="flex items-center gap-2 text-yellow-300 bg-black/30 backdrop-blur-md border border-yellow-300/30 px-5 py-2 rounded-full text-sm font-bold shadow-md">
              <Star className="w-4 h-4 fill-current" />
              {product.rating?.rate} ({product.rating?.count} reviews)
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            {product.title}
          </h1>

          <div className="text-5xl font-black text-white mb-8 drop-shadow-xl">
            ₹{product.price}
          </div>

          <p className="text-white/90 text-lg leading-relaxed mb-10 font-medium drop-shadow-sm border-l-4 border-white/30 pl-4">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-5 mb-10">
            <div className="flex items-center gap-4 p-5 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-black/40 transition-colors">
              <ShieldCheck className="w-10 h-10 text-white drop-shadow-md" />
              <div>
                <p className="font-bold text-white drop-shadow-sm">1 Year Warranty</p>
                <p className="text-sm text-white/70 font-medium">100% Authentic</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-black/40 transition-colors">
              <Truck className="w-10 h-10 text-white drop-shadow-md" />
              <div>
                <p className="font-bold text-white drop-shadow-sm">Free Delivery</p>
                <p className="text-sm text-white/70 font-medium">2-3 Business Days</p>
              </div>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product)}
            className="w-full bg-white/20 backdrop-blur-md text-white text-xl font-black py-5 rounded-2xl transition-all shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.4)] border border-white/40 flex items-center justify-center gap-3 hover:bg-white/30"
          >
            <ShoppingCart className="w-6 h-6" />
            Add to Cart
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;