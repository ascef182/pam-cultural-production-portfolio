"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      ref={ref}
      className="py-24 lg:py-40 bg-card relative overflow-hidden"
    >
      {/* Glowing accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-16 text-balance">
            <span className="text-primary">" </span>

            <span className="text-muted-foreground">
              Cada legenda, uma ponte entre culturas.
            </span>
            <span className="text-primary"> "</span>
          </blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="h-px w-24 bg-primary/50 mx-auto" />

            <div className="space-y-2">
              <h3 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground">
                Pâm Ascef Cazarini
              </h3>
              <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
                Produtora Cultural & Tradutora Audiovisual
              </p>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a
                href="mailto:support@caza-tech.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider"
              >
                support@caza-tech.com
              </a>
              <span className="hidden sm:block text-border">|</span>
              <span className="text-muted-foreground tracking-wider">
                São Paulo, Brasil
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground/60 text-xs tracking-wider">
            © 2026 Pâm Ascef Cazarini. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
