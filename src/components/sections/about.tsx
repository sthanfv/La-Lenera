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
                LISTA PARA ENTREGAR
              </div>
            </div>
          </Reveal>
          <Reveal className="w-full md:w-1/2" delay="200">
            <h2 className="brand-title text-3xl md:text-5xl text-white mb-6">El Aliado de tu Parrilla</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Sabemos que el éxito de tu negocio depende de un fuego que no falle. Por eso, entregamos leña seleccionada a los asaderos más exigentes de la región.
            </p>
            <ul className="space-y-4 mb-10 text-sm md:text-base">
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="text-accent w-5 h-5 flex-shrink-0" /> Entregas semanales sin falta</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="text-accent w-5 h-5 flex-shrink-0" /> Cortes precisos para tu tipo de parrilla</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="text-accent w-5 h-5 flex-shrink-0" /> Precios de mayorista para tu negocio</li>
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
