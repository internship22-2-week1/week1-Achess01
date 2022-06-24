import { tokenTypes } from "./Tokens.js";
import { Operation } from "./ASTNode.js";

export class Arithmetic {
  constructor(tokens) {
    this.tokens = tokens;
  }

  start() {
    if (this.tokens.length > 0) {
      this.currentToken = this.tokens[0];
      this.currentIndex = 0;
      let result = undefined;
      try {
        result = this.add();
      } catch {
        console.log("Errores en la sintáxis");
      }
      if (result) {
        console.log(result);
        console.log(result.run());
      }
    } else {
      console.log("No hay suficientes tokens");
    }
  }

  add() {
    let valMul = this.mul();
    let valAdd1 = this.add1();
    if (valAdd1) {
      valAdd1.left = valMul;
      return valAdd1;
    } else {
      return valMul;
    }
  }

  add1() {
    if (!this.currentToken) return undefined;
    if (this.currentToken.type === tokenTypes[1]) {
      //Si es suma
      this.currentToken = this.getCurrentToken();
      let valMul = this.mul();
      let valAdd1 = this.add1();
      if (valMul) {
        if (valAdd1) {
          valAdd1.left = valMul;
          let op = new Operation({ type: "+", right: valAdd1 });
          return op;
        } else {
          let op = new Operation({ type: "+", right: valMul });
          return op;
        }
      }
    } else if (this.currentToken.type === tokenTypes[2]) {
      //Si es resta
      this.currentToken = this.getCurrentToken();
      let valMul = this.mul();
      let valAdd1 = this.add1();
      if (valMul) {
        if (valAdd1) {
          valAdd1.left = valMul;
          let op = new Operation({ type: "-", right: valAdd1 });
          return op;
        } else {
          let op = new Operation({ type: "-", right: valMul });
          return op;
        }
      }
    }
  }

  mul() {
    let valTerm = this.term();
    let valMul1 = this.mul1();
    if (valMul1) {
      valMul1.left = valTerm;
      return valMul1;
    } else {
      return valTerm;
    }
  }

  mul1() {
    if (!this.currentToken) return undefined;
    if (this.currentToken.type === tokenTypes[3]) {
      //Si es multiplicación
      this.currentToken = this.getCurrentToken();
      let valTerm = this.term();
      let valMul1 = this.mul1();
      if (valTerm) {
        if (valMul1) {
          valMul1.left = valTerm;
          let op = new Operation({ type: "*", right: valMul1 });
          return op;
        } else {
          let op = new Operation({ type: "*", right: valTerm });
          return op;
        }
      }
    } else if (this.currentToken.type === tokenTypes[4]) {
      //Si es división
      this.currentToken = this.getCurrentToken();
      let valTerm = this.term();
      let valMul1 = this.mul1();
      if (valTerm) {
        if (valMul1) {          
          valMul1.left = valTerm;
          let op = new Operation({ type: "/", right: valMul1 });
          return op;
        } else {
          let op = new Operation({ type: "/", right: valTerm });
          return op;
        }
      }
    }
  }

  term() {
    if (!this.currentToken) return undefined;
    if (this.currentToken.type === tokenTypes[0]) {
      // Si es un número
      let tk = this.currentToken;
      this.currentToken = this.getCurrentToken();
      return new Operation({ type: "num", value: tk.lexeme });
    } else if (this.currentToken.type === tokenTypes[5]) {
      //Si es paréntesis abrir
      this.currentToken = this.getCurrentToken();
      let value = this.add();
      if (!(this.currentToken.type === tokenTypes[6])) {
        return undefined;
      }
      return value;
    }
  }

  getCurrentToken() {
    if (this.currentIndex + 1 < this.tokens.length) {
      this.currentIndex++;
      return this.tokens[this.currentIndex];
    }
    return undefined;
  }
}
