/*function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// invoco funcion
console.log(numeroAleatorio(1, 11));

// funcion expresada 
const miNumero = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(miNumero(10, 35));


function dato(a) {
    return a + 100;
}

var datos = function (a) {
    return a + 100;
}

var datos = (a)=>{
    return a + 100;
}

var datos = (a)=> {return a + 100};

var datos = a => a + 100;
*/
/*
const array1 = ['a', 'b', 'c', 'd'];

array1.forEach(element => console.log(element));

arr.forEach (function callcack (currentValue , index, array|)){
    //iterador 
}
*/

let frutas = ["manzana", "sandia", "pera", "naranja"];

//frutas.forEach(fruta => console.log(fruta));

frutas.forEach((fruta, index, array) => {
    console.log(index);
    console.log(fruta);
    console.log(array);
});