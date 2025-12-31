import { MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <span className="brand-title text-2xl text-white block mb-4">LA LEÑERA</span>
          <p className="text-gray-600 text-sm max-w-xs">Proveedor rudo de leña seleccionada. Sin vueltas, solo fuego que responde.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline text-white uppercase tracking-widest text-sm">Operación Local</h4>
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Entrega en Medellín y alrededores</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span>Atención Lunes a Sábado: 7:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] text-neutral-800 uppercase tracking-widest">© 2024 LA LEÑERA | Leña de verdad para negocios de verdad</p>
      </div>
    </footer>
  );
}
