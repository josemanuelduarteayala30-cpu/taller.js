// Ejercicios - Metodos de array en JavaScript
// Antes de cada ejercicio escribo lo que creo que va a imprimir.
// Despues ejecuto y comparo.

// ====================================================
// NIVEL 1
// ====================================================

// Ejercicio 1: Transformar y filtrar
// Prediccion: multiplico por 3 -> [6, 15, 9, 24, 3], luego filtro > 10 -> [15, 24]
const numeros1 = [2, 5, 3, 8, 1];
const por3 = numeros1.map(n => n * 3);
const grandes1 = por3.filter(n => n > 10);
console.log(grandes1); // [15, 24]
console.log(numeros1); // [2, 5, 3, 8, 1]
// Analisis: No, numeros1 no cambio. Lo comprobe imprimiendolo al final y sigue
// igual. map y filter devuelven arrays nuevos y no tocan el original.


// Ejercicio 2: Invertir y encontrar
// Prediccion: invertido queda ["estrella", "mar", "luna", "sol"] y find -> "estrella"
const palabras = ["sol", "luna", "mar", "estrella"];
palabras.reverse();
console.log(palabras); // ["estrella", "mar", "luna", "sol"]
const palabraLarga = palabras.find(p => p.length > 3);
console.log(palabraLarga); // "estrella"
// Analisis: sin el reverse, find habria encontrado "luna" (la primera con mas de
// 3 letras en el orden original). El array palabras quedo invertido de verdad
// porque reverse modifica el original.


// Ejercicio 3: Verificar, ordenar y encontrar
// Prediccion: some -> true (hay menores de 18), ordenado por edad de menor a
// mayor, y find del primero con 18 o mas -> Ana (25)
const personas = [
  { nombre: "Sara", edad: 31 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 15 },
];
const hayMenores = personas.some(p => p.edad < 18);
console.log(hayMenores); // true
personas.sort((a, b) => a.edad - b.edad);
console.log(personas); // Pedro(15), Luis(17), Ana(25), Sara(31)
const mayorMasJoven = personas.find(p => p.edad >= 18);
console.log(mayorMasJoven); // { nombre: "Ana", edad: 25 }
// Analisis: si no ordeno antes, find devolveria a Sara (es la primera del array
// con 18 o mas en el orden original). El orden cambia el resultado porque find
// siempre devuelve el PRIMERO que cumple, y tras ordenar el primero es Ana.


// Ejercicio 4: Combinar y sumar
// Prediccion: concat -> [3, 7, 2, 10, 5] y la suma -> 27
const a4 = [3, 7, 2];
const b4 = [10, 5];
const combinado = a4.concat(b4);
console.log(combinado); // [3, 7, 2, 10, 5]
const suma4 = combinado.reduce((acc, n) => acc + n, 0);
console.log(suma4); // 27
// Analisis: concat no modifico ni a ni b, devolvio un array nuevo. Lo comprobe
// imprimiendolos despues y siguen igual: [3, 7, 2] y [10, 5].


// Ejercicio 5: Quitar y agregar
// Prediccion: shift devuelve 10, unshift devuelve 4, push devuelve 5 y el array
// queda [5, 20, 30, 40, 50]
const numeros5 = [10, 20, 30, 40];
console.log(numeros5.shift());   // 10
console.log(numeros5.unshift(5)); // 4
console.log(numeros5.push(50));   // 5
console.log(numeros5); // [5, 20, 30, 40, 50]
// Analisis: unshift y push devuelven la NUEVA LONGITUD del array, no el array.
// Por eso devuelven 4 y 5 (numeros), no la lista completa.


// Ejercicio 6: Buscar y reemplazar
// Prediccion: el primer reemplazo deja ["Ana", "Luis", "Camila", "Pedro"]
// y con "Juan" (que no existe) el array no cambia.
const nombres6 = ["Ana", "Luis", "Sara", "Pedro"];
const indice1 = nombres6.indexOf("Sara");
if (indice1 !== -1) {
  nombres6.fill("Camila", indice1, indice1 + 1);
}
console.log(nombres6); // ["Ana", "Luis", "Camila", "Pedro"]

// Ahora con splice
const nombres6b = ["Ana", "Luis", "Sara", "Pedro"];
const indice2 = nombres6b.indexOf("Sara");
if (indice2 !== -1) {
  nombres6b.splice(indice2, 1, "Camila");
}
console.log(nombres6b); // ["Ana", "Luis", "Camila", "Pedro"]

// Prueba con un nombre que no existe
const nombres6c = ["Ana", "Luis", "Sara", "Pedro"];
const indice3 = nombres6c.indexOf("Juan");
if (indice3 !== -1) {
  nombres6c.splice(indice3, 1, "Camila");
}
console.log(nombres6c); // ["Ana", "Luis", "Sara", "Pedro"] (no cambio)
// Analisis: si no valido el -1, splice(-1, 1, "Camila") usa el -1 como "ultimo
// elemento", entonces borraria "Pedro" y pondria "Camila" al final. Ese es el
// error clasico de no revisar que el indice no sea -1.


// Ejercicio 7: Filtrar y unir
// Prediccion: me quedo con las que tienen "a" y quedan "manzana, pera, uva"
const frutas = ["manzana", "kiwi", "pera", "uva"];
const conA = frutas.filter(f => f.includes("a"));
console.log(conA); // ["manzana", "pera", "uva"]
const texto = conA.join(", ");
console.log(texto); // "manzana, pera, uva"
// Analisis: no puedo hacer join primero y filter despues porque join devuelve un
// string, y los strings no tienen filter. filter solo funciona sobre arrays.


// Ejercicio 8: Mayor y verificar
// Prediccion: en a el mayor es 9 y every es true; en b el mayor es 4 y every es false
const a8 = [4, 9, 2, 7];
const b8 = [4, -1, 2];
const mayorA = a8.reduce((max, n) => (n > max ? n : max), a8[0]);
console.log(mayorA); // 9
console.log(a8.every(n => n > 0)); // true
const mayorB = b8.reduce((max, n) => (n > max ? n : max), b8[0]);
console.log(mayorB); // 4
console.log(b8.every(n => n > 0)); // false
// Analisis: use como valor inicial el primer elemento del array (a8[0], b8[0]).
// Asi funciona incluso si todos los numeros fueran negativos, porque el
// acumulador ya empieza siendo un numero real del array y no un 0 que podria
// colarse como "mayor" sin serlo.


// Ejercicio 9: Buscar con condicion
// Prediccion: el primer producto con precio > 100 esta en el indice 1 (Cuaderno)
const productos = [
  { nombre: "Lapiz", precio: 50 },
  { nombre: "Cuaderno", precio: 120 },
  { nombre: "Libro", precio: 200 },
];
const indice9 = productos.findIndex(p => p.precio > 100);
console.log(indice9); // 1
const indice9b = productos.findIndex(p => p.precio > 500);
console.log(indice9b); // -1
// Analisis: find con los mismos datos devolveria el objeto completo
// { nombre: "Cuaderno", precio: 120 }, no el indice. find devuelve el elemento,
// findIndex devuelve la posicion.


// Ejercicio 10: Transformar y verificar
// Prediccion: en a queda [2, 5, 3.5, 6] y includes(5) da true; en b queda
// [2, 4.5] y includes(5) da false
const a10 = [4, 10, 7, 12];
const b10 = [4, 9];
const mitadA = a10.map(n => n / 2);
console.log(mitadA); // [2, 5, 3.5, 6]
console.log(mitadA.includes(5)); // true
const mitadB = b10.map(n => n / 2);
console.log(mitadB); // [2, 4.5]
console.log(mitadB.includes(5)); // false
// Analisis: includes no acepta una condicion, compara el valor exacto. Si
// necesitara una condicion como n => n === 5, usaria some(n => n === 5).


// ====================================================
// NIVEL 2 (yo elijo los metodos)
// ====================================================

// Ejercicio 11: Transformacion y busqueda
// Prediccion: todos en mayusculas y el primero con mas de 6 letras es "VALENTINA"
const nombres11 = ["ana", "luis", "valentina", "sara", "sebastian"];
const enMayus = nombres11.map(n => n.toUpperCase());
console.log(enMayus); // ["ANA", "LUIS", "VALENTINA", "SARA", "SEBASTIAN"]
const primerLargo = enMayus.find(n => n.length > 6);
console.log(primerLargo); // "VALENTINA"
// Use map para transformar y find para buscar el primero que cumple.


// Ejercicio 12: Ordenar y modificar
// Prediccion: ordenado de mayor a menor [40, 32, 21, 15, 8], quito el mas joven
// (el 8, que queda al final) y agrego 19 -> [40, 32, 21, 15, 19]
const edades12 = [15, 32, 8, 21, 40];
edades12.sort((a, b) => b - a);
console.log(edades12); // [40, 32, 21, 15, 8]
edades12.pop();
console.log(edades12); // [40, 32, 21, 15]
edades12.push(19);
console.log(edades12); // [40, 32, 21, 15, 19]
// Analisis: use pop para quitar la edad mas joven. Como ordene de mayor a menor,
// la mas joven quedo en la ultima posicion, y pop borra justo el ultimo. Si
// hubiera ordenado al reves usaria shift para quitar el primero.


// Ejercicio 13: Comprobacion y filtrado
// Prediccion: en a todos positivos (true) y pares [4, 10, 8]; en b no todos
// positivos (false) y pares [4, -2, 10]
const a13 = [4, 7, 10, 3, 8];
const b13 = [4, -2, 10];
console.log(a13.every(n => n > 0)); // true
console.log(a13.filter(n => n % 2 === 0)); // [4, 10, 8]
console.log(b13.every(n => n > 0)); // false
console.log(b13.filter(n => n % 2 === 0)); // [4, -2, 10]
// Use every para comprobar la condicion en todos y filter para quedarme con los pares.


// Ejercicio 14: Promedio y verificacion
// Prediccion: el promedio es 120 y como es > 100 me quedo con los menores a 120
// -> [80, 60, 90]
const precios = [120, 80, 250, 60, 90];
if (precios.length > 0) {
  const sumaPrecios = precios.reduce((acc, p) => acc + p, 0);
  const promedio = sumaPrecios / precios.length;
  console.log(promedio); // 120
  if (promedio > 100) {
    const baratos = precios.filter(p => p < promedio);
    console.log(baratos); // [80, 60, 90]
  }
}
// Analisis: si el array esta vacio, al dividir entre precios.length (que seria 0)
// me daria NaN. Lo evito revisando antes con if (precios.length > 0) para no
// dividir entre cero.


// Ejercicio 15: Extraccion y union
// Prediccion: los tres primeros ["rojo", "azul", "verde"], luego los combino con
// los secundarios y colores sigue con sus 5 elementos
const colores = ["rojo", "azul", "verde", "amarillo", "negro"];
const secundarios = ["naranja", "violeta"];
const primeros3 = colores.slice(0, 3);
console.log(primeros3); // ["rojo", "azul", "verde"]
const mezcla = primeros3.concat(secundarios);
console.log(mezcla); // ["rojo", "azul", "verde", "naranja", "violeta"]
console.log(colores); // ["rojo", "azul", "verde", "amarillo", "negro"]
// Analisis: comprobe que colores no cambio imprimiendolo al final: sigue con sus
// 5 elementos. slice y concat devuelven arrays nuevos, por eso el original queda intacto.
