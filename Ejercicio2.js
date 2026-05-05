
const precioOriginal = 150;
const descuento = 20; // porcentaje

// Calcula el monto del descuento (150 * 0.20)
const montoDescuento = (precioOriginal * descuento) / 100;

// Calcula el precio final restando el descuento al precio original
const precioFinal = precioOriginal - montoDescuento;

// Imprime los resultados en la consola
console.log(`Precio original: $${precioOriginal}`);
console.log(`Descuento (${descuento}%): $${montoDescuento}`);
console.log(`Precio final: $${precioFinal}`);
