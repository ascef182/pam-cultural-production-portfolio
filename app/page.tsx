import { HeroSection } from "@/components/hero-section"
import { BioSection } from "@/components/bio-section"
import { GallerySection } from "@/components/gallery-section"
import { MarcosSection } from "@/components/marcos-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BioSection />
      <GallerySection />
      <MarcosSection />
      <FooterSection />
    </main>
  )
}
