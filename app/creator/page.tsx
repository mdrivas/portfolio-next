"use client";

import React from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ─── Data ────────────────────────────────────────────────────────────────────

const LANGUAGES = [
  { flag: "🇺🇸", name: "English", note: "Native" },
  { flag: "🇬🇷", name: "Greek", note: "Native" },
  { flag: "🇪🇸", name: "Spanish", note: "Fluent" },
  { flag: "🇭🇰", name: "Cantonese", note: "Conversational" },
  { flag: "🇧🇷", name: "Portuguese", note: "Conversational" },
  { flag: "🇨🇳", name: "Mandarin", note: "Conversational" },
];

const FEATURED_VIDEOS = [
  {
    id: "GSb82LcT0ek",
    title: "How I Learned 6 Languages by 21",
    views: "485K",
    niche: "Language Learning",
    description:
      "Personal methodology breakdown. The video that sparked the channel and remains my top subscriber driver.",
    tag: "Top Performer",
    driveLink: "#",
  },
  {
    id: "D5WQIUe9AOE",
    title: "If I Don't Know Your Language, You Win $$",
    views: "307K",
    niche: "Language Learning",
    description:
      "Interactive challenge format that went viral. Live language demonstration that engaged a broad audience.",
    tag: "Viral",
    driveLink: "#",
  },
  {
    id: "HhMceG7jMkM",
    title: "I Learned Cantonese for 674 Days, My First Day in Hong Kong",
    views: "106K",
    niche: "Travel & Culture",
    description:
      "Travel and language documentary. Real-world language application in destination content. A natural fit for travel and language brands.",
    tag: "Travel",
    driveLink: "#",
  },
  {
    id: "0kth84hHAv4",
    title: "I Secretly Learned my Grandma's Language",
    views: "92K",
    niche: "Heritage Storytelling",
    description:
      "Heritage storytelling that connected emotionally with a global audience. 92K views in under three weeks of upload.",
    tag: "Recent Hit",
    driveLink: "#",
  },
  {
    id: "vMf88msvi6o",
    title: "I Ordered in Spanish at a Mexican Market…",
    views: "67K",
    niche: "Travel & Culture",
    description:
      "Real-world Spanish use in an authentic cultural setting. Brand-friendly for travel, food, and language learning campaigns.",
    tag: "Cultural",
    driveLink: "#",
  },
];

