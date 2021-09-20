/*

== igual (compara solo valor)
=== igual (compara valor y tipos) '5' === 5 (false)
!= distinto (compara solo valor)
!== distinto (compara valor y tipo)
> mayor que
< menor que
>= mayor o igual que
<= menor o igual que

if (condicion) {

}

if (condicion) {

} else {

}

if (condicion) {

} else if (condicion) {

} else if (condicion) {

} else {

}


Operadores Logicos: and or not (&& || !)

&& (and): todas las condiciones deben retornar true
|| (or): al menos una de las condiciones debe retornar true


true && true = true
true && false = false
false && false = false

true || true = true
true || false = true
false || false = false

!true && !true = false
!true && !false = false
!false && !false = true

!true || !true = false
!true || !false = true
!false || !false = true

*/

if (a > b && a > c) {
    // sentencias
}

if (a > b || a > c) {
    // sentencias
}

if (!mayorDeEdad){
    console.log("No es mayor de edad");
}
