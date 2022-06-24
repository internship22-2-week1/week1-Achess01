import { Analyze } from "./Analyze.js";
import ReadLine from "readline";
/* let op = "32+34/3*(2+3)";
let op2 = "(2 - 3) + 3";
let op3 = "4*7/(2+2)";
let op4 = "5*4*3*2*1";
let op5 = "4-7+8+9/2*3"; */

const readline = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese la operación ", (op) => {
  Analyze.start(op);
  console.log(op);
  readline.close();  
});


