import Image from 'next/image';
import { Reveal } from '../reveal';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-storage');

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <Reveal className="w-full md:w-1/2">
            <div className="relative">
              {aboutImage && (
                <Image 
                  src={aboutImage.imageUrl} 
                  alt={aboutImage.description}
                  width={800}
                  height={600}
                  className="rounded border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 w-full"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
              <div className="absolute -bottom-4 -right-4 bg-accent p-4 text-accent-foreground font-headline font-bold shadow-xl">
                STOCK DISPONIBLE
              </div>
            </div>
          </Reveal>
          <Reveal className="w-full md:w-1/2" delay="200">
            <h2 className="brand-title text-3xl md:text-5xl text-white mb-6">Confianza Local</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Proveemos leña de forma constante a negocios de la zona que trabajan con fuego todos los días. No somos una landing genérica, somos <span className="text-white font-bold">LA LEÑERA</span>.
            </p>
            <ul className="space-y-4 mb-10 text-sm md:text-base">
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="text-accent w-5 h-5 flex-shrink-0" /> Abastecimiento semanal programado</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="text-accent w-5 h-5 flex-shrink-0" /> Leña cortada a medida para tu parrilla</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="text-accent w-5 h-5 flex-shrink-0" /> Precios especiales para volumen B2B</li>
            </ul>
            <a href="tel:+573001234567" className="text-accent font-headline font-bold text-xl border-b-2 border-accent pb-1 hover:text-accent/80 transition-colors">
              LLAMAR AHORA: +57 300 123 4567
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
