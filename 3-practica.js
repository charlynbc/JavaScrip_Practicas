/*Necesitamos una nueva función llamada obtenerSiguiente. 
Su trabajo es recibir una lista y devolver 
(expulsar hacia afuera, sin usar console.log) 
al cliente que está en la segunda posición de la fila.*/

const lista_super=["Ana","Marcos","Luisa"];

function obtenerSiguiente(lista){
    for(let i=0; i<=lista.length-1;i++){
        if(lista[1]){
            return lista[1];
        }
    }
}

let siguiente= obtenerSiguiente(lista_super);

console.log("El segundo en la lista es ", siguiente);
