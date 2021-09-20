let resultado = 0;

function nombreFuncion() {
    // sentencias
}

const suma = function (a, b) {
    // sentencias
    let resultado = a + b;
    return resultado;
}

const resta = (a, b = 10) => {
    // sentencias
    return a - b;
}

const operacion = (func, a, b = 0) => {
    return func(a, b);
}

console.log(suma(10, 14));


console.log(resta(10));

console.log(operacion(suma, 10, 4));