const SERVICES = [
  {
    title: "UGC Short-Form Video",
    description:
      "60–90s authentic content delivered for your brand's channels. Hook → teach → payoff format that performs in feed and paid ads.",
    accent: "border-l-rose-400",
  },
  {
    title: "UGC Long-Form Video",
    description:
      "3–5 minute deeper content for landing pages, tutorial libraries, or YouTube ads. Great for product demos and methodology pieces.",
    accent: "border-l-orange-400",
  },
  {
    title: "UGC Instagram Reels",
    description:
      "Vertical, native, authentic. Same storytelling style optimized for Instagram with strong hooks built for short attention spans.",
    accent: "border-l-purple-400",
  },
  {
    title: "Multi-Language Delivery",
    description:
      "Same campaign delivered in 2–3 languages from one shoot. Reach Spanish, English, Mandarin, Cantonese, Portuguese, or Greek audiences with native delivery.",
    accent: "border-l-teal-400",
  },
];

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function CreatorPage() {
  return (
    <div
      className={`${inter.className} relative min-h-screen overflow-x-hidden bg-[#fdf8f2] text-stone-900`}
    >
      {/* Soft background blobs — calmer, single-tone family */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-rose-100/50 blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[40rem] h-[40rem] rounded-full bg-amber-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-orange-100/40 blur-3xl" />
      </div>

      {/* Top-right social links */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2 py-1.5 backdrop-blur shadow-sm">
        <a
          href="https://www.youtube.com/@mattheosdrivas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="p-2 rounded-full text-stone-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/mattheos.drivas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="p-2 rounded-full text-stone-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg>
        </a>
        <a
          href="mailto:drivas.matt@gmail.com?subject=UGC%20Brand%20Partnership"
          aria-label="Email"
          className="p-2 rounded-full text-stone-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13 2 4" />
          </svg>
        </a>
      </div>

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center px-6 md:px-12 py-24 md:py-0 relative">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <p className="text-stone-500 text-sm tracking-[0.25em] uppercase mb-6 font-medium">
              UGC Creator · California, USA
            </p>
            <h1
              className={`${playfair.className} leading-[0.9] tracking-tight mb-8 text-stone-900`}
              style={{
                fontSize: "clamp(3rem, 8.5vw, 6.5rem)",
                fontWeight: 700,
              }}
            >
              <span className="block">Mattheos</span>
              <span
                className="block italic text-rose-600"
                style={{ fontWeight: 500 }}
              >
                Drivas
              </span>
            </h1>
            <p className="text-stone-700 text-xl md:text-2xl leading-relaxed max-w-xl mx-auto md:mx-0 font-normal">
              <span className="block">Multilingual UGC for global brands.</span>
              <span className="block">
                From a creator millions of language learners already trust.
              </span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center md:justify-start gap-2"
            >
              {LANGUAGES.map((lang) => (
                <span
                  key={lang.name}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 shadow-sm"
                >
                  <span>{lang.flag}</span>
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-stone-400 text-xs font-medium">
                    {lang.note}
                  </span>
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — separated grid: 1 hero + 2 side-by-side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="order-1 md:order-2 flex flex-col gap-5 md:gap-6"
          >
            {/* Hero card — 485K */}
            <motion.a
              href={`https://youtu.be/${FEATURED_VIDEOS[0].id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-stone-900/15 ring-1 ring-stone-900/5">
                <img
                  src={`https://img.youtube.com/vi/${FEATURED_VIDEOS[0].id}/maxresdefault.jpg`}
                  alt={FEATURED_VIDEOS[0].title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-rose-600 px-3.5 py-1.5 text-white text-sm font-bold tracking-wide shadow-lg shadow-rose-900/30">
                    485K views
                  </span>
                  <span className="rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-stone-900 text-xs font-bold tracking-[0.15em] uppercase shadow-lg shadow-stone-900/10">
                    Top
                  </span>
                </div>
              </div>
              <div className="mt-3 px-1 flex items-baseline justify-between gap-3 flex-wrap">
                <p className="text-stone-600 text-sm">
                  The methodology video that sparked the channel.
                </p>
                <p className="text-stone-400 text-xs font-medium tracking-wide whitespace-nowrap">
                  485K · YouTube
                </p>
              </div>
            </motion.a>

            {/* Two smaller cards */}
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <motion.a
                href={`https://youtu.be/${FEATURED_VIDEOS[1].id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-stone-900/15 ring-1 ring-stone-900/5">
                  <img
                    src={`https://img.youtube.com/vi/${FEATURED_VIDEOS[1].id}/maxresdefault.jpg`}
                    alt={FEATURED_VIDEOS[1].title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-stone-900/90 backdrop-blur px-3 py-1 text-white text-sm font-bold tracking-wide shadow-lg">
                    307K
                  </span>
                </div>
                <div className="mt-2.5 px-1">
                  <p
                    className={`${playfair.className} text-stone-900 text-sm md:text-base leading-tight`}
                    style={{ fontWeight: 700 }}
                  >
                    If I Don&apos;t Know Your Language
                  </p>
                  <p className="text-stone-500 text-xs mt-1">
                    Viral interactive challenge.
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`https://youtu.be/${FEATURED_VIDEOS[2].id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-stone-900/15 ring-1 ring-stone-900/5">
                  <img
                    src={`https://img.youtube.com/vi/${FEATURED_VIDEOS[2].id}/maxresdefault.jpg`}
                    alt={FEATURED_VIDEOS[2].title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-stone-900/90 backdrop-blur px-3 py-1 text-white text-sm font-bold tracking-wide shadow-lg">
                    106K
                  </span>
                </div>
                <div className="mt-2.5 px-1">
                  <p
                    className={`${playfair.className} text-stone-900 text-sm md:text-base leading-tight`}
                    style={{ fontWeight: 700 }}
                  >
                    My First Day in Hong Kong
                  </p>
                  <p className="text-stone-500 text-xs mt-1">
                    Travel and language documentary.
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <p className="text-stone-500 text-xs tracking-[0.3em] uppercase">
            Scroll
          </p>
        </motion.div>
      </section>

      {/* ─── About Me ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10 md:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-stone-900/15 ring-1 ring-stone-900/5 max-w-sm mx-auto md:mx-0">
              <img
                src="/creator/portrait.jpg"
                alt="Mattheos Drivas"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-3"
          >
            <p className="text-stone-500 text-sm tracking-[0.25em] uppercase mb-6 font-medium">
              About Me
            </p>
            <h2
              className={`${playfair.className} text-stone-900 text-4xl md:text-5xl mb-8 leading-tight`}
              style={{ fontWeight: 700 }}
            >
              Hi, I'm{" "}
              <span
                className="italic text-rose-600"
                style={{ fontWeight: 500 }}
              >
                Mattheos
              </span>
              .
            </h2>
            <div className="space-y-5 text-stone-700 text-lg md:text-xl leading-relaxed">
              <p>
                A language learning content creator based in California. For the
                past two years I&apos;ve been making language learning content on
                YouTube. That&apos;s grown into{" "}
                <span className="font-semibold text-stone-900">
                  65 videos, 15K+ subscribers, and 7.45M+ lifetime views
                </span>
                .
              </p>
              <p>
                What started as documenting my own journey through six languages
                has grown into a channel brands now reach out for. The audience
                watches because it&apos;s real. I&apos;m ordering food in Cantonese in
                Hong Kong, learning my grandmother&apos;s Greek dialect, surprising
                strangers in their native languages. Recent uploads pull{" "}
                <span className="font-semibold text-stone-900">
                  150K+ views in a single month
                </span>
                .
              </p>
              <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white/70 p-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/creator/speakeasy-logo.png"
                  alt="Speakeasy"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl shrink-0"
                />
                <p className="text-base md:text-lg leading-relaxed text-stone-700">
                  Outside the channel, I&apos;ve been building{" "}
                  <a
                    href="https://learnspeakeasy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Speakeasy
                  </a>
                  , a language learning app now grown to{" "}
                  <span className="font-semibold text-stone-900">
                    13K+ users
                  </span>
                  . Time on the brand side has shaped how I think about UGC:
                  what hooks actually convert, what makes someone install, what
                  makes a CTA feel honest instead of forced.
                </p>
              </div>
              <p>
                I work with brands to create authentic, multilingual UGC built
                to perform on their channels. Whether you&apos;re reaching a
                global audience or just need a strong creative voice on camera,
                I&apos;d love to hear what you&apos;re working on.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured YouTube Videos ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-stone-500 text-sm tracking-[0.25em] uppercase mb-4 text-center font-medium"
          >
            Featured Content
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${playfair.className} text-stone-900 text-4xl md:text-6xl text-center mb-6`}
            style={{ fontWeight: 700 }}
          >
            More from{" "}
            <span className="italic text-rose-600" style={{ fontWeight: 500 }}>
              YouTube
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-stone-600 text-base md:text-lg text-center max-w-2xl mx-auto mb-16"
          >
            Two more performing pieces showing range beyond the top three above.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {FEATURED_VIDEOS.slice(3, 5).map((video, i) => (
              <VideoCard key={video.id} video={video} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Instagram Reel ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${playfair.className} text-stone-900 text-4xl md:text-6xl text-center mb-16`}
            style={{ fontWeight: 700 }}
          >
            From{" "}
            <span className="italic text-rose-600" style={{ fontWeight: 500 }}>
              Instagram
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          >
            <div className="rounded-2xl overflow-hidden bg-white shadow-lg mx-auto w-full max-w-sm">
              <div className="aspect-[9/16]">
                <iframe
                  src="https://www.instagram.com/reel/DYmy5nEh0pe/embed/"
                  className="w-full h-full"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
            </div>
            <div>
              <span className="inline-block rounded-full bg-rose-50 text-rose-700 border border-rose-200 px-3 py-1.5 text-xs tracking-[0.2em] uppercase font-bold mb-5">
                Featured Reel
              </span>
              <h3
                className={`${playfair.className} text-stone-900 text-3xl md:text-4xl mb-6 leading-tight`}
                style={{ fontWeight: 700 }}
              >
                Ordering at a noodle shop in Hong Kong
              </h3>
              <p className="text-stone-700 text-lg md:text-xl leading-relaxed">
                Showing off a local noodle spot in Hong Kong, speaking the local
                language while ordering and chatting with the owner. UGC-style
                content that highlights a real place through a real interaction,
                the way I&apos;d showcase a brand or product.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Services / What I Offer ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-stone-500 text-sm tracking-[0.25em] uppercase mb-4 text-center font-medium"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${playfair.className} text-stone-900 text-4xl md:text-6xl text-center mb-4`}
            style={{ fontWeight: 700 }}
          >
            <span className="italic text-rose-600" style={{ fontWeight: 500 }}>
              UGC for your channels
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-700 text-center max-w-2xl mx-auto mb-16 text-lg md:text-xl leading-relaxed"
          >
            Authentic content for brands to use on their own platforms: landing
            pages, paid ads, social channels. Multi-language delivery available
            from one shoot.
          </motion.p>

          {/* Sample integration — real brand plug from his own video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="text-center mb-6">
              <span className="inline-block rounded-full bg-rose-50 text-rose-700 border border-rose-200 px-3 py-1.5 text-xs tracking-[0.2em] uppercase font-bold mb-4">
                Sample Integration
              </span>
              <h3
                className={`${playfair.className} text-stone-900 text-2xl md:text-3xl mb-3 leading-tight`}
                style={{ fontWeight: 700 }}
              >
                Here&apos;s what an integration looks like in my content
              </h3>
              <p className="text-stone-600 text-base md:text-lg max-w-xl mx-auto">
                A clip from one of my YouTube videos where I plug Speakeasy. The
                same approach I&apos;d take for your brand: natural, in the flow
                of the story, not a hard sell.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl shadow-stone-900/15 ring-1 ring-stone-900/5 bg-stone-900">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/a0sUo31XFUY?start=375&end=417"
                  title="Sample brand integration"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="text-stone-500 text-xs md:text-sm text-center mt-3 italic">
              From &quot;You Win $$ If I Don&apos;t Know Your Language&quot; ·
              6:15–6:57
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-rose-400 border-t border-r border-b border-stone-100"
              >
                <h3
                  className={`${playfair.className} text-stone-900 text-xl md:text-2xl mb-3`}
                  style={{ fontWeight: 600 }}
                >
                  {service.title}
                </h3>
                <p className="text-stone-700 text-base md:text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-stone-500 text-xs tracking-[0.3em] uppercase mb-6"
          >
            Let&apos;s Work Together
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${playfair.className} text-stone-900 text-5xl md:text-7xl mb-8`}
            style={{ fontWeight: 700 }}
          >
            <span className="italic">Got a brief?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-700 text-lg md:text-xl mb-4 max-w-xl mx-auto leading-relaxed"
          >
            Single UGC video or a full multi-language campaign. Happy to hear
            about it.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-stone-500 text-sm md:text-base mb-10 italic"
          >
            Rate card available on request. Final quote depends on languages,
            usage rights, and deliverables.
          </motion.p>
          <motion.a
            href="mailto:drivas.matt@gmail.com?subject=UGC%20Brand%20Partnership"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-white text-sm md:text-base tracking-[0.15em] uppercase font-semibold shadow-lg shadow-rose-300/40 bg-rose-600 hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-300/60 hover:scale-[1.02] transition-all duration-300"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13 2 4" />
            </svg>
            drivas.matt@gmail.com
          </motion.a>
        </div>
      </section>

      {/* ─── Footer ───────────────────────────────────────────────────────── */}
      <footer className="px-6 md:px-12 pb-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://www.youtube.com/@mattheosdrivas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-stone-400 hover:text-rose-500 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mattheosdrivas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-stone-400 hover:text-rose-600 transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a
              href="mailto:drivas.matt@gmail.com"
              aria-label="Email"
              className="text-stone-400 hover:text-rose-600 transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
            </a>
          </div>
          <p className="text-stone-400 text-xs tracking-[0.2em] uppercase">
            Mattheos Drivas · Creator · California, USA
          </p>
        </div>
      </footer>
    </div>
  );
}

// ─── Subcomponent ────────────────────────────────────────────────────────────

type Video = (typeof FEATURED_VIDEOS)[number];

function VideoCard({
  video,
  index,
  wide = false,
}: {
  video: Video;
  index: number;
  wide?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="rounded-2xl overflow-hidden bg-white shadow-lg shadow-stone-200/50 border border-white"
    >
      <div className="aspect-video bg-stone-900">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className={wide ? "p-6 md:p-10" : "p-5 md:p-7"}>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-block rounded-full bg-rose-50 text-rose-700 border border-rose-200 px-3 py-1 text-xs tracking-[0.15em] uppercase font-bold">
            {video.tag}
          </span>
          <span className="inline-block rounded-full bg-stone-100 text-stone-700 border border-stone-200 px-3 py-1 text-xs tracking-[0.15em] uppercase font-semibold">
            {video.niche}
          </span>
          <span className="text-stone-500 text-sm ml-1 font-medium">
            {video.views} views
          </span>
        </div>
        <h3
          className={`${playfair.className} text-stone-900 text-xl md:text-2xl mb-3 leading-snug`}
          style={{ fontWeight: 700 }}
        >
          {video.title}
        </h3>
        <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-4">
          {video.description}
        </p>
        <a
          href={video.driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-rose-600 transition-colors"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download raw file
        </a>
      </div>
    </motion.div>
  );
}
