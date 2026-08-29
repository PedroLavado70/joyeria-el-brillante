'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { buildWhatsAppUrl } from '@/lib/utils';

const INSTITUTION_TYPES = [
  'Institución Educativa / Colegio',
  'Municipalidad / Gobierno Local',
  'Liga Deportiva / Club',
  'Empresa Privada',
  'Organización Comunitaria / Fiesta Patronal',
  'Otro',
];

export default function TrofeosPage() {
  const [institution, setInstitution] = useState('');
  const [instType, setInstType] = useState(INSTITUTION_TYPES[0]);
  const [trophiesQty, setTrophiesQty] = useState('');
  const [medalsQty, setMedalsQty] = useState('');
  const [plaquesQty, setPlaquesQty] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let quantitiesText = '';
    if (trophiesQty) quantitiesText += `• Trofeos/Copas: ${trophiesQty} unidades\n`;
    if (medalsQty) quantitiesText += `• Medallas: ${medalsQty} unidades\n`;
    if (plaquesQty) quantitiesText += `• Placas Recordatorias: ${plaquesQty} unidades\n`;

    const message =
      `🏆 *SOLICITUD DE COTIZACIÓN INSTITUCIONAL*\n\n` +
      `*Institución/Entidad:* ${institution || 'No especificada'}\n` +
      `*Tipo:* ${instType}\n` +
      `*Fecha estimada del evento:* ${eventDate || 'Por definir'}\n\n` +
      `*Requerimiento estimado:*\n${quantitiesText || '• Consulta general de catálogo institutos\n'}\n` +
      (details ? `*Detalles/Texto para Grabados:*\n"${details}"\n\n` : '') +
      `Por favor, enviarme propuesta económica y tiempos de entrega para Puno.`;

    const url = buildWhatsAppUrl('+51955338403', message);
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFA]">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-10">
        {/* Banner Principal */}
        <div className="bg-neutral-900 text-white p-8 sm:p-12 rounded-3xl border border-neutral-800 text-center space-y-4 shadow-xl">
          <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest">
            Atención Institucional & Licitaciones
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
            Trofeos, Placas y Reconocimientos al por Mayor
          </h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base">
            Diseño y grabado personalizado para colegios, municipalidades, ligas y campeonatos en Puno y la región.
          </p>
        </div>

        {/* Formulario B2B */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
          <div className="border-b border-neutral-100 pb-4">
            <h2 className="text-xl font-serif font-bold text-neutral-900">
              Cotizador Rápido para Eventos e Instituciones
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1">
              Completa los datos de tu evento y genera la cotización directa hacia nuestro WhatsApp institucional.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nombre de la institución */}
              <div>
                <label className="block text-xs font-semibold uppercase text-neutral-700 mb-1">
                  Nombre de la Institución / Empresa *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. I.E. Pedro Vilcapaza / Muni. Puno"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
                />
              </div>

              {/* Tipo de institución */}
              <div>
                <label className="block text-xs font-semibold uppercase text-neutral-700 mb-1">
                  Tipo de Entidad
                </label>
                <select
                  value={instType}
                  onChange={(e) => setInstType(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none bg-white"
                >
                  {INSTITUTION_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Cantidades estimadas */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase text-neutral-700">
                Cantidades Aproximadas del Lote
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <input
                    type="number"
                    min="0"
                    placeholder="N° Trofeos / Copas"
                    value={trophiesQty}
                    onChange={(e) => setTrophiesQty(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    min="0"
                    placeholder="N° Medallas"
                    value={medalsQty}
                    onChange={(e) => setMedalsQty(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    min="0"
                    placeholder="N° Placas Recordatorias"
                    value={plaquesQty}
                    onChange={(e) => setPlaquesQty(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Fecha aproximada */}
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-700 mb-1">
                Fecha Estimada de Entrega / Evento
              </label>
              <input
                type="text"
                placeholder="Ej. 15 de Octubre / Aniversario Institucional"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
              />
            </div>

            {/* Detalles de Grabados */}
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-700 mb-1">
                Detalles del Requerimiento / Texto para Placas y Medallas
              </label>
              <textarea
                rows={4}
                placeholder="Indica disciplinas deportivas, categorizaciones, logotipos requeridos o dedicatorias especiales..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
              />
            </div>

            {/* Botón Envío */}
            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition shadow-lg shadow-emerald-500/20 text-base"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>Enviar Requerimiento por WhatsApp</span>
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}