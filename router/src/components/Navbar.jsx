import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { LogOut, User, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(null);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = (e) => {
    if (e) e.preventDefault();
    logout();
    navigate("/");
  };

  const displayItems = [];
  if (user) {
    displayItems.push({ name: "Home", path: "/" });
    displayItems.push({ name: "Shop", path: "/shop" });
    displayItems.push({ name: "Cart Item", path: "/cart" });
    displayItems.push({ name: "Logout", path: "/logout", isLogout: true });
  } else {
    displayItems.push({ name: "Login", path: "/login" });
  }

  return (
    <div className="h-[10%] min-h-[80px] mb-8 shadow-2xl border-b border-white/20 flex justify-between px-10 items-center bg-black/20 backdrop-blur-2xl sticky top-0 z-30">
      <div 
        onClick={() => navigate("/")}
        className="cursor-pointer flex items-center gap-2 group"
      >
        <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.4 }}>
          <ShoppingBag className="w-8 h-8 text-white drop-shadow-lg" />
        </motion.div>
        <h1 className="text-3xl font-black text-white tracking-widest drop-shadow-md group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all">
        E-COMMERCE
        </h1>
      </div>
      
      <div className="flex items-center gap-2 font-bold text-white/80 relative">
        {displayItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={item.isLogout ? handleLogout : undefined}
              onMouseEnter={() => setHoveredPath(item.name)}
              onMouseLeave={() => setHoveredPath(null)}
              className="relative px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 z-10"
            >
              <span className={`relative z-10 transition-colors duration-300 ${isActive || hoveredPath === item.name ? "text-white drop-shadow-md" : "text-white/70"}`}>
                {item.name}
              </span>
              
              {/* Cart Badge */}
              {item.name === "Cart Item" && cartItemsCount > 0 && (
                <span className="relative z-10 bg-white text-black text-xs px-2.5 py-0.5 rounded-full font-black shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  {cartItemsCount}
                </span>
              )}

              {/* Hover highlight background */}
              {hoveredPath === item.name && (
                <motion.div
                  layoutId="navbar-hover-glow"
                  className="absolute inset-0 bg-white/20 rounded-full border border-white/30 backdrop-blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </NavLink>
          );
        })}
      </div>

      <div className="flex items-center gap-6">
        {user && (
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/20 cursor-default"
          >
            <User className="w-4 h-4" />
            <span className="font-semibold text-sm truncate max-w-[120px] tracking-wide">{user.email.split('@')[0]}</span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;