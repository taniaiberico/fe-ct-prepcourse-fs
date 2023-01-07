/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
  return num**2 // Tu código:
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
  return num * num * num // Tu código:
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
  return Math.pow(num, exponent) // Tu código:
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
 return Math.round(num)  // Tu código:
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
  return Math.ceil(num) // Tu código:
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
 return Math.random()  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
