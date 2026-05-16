import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      navigate("/");
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-black/20 backdrop-blur-2xl p-12 rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-white/20 max-w-[450px] w-full"
      >
        <div className="mb-10 text-center">
          <div className="w-24 h-24 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Lock className="w-10 h-10 text-white drop-shadow-md" />
          </div>
          <h1 className="text-4xl font-black text-white mb-3 drop-shadow-lg">Welcome Back</h1>
          <p className="text-white/80 font-medium text-lg drop-shadow-sm">Log in securely to your account.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-white/90 mb-3 ml-2 drop-shadow-sm">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60" />
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-14 pr-5 py-4 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/20 text-white text-lg font-medium focus:ring-4 focus:ring-white/30 focus:border-white/50 outline-none transition placeholder-white/40 shadow-inner"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-white/90 mb-3 ml-2 drop-shadow-sm">Password</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-14 pr-5 py-4 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/20 text-white text-lg font-medium focus:ring-4 focus:ring-white/30 focus:border-white/50 outline-none transition placeholder-white/40 shadow-inner"
                placeholder="••••••••"
              />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-white/20 backdrop-blur-md text-white font-black text-xl py-4 rounded-2xl shadow-[0_8px_32px_rgba(255,255,255,0.2)] border border-white/40 hover:bg-white/30 transition-all mt-6"
          >
            Sign In Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
