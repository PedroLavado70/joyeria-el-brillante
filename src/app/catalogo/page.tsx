'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { MOCK_PRODUCTS, Product } from '@/data/mockProducts';

const CATEGORIES = [
  { id: 'todas', label: 'Todas las categorías' },
  { id: 'oro', label: 'Joyas de Oro 18K' },
  { id: 'plata', label: 'Joyas de Plata' },
  { id: 'acero', label: 'Acero y Fantasía' },
  { id: 'trofeos', label: 'Trofeos y Copas' },
  { id: 'medallas', label: 'Medallas' },
  { id: 'presentes', label: 'Presentes y Reconocimientos' },
  { id: 'placas', label: 'Placas Recordatorias' },
  { id: 'servicios', label: 'Servicios y Grabados' },
];

export default function CatalogoPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [onlyCustomizable, setOnlyCustomizable] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState('todos');

  // Filtrado reactivo en tiempo real
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      // Filtro por Búsqueda (Texto en nombre, SKU o descripción)
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

      // Filtro por Categoría
      const matchesCategory =
        selectedCategory === 'todas' || product.category === selectedCategory;

      // Filtro por Grabado/Personalizable
      const matchesCustomizable = !onlyCustomizable || product.isCustomizable;

      // Filtro por Etiquetas (Nuevo, Oferta, Más vendido)
      const matchesBadge =
        selectedBadge === 'todos' || product.badge === selectedBadge;

      return matchesSearch && matchesCategory && matchesCustomizable && matchesBadge;
    });
  }, [searchQuery, selectedCategory, onlyCustomizable, selectedBadge]);

  return (
    <main className="min-h-screen bg-neutral-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Encabezado Principal */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
            Catálogo Comercial Premium
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explora nuestra colección de joyas en Oro 18K, Plata, Trofeos y Reconocimientos en Puno. Cotiza directamente por WhatsApp.
          </p>
        </div>

        {/* Barra de Búsqueda y Filtros */}
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-neutral-200 shadow-sm space-y-4">
          
          {/* Campo de Búsqueda por Texto */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nombre, SKU (ej. ORO-101) o subcategoría..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-3.5 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Filtros de Selección Rápida */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Selector de Categoría */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">Categoría</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2.5 px-3 border border-neutral-300 rounded-lg text-sm text-neutral-900 bg-white focus:ring-2 focus:ring-[#D4AF37] outline-none"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Selector por Etiqueta Promocional */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">Destacados</label>
              <select
                value={selectedBadge}
                onChange={(e) => setSelectedBadge(e.target.value)}
                className="w-full py-2.5 px-3 border border-neutral-300 rounded-lg text-sm text-neutral-900 bg-white focus:ring-2 focus:ring-[#D4AF37] outline-none"
              >
                <option value="todos">Todos los productos</option>
                <option value="Más vendido">Más Vendidos</option>
                <option value="Nuevo">Novedades</option>
                <option value="Oferta">Ofertas</option>
              </select>
            </div>

            {/* Checkbox para Grabados / Personalización */}
            <div className="flex items-end pb-2">
              <label className="inline-flex items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyCustomizable}
                  onChange={(e) => setOnlyCustomizable(e.target.checked)}
                  className="w-4 h-4 text-[#D4AF37] border-neutral-300 rounded focus:ring-[#D4AF37]"
                />
                <span className="ml-2 text-sm text-neutral-700 font-medium">
                  Solo aptos para Grabado / Personalización
                </span>
              </label>
            </div>

          </div>
        </div>

        {/* Contador de Resultados y Reset */}
        <div className="flex items-center justify-between text-sm text-neutral-600">
          <span>
            Mostrando <strong>{filteredProducts.length}</strong> de {MOCK_PRODUCTS.length} productos
          </span>
          {(searchQuery || selectedCategory !== 'todas' || onlyCustomizable || selectedBadge !== 'todos') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('todas');
                setOnlyCustomizable(false);
                setSelectedBadge('todos');
              }}
              className="text-xs text-[#C59B27] hover:underline font-semibold"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Grilla Responsiva de Productos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product: Product) => (
              <ProductCard
                key={product.sku}
                sku={product.sku}
                name={product.name}
                category={product.subcategory}
                price={product.showPrice ? product.price : undefined}
                imageUrl={product.images[0]}
                badge={product.badge}
                isCustomizable={product.isCustomizable}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-neutral-300 space-y-3">
            <svg className="w-12 h-12 text-neutral-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-neutral-700 font-medium text-lg">No se encontraron productos</p>
            <p className="text-neutral-500 text-sm">Prueba ajustando los términos de búsqueda o los filtros seleccionados.</p>
          </div>
        )}

      </div>
    </main>
  );
}