import { Search, Home, Bell, Download } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-black px-6 py-3 flex items-center justify-between">
      
      {/* LEFT - Logo */}
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          {/* You can replace this with Spotify logo */}
          <span className="text-black font-bold">S</span>
        </div>

        {/* Home Button */}
        <button className="w-10 h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition">
          <Home className="text-white w-5 h-5" />
        </button>

        {/* Search Bar */}
        <div className="flex items-center bg-[#1f1f1f] px-4 py-2 rounded-full w-[400px] focus-within:bg-[#2a2a2a] transition">
          <Search className="text-gray-400 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent outline-none text-white w-full placeholder-gray-400"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">
        
        <button className="text-white font-semibold hover:scale-105 transition">
          Explore Premium
        </button>

        <button className="flex items-center gap-2 text-gray-300 hover:text-white transition">
          <Download className="w-4 h-4" />
          Install App
        </button>

        <Bell className="text-gray-300 hover:text-white cursor-pointer" />

        {/* Profile */}
        <div className="w-8 h-8 bg-gray-600 rounded-full cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Navbar;