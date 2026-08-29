import Image from 'next/image';
import Link from 'next/link';
import { buildProductWhatsAppMessage } from '@/lib/utils';

interface ProductCardProps {
  sku: string;
  name: string;
  category: string;
  price?: number;
  imageUrl: string;
  badge?: 'Nuevo' | 'Oferta' | 'Más vendido';
  isCustomizable?: boolean;
}

export default function ProductCard({
  sku,
  name,
  category,
  price,
  imageUrl,
  badge,
  isCustomizable
}: ProductCardProps) {
  const whatsappUrl = buildProductWhatsAppMessage(name, sku, price);

  return (
    <div className="group bg-white rounded-lg border border-neutral-200 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-square w-full bg-neutral-100 overflow-hidden">
        {badge && (
          <span className="absolute top-3 left-3 z-10 text-xs font-semibold px-2.5 py-1 bg-neutral-900 text-white rounded">
            {badge}
          </span>
        )}
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span className="text-xs uppercase font-medium text-neutral-400">{category}</span>
          <h3 className="font-serif font-semibold text-lg text-neutral-900 line-clamp-1 group-hover:text-[#C59B27] transition-colors">
            {name}
          </h3>
          <p className="text-xs text-neutral-500 font-mono mt-0.5">SKU: {sku}</p>
        </div>

        <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
          <div>
            {price ? (
              <span className="text-lg font-bold text-neutral-900">S/ {price.toFixed(2)}</span>
            ) : (
              <span className="text-sm font-semibold text-[#C59B27]">Consultar precio</span>
            )}
          </div>
          {isCustomizable && (
            <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded font-medium">
              Grabado Gratis
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            href={`/producto/${sku}`}
            className="text-center py-2 px-3 text-xs font-medium border border-neutral-300 rounded hover:bg-neutral-50 text-neutral-700 transition"
          >
            Ver Detalle
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-2 px-3 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded transition flex items-center justify-center gap-1"
          >
            Cotizar WA
          </a>
        </div>
      </div>
    </div>
  );
}