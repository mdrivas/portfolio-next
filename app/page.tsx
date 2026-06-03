"use client";

import React from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Landing() {
  return (
    <div
      className={`${inter.className} min-h-screen bg-[#fdf8f2] text-stone-900 flex items-center justify-center px-6 py-16 relative overflow-hidden`}
    >
      {/* Soft background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-rose-100/50 blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[40rem] h-[40rem] rounded-full bg-amber-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-orange-100/40 blur-3xl" />
      </div>

      <div className="max-w-5xl w-full">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-medium mb-6">
            Welcome
          </p>
          <h1
            className={`${playfair.className} text-stone-900 leading-[0.9] tracking-tight`}
            style={{ fontSize: "clamp(3rem, 9vw, 6rem)", fontWeight: 700 }}
          >
            <span className="block">Mattheos</span>
            <span
              className="block italic text-rose-600"
              style={{ fontWeight: 500 }}
            >
              Drivas
            </span>
          </h1>
          <p className="text-stone-600 text-lg md:text-xl mt-8 max-w-xl mx-auto leading-relaxed">
            Engineering - content creation. Where would you like to go?
          </p>
        </motion.div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {/* Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              href="/engineering"
              className="group block rounded-3xl bg-stone-900 p-8 md:p-12 hover:shadow-2xl hover:shadow-stone-900/30 transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <p className="text-stone-400 text-xs tracking-[0.25em] uppercase font-semibold mb-5">
                Engineering
              </p>
              <h2
                className={`${playfair.className} text-white text-3xl md:text-4xl mb-5 leading-tight`}
                style={{ fontWeight: 700 }}
              >
                Software <span className="italic">Engineer</span>
              </h2>
              <p className="text-stone-400 text-base md:text-lg leading-relaxed mb-8">
                Full-stack engineer building products, tools, and apps.
              </p>
              <p className="inline-flex items-center gap-2 text-white text-sm font-semibold tracking-wider group-hover:gap-3 transition-all">
                View portfolio
                <span aria-hidden>→</span>
              </p>
            </Link>
          </motion.div>

          {/* Creator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="/creator"
              className="group block rounded-3xl bg-white p-8 md:p-12 hover:shadow-2xl hover:shadow-rose-900/15 transition-all duration-300 hover:-translate-y-1 border border-rose-100 h-full"
            >
              <p className="text-rose-600 text-xs tracking-[0.25em] uppercase font-semibold mb-5">
                Brand Partnerships
              </p>
              <h2
                className={`${playfair.className} text-stone-900 text-3xl md:text-4xl mb-5 leading-tight`}
                style={{ fontWeight: 700 }}
              >
                UGC{" "}
                <span
                  className="italic text-rose-600"
                  style={{ fontWeight: 500 }}
                >
                  Creator
                </span>
              </h2>
              <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-8">
                Multilingual UGC for brands. 15K+ YouTube subs, 6 languages,
                content millions watch.
              </p>
              <p className="inline-flex items-center gap-2 text-rose-600 text-sm font-semibold tracking-wider group-hover:gap-3 transition-all">
                View portfolio
                <span aria-hidden>→</span>
              </p>
            </Link>
          </motion.div>
        </div>

        {/* Tiny footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-stone-400 text-xs tracking-[0.2em] uppercase mt-16 md:mt-20"
        >
          mattheosdrivas.com
        </motion.p>
      </div>
    </div>
  );
}
