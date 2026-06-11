import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroCar from "@/assets/hero-fortuner.jpg";

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end start"] });
  const carOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const carScale  = useTransform(scrollYProgress, [0, 0.9], [1, 0.88]);
  const carY      = useTransform(scrollYProgress, [0, 1], [0, 60]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth)  * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      ref={wrapRef}
      className="relative h-screen min-h-[700px] w-full overflow-hidden grain"
      style={{ background: "linear-gradient(150deg, #0d2240 0%, #1a3a5c 45%, #2a5298 100%)" }}
    >
      {/* Subtle light particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/40"
            style={{
              width:  Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left:   Math.random() * 100 + "%",
              top:    Math.random() * 100 + "%",
              animation: `float-dust ${4 + Math.random() * 6}s ease-in-out ${Math.random() * 4}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-navy pointer-events-none" />
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at right center, rgba(42,82,152,0.45), transparent 60%)" }}
      />

      {/* Hero car */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{ opacity: carOpacity, scale: carScale, y: carY }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          style={{
            transform: `perspective(1200px) rotateY(${mouse.x * 5}deg) rotateX(${-mouse.y * 2.5}deg)`,
            transition: "transform 0.4s ease-out",
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <img
            src={heroCar}
            alt="Toyota Fortuner luxury SUV — Sai Ram Car Travels premium fleet"
            width={1920}
            height={1280}
            className="w-full h-full object-cover object-center select-none pointer-events-none"
            style={{ filter: "drop-shadow(0 30px 60px rgba(13,34,64,0.6))" }}
            draggable={false}
          />
        </motion.div>
      </motion.div>

      {/* Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d2240]/70 via-transparent to-[#0d2240]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2240]/85 via-transparent to-[#0d2240]/30 pointer-events-none" />

      {/* Text overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between max-w-7xl mx-auto px-5 pt-28 pb-10 pointer-events-none">
        <div className="pointer-events-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/10 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/90">
              ★ 5.0 Rated · Open 24 Hours · Pithapuram
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="font-display font-black mt-6 leading-[0.92]"
            style={{ fontSize: "clamp(44px, 9vw, 110px)" }}
          >
            <span className="block text-white drop-shadow-lg">SAI RAM</span>
            <span className="block gold-text-gradient">CAR TRAVELS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="font-accent italic text-lg md:text-2xl mt-4 text-white/80"
          >
            Premium Car Rentals & Cab Service in Pithapuram, Kakinada & surrounding areas. The best travels near you, available 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#booking"
              className="shimmer clip-parallelogram gold-gradient text-white font-bold uppercase tracking-widest px-8 py-4 text-sm gold-glow"
            >
              Book Your Ride
            </a>
            <a
              href="#fleet"
              className="clip-parallelogram border-2 border-white/50 text-white font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-white hover:text-navy transition-colors bg-white/10 backdrop-blur-sm"
            >
              Explore Fleet
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="pointer-events-auto flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 border-t border-white/15 pt-5 bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-5"
        >
          {[
            ["5.0★", "Google Rating"],
            ["500+", "Happy Customers"],
            ["24/7", "Available"],
            ["4",    "Vehicle Types"],
          ].map(([num, label], i, arr) => (
            <div key={label} className="flex items-center gap-6">
              <div className="text-center md:text-left">
                <div className="font-display text-2xl md:text-3xl text-gold">{num}</div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/60 mt-1">
                  {label}
                </div>
              </div>
              {i < arr.length - 1 && <span className="hidden md:block w-px h-10 bg-white/20" />}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] tracking-[0.4em] text-white/50">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent scroll-bounce" />
      </div>
    </section>
  );
}
