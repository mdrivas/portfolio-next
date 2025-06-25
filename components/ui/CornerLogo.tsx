"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CornerLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="absolute top-5 right-5 sm:right-10 z-10"
    >
      <Link href="/" className="block hover:opacity-80 transition-opacity">
        <Image
          src="/MD-logo.png"
          alt="MD Logo"
          width={32}
          height={32}
          className="rounded-sm"
          priority
        />
      </Link>
    </motion.div>
  );
};

export default CornerLogo;
