// No cambies los nombres de las funciones.

console.log ("+++++++++++++++++++++++++++  INICIO  +++++++++++++++++++++++");
function Usuario (usuario, nombre , email , contraseña ){
  this.usuario = usuario || 'sadasa',
  this.name = nombre || 'Mirta',
  this.Email = email || 'email@gmail.com',
  this.password = contraseña || ' password*' ,
  this.contructor = function saludar (){
    console.log("hola, mi nombre es " + this.name + "!");
  };
};
let pepe = new Usuario ("pepo" , "pepo@gmail.com" , "****");
console.log(pepe);

function crearUsuario(opciones) {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
let nuevoUsuario = new Usuario(opciones.usuario , opciones.nombre, opciones.email , opciones.password);
};

crearUsuario({'usuario':'svaly','nombre':'franco','Email':'elala@gmail.com' , 'password':'contra'})
console.log("-*--------------*-----1------*-----------*");



function Rage (){
};
let helloWorld = "hello World !";
function agregarMetodoPrototype(Prototypo) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Prototypo.Constructor = function Saludar(){
   console.log(helloWorld );
   return helloWorld ;
  };
};

agregarMetodoPrototype(Rage);
console.log(Rage)
console.log(Rage.Constructor());
console.log("-*--------------*-----------*-----------*2");


function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  
  String.prototype.revers = function (palabra) {
    let rta = "";
    for (let i = this.length-1 ; i>= 0 ; i--){
      rta += this[i];
      console.log(this[i]);
    };
    console.log('la palabra la revez es :' , rta);
    return rta;
  };
};
agregarStringInvertida('Usuario')
"tony".revers();
console.log("---------------------------------- 3 ---------------------------");
// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(name , secondname , age , adress/*Escribir los argumentos que recibe el constructor*/) {
        this.nombre = name ;
        this.apellido = secondname;
        this.edad = age ;
        this.direccion = adress ;
        this.detalle = function detalle (){
        console.log( this.nombre +' '+this.apellido +' '+ this.edad + ' '+ this.direccion  ) };
    };
      // Crea el constructor:
  };
let alumno = new Persona ("Pedro" , "Samir" , 25 , "Los Palomos 123");
alumno.detalle();
console.log("---------------------------------- 4 ---------------------------");

function crearInstanciaPersona() {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
 let Juan = new Persona ("Juan" , 'Perez' , 22 , 'las acacias 235');
 console.log(Juan)
 return Juan;

 .0
 .0

};
crearInstanciaPersona();
console.log("---------------------------------- 5 ---------------------------");
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datox = function datox (){
    console.log([this.nombre +', '+ this.edad +' años'])
    return [this.nombre +','+ this.edad +'.'] ;
  };
};
agregarMetodo();
let pedro = new Persona('Pedro', 'Silver' , 23 , 'silama 232');
pedro.datox()


console.log("---------------------------Stop------------------------------")
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
