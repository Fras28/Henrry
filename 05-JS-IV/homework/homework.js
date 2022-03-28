// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  let Gato = {
    nombre:nombre,
    edad: edad,
    meow: function() { 
      console.log ("Meow!");
    }
  }
  console.log(Gato);
  return Gato;
}
crearGato("Peter", 5);

let caca = {};
function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:             
  objeto[property] = null;
}
console.log(caca);
agregarPropiedad(caca, "solana");
console.log(caca);
console.log("---------------------")


let eth = {
    fmetodo : function (){
      console.log("soy el metodo")},
};
function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}
invocarMetodo(eth, 'fmetodo');
console.log("+------------------------------------+");

let gula = {
  numeroMisterioso : 5,
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso.numeroMisterioso*5;
}
console.log(multiplicarNumeroDesconocidoPorCinco(gula));

let peresa = {
  nombre : "javi",
  edad : 25,
  juego : "CS",
};
function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
  console.log(objeto);
  return objeto;
}
eliminarPropiedad(peresa, "edad")

let datos = {
  nombre : "Franco",
  email : "datos@gmail.com",
  passweord : "******",
};
function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  console.log(datos);
  return datos;
}
nuevoUsuario('nombre', 'email', 'password');

let avaricia = {
  nombre : "Franco",
  email : "datos@gmail.com",
  passweord : "******",
  };
function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario.email){
    console.log(true);
    return true;
  }
  else console.log(false);
}
tieneEmail(avaricia);

let algo = {
  lala : "ella",
  lolo : "el",
};
function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
 if (objeto[propiedad]){
   console.log(true);
   return true;
 }
 else console.log(false);
 return false;
}

tienePropiedad(algo, "lala");



let codicia = {
  nombre : "Franco",
  email : "datos@gmail.com",
  password : "****",
  };
function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if (usuario.password === password){
    console.log(true);
    return true;
  }
  else console.log(false);
    return false;
}

verificarPassword(codicia, "hola");



let lujuria = {
  nombre : "Franco",
  email : "datos@gmail.com",
  contraseña : "****",
  };
function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.contraseña = nuevaPassword;
  console.log(usuario);
  return usuario;
}
actualizarPassword(lujuria, "nuevaPassword")


let sobervia = {
  amigos : ["Pepito", "Nahuel", "Marta"],
};

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo);
  console.log(usuario);

}
agregarAmigo(sobervia, "Mirta");
console.log("**-----------------------**");


let ira = [
  {esPremium : true,    
  },
  {esPremium : true,  
  },
  {esPremium : true,
  },
];

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  console.log(usuarios);
  return usuarios;
};
pasarUsuarioAPremium(ira);

console.log("***----------------------***");

let orgullo = {
  posts : [
    post = { likes : 25,
    },
    post = { likes : 73,
    },
    post = { likes : 320,
    },
  ]
};

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código: 
  let totalLikes = 0;
  
  for (let i = 0 ; i < usuario.posts.length ; i++){
    totalLikes = totalLikes + usuario.posts[i].likes;
  }
   console.log(totalLikes)
};
sumarLikesDeUsuario(orgullo);



// opcion 1 //
//function calcularDescuento(precio , porcentajeDeDescuento){
//  let nPrecio = precio - (precio * porcentajeDeDescuento);
//    console.log(nPrecio);
//    return nPrecio;
//};
let envidia = {
  precio : 25,
  porcentajeDeDescuento : 0.2,
};
 // opcion 2 //
//let envidia = {
//  precio : 25,
//  porcentajeDeDescuento : 0.2,
//  calcularPrecioDescuento :function calcularDescuento(){
//    let nPrecio = this.precio - (this.precio * this.porcentajeDeDescuento);
//    console.log(nPrecio);
//  },
//};


function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularDescuento = function(){
   preciodsc = this.precio-this.precio*this.porcentajeDeDescuento;
   console.log(preciodsc);
   return preciodsc;
  }
}

agregarMetodoCalculoDescuento(envidia); 
console.log(envidia.calcularDescuento());
console.log(envidia)
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
