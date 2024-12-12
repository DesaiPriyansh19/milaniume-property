import React from 'react';
import { motion } from 'framer-motion';

const LoaderAnimation = () => {
  return (
    <div className="flex h-full w-full z-50 items-center justify-center  bg-transparent backdrop-blur-md  ">
      {/* Animated Buildings */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        className="w-10 h-24 bg-black mx-2 rounded"
      ></motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-10 h-32 bg-[#1F4B43] mx-2 rounded"
      ></motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-10 h-28 bg-yellow-500 mx-2 rounded"
      ></motion.div>

      {/* Animated Text */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute text-3xl font-bold text-white"
        style={{
            textShadow: "4px 4px 8px rgba(0.1, 0.2, 0.5, 0.7)", // Apply text shadow to all children
          }} 
      >
   We Build Your Dreams
      </motion.h1>
    </div>
  );
};

export default LoaderAnimation;
