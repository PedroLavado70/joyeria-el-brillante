export function buildWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppLink(text: string, phone: string = '+51955338403'): string {
  if (text.startsWith('+') || /^\d+$/.test(text)) {
    return buildWhatsAppUrl(text, phone);
  }
  return buildWhatsAppUrl(phone, text);
}

export function buildProductWhatsAppMessage(
  productName: string, 
  sku: string, 
  price?: number
): string {
  const priceText = price ? ` (S/ ${price.toFixed(2)})` : '';
  const message = `Hola Joyería El Brillante, deseo consultar sobre el producto: ${productName}${priceText} [SKU: ${sku}]`;
  return buildWhatsAppUrl('+51955338403', message);
}