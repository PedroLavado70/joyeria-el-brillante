'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAF7F2] border-b border-[#EAE0D5] sticky top-0 z-50">
      {/* Topbar delgada */}
      <div className="bg-[#654321] text-[#FAF7F2] text-[11px] py-1.5 px-4 flex justify-between items-center font-light">
        <span>📍 Jr. Arequipa N° 729 - Puno, Perú</span>
        <span className="hidden sm:inline">📦 Envíos a todo el Perú</span>
        <span>📞 +51 955 338 403</span>
      </div>

      {/* Navbar Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo El Brillante */}
          <Link href="/" className="flex flex-col items-start">
            <span className="font-serif text-2xl font-bold tracking-wider text-[#654321]">
              EL BRILLANTE
            </span>
            <span className="text-[9px] tracking-[0.3em] text-[#8B5A2B] font-semibold uppercase">
              Joyas • Presentes • Trofeos • Puno
            </span>
          </Link>

          {/* Menú Horizontal */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold uppercase tracking-wider text-[#3D2516]">
            <Link href="/" className="hover:text-[#8B5A2B] transition">Inicio</Link>
            <Link href="/catalogo" className="hover:text-[#8B5A2B] transition">Joyas</Link>
            <Link href="/trofeos-y-reconocimientos" className="hover:text-[#8B5A2B] transition">Trofeos & Reconocimientos</Link>
            <Link href="/catalogo" className="hover:text-[#8B5A2B] transition">Presentes</Link>
          </nav>

          {/* Botones de acción */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/51955338403"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-[#654321] hover:bg-[#3D2516] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition shadow-sm"
            >
              Consultar por WhatsApp
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#654321] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F5EFE6] border-b border-[#EAE0D5] px-4 py-4 space-y-3">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-sm font-semibold text-[#3D2516]">Inicio</Link>
          <Link href="/catalogo" onClick={() => setIsMenuOpen(false)} className="block text-sm font-semibold text-[#3D2516]">Joyas</Link>
          <Link href="/trofeos-y-reconocimientos" onClick={() => setIsMenuOpen(false)} className="block text-sm font-semibold text-[#8B5A2B]">Trofeos y Reconocimientos</Link>
          <a
            href="https://wa.me/51955338403"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#654321] text-white text-xs font-semibold py-3 rounded-lg mt-2"
          >
            Contacto WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}