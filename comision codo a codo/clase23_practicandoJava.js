const edades = [37, 26, 41, 21,27, 23, 44];
//               0   1  2   3   4   5   6

//mayor   = 44
//posicion = 6

//asumo el primero como mayor
let mayor = edades[0];

//recorro el vector buscando si hay alguien mayor
for(let i=1; i < edades.length; i++) {
    if(edades[i] > mayor) {
        mayor = edades[i];
    }
}

console.log('mayor',mayor);
document.getElementById('resultado').innerHTML = mayor;
// nombre
	 codigo
// fin nombre

//santiago
let mayor = edades[0];
let idx;

for (let i = 0; i < edades.length; i++) {
  if (edades[i] > mayor) {
    mayor = edades[i];
    idx = i;
  }
}

console.log(`el mayor es ${mayor} en la posicion ${index}`);
let acumulador;
  for (let i = 0; i < edades.length; i++) {
		acumulador = acumulador + edades[i]
  }
}
  
  
//migue
  
function obtenerEdadMayor(listaEdades) {
    var mayor = 0;
    for (var i = 0; i < listaEdades.length; i++) {
        if (listaEdades[i] > mayor) {
            mayor = listaEdades[i];
        }
    }
    return mayor;
}

  
  //marcos 
  
  let auxiliar = 0
const edades = [37, 26, 41, 21,27, 23, 44];
for (let index = 0; index < edades.length; index++) {
    const element = array[index];
    if(edades[index] >= auxiliar)
{
    auxiliar = edades[index];
}
console.log( 'el mayor es '+auxiliar)
    
}
    return mayor;
}
  
//joel
let mayor = edades[0];
let pos = 0;

for (let i = 1; i < edades.length; i++) {
    if (edades[i] > mayor) {
      mayor = edades[i];
      pos = i;
    }
}
  
  
//nelson
const edades = [37, 26, 41, 21, 27, 23, 44];

function obtenerMayor() {
  let mayor = [edades[0], 0];
  for (let i = 1; i < edades.length; i++) {
    if (mayor < edades[i]) {
      mayor = [edades[i], i];
    }
  }
  return mayor;
}

const resultado = obtenerMayor();
console.log(resultado);
function obtenerSuma() {
    let resultado = 0;
    for (let i = 0; i < edades.length; i++) {
      resultado += edades[i];
    }
    return resultado;
  }
  function promedio(){
    if (edades.length){
        return obtenerSuma() / edades.length;
    }
  }
  //nelson
                                      
  //Lucas
let sumatoria = 0;
  for (let i = 1; i < edades.length; i++) {
 	                                
}
  

  
  -----------------------------------------------------
//joel
let suma = 0;   

for (let i = 0; i < edades.length; i++) {
    suma += edades[i];
}
console.log(suma);
  
  -------------------------------------------------------
                                  
  
//migue
  
function sumarElementos(numeros) {
  var resultado = 0;
  for (var i = 0; i < numeros.length; i++) {
      resultado+=numeros[i]
  }
  return resultado;
}
                                     
//adrian
let suma=0;                           
for(let i=0; i < edades.length; i++) {
  suma+=edades[i];
  }
  
  //promedio
  
  function calcularPromedio(numeros) {
    var resultado = 0;
    for (var i = 0; i < numeros.length; i++) {
        resultado+=numeros[i]
    }
    return resultado/numeros.length;
}
  
  const sumaDni = alumnos.reduce((a,b) => a.id + b.id, 0);
console.log(sumaDni)
  
//Lucas
  
  const elementos = [1, 2, 3, 4, 5, 6, 7]

for (let i=0; i = elementos[5]; i++) {
    if (elementos[i] = 5) {
        return 
    }
}