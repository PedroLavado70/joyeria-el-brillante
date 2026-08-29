import type { Metadata } from 'next'
import './globals.css'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Joyería El Brillante | Puno, Perú',
  description: 'Joyas de Oro 18K, Plata, Trofeos, Medallas y Placas Recordatorias en Puno.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-neutral-50 text-neutral-900 antialiased font-sans">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}