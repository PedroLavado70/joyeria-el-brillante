export function buildWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppLink(text: string, phone: string = '+51955338403'): string {
  // Si el primer parámetro es un número o si invierten el orden, lo maneja limpiamente
  if (text.startsWith('+') || /^\d+$/.test(text)) {
    return buildWhatsAppUrl(text, phone);
  }
  return buildWhatsAppUrl(phone, text);
}

export function buildProductWhatsAppMessage(productName: string, sku: string): string {
  const message = `Hola Joyería El Brillante, deseo consultar sobre el producto: ${productName} (SKU: ${sku})`;
  return buildWhatsAppUrl('+51955338403', message);
}