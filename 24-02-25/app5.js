function suma(numero1, numero2) {
    return parseInt(numero1) + parseInt(numero2);
}

function resta(numero1, numero2) {
    return parseInt(numero1) - parseInt(numero2);
}

function multiplicacion(numero1, numero2) {
    return parseInt(numero1) * parseInt(numero2);
}

function division(numero1, numero2) {
    if (numero2 == 0) {
        return 'No se puede dividir por cero';
    }
    return parseInt(numero1) / parseInt(numero2);
}

function menu(opcion, numero1, numero2) {
    switch (opcion) {
        case 'suma':
            return suma(numero1, numero2);
        case 'resta':
            return resta(numero1, numero2);
        case 'multiplicacion':
            return multiplicacion(numero1, numero2);
        case 'division':3
            return division(numero1, numero2);
        default:
            return 'Opción no válida';
    }
}
let operacion = prompt("Que operacion deseas hacer? (suma, resta, multiplicacion, division): ");
let n1 = prompt("Ingresa un número1: ");
let n2 = prompt("Ingresa un número2: ");


let resultado = menu(operacion, n1, n2);
console.log(`El resultado es: ${resultado}`);

