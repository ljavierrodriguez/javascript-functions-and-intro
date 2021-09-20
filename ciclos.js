/**
 *  for
 *  for in // indice o la posicion donde consigue el valor dentro del arreglo
 *  for of // devuelve el valor encontrado dentro del arreglo
 * 
 *  while
 *  do while
 * 
 * 
 * for(inicializador; condicion; incremento){
 * 
 * }
 * 
 * 
 */

let nombres = ["Hugo", "Fabian", "Lucas", "Paty", "Miguel"];

for(let i=1; i <= 10; i++){
    console.log(i);
}// 1,2,3,4,5,6,7,8,9,10

for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

for (let indice in nombres){ // indice donde esta guardado el valor
    console.log(nombres[indice]);
}

for (let nombre of nombres){ // valor que esta guardado en el array
    console.log(nombre);
}


let i = 1;
while(i <= 10){
    console.log(i);
    i++; // i+=1; i = i + 1;
}

let j = 0;
while(j < nombres.length){
    console.log(nombres[j]);
    j++;
}

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 10);