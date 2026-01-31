"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

// ─── Types ───────────────────────────────────────────────────────────────────

interface Stat {
  label: string;
  value: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const STATS: Stat[] = [
  { label: "Projects", value: "6+" },
  { label: "Speakeasy Users", value: "10K+" },
  { label: "Languages", value: "6" },
  { label: "PPE Delivered", value: "900+" },
  { label: "Degree", value: "M.S." },
  { label: "At", value: "Commure" },
];

// ─── Clip-Path Cursor (like landonorris.com) ────────────────────────────────

function useCursorClip(revealRef: React.RefObject<HTMLDivElement | null>) {
  const pos = useRef({ x: -200, y: -200 });
  const smoothPos = useRef({ x: -200, y: -200 });
  const vel = useRef({ x: 0, y: 0 });
  // Trail: store recent positions for a teardrop/comet shape
  const trail = useRef<{ x: number; y: number }[]>([]);

  const setMouse = useCallback((x: number, y: number) => {
    pos.current = { x, y };
  }, []);

  const clearMouse = useCallback(() => {
    pos.current = { x: -200, y: -200 };
  }, []);

  useEffect(() => {
    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      const prev = { ...smoothPos.current };
      smoothPos.current.x = lerp(smoothPos.current.x, pos.current.x, 0.15);
      smoothPos.current.y = lerp(smoothPos.current.y, pos.current.y, 0.15);

      vel.current.x = lerp(vel.current.x, smoothPos.current.x - prev.x, 0.25);
      vel.current.y = lerp(vel.current.y, smoothPos.current.y - prev.y, 0.25);

      const speed = Math.sqrt(vel.current.x ** 2 + vel.current.y ** 2);

      // Push current smooth position to trail
      trail.current.push({ x: smoothPos.current.x, y: smoothPos.current.y });
      // Keep trail short — more points when moving fast
      const maxLen = Math.min(6 + Math.floor(speed * 0.8), 14);
      while (trail.current.length > maxLen) trail.current.shift();

      const el = revealRef.current;
      if (!el || trail.current.length < 2) {
        raf = requestAnimationFrame(animate);
        return;
      }

      const off = 20; // offset for inset[-20px]
      const head = trail.current[trail.current.length - 1];
      const angle = Math.atan2(vel.current.y, vel.current.x);
      const perpX = -Math.sin(angle);
      const perpY = Math.cos(angle);

      // Build a polygon: wide at head, tapers along the trail
      const headWidth = 35 + Math.min(speed * 1.5, 25); // subtle width
      const pts: string[] = [];

      // Right side (head to tail)
      for (let i = trail.current.length - 1; i >= 0; i--) {
        const t = (trail.current.length - 1 - i) / (trail.current.length - 1);
        const w = headWidth * (1 - t * t); // quadratic taper
        const p = trail.current[i];
        pts.push(`${p.x + off + perpX * w}px ${p.y + off + perpY * w}px`);
      }
      // Left side (tail to head)
      for (let i = 0; i < trail.current.length; i++) {
        const t = (trail.current.length - 1 - i) / (trail.current.length - 1);
        const w = headWidth * (1 - t * t);
        const p = trail.current[i];
        pts.push(`${p.x + off - perpX * w}px ${p.y + off - perpY * w}px`);
      }

      el.style.clipPath = `polygon(${pts.join(", ")})`;
      el.style.transform = "none";

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [revealRef]);

  return { setMouse, clearMouse };
}

// ─── Signature Component ─────────────────────────────────────────────────────

function Signature({ progress, mobile }: { progress: number; mobile?: boolean }) {
  const textRef = useRef<SVGTextElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setPathLength(textRef.current.getComputedTextLength());
    }
  }, []);

  // Signature draws from 40% → 85% scroll
  const drawProgress = Math.max(0, Math.min((progress - 0.4) / 0.45, 1));
  // Fill fades in from 80% → 100% scroll
  const fillOpacity = Math.max(0, Math.min((progress - 0.8) / 0.2, 1));
  // Overall opacity
  const opacity = Math.max(0, Math.min((progress - 0.3) / 0.15, 1));

  const dashOffset = pathLength * (1 - drawProgress);

  return (
    <div
      className="absolute z-20 pointer-events-none"
      style={{
        opacity,
        // Position relative to the full viewport, not the image
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 900 250"
        className={mobile ? "w-[120vw]" : "w-[110vw]"}
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
        preserveAspectRatio="xMidYMid meet"
        style={{
          transform: mobile ? "rotate(-8deg)" : "rotate(-10deg)",
          filter: "drop-shadow(0 0 30px rgba(167, 139, 250, 0.6)) drop-shadow(0 0 80px rgba(167, 139, 250, 0.3))",
        }}
      >
        <text
          ref={textRef}
          x="450"
          y="180"
          textAnchor="middle"
          className={dancingScript.className}
          style={{
            fontSize: "200px",
            fill: `rgba(167, 139, 250, ${fillOpacity * 0.95})`,
            stroke: "rgba(200, 180, 255, 0.95)",
            strokeWidth: 3,
            strokeDasharray: pathLength || 2000,
            strokeDashoffset: dashOffset,
            paintOrder: "stroke fill",
          }}
        >
          Mattheos Drivas
        </text>
      </svg>
    </div>
  );
}

// ─── Stats Board ─────────────────────────────────────────────────────────────

function StatsBoard({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 right-0 z-40 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 w-[320px]"
        >
          <p className="text-white/70 text-sm leading-relaxed">
            Software engineer interning at <span className="text-white/70 font-medium">YC-backed Commure</span>, leading <span className="text-white/70 font-medium">backend integrations</span> for FDA-approved medical devices. Built <span className="text-white/70 font-medium">Speakeasy</span> from scratch to <span className="text-white/70 font-medium">10K+ users</span> and <span className="text-white/70 font-medium">3-figure MRR</span> in 4 months. Conversational in <span className="text-white/70 font-medium">6 languages</span>. Pursuing an <span className="text-white/70 font-medium">M.S. in EECS</span> at Chapman.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function V2Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const [showStats, setShowStats] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { setMouse, clearMouse } = useCursorClip(revealRef);

  // Track scroll progress (0 at top, 1 at one viewport height scrolled)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      setScrollProgress(Math.min(scrollY / vh, 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      setMouse(e.clientX, e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    },
    [setMouse]
  );

  const px =
    typeof window !== "undefined"
      ? (mousePos.x / window.innerWidth - 0.5) * 20
      : 0;
  const py =
    typeof window !== "undefined"
      ? (mousePos.y / window.innerHeight - 0.5) * 20
      : 0;

  // Scroll-driven values
  const imageScale = 1 - scrollProgress * 0.3; // 1 → 0.7 (subtle shrink, stays visible)
  const imageGrayscale = Math.min(scrollProgress / 0.5, 1); // goes grayscale as signature appears
  const nameOpacity = Math.max(0, 1 - scrollProgress / 0.4);
  const bgOpacity = 0.15 - scrollProgress * 0.08;
  const statsOpacity = Math.max(0, 1 - scrollProgress / 0.3);

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={clearMouse}
    >
      {/* Scroll container */}
      <div>
        {/* Sticky hero section — pins for 1 viewport of scroll */}
        <div className="h-[200vh]">
        <div className="sticky top-0 w-screen h-screen overflow-hidden bg-black">
          {/* Background image — hidden on mobile */}
          {!isMobile && (
            <div
              className="absolute inset-[-20px] z-0"
              style={{
                backgroundImage: "url(/mattpic2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                opacity: Math.max(bgOpacity, 0),
                filter: "blur(2px)",
                transform: `translate(${px * 0.5}px, ${py * 0.5}px)`,
              }}
            />
          )}

          {/* Main headshot — stays visible, goes grayscale, signature overlays on top */}
          <div
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{
              transform: isMobile
                ? `scale(${imageScale})`
                : `translate(${px}px, ${py}px) scale(${imageScale})`,
            }}
          >
            <div
              className={`relative ${isMobile ? "" : "w-[45vw] max-w-[600px] aspect-[3/4]"}`}
              style={isMobile ? {
                width: `${100 - scrollProgress * 35}vw`,
                height: `${100 - scrollProgress * 30}vh`,
              } : undefined}
            >
              <Image
                src="/mattpic2.png"
                alt="Mattheos Drivas"
                fill
                className="object-cover object-top rounded-sm"
                priority
                sizes="45vw"
                style={{
                  filter: `grayscale(${imageGrayscale})`,
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />

              {/* Signature overlays directly on the image */}
              <Signature progress={scrollProgress} mobile={isMobile} />
            </div>
          </div>

          {/* Clip-path cursor reveal layer — desktop only */}
          {!isMobile && (
            <div
              ref={revealRef}
              className="absolute inset-[-20px] z-30 pointer-events-none"
              style={{
                backgroundImage: "url(/mattpic2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                filter: "brightness(1.08) saturate(1.05)",
                clipPath: "ellipse(0px 0px at -200px -200px)",
              }}
            />
          )}

          {/* Name — top left on desktop, bottom left on mobile */}
          <div
            className={`absolute z-20 ${isMobile ? "bottom-20 left-6" : "top-12 left-12"}`}
            style={{
              transform: isMobile ? "none" : `translate(${px * 0.3}px, ${py * 0.3}px)`,
              opacity: nameOpacity,
            }}
          >
            <h1
              className={`${playfair.className} text-white leading-[0.9] tracking-tight`}
              style={{
                fontSize: isMobile ? "clamp(2.5rem, 12vw, 4rem)" : "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 400,
              }}
            >
              <span className="block">Mattheos</span>
              <span className="block italic text-white/70">Drivas</span>
            </h1>
          </div>

          {/* Stats trigger — desktop only */}
          <div
            className={`absolute bottom-8 right-8 z-40 ${isMobile ? "hidden" : ""}`}
            style={{ opacity: statsOpacity }}
            onMouseEnter={() => setShowStats(true)}
            onMouseLeave={() => setShowStats(false)}
          >
            {!showStats && (
              <motion.div
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:border-white/40 transition-colors backdrop-blur-sm"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-white/60"
                >
                  <rect x="3" y="12" width="4" height="9" rx="1" />
                  <rect x="10" y="7" width="4" height="14" rx="1" />
                  <rect x="17" y="3" width="4" height="18" rx="1" />
                </svg>
              </motion.div>
            )}
            <StatsBoard visible={showStats} />
          </div>

          {/* Scroll hint — fades out */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            style={{ opacity: nameOpacity }}
          >
            <motion.div
              className="text-white/20 text-xs tracking-[0.3em] uppercase"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              Scroll
            </motion.div>
          </div>
        </div>
        </div>

        {/* ─── Experience Section ───────────────────────────────────────── */}
        <div className="relative z-40 bg-black">
          <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-32">
            {/* Experience */}
            <div className="mb-16 md:mb-32">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white/30 text-xs tracking-[0.3em] uppercase mb-12 text-center"
              >
                Experience
              </motion.p>

              <div className="space-y-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2
                    className={`${playfair.className} text-white text-2xl sm:text-4xl md:text-5xl leading-tight whitespace-nowrap`}
                  >
                    SWE Intern{" "}
                    <span className="italic text-white/50">@ Commure</span>
                  </h2>
                  <p className="text-white/35 text-sm md:text-base mt-3 max-w-xl mx-auto">
                    FDA-approved medical device platform · 40+ clinical sites · Stripe integration processing 5-figure monthly orders
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h2
                    className={`${playfair.className} text-white text-2xl sm:text-4xl md:text-5xl leading-tight whitespace-nowrap`}
                  >
                    Founder{" "}
                    <span className="italic text-white/50">@ Speakeasy</span>
                  </h2>
                  <p className="text-white/35 text-sm md:text-base mt-3 max-w-xl mx-auto">
                    10K+ users · 3-figure MRR · Built from scratch in 4 months · Full-stack Next.js SaaS
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2
                    className={`${playfair.className} text-white text-2xl sm:text-4xl md:text-5xl leading-tight whitespace-nowrap`}
                  >
                    M.S. EECS{" "}
                    <span className="italic text-white/50">@ Chapman</span>
                  </h2>
                </motion.div>
              </div>

              {/* Languages & personality */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16 text-center max-w-2xl mx-auto"
              >
                <p className="text-white/45 text-base leading-relaxed mb-6">
                  I&apos;m passionate about building products that connect with a <span className="text-white/70 font-medium">global audience</span>. I run a <span className="text-white/70 font-medium">YouTube channel</span> about language learning with <span className="text-white/70 font-medium">1M+ views</span> and <span className="text-white/70 font-medium">12K subscribers</span>. Conversational in <span className="text-white/70 font-medium">6 languages</span>, currently working towards fluency in Mandarin
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-lg text-white/60">
                  <span>🇺🇸 English</span>
                  <span className="text-white/15">·</span>
                  <span>🇬🇷 Greek</span>
                  <span className="text-white/15">·</span>
                  <span>🇪🇸 Spanish</span>
                  <span className="text-white/15">·</span>
                  <span>🇭🇰 Cantonese</span>
                  <span className="text-white/15">·</span>
                  <span>🇧🇷 Portuguese</span>
                  <span className="text-white/15">·</span>
                  <span>🇨🇳 Mandarin</span>
                </div>
              </motion.div>
            </div>

            {/* ─── Projects Section ─────────────────────────────────────────── */}
            <div className="mb-16 md:mb-32">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white/30 text-xs tracking-[0.3em] uppercase mb-12 text-center"
              >
                Projects
              </motion.p>

              <div className="space-y-8 md:space-y-16">
                {/* Speakeasy — featured */}
                <motion.a
                  href="https://learnspeakeasy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="block group rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-[180px] md:h-[380px]">
                    <Image
                      src="/speakeasynew.png"
                      alt="Speakeasy"
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="100vw"
                    />
                  </div>
                  <div className="p-5 md:p-10 bg-white/[0.02]">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                      <span className="text-purple-400 text-xs tracking-[0.2em] uppercase font-medium">
                        Featured
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="text-white/40 text-xs">10K+ Users</span>
                      <span className="text-white/20">·</span>
                      <span className="text-white/40 text-xs">3-Figure MRR</span>
                      <span className="text-white/20">·</span>
                      <span className="text-white/40 text-xs">4 Months</span>
                    </div>
                    <h3 className={`${playfair.className} text-white text-3xl md:text-4xl mb-4`}>
                      Speakeasy
                    </h3>
                    <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-3xl">
                      <span className="text-white/70 font-medium">Founded and built</span> a full-stack language learning SaaS as a <span className="text-white/70 font-medium">solo developer</span>. Users learn from real <span className="text-white/70 font-medium">YouTube and Netflix</span> content through interactive <span className="text-white/70 font-medium">dual-language transcripts</span>, <span className="text-white/70 font-medium">AI-powered conversation partners</span>, and <span className="text-white/70 font-medium">spaced repetition</span> flashcards. Built a companion <span className="text-white/70 font-medium">Chrome extension</span> that enables client-side subtitle processing on any video.
                    </p>
                    <p className="text-white/55 text-base leading-relaxed max-w-3xl mt-3">
                      Tech stack: <span className="text-white/70 font-medium">Next.js 14, tRPC, PostgreSQL</span> with Drizzle ORM, <span className="text-white/70 font-medium">Stripe</span> subscriptions, <span className="text-white/70 font-medium">OpenAI API</span>, and <span className="text-white/70 font-medium">Google Cloud</span> TTS/translation. Scaled to <span className="text-white/70 font-medium">10,000+ users</span> and <span className="text-white/70 font-medium">3-figure MRR</span> in <span className="text-white/70 font-medium">4 months</span> with zero marketing budget.
                    </p>
                  </div>
                </motion.a>

                {/* Two-column grid for remaining projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  {[
                    {
                      title: "The Provider\u2019s Coach Project",
                      desc: "<b>Contracted</b> to develop a professional web application for a <b>healthcare nonprofit</b> offering free coaching to medical providers. Integrated <b>Calendly</b> for appointment scheduling, implemented responsive design and <b>SEO optimization</b>. Built with <b>Next.js, TypeScript, and Tailwind CSS</b>, deployed on <b>Vercel</b>.",
                      img: "/pcp.png",
                      link: "https://providerscoachproject.org",
                      tag: "Contract",
                    },
                    {
                      title: "Barkle",
                      desc: "Designed and built a <b>Wordle-inspired</b> daily dog breed guessing game from scratch. Features include <b>user authentication</b>, daily challenges, <b>community-submitted content</b>, and leaderboards. Grew to <b>300+ registered users</b> and <b>1,000+ total plays</b> through SEO and organic sharing.",
                      img: "/barkle.png",
                      link: "https://barkle.vercel.app",
                      tag: "Side Project",
                    },
                    {
                      title: "Braille Display for STEM Education",
                      desc: "Collaborated with a <b>team of 8</b> on a cost-effective <b>refreshable Braille display</b> to improve <b>STEM education</b> access for visually impaired students. Developed a <b>Chrome extension</b> that converts web images into <b>8\u00d78 binary matrices</b> for real-time rendering on the tactile device. Applied <b>image processing</b> techniques for accurate shape representation.",
                      img: "/research.png",
                      link: "https://etezad-lab.com/",
                      tag: "Research",
                    },
                    {
                      title: "Medical PPE Design & Distribution",
                      desc: "<b>Led</b> the design, <b>3D-printing</b>, and distribution of <b>900+ units</b> of medical PPE\u2014face shields, intubation boxes, and mask clips\u2014to <b>frontline healthcare workers</b> across California, New York, and Washington. Raised <b>$3,000</b> on GoFundMe to fund production. <b>Featured by Chapman University</b>.",
                      img: "/PPE.png",
                      link: "https://blogs.chapman.edu/community-relations/2020/06/02/students-faculty-3d-print-3000-face-shields-for-healthcare-workers/",
                      tag: "Impact",
                    },
                  ].map((project, i) => (
                    <motion.a
                      key={project.title}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      <div className="relative h-[140px] md:h-[200px] shrink-0">
                        <Image
                          src={project.img}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-4 md:p-6 bg-white/[0.02] flex-1">
                        <span className="text-purple-400/70 text-[10px] tracking-[0.2em] uppercase font-medium">
                          {project.tag}
                        </span>
                        <h3 className="text-white font-semibold text-lg md:text-xl mt-1.5 md:mt-2 mb-2 md:mb-3">
                          {project.title}
                        </h3>
                        <p
                          className="text-white/45 text-xs md:text-sm leading-relaxed [&_b]:text-white/70 [&_b]:font-medium"
                          dangerouslySetInnerHTML={{ __html: project.desc }}
                        />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── Resume Section ───────────────────────────────────────────── */}
            <div className="mb-32">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white/30 text-xs tracking-[0.3em] uppercase mb-12 text-center"
              >
                Resume
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <div className="rounded-xl border border-white/10 overflow-hidden bg-white">
                  <iframe
                    src="/MattheosDrivasResume.pdf#toolbar=0&navpanes=0&view=FitH"
                    className="w-full h-[500px] md:h-[850px] border-none"
                    title="Resume PDF"
                  />
                </div>

                <div className="text-center mt-8">
                  <a
                    href="/MattheosDrivasResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="MattheosDrivasResume.pdf"
                    className="group inline-flex items-center gap-3 px-8 py-4 border border-white/15 rounded-full text-white/70 text-sm tracking-[0.15em] uppercase hover:border-white/30 hover:text-white transition-all duration-300"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-white/40 group-hover:text-white/70 transition-colors"
                    >
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </motion.div>
            </div>

            {/* ─── Links / Footer ───────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-8 pb-16"
            >
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/mdrivas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/70 transition-colors"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mattheos-drivas-803188276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/70 transition-colors"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:drivas.matt@gmail.com"
                  className="text-white/30 hover:text-white/70 transition-colors"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                </a>
              </div>
              <p className="text-white/15 text-xs tracking-[0.2em] uppercase">
                Mattheos Drivas · 2025
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
