// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var devolverPrimerElemento = array[0];
  console.log([devolverPrimerElemento]);
  return devolverPrimerElemento;
}
devolverPrimerElemento([8, 10, 25])

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var devolverUltimoElemento = (array[array.length-1]);
  console.log(devolverUltimoElemento);
  return devolverUltimoElemento;
}
devolverUltimoElemento(["hola", 2]);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:


 var obtenerLargoDelArray = (array.length);
 console.log(obtenerLargoDelArray);
 return obtenerLargoDelArray
}
obtenerLargoDelArray([2, "hola", true, 4])


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for( let i = 0; i < array.length; i++
    )
    {array[i] = array[i] + 1;
    }
    console.log(array);
   return array
    }
    incrementarPorUno([2, 10, 22, 35, 5])


    function agregarItemAlFinalDelArray(array, elemento) {
      // Añade el "elemento" al final del array
      // y devuelve el array
      // Tu código:
     array.push(elemento);
     console.log(array);
      return array
    }
    console.log("caca");
    agregarItemAlFinalDelArray(["HOLA", "nada de hola"], "Javier")


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  console.log(array);
  return array
}
agregarItemAlComienzoDelArray(["hola champ", 2, 18], "vos sos pedro?")


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
for(let i = 0; i < palabras.length ; i++)
palabras[i] = palabras[i]+"";
console.log(palabras);
  return palabras
}
dePalabrasAFrase(["Hola", "salud", "mi rey"])


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i = 0 ; i <array.length ; i++){
    if(elemento == true);}
    console.log(true);
    return true
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let valor = 0;
  for(let i = 0 ; i <numeros.length ; i++){
    valor = valor + numeros[i] ;
  }
  console.log(valor)
  return valor
}
agregarNumeros([10, 11 ,12 , 13])

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let valor = 0;
  for(let i = 0 ; i < resultadosTest.length ; i++){
    valor = valor + resultadosTest[i];
  }
  let promedio = valor/resultadosTest.length;
  console.log(promedio);
  return promedio;
}
promedioResultadosTest([5,10,20]);

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // valor = 0 , i = 0 , numeros.leng = 5, esGrande false-
  //  valor = 22  i = 1 ,  esGrande = true
  let valor = 0;
  for( let i = 0 ; i < numeros.length ; i++){
    let esGrande = valor > numeros[i]
    if (!esGrande ){
      valor = numeros[i];
      }  
  }
  console.log(valor);
  return valor;
}
numeroMasGrande([22, 8 , 10 , -1 , 4 , 700])

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  //
  let valor = 1;
  for ( let i = 0 ; i < arguments.length ; i++){
    if(arguments[i]){
      valor = valor*arguments[i] ; 
      producto = valor;
    }
  }
  console.log(producto)
return producto
}
multiplicarArgumentos(2 , 3 , 5 , 10)


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let valor = 0;
  for( let i = 0 ; i < arreglo.length ; i++){
    if (arreglo[i] > 18){
        valor++;
    }
  }
  console.log(valor);
  return valor;
}
cuentoElementos([2 , 20 , 50 , 16 , 19 , 18])


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  let dia = "Es dia laboral";
  let finde = "Es fin de semana";
  for (let i = 0 ; i < numeroDeDia.length ; i++)
  {
    if (numeroDeDia[i] > 1 && numeroDeDia[i] < 7)
    {
      console.log(dia);
    }
    else console.log(finde);
  }
} 
diaDeLaSemana([1 , 2 , 3 , 4 , 5 , 6 , 7])


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí:

  //if (n.toString()[0] == 9)
  console.log(n.toString()[0] == 9);
    return n.toString()[0] == 9;
}
empiezaConNueve(985)


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí :
  for (let i = 1; i < arreglo.length; i++)
  {
    if (arreglo[i] !== arreglo[0]) 
    {
      console.log(false);
      return false;
    }
  }
  console.log(true);
    return true;   
} 
todosIguales([10, 10 , 10 , 8 , 10])

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let arrayFinal = [];
for(let i = 0 ; i < array.length ; i++ )
{
  if(array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre")
  {
   arrayFinal.push(array[i]);
}
   console.log(arrayFinal)
}
if (arrayFinal.length = 3){
  console.log("No se encontraron los meses pedidos");
}
}
mesesDelAño(["Diciembre", "Enero", "Marzo" , "Febrero" , "Octubre"])


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let arrayFinal = [];
  for(let i = 0 ; i < array.length ; i++)
  {
    if(array[i] > 100 && array[i] < 201)
    {
      arrayFinal.push(array[i]);
    }
  }
  console.log(arrayFinal);
  return arrayFinal;
}
mayorACien([230, 200, 150, 100 , 163 , 120 , 95])
console.log("--------------------------.")


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:  
  let numeroValor = [numero+2];
  for (let i = 0; i < 9; i++) {
    numeroValor.push(numeroValor[i]+2);
    if(numeroValor[i]+2 == i){
        console.log(numeroValor);
        break;
    }
  }
  console.log(numeroValor);
  return numeroValor;
}
console.log("---------------------*");
breakStatement(7);
console.log("---------------------*");


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código: (i=0 n=0 numero[n]=5+2) (i=1 n=0 numero[n]=7+2) (i=2 n=0 numero[n]=9+2) (i=3 n=0 numero[n]=11+2) (i=4 n=04n]=13+2)
  //(i=5 n=1 numero[n] = 10+2 ) (i=6 n=1 numero[n] = 12+2 ) (i=7 n=1 numero[n] = 14+2 ) (i=8 n=1 numero[n] = 16+2 ) (i=9 n=1 numero[n] = 18A+2 )
 let i = 0;
 let n = 0;
 let nArray = [];

 while(i < 10){
 numero[n] = numero[n]+2;
  nArray.push(numero[n]);
  i++;
 if (i === 5){
 n++;
  }
}
 console.log(nArray );
 return nArray;
}
 //let n = 0;
 //let nArray = [];
 //for (let i = 0 ; i < 10 ; i++) {
 // numero[n] = numero[n]+2;
 // nArray.push(numero[n]);
 // if (i == 4){
 //   continue n++ ;
//}
//console.log(nArray);
// }
//}
continueStatement([5,10]);
// 5, 7 ,9 ,11 ,13
//12, 14 ,16 ,18, 20
console.log("---------------*=")

// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
}

