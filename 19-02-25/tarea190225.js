/*
//Conpara dos numeros
let dato1 = parseInt(prompt("ingresa tu primer numero"));
let dato2 = parseInt(prompt("ingresa tu segundo numero"));

if (dato1 > dato2){
    console.log("dato1 es mayor que dato2, el valor de dato1 es: " + dato1);
}else if(dato2 > dato1) {
    console.log("dato2 es mayor que dato1, el dato2 es: "+ dato2);
}else if(dato1 == dato2){
    console.log("Los datos son iguales");
}
*/

let numeroMaquina = Math.floor(Math.random() * 10) + 1;

// Pedir al usuario que adivine el número
let numeroUser = parseInt(prompt("Adivina el número entre 1 y 10"));
let vidas = 5;

while (numeroMaquina !== numeroUser && vidas > 1) {
    vidas--;
    numeroUser = parseInt(prompt(`Número incorrecto, intenta nuevamente. Te quedan ${vidas} vidas.`));
}

// Verificar si el usuario adivinó o perdió
if (numeroMaquina === numeroUser) {
    console.log("¡Ganaste!");
    alert("¡Ganaste!");
} else {
    console.log(`Perdiste. El número correcto era ${numeroMaquina}`);
    alert(`Perdiste. El número correcto era ${numeroMaquina}`);
}