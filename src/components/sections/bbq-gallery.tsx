import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Reveal } from '../reveal';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  { id: 'gallery-1' },
  { id: 'gallery-2' },
  { id: 'gallery-3' },
  { id: 'gallery-4' },
];

export default function BbqGallery() {
  return (
    <section className="py-24 bg-background border-y border-white/5">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <h2 className="brand-title text-3xl md:text-5xl text-white">Galería de Asados</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">El resultado de un buen fuego. Asados de nuestros clientes que confían en La Leñera.</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((item, index) => {
            const image = PlaceHolderImages.find(img => img.id === item.id);
            if (!image) return null;

            return (
              <Reveal key={item.id} delay={String(100 * (index % 4)) as any}>
                <Card className="overflow-hidden border-white/10 group">
                    <CardContent className="p-0">
                        <div className="relative aspect-square">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                data-ai-hint={image.imageHint}
                            />
                        </div>
                    </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
