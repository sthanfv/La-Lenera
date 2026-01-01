import { Flame, Box, Truck } from 'lucide-react';
import { Reveal } from '../reveal';

const features = [
  {
    icon: <Flame className="text-accent w-8 h-8 mx-auto" />,
    title: 'Prende a la Primera',
    description: 'Nuestra leña está seca y lista. Sin humo molesto, solo el calor que tu parrilla necesita.',
  },
  {
    icon: <Box className="text-accent w-8 h-8 mx-auto" />,
    title: 'Carga Completa',
    description: 'Recibes exactamente lo que compras. Sin trucos en el volumen ni sorpresas en la descarga.',
  },
  {
    icon: <Truck className="text-accent w-8 h-8 mx-auto" />,
    title: 'Puntualidad de Hierro',
    description: 'Entendemos tu negocio. Si necesitas la leña hoy, te llega hoy. Sin excusas.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4">
        <Reveal className="text-center">
          <h2 className="brand-title text-2xl md:text-4xl text-white mb-10">¿Por qué los mejores asaderos nos eligen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                {feature.icon}
                <h3 className="font-headline text-xl text-white uppercase tracking-wider">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
