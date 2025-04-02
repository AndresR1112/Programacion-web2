let numeroMaquina = Math.floor(Math.random()*(10-1)+1);
console.log(numeroMaquina);
let numeroUser = parseInt(prompt("Da un número entre 1 y 10: "));
let vidas = 5;
while(numeroMaquina !== numeroUser && vidas>1){
    vidas --;
    numeroUser = parseInt(prompt("El numero no es correcto. \n Te quedan: "+vidas));
}
if(numeroMaquina === numeroUser){
    console.log("Ganaste");
}else{
    console.log("El número era: "+numeroMaquina)
}





var dato1 = prompt("Ingresa el número 1: ");
var dato2 = prompt("Ingresa el número 2: "); 
var dato3 = prompt("Ingresa el núemero 3: ");
if(dato1>= dato2 && dato1>=dato3){
    console.log("El número " + dato1 + " es mayor");
}
else if(dato2>=dato1 && dato2>=dato3){
    console.log("El número " + dato2 +" es el mayor");
}
else if(dato3>dato1 && dato3>dato2){
    console.log("El número " +dato3+" es el mayor");
}
else{
    console.log("El dato es incorrecto");
}
