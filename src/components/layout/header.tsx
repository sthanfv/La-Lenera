import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageCircle, ChevronDown } from 'lucide-react';
import FireCanvas from '../fire-canvas';
import { Reveal } from '../reveal';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Header() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

    return (
        <header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            <FireCanvas />

            <div className="absolute inset-0 z-0 bg-black">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="w-full h-full object-cover opacity-30 grayscale"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/80"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <Reveal>
                    <div className="mb-8">
                        <div className="badge-stamp text-xs md:text-sm">
                            Leña que prende · Fuegos que venden
                        </div>
                    </div>
                </Reveal>

                <Reveal delay="100">
                    <h1 className="brand-title text-6xl md:text-9xl text-white mb-4 text-shadow-lg">
                        LA LEÑERA
                    </h1>
                </Reveal>

                <Reveal delay="200">
                    <p className="font-headline text-lg md:text-2xl text-gray-400 uppercase tracking-[0.4em] mb-12">
                        El secreto de un buen asado
                    </p>
                </Reveal>

                <Reveal delay="300">
                    <div className="max-w-xl mx-auto mb-12">
                        <p className="text-gray-300 text-lg font-light leading-relaxed">
                            Fuego constante, clientes felices. <br />
                            <span className="text-white font-medium uppercase text-sm tracking-widest mt-2 block">Olvídate del humo negro. Nuestra leña garantiza el calor justo para que tu carne sea la protagonista.</span>
                        </p>
                    </div>
                </Reveal>

                <Reveal delay="300">
                    <Button size="lg" variant="default" className="bg-accent hover:bg-accent/80 text-accent-foreground font-headline font-bold text-xl py-8 px-12 rounded shadow-[0_0_40px_hsl(var(--accent)/0.3)]" asChild>
                        <a href="https://wa.me/573001234567?text=Hola,%20escribo%20a%20La%20Leñera.%20Necesito%20cotizar%20leña%20para%20asadero.">
                            <MessageCircle className="w-6 h-6" />
                            PIDE TU LEÑA POR WHATSAPP
                        </a>
                    </Button>
                    <p className="text-[10px] text-gray-600 mt-6 tracking-widest uppercase">Atención inmediata a negocios</p>
                </Reveal>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 z-10">
                <ChevronDown className="text-white w-8 h-8" />
            </div>
        </header>
    );
}
