import Link from 'next/link';
import { buildWhatsAppLink } from '@/lib/utils';

export default function HeroSection() {
  const defaultWhatsAppMsg = buildWhatsAppLink(
    "Hola, JOYERÍA EL BRILLANTE. Encontré su página web y quisiera realizar una consulta."
  );

  return (
    <section className="relative bg-neutral-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="relative max-w-5xl mx-auto text-center space-y-6">
        <span className="inline-block uppercase tracking-widest text-xs sm:text-sm font-semibold text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full">
          Puno, Perú • Alta Joyería & Reconocimientos
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-balance leading-tight">
          Detalles que brillan.<br />
          <span className="text-[#D4AF37]">Recuerdos que permanecen.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-neutral-300 text-base sm:text-lg">
          Joyas de oro 18K y plata, trofeos, medallas, presentes de cristal y placas recordatorias personalizadas en Puno.
        </p>
        
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/catalogo"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] hover:bg-[#b8952b] text-neutral-950 font-semibold rounded-md transition shadow-lg shadow-[#D4AF37]/20"
          >
            VER CATÁLOGO
          </Link>
          <a
            href={defaultWhatsAppMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition flex items-center justify-center gap-2"
          >
            CONSULTAR POR WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}