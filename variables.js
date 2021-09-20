/**
 *  String
 *  Number
 *  Boolean
 *  Undefined
 *  
 *  Object: 
 *      Array
 *      Literal Object
 *      Null
 * 
 *  function
 * 
 * var
 * let
 * const
 * 
 * 
 */

/* var edad = 5;
//var edad = 10;
let edad = 10;
const PI = 3.1416; */

let nombre = "";
let apellido = '';
let nombreCompleto = ``;

let edad = 10;
let temperatura = -10;
let salario = 100.50;

let soltero = true;
let activo = false;


let estatus;

let valores = ["Luis", true, 0, [1,2], {name: 'Luis'} ];
let nombres = new Array("Luis", "Pedro", "Juan");

let persona = {
    nombre: '',
    apellido: '',
    edad: 0
}

let sueldo = null;

function nombreFuncion(){ // declarado una funcion

}

nombreFuncion(); // ejecutar una funcion


console.log(nombres[0])

console.log(persona.nombre);
console.log(persona['nombre']);