
/*
    quiero sumar los valores que estan en el html, entonces señalo
a cada contenedor implicado en esa operacion que yo quiero hacer
    */
const apuntadorANumeroA = document.getElementById('a');

// para ver en la consola el valor de un elemento:
console.log(apuntadorANumeroA.value)

const apuntadorANumeroB = document.getElementById('b');

const apuntadorARes = document.getElementById('res');

const apuntadorAlSumador = document.getElementById('sumador');

/* para que el boton sumar haga algo, le tengo que asociar una funcion; en este caso le agrego un evento con la funcion onclick
*/
apuntadorAlSumador.addEventListener('click',sumar);

function sumar() {
    //dentro de la funcion puedo ver las variables que estan fuera, anteriores
    console.log('sumando...');
    apuntadorARes.innerText = parseFloat(apuntadorANumeroA.value) + parseFloat(apuntadorANumeroB.value);
}
