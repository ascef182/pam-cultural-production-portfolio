"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function BioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 bg-card relative overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, oklch(0.68 0.21 38 / 0.1) 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary text-sm tracking-[0.4em] uppercase mb-8 block font-medium">
              Sobre
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-snug text-foreground mb-12 text-balance">
              Especialista em{" "}
              <span className="text-primary">produção cultural</span> e
              <span className="text-primary"> tradução audiovisual</span> para
              festivais de cinema, teatro e circo.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-8 lg:gap-16"
          >
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Minha trajetória na produção cultural começou no Festival
                In-Edit Brasil, em Belo Horizonte, onde iniciei minha atuação em
                operação de legendas. Desde então, desenvolvi expertise técnica
                em tradução audiovisual, produção de legendas SRT e coordenação
                de equipes.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Durante quatro anos com a Casarini Produções, atuei em festivais
                de grande porte em todo o Brasil, assumindo responsabilidades de
                liderança, coordenação técnica e jogo de cintura.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                No Festival de Cinema de Brasília, assumi a produção de uma
                edição inteira. No Kinoforum, operei e produzi a legendagem de
                +50 curtas-metragens. No Mirada, trabalhei com produções
                ibero-americanas que exigem sensibilidade cultural e precisão
                técnica.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Minha atuação abrange desde trabalho técnico de marcação de
                legendas, sincronização de timecode, revisão e adequação aos
                padrões técnicos. E também com a produção de eventos cultuais.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                "In-Edit Brasil",
                "Festival de Cinema de Brasília",
                "Kinoforum",
                "Mostra de SP",
                "Festival do Rio",
                "MIT",
                "Mirada",
                "Farofa",
                "Festival de Circo",
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
