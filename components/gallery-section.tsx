"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/fotos/IMG_E5411.JPG",
    alt: "Bastidores de festival de cinema",
    category: "Cinema",
  },
  {
    src: "/fotos/IMG_E5412.JPG",
    alt: "Equipe de produção em ação",
    category: "Produção",
  },
  {
    src: "/fotos/IMG_E5413.JPG",
    alt: "Cabine de legendagem em festival",
    category: "Legendagem",
  },
  {
    src: "/fotos/IMG_E5414.JPG",
    alt: "Sessão de cinema com legendas",
    category: "Festival",
  },
  {
    src: "/fotos/IMG_E5415.JPG",
    alt: "Coordenação de equipe técnica",
    category: "Produção",
  },
  {
    src: "/fotos/IMG_E5417.JPG",
    alt: "Preparação de evento cultural",
    category: "Teatro",
  },
  {
    src: "/fotos/IMG_E5418.JPG",
    alt: "Festival de cinema ao vivo",
    category: "Cinema",
  },
  {
    src: "/fotos/IMG_E5419.JPG",
    alt: "Trabalho de tradução audiovisual",
    category: "Legendagem",
  },
  {
    src: "/fotos/IMG_E5420.JPG",
    alt: "Operação de legendas em tempo real",
    category: "Festival",
  },
  {
    src: "/fotos/IMG_E5421.JPG",
    alt: "Bastidores de festival de teatro",
    category: "Teatro",
  },
  {
    src: "/fotos/IMG_E5422.JPG",
    alt: "Produção cultural em andamento",
    category: "Produção",
  },
  {
    src: "/fotos/IMG_E5423.JPG",
    alt: "Sessão especial de cinema",
    category: "Cinema",
  },
  {
    src: "/fotos/IMG_E5424.JPG",
    alt: "Evento de artes cênicas",
    category: "Teatro",
  },
  {
    src: "/fotos/IMG_E5425.JPG",
    alt: "Coordenação de legendagem",
    category: "Legendagem",
  },
  {
    src: "/fotos/IMG_E5426.JPG",
    alt: "Festival de curtas-metragens",
    category: "Cinema",
  },
  {
    src: "/fotos/IMG_E5427.JPG",
    alt: "Produção de evento cultural",
    category: "Festival",
  },
  {
    src: "/fotos/IMG_E5429.JPG",
    alt: "Bastidores de mostra de cinema",
    category: "Cinema",
  },
  {
    src: "/fotos/IMG_E5430.JPG",
    alt: "Equipe de festival de teatro",
    category: "Teatro",
  },
  {
    src: "/fotos/IMG_E5431.JPG",
    alt: "Operação técnica de legendas",
    category: "Legendagem",
  },
  {
    src: "/fotos/IMG_E5433.JPG",
    alt: "Festival de circo contemporâneo",
    category: "Circo",
  },
  {
    src: "/fotos/IMG_E5434.JPG",
    alt: "Peração de legenda",
    category: "Cinemateca",
  },
  {
    src: "/fotos/IMG_E5435.JPG",
    alt: "Sessão de cinema documental",
    category: "Cinema",
  },
  {
    src: "/fotos/IMG_E5436.JPG",
    alt: "Coordenação de festival",
    category: "Festival",
  },
  {
    src: "/fotos/IMG_E5437.JPG",
    alt: "Bastidores de produção cultural",
    category: "Produção",
  },
  {
    src: "/fotos/WhatsApp Image 2026-01-23 at 23.30.41.jpeg",
    alt: "Momento especial em festival",
    category: "Festival",
  },
  {
    src: "/fotos/WhatsApp Image 2026-01-23 at 23.32.07.jpeg",
    alt: "Equipe de produção reunida",
    category: "Produção",
  },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1,
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1,
      );
    }
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-primary text-sm tracking-[0.4em] uppercase mb-4 block font-medium">
              Galeria
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
              Registros de quatro anos de atuação
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg">
            Bastidores, festivais e momentos marcantes da produção cultural e
            legendagem.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              className="break-inside-avoid group cursor-pointer relative"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl p-0 bg-background border-border" showCloseButton={false}>
          <DialogTitle className="sr-only">Visualização de imagem da galeria</DialogTitle>
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {selectedImage !== null && (
            <div className="relative">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">
                  {galleryImages[selectedImage].category}
                </span>
                <p className="text-foreground text-lg mt-1">
                  {galleryImages[selectedImage].alt}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
