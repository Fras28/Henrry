// Do not change any of the function names
console.log("+------------------- 1 ----------------+");

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  if (nombre == undefined || nombre == ""){
    return ;
  }
   console.log(nombre.charAt(0).toUpperCase()+nombre.slice(1));
   return nombre.charAt(0).toUpperCase()+nombre.slice(1);
}
mayuscula("pedro");


console.log("+------------------- 2 ----------------+");

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código: 
  return cb();
}
invocarCallback(mayuscula);



console.log("+------------------- 3 ----------------+");

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1 , n2);
}



console.log("+------------------- 4 ----------------+");

let sumaTodo = function sumaTodox (numeros){
  console.log(numeros);
  let sum = numeros.reduce((acc , value) => acc + value , 0);
  console.log (sum);0
}; 

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  cb(numeros);
}
sumarArray([5 , 10 , 20], sumaTodo)


console.log("+------------------- 5 ----------------+");




let arri = function (arr){
  console.log(arr)
};

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código
  
  array.forEach(arr => cb(arr)) 
  };



forEach([20, "fefo" , true], arri );

console.log("+------------------- 6 ----------------+");


function por2 (x){
  return x * 2
};

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
let nArray =  array.map(x => cb(x));
console.log(nArray)
return nArray;
};

map([7 , 5 ,10] , por2)

console.log("+------------------- 7 ----------------+");


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  let inicioA = array.filter(x => x.charAt(0) === "a")
  console.log(inicioA)
  return inicioA;
};
filter(["mita","agustina","faustina","andrea" ,"ausguto"])

console.log("+------------------- 8 ----------------+");
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
