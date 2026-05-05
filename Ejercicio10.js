const numero = 7;

console.log(`--- Tabla del ${numero} ---`);

for (let i = 1; i <= 10; i++) {
  // Multiplicamos la constante por el valor actual del bucle
  const resultado = numero * i;
  
  // Mostramos la operación completa (ej: 7 x 1 = 7)
  console.log(`${numero} x ${i} = ${resultado}`);
}
