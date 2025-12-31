import Header from '@/components/layout/header';
import Features from '@/components/sections/features';
import About from '@/components/sections/about';
import WoodTypes from '@/components/sections/wood-types';
import BbqGallery from '@/components/sections/bbq-gallery';
import Footer from '@/components/layout/footer';
import MobileCta from '@/components/layout/mobile-cta';

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Features />
        <WoodTypes />
        <About />
        <BbqGallery />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
