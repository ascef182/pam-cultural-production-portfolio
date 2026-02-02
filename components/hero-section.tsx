"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-32 md:pt-0 md:pb-0">
      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, oklch(0.68 0.21 38 / 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, oklch(0.68 0.21 38 / 0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing orb accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-shrink-0 order-first lg:order-last"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] scale-110" />

              {/* Photo container with border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
                <Image
                  src="/fotos/PâmAscef.jpeg"
                  alt="Pâm Ascef Cazarini - Produtora Cultural e Tradutora Audiovisual"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>

              {/* Decorative ring */}
              <motion.div
                className="absolute -inset-3 border border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <span className="text-primary text-sm tracking-[0.4em] uppercase font-medium">
                Produtora Cultural & Tradutora Audiovisual
              </span>
            </motion.div>

            {/* Main Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-balance"
            >
              <span className="block font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-foreground leading-[0.9]">
                Pâm Ascef
              </span>
              <span className="block font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-primary leading-[0.9] mt-2">
                Cazarini
              </span>
            </motion.h1>

            {/* Professional tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-12 max-w-2xl text-xl md:text-2xl text-muted-foreground leading-relaxed font-light"
            >
              Quatro anos de experiência em produção cultural e tradução
              audiovisual, atuando nos principais festivais de cinema e teatro
              do Brasil.
            </motion.p>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-16 flex flex-wrap items-center gap-4"
            >
              {["Cinema", "Teatro", "Circo", "Legendagem"].map(
                (item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    className="px-4 py-2 border border-border text-sm text-muted-foreground tracking-wider uppercase hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </motion.span>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile to avoid overlap with categories */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
