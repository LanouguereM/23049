// definimos la funcion Hola Mundo
function holaMundo() {
    console.log("Hola Mundo");
}

//Invocamos la funcion que defini antes; me permite repetir el mismo código sin necesidad de repetirlo 
holaMundo();

function sumar(a, b) {
    var resultado = a+b;
    return resultado;
}

suma = sumar(3,4);
console.log(suma);
