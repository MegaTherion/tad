
import { Pila } from "./classes/pila";
import { Tarjeta } from "./classes/tarjeta";
import { Vector } from "./classes/vector";
// import * as readline from 'readline';

// console.log("hola USFA 2023");

// const t = new Tarjeta();
// t.setCvc(120);
// t.titular = "JUAN PEREZ";
// t.fechaVencimiento = "05/27";
// t.setNumero(843984938213);
// t.mostrarDatos();
// const vec = new Vector();
// vec.generarMultiplosInv(5);
// vec.mostrar();
// vec.generarMultiplosInv(2);
// vec.mostrar();
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('Cual es tu nombre? ', nombre => {
//     console.log('Hola ', nombre);
// });
let p: Pila = new Pila();
p.insertar(5);
p.insertar(2);
p.insertar(7);
p.ver();

console.log(p.extraer());
console.log(p.extraer());
console.log(p.extraer());
console.log(p.extraer());
console.log(p.extraer());
p.insertar(10);
console.log(p.extraer());

