'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-900 text-white sticky top-0 z-50 border-b border-neutral-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Branding / Logotipo */}
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#D4AF37]">
              Joyería y Presentes
            </span>
            <span className="text-[10px] tracking-[0.25em] font-light text-neutral-300 uppercase">
              El Brillante • Puno
            </span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              Inicio
            </Link>
            <Link href="/catalogo" className="hover:text-[#D4AF37] transition-colors">
              Catálogo General
            </Link>
            <Link 
              href="/trofeos-y-reconocimientos" 
              className="text-[#D4AF37] hover:text-[#C59B27] font-semibold transition-colors"
            >
              🏆 Trofeos & Reconocimientos
            </Link>
          </nav>

          {/* Botón CTA de Contacto */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/51955338403"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] hover:bg-[#C59B27] text-neutral-900 font-semibold text-xs px-4 py-2.5 rounded-lg transition shadow-sm"
            >
              Contactar Asesor
            </a>
          </div>

          {/* Menú Móvil (Hamburguesa) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Abrir Menú"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block text-sm font-medium hover:text-[#D4AF37] py-2"
          >
            Inicio
          </Link>
          <Link
            href="/catalogo"
            onClick={() => setIsMenuOpen(false)}
            className="block text-sm font-medium hover:text-[#D4AF37] py-2"
          >
            Catálogo General
          </Link>
          <Link
            href="/trofeos-y-reconocimientos"
            onClick={() => setIsMenuOpen(false)}
            className="block text-sm font-semibold text-[#D4AF37] py-2"
          >
            🏆 Trofeos & Reconocimientos
          </Link>
          <a
            href="https://wa.me/51955338403"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#D4AF37] text-neutral-900 font-semibold text-xs py-3 rounded-lg mt-4"
          >
            Contactar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}