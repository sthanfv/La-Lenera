import Header from '@/components/layout/header';
import ContactForm from '@/components/sections/contact-form';
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
        <ContactForm />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
