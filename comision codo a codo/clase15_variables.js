/*
    TIPOS DE VARIABLES EN JAVASCRIPT
*/

//comentario de una sola linea

//CREAR LAS VARIABLES NECEARIAS PARA LOS DATOS DE UNA PERSONA

//definir
let nombre;

//asignar
nombre = 'Melina';

// definir y asignar al mismo tiempo
let apellido = 'Lanougiuere';

let edad = 52; //numero entero

let altura = 178.5; //numero real

let esCasado = true; //boolean

let estaVivo = false;

function hablar(){

}

function saludar() {
}

let fechaNacimiento = Date();

let direccion = Math.random();

// MOSTRAR TODOS LOS VALORES
//funciones de fabrica:
//alert(): muestra un mensaje en la pantalla
//console(): mostrar informacion en la consola del navegador
//prompt()
//confirm()

console.log(nombre);
console.log(apellido);
console.log(altura);
console.log(saludar);

//tipo de variables objeto
let persona= {
    dni: '30078504',
    saludar: alert("hola soy melina")
}