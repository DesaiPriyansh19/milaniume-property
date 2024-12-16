import React from "react";
import { motion } from "framer-motion";

const LoaderAnimation = () => {
  return (<>
    <motion.div
      initial={{ opacity: 1, visibility: "visible" }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration:1}} // Smooth fade-in and fade-out
      className="min-h-screen w-full fixed top-0 left-0 flex items-center justify-center
         bg-transparent backdrop-blur-sm z-10"
    >     {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Animated Buildings */}
      <div className="absolute z-20 flex items-center justify-center w-full h-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0 }}
          className="w-10 h-24 bg-black mx-2 rounded"
        ></motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          className="w-10 h-32 bg-[#1F4B43] mx-2 rounded"
        ></motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.2}}
          className="w-10 h-28 bg-[#E7C873] mx-2 rounded"
        ></motion.div>
      </div>

      {/* Animated Text */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute z-30 text-3xl font-bold text-white"
        style={{
          textShadow: "4px 4px 8px rgba(0.1, 0.2, 0.5, 0.7)",
        }}
      >
        We Build Your Dreams
      </motion.h1>
    </motion.div></>
  );
};

export default LoaderAnimation;
