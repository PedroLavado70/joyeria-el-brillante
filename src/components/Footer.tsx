import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#3D2516] text-[#FAF7F2] text-xs mt-20 border-t-4 border-[#8B5A2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Marca */}
        <div className="space-y-3 md:col-span-1">
          <h3 className="font-serif text-xl font-bold text-[#F5EFE6] tracking-wider">
            EL BRILLANTE
          </h3>
          <p className="text-neutral-300 leading-relaxed text-[11px]">
            Tu mejor elección en joyas de oro y plata, trofeos, presentes institucionales y grabado personalizado en Puno.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h4 className="font-semibold text-[#F5EFE6] uppercase text-xs tracking-widest mb-4">Categorías</h4>
          <ul className="space-y-2 text-neutral-300">
            <li><Link href="/catalogo" className="hover:text-white transition">Joyas de Oro 18K</Link></li>
            <li><Link href="/catalogo" className="hover:text-white transition">Joyas de Plata 925</Link></li>
            <li><Link href="/trofeos-y-reconocimientos" className="hover:text-white transition">Trofeos y Copas</Link></li>
            <li><Link href="/trofeos-y-reconocimientos" className="hover:text-white transition">Placas y Reconocimientos</Link></li>
          </ul>
        </div>

        {/* Información */}
        <div>
          <h4 className="font-semibold text-[#F5EFE6] uppercase text-xs tracking-widest mb-4">Información</h4>
          <ul className="space-y-2 text-neutral-300">
            <li><Link href="/" className="hover:text-white transition">Nosotros</Link></li>
            <li><Link href="/trofeos-y-reconocimientos" className="hover:text-white transition">Atención Institucional B2B</Link></li>
            <li><a href="https://wa.me/51955338403" target="_blank" rel="noreferrer" className="hover:text-white transition">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold text-[#F5EFE6] uppercase text-xs tracking-widest mb-4">Contáctanos</h4>
          <div className="space-y-2 text-neutral-300 text-[11px]">
            <p>📍 Jr. Arequipa N° 729, Puno, Perú</p>
            <p>📞 +51 955 338 403</p>
            <p>⏰ Lun - Sáb: 9:00 AM - 7:00 PM</p>
            <p>⏰ Dom: 10:00 AM - 1:00 PM</p>
          </div>
        </div>

      </div>

      <div className="border-t border-[#654321] text-center py-6 text-neutral-400 text-[11px]">
        <p>© {new Date().getFullYear()} Joyería El Brillante - Puno. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}