"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Avatar = () => {
  return (
    <div className="relative group">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl"
      >
        <Image
          src="/Avatar.jpg"
          alt="Mattheos Drivas"
          fill
          className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 256px, 320px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Decorative elements */}
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-purple to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"
        style={{ zIndex: -1 }}
      />

      {/* Tech-themed decorative dots */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-dots-pattern opacity-20" />
    </div>
  );
};

export default Avatar;
