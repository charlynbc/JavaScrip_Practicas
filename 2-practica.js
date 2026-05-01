/*¿Cómo escribirías el código completo de funcionLeer 
para que mire la lista que recibe e imprima en la 
consola un saludo al primer elemento 
(por ejemplo: "Bienvenido, Ana")? 
Intentá escribir el bloque de código completo, 
desde la palabra function hasta la llave de cierre }*/

const fila_super=["Ana","Claudio","Roberto"];

function leer_lista(lista){
    console.log("Bienvenida ",lista[0], "eres la primera cliente y el resto son: ");
    for(let i=1;i<=lista.length - 1;i++){
        console.log(lista[i]);
    }
    console.log("y esa es la lista completa");
}

leer_lista(fila_super);