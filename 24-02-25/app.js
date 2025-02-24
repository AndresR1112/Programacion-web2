let frutas = ["Manzana", "pera", "palta", "mango"];

/*
console.log (frutas);
console.log(frutas.length);
console.log(frutas [2]);
console.log(frutas [15]);
*/

for (let i = 0; i < frutas.length; i++) {
    console.log("fruta" + (i + 1) + ":" + frutas[i]);

}

for (const fruta of frutas) {
    console.log(fruta);
}

for (const fruta in frutas) {

    console.log(fruta);
}

//hacer programa que haga la tabla de 3 con un for 

for (let j = 1; j <= 10; j++) {
    console.log("3x" + j + "=" + (3 * j));
}

