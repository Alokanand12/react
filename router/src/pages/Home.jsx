import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Sparkles } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold px-6 py-2.5 rounded-full uppercase tracking-widest mb-10 inline-flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
          Welcome to the Shopping
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
          Discover Products You <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-200 drop-shadow-none">Love</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
          We bring you the absolute best quality products at unbeatable prices. 
          Start exploring today and find exactly what you've been looking for.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/shop')}
          className="bg-white/20 backdrop-blur-lg border border-white/40 text-white px-12 py-5 rounded-full font-bold text-xl shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.4)] transition-all duration-300"
        >
          Explore the Collection
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;