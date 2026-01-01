import type { WoodType } from '@/types';
import { Reveal } from '../reveal';
import { WoodCard } from '../wood-card';

const woodData: WoodType[] = [
  {
    id: 'roble',
    name: 'Roble',
    image: 'wood-oak',
    characteristics: 'Brasa eterna, calor potente, aroma ahumado tradicional.',
    description: 'La preferida de los asaderos profesionales. Garantiza una temperatura estable para que tus cortes salgan perfectos, siempre.'
  },
  {
    id: 'mezquite',
    name: 'Mezquite',
    image: 'wood-mesquite',
    characteristics: 'Sabor intenso y rústico, quema con fuerza.',
    description: 'Para quienes buscan ese sabor a leña inconfundible. Convierte cada asado en una experiencia única y potente.'
  },
  {
    id: 'manzano',
    name: 'Manzano',
    image: 'wood-apple',
    characteristics: 'Color dorado, aroma dulce, humo delicado.',
    description: 'La joya de la corona. Ideal para resaltar el sabor de carnes blancas y pescados con un toque gourmet irresistible.'
  },
];

export default function WoodTypes() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <h2 className="brand-title text-3xl md:text-5xl text-white">Nuestras Leñas</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Seleccionamos cada trozo para que tu único trabajo sea disfrutar de las brasas.</p>
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
