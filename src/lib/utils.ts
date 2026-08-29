export const BUSINESS_CONFIG = {
  name: "Joyería El Brillante",
  address: "Jr. Arequipa Nº 729, Puno, Perú",
  phone: "+51955338403",
  whatsappDisplay: "+51 955 338 403"
};

export function buildWhatsAppLink(message: string): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodedText}`;
}

export function buildProductWhatsAppMessage(productName: string, sku: string, price?: number): string {
  let text = `Hola, ${BUSINESS_CONFIG.name}. Estoy interesado(a) en el siguiente producto:\n\n`;
  text += `📌 *Producto:* ${productName}\n`;
  text += `🔖 *Código:* ${sku}\n`;
  if (price) {
    text += `💰 *Precio:* S/ ${price.toFixed(2)}\n`;
  }
  text += `\nQuisiera recibir mayor información sobre disponibilidad y opciones de compra.`;
  return buildWhatsAppLink(text);
}