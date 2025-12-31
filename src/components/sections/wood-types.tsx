import type { WoodType } from '@/types';
import { Reveal } from '../reveal';
import { WoodCard } from '../wood-card';

const woodData: WoodType[] = [
  {
    id: 'roble',
    name: 'Roble',
    image: 'wood-oak',
    characteristics: 'Larga duración, brasa consistente, alto poder calorífico, aroma suave y ahumado.',
    description: 'El estándar de la industria. Ideal para cocciones largas y para mantener una temperatura estable en tu parrilla o ahumador.'
  },
  {
    id: 'mezquite',
    name: 'Mezquite',
    image: 'wood-mesquite',
    characteristics: 'Sabor ahumado intenso y distintivo, quema caliente y rápido.',
    description: 'Perfecto para carnes rojas y de caza. Aporta un sabor robusto y característico del suroeste, transformando cada asado.'
  },
  {
    id: 'manzano',
    name: 'Manzano',
    image: 'wood-apple',
    characteristics: 'Aroma dulce y afrutado, humo suave, ideal para aves y cerdo.',
    description: 'La elección gourmet. Infusiona tus platos con un delicado sabor dulce, perfecto para cerdo, pollo y pescados.'
  },
];

export default function WoodTypes() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <h2 className="brand-title text-3xl md:text-5xl text-white">Nuestras Leñas</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Cada leña tiene su carácter. Usa la inteligencia artificial para descubrir cuál se adapta mejor a tu cocina.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {woodData.map((wood, index) => (
            <Reveal key={wood.id} delay={String(100 * (index % 3)) as any}>
              <WoodCard wood={wood} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
