
/*
let resultado =true && true;
console.log (resultado);

let resultado2= false || true;
console.log (resultado2);

// programar las compuertas como la pasada AND, NOT, OR 
*/

let and0 = false && false;
let and1 = false && true;
let and2 = true && false;
let and3 = true && true;


console.log("and");
console.log("false|"+"&&"+"|false|"+and0); 
console.log("false|"+"&&"+"|true|"+and1); 
console.log("true|"+"&&"+"|false|"+and2);
console.log("true|"+"&&"+"|true|"+and3);

let or0= false || false;
let or1 = false || true;
let or2 = true || false;
let or3 = true || true;

console.log("or");
console.log("false|"+"||"+"|false|"+or0); 
console.log("false|"+"||"+"|true|"+or1); 
console.log("true|"+"||"+"|false|"+or2);
console.log("true|"+"||"+"|true|"+or3);

let not0 = !false;
let not1 = !true;

console.log("not");
console.log("!false =", not0);
console.log("!true  =", not1);
