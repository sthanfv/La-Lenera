import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { WoodType } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WoodDescriptionGenerator from './wood-description-generator';

type WoodCardProps = {
  wood: WoodType;
};

export function WoodCard({ wood }: WoodCardProps) {
  const image = PlaceHolderImages.find(img => img.id === wood.image);

  return (
    <Card className="bg-background border-white/10 overflow-hidden h-full flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-white uppercase tracking-wider">{wood.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-grow">
        {image && (
          <div className="relative aspect-[3/2] w-full">
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover rounded"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
        <p className="text-gray-400 text-sm flex-grow">{wood.description}</p>
        <div className="mt-auto">
            <WoodDescriptionGenerator
              woodType={wood.name}
              burningCharacteristics={wood.characteristics}
            />
        </div>
      </CardContent>
    </Card>
  );
}
