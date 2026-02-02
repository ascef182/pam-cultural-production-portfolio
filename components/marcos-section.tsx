"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const marcos = [
  {
    category: "2022–2026",
    title: "Casarini Produções",
    description:
      "Produtora com atuação continuada em grandes circuitos culturais brasileiros, articulando cinema, teatro e circo por meio de projetos de alcance nacional.",
  },
  {
    category: "Cinema",
    title: "Festival de Cinema de Brasília",
    description:
      "Festival histórico do cinema brasileiro realizado na capital do país, dedicado à exibição, debate e preservação da produção audiovisual nacional.",
  },
  {
    category: "Cinema",
    title: "In-Edit Brasil",
    description:
      "Festival internacional de documentários musicais, que conecta cinema e música em mostras realizadas em Belo Horizonte e São Paulo.",
  },
  {
    category: "Cinema",
    title: "Kinoforum",
    description:
      "Festival Internacional de Curtas-Metragens de São Paulo, voltado à experimentação, novas linguagens e circulação de cinema independente.",
  },
  {
    category: "Cinema",
    title: "Mostra Internacional de Cinema de SP",
    description:
      "Uma das maiores mostras de cinema da América Latina, apresentando filmes contemporâneos e clássicos de todo o mundo ao público paulistano.",
  },
  {
    category: "Cinema",
    title: "Festival do Rio",
    description:
      "Principal festival de cinema do Rio de Janeiro, que reúne estreias internacionais, produção brasileira e formação de público.",
  },
  {
    category: "Teatro",
    title: "MIT — Mostra Internacional de Teatro",
    description:
      "Mostra que traz ao Brasil companhias e criações cênicas inovadoras de diferentes países, expandindo o repertório do teatro contemporâneo.",
  },
  {
    category: "Teatro",
    title: "Mirada",
    description:
      "Festival Ibero-Americano de Artes Cênicas de Santos, dedicado ao diálogo entre teatros da América Latina, Espanha e Portugal.",
  },
  {
    category: "Circo",
    title: "Festival de Circo",
    description:
      "Encontro voltado ao circo contemporâneo, reunindo espetáculos, residências artísticas e intercâmbio entre companhias.",
  },
  {
    category: "Teatro",
    title: "Farofa",
    description:
      "Festival cultural de São Paulo que mistura artes cênicas, performance, música e linguagens híbridas em espaços urbanos.",
  },
  {
    category: "Técnico",
    title: "Tradução Audiovisual",
    description:
      "Campo profissional que envolve adaptação linguística, sincronização e preparação de legendas para cinema, teatro e vídeo.",
  },
  {
    category: "Gestão",
    title: "Coordenação de Técnica",
    description:
      "Atuação estratégica na articulação de times técnicos em eventos culturais, conectando criação, produção e operação.",
  },
];

export function MarcosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-secondary relative overflow-hidden"
    >
      {/* Grid accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.68 0.21 38 / 0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <span className="text-primary text-sm tracking-[0.4em] uppercase mb-4 block font-medium">
            Experiência
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Principais projetos e festivais
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {marcos.map((marco, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="bg-card p-8 lg:p-10 group hover:bg-muted transition-colors duration-300 relative"
            >
              {/* Hover accent line */}
              <div className="absolute top-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />

              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block font-medium">
                {marco.category}
              </span>
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {marco.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {marco.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
