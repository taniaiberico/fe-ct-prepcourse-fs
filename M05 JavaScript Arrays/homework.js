/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
  return array[0] ;// Tu código:
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   return array[array.length-1] ;// Tu código:
}
function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   return array.length ;// Tu código:
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
  let nuevoArray = [];
  for(var i=0; i <array.length; i++) {
  nuevoArray [i]= array[i] + 1 ;
}
  return nuevoArray; // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
 array[array.length] = elemento;
 return array; // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
array.unshift(elemento); return array;  // Tu código:
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  return palabras.join(" "); // Tu código:
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   for(var i = 0; i < array.length; i++) {
   if(array[i] === elemento) {
      return true;
   } 
   } 
   return false;// Tu código:
   }
function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
 var suma = 0
 for(var i=0; i < arrayOfNums.length; i++) {
   suma = suma + arrayOfNums[i];// Tu código:
} return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  
return agregarNumeros(resultadosTest) / resultadosTest.length // Tu código:
}

function numeroMasGrande(arrayOfNums) {
   // ; el parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
  var masGrande = arrayOfNums[0]
  for(var i= 1; i < arrayOfNums.length; i++) {
   if( arrayOfNums[i] > masGrande) { 
      masGrande = arrayOfNums[i];
      }
   }
      return masGrande;// Tu código:
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   if(arguments.length < 1) return 0;
   var total = 1;
   for(var i= 0; i < arguments.length; i++) {
      total = total * arguments[i];
      }
      return total;
      }// Tu código:


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   let contador = 0;
   for( let i= 0; i < array.length; i++) {
      if(array[i] > 18) { 
         contador ++
      }
   }
   return contador;     // Tu código:
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  if( numeroDeDia === 1 || numeroDeDia === 7) { return  "Es fin de semana";}
  return "Es dia laboral";
  // Tu código:
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   let numero = num.toString();
 if(numero.charAt(0) === "9") {
   return true // Tu código:
} 
return false
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
 
   for (var i =0 ; i < array.length - 1; i++) {
      if(array[i] !== array[i+1]){
        return false
      }
    }
    return true
  } 
      // Tu código:
      

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   var nuevoArreglo = []; 
   for(let i = 0; i < array.length; i ++) {
      if( array[i] === "Enero" || array [i] === "Marzo" ||  array[i] === "Noviembre") {
          nuevoArreglo.push(array[i]) 
       } 
   
       }
       if(nuevoArreglo.length < 3) {
           return "No se encontraron los meses pedidos";
       } 
       else {
           return nuevoArreglo;
       } 
       } 



function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   var array = []
   for(var i = 0; i < 11; i++) {
 array.push(i*6);
}
return array;
}


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   var nuevoArray = [];
   for(var i = 0; i <array.length;i++) {
      if( array[i] > 100) {nuevoArray.push(array[i])}
   // Tu código:
}
return nuevoArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
  var array = [];
  var suma = num;
  for(var i = 0; i < 10; i++) {
   suma = suma + 2;
   if(suma === i) break;
   else {
      array.push(suma);
   } // Tu código:
}
if (i < 10) {
   return "Se interrumpió la ejecución";
}
else {
   return array;
}
} 



function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   var array = [];
   var suma = num;
   for(var i = 0; i<10;i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
   }
  }
  return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

