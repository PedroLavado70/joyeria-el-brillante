'use client';

import { useState, use } from 'react';
import Link from 'next/link';
//import Image from 'next/image';
import { MOCK_PRODUCTS } from '@/data/mockProducts';
import { buildWhatsAppUrl } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ sku: string }>;
}

export default function ProductoDetallePage({ params }: Props) {
  // Desenvolver parámetros dinámicos de Next.js
  const resolvedParams = use(params);
  const { sku } = resolvedParams;

  // Buscar producto por SKU en la base de datos
  const product = MOCK_PRODUCTS.find(
    (item) => item.sku.toLowerCase() === sku.toLowerCase()
  );

  const [selectedImage, setSelectedImage] = useState(0);
  const [customText, setCustomText] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFA]">
        <Header />
        <div className="text-center py-20 px-4">
          <h1 className="text-2xl font-serif font-bold text-neutral-800">
            Producto no encontrado
          </h1>
          <p className="text-neutral-600 mt-2 mb-6">
            El código SKU <span className="font-mono text-[#D4AF37]">{sku}</span> no existe o fue descontinuado.
          </p>
          <Link
            href="/catalogo"
            className="inline-block bg-[#D4AF37] hover:bg-[#C59B27] text-white font-medium px-6 py-2.5 rounded-lg transition"
          >
            Volver al Catálogo
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Generación de mensaje personalizado a WhatsApp
  const whatsappMessage = `Hola Joyería El Brillante, deseo información/cotización sobre el producto:\n\n` +
    `*Producto:* ${product.name}\n` +
    `*SKU:* ${product.sku}\n` +
    `*Cantidad:* ${quantity}\n` +
    (customText ? `*Texto para Grabado:* "${customText}"\n` : '') +
    `*Enlace:* https://joyeria-el-brillante.vercel.app/producto/${product.sku}`;

  const whatsappUrl = buildWhatsAppUrl('+51955338403', whatsappMessage);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFA]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumbs */}
        <nav className="text-xs text-neutral-500 mb-6 flex items-center space-x-2">
          <Link href="/" className="hover:text-[#D4AF37]">Inicio</Link>
          <span>/</span>
          <Link href="/catalogo" className="hover:text-[#D4AF37]">Catálogo</Link>
          <span>/</span>
          <span className="text-neutral-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-6 sm:p-10 rounded-2xl border border-neutral-200 shadow-sm">
          
          {/* Galería de Imágenes */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
              <img
                src={product.images[selectedImage] || 'https://via.placeholder.com/600x600?text=Joyer%C3%ADa+El+Brillante'}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#D4AF37] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Miniaturas si existen más de una */}
            {product.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === index ? 'border-[#D4AF37]' : 'border-neutral-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información y Formulario de Cotización */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-widest">
                  SKU: {product.sku}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-[#C59B27] rounded-md border border-amber-200">
                  {product.subcategory}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 leading-tight">
                {product.name}
              </h1>

              {/* Precio o Cotización */}
              <div className="py-2 border-y border-neutral-100 flex items-baseline space-x-3">
                {product.showPrice && product.price ? (
                  <span className="text-3xl font-bold text-neutral-900">
                    S/ {product.price.toFixed(2)}
                  </span>
                ) : (
                  <span className="text-lg font-medium text-[#C59B27]">
                    Cotización a pedido / Según especificación
                  </span>
                )}
              </div>

              <p className="text-neutral-600 text-sm leading-relaxed">
                {product.description || 'Pieza elaborada con acabados de alta calidad. Ideal para ocasiones especiales, reconocimientos institucionales y presentes de honor en Puno.'}
              </p>

              {/* Opciones Personalizadas */}
              <div className="space-y-4 pt-4 border-t border-neutral-100">
                
                {/* Selector de Cantidad */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700 mb-1">
                    Cantidad deseada
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-9 h-9 border border-neutral-300 rounded-lg flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold text-neutral-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-9 h-9 border border-neutral-300 rounded-lg flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Opción de Grabado Láser / Diamante */}
                {product.isCustomizable && (
                  <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 space-y-2">
                    <label className="block text-xs font-semibold text-neutral-800 uppercase">
                      ✍️ Texto o Dedicatoria para Grabado Personalizado
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. 'Con aprecio de la Promoción 2026' o Nombres"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
                    />
                    <p className="text-[11px] text-neutral-500">
                      Incluimos grabado computarizado en placas, medallas y trofeos.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Botón CTA a WhatsApp estilo Stitch */}
            <div className="space-y-3 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-3 transition shadow-lg shadow-emerald-500/20 text-base"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                <span>Cotizar este producto por WhatsApp</span>
              </a>

              <p className="text-center text-xs text-neutral-500">
                📍 Atención directa en nuestro local: Jr. Arequipa 729, Puno.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}