import { Arithmetic } from "./SyntaxAnalyzer.js";
import { getTokens } from "./Tokens.js";

export class Analyze{
  static start(cadena){
    if(cadena.length > 20){
      console.log("Supera el máximo")
    }else{
      let tokens = getTokens(cadena);
      let arth = new Arithmetic(tokens);
      arth.start();
    }
  }
}

