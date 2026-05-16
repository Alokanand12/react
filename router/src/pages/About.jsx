import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-[80vh] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-200 drop-shadow-none">Story</span></h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md font-medium">Discover the passion, mission, and people behind the ultimate shopping experience.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/20 backdrop-blur-2xl p-10 rounded-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-white/90 leading-relaxed text-lg">
              We strive to provide our customers with top-tier products without the premium price tag. 
              Our focus is always on quality, reliability, and ensuring a seamless shopping experience 
              from start to finish. Every product is handpicked and verified to meet our strict quality standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/20 backdrop-blur-2xl p-10 rounded-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us?</h2>
            <ul className="text-white/90 space-y-5 text-lg font-medium">
              <li className="flex items-center gap-4"><CheckCircle2 className="text-yellow-300 drop-shadow-md" /> Curated selection of high-quality items.</li>
              <li className="flex items-center gap-4"><CheckCircle2 className="text-yellow-300 drop-shadow-md" /> Fast and reliable shipping worldwide.</li>
              <li className="flex items-center gap-4"><CheckCircle2 className="text-yellow-300 drop-shadow-md" /> 24/7 dedicated customer support.</li>
              <li className="flex items-center gap-4"><CheckCircle2 className="text-yellow-300 drop-shadow-md" /> Secure next-gen authentication.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;