import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 text-xs border-t border-neutral-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Info Corporativa */}
        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#D4AF37]">
            Joyería y Presentes El Brillante
          </h3>
          <p className="leading-relaxed">
            Especialistas en joyas finas de oro y plata, medallas de honor, trofeos deportivos y placas recordatorias para instituciones y eventos especiales en Puno.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="space-y-2">
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-3">
            Navegación
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#D4AF37] transition">Inicio</Link>
            </li>
            <li>
              <Link href="/catalogo" className="hover:text-[#D4AF37] transition">Catálogo Completo</Link>
            </li>
            <li>
              <Link href="/trofeos-y-reconocimientos" className="hover:text-[#D4AF37] transition">
                Atención Institucional B2B
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto & Ubicación */}
        <div className="space-y-2">
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-3">
            Atención al Cliente
          </h4>
          <p>📍 Jr. Arequipa 729, Puno, Perú</p>
          <p>📞 WhatsApp: +51 955 338 403</p>
          <p>⏰ Lunes a Sábado: 9:00 AM - 7:30 PM</p>
        </div>

      </div>

      <div className="border-t border-neutral-800 text-center py-6 text-neutral-500">
        <p>© {new Date().getFullYear()} Joyería y Presentes El Brillante. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}