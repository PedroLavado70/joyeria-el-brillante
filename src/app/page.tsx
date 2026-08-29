import HeroSection from '@/components/HeroSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 py-12 text-center space-y-6">
        <h2 className="text-2xl font-serif font-bold text-neutral-800">
          Bienvenido a Joyería y Presentes El Brillante
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto">
          Explora nuestro catálogo completo de joyas en oro 18k, plata, trofeos y reconocimientos institucionales.
        </p>
        <div>
          <Link
            href="/catalogo"
            className="inline-block bg-[#D4AF37] hover:bg-[#C59B27] text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Ver Catálogo General
          </Link>
        </div>
      </div>
    </main>
  );
}