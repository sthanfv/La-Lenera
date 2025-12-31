import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'LA LEÑERA | Leña para Asaderos y Parrillas',
  description: 'LA LEÑERA: Proveedor líder de leña seleccionada para asaderos y restaurantes. Fuego parejo, alto rendimiento y entrega inmediata.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#050505" />
        <link rel="canonical" href="https://lalenera.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Oswald:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
