/*
 si yo uso la barra y el asterisco en java es un comentario multilinea    
TIPOS DE VARIABLES EN JAVASCRIPT
*/

//comentario de una sola linea se usan las dos barras 

//CREAR LAS VARIABLES NECESARIAS PARA LOS DATOS DE UNA PERSONA

//definir
let nombre;

//asignar
nombre = 'Melina';

// definir y asignar al mismo tiempo
let apellido = 'Lanouguere';

let edad = 40; //numero entero

let altura = 176.5; //numero real

let esSoltero = true; //boolean

let tieneHijos = false;

function hablar(){

}

function saludar() {
}

//funcion con un tipo de dato fecha
let fechaNacimiento = Date();

let direccion = Math.random();

// MOSTRAR TODOS LOS VALORES
//funciones nativas o de fabrica. x ejemplo:
//alert(): muestra un mensaje en la pantalla
//console(): mostrar informacion en la consola del navegador
//prompt()
//confirm()
/* console.log es una funcion que tambien viene de fábrica*/


console.log(nombre);
console.log(apellido);
console.log(altura);
console.log(saludar);

//tipo de variables objeto
let persona= {
    dni: '30078504',
    saludar: alert("hola soy melina")
}

console.log(persona);