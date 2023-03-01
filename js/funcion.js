/** 
document.getElementById("boton").onclick = function ()  
{
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = " estamos probando nuestro primer evento en js"
}
*/

/** en este caso, si yo clikeo en cualquier lugar de la pantallla, me va a cambiar la leyenda, porque "escucha" el evento click pero no dice en donde 
document.addEventListener("click" , function() {
     console.log("Hola Mundo desde EventListener")
     document.getElementById("demo").innerHTML = " estamos probando nuestro primer evento en js"
}
)
*/

document.getElementById("boton").addEventListener("click" , function() {
    console.log("Hola Mundo desde EventListener")
    document.getElementById("demo").innerHTML = " estamos probando nuestro primer evento en js"
}
)

document.getElementById("boton_color").addEventListener("click" , function() {
document.body.style.backgroundColor = "#FF0000";
}
)

document.getElementById("boton_ocultar").addEventListener("click" , function() {
    document.getElementById("demo").style.display = "none";
    }
    )

document.getElementsByClassName("parrafo")

const collection= document.getElementsByClassName("prueba");
for (let i = 0 ; i < collection.length; i++ ) {
    collection[i].style.backgroundColor = "green";
}
