export const tokenTypes = [
  "NUMBER",
  "ADD",
  "MINUS",
  "MULT",
  "DIV",
  "LPAREN",
  "RPAREN",
];

const regex = new RegExp(
  `((?<${tokenTypes[0]}>[0-9]+)|(?<${tokenTypes[1]}>\\+)|(?<${tokenTypes[2]}>\\-)|(?<${tokenTypes[3]}>\\*)|(?<${tokenTypes[4]}>\\/)|(?<${tokenTypes[5]}>\\()|(?<${tokenTypes[6]}>\\)))`,
  "g"
);

export class Token {
  constructor(lexeme, groups) {
    this.lexeme = lexeme;
    let whatType = tokenTypes.find((tt) => {
      if (groups[tt]) {
        return tt;
      }
    });
    if (whatType) {
      this.type = whatType;
    } else {
      this.type = "error";
    }
  }
}

export function getTokens(string){
  let iterator = [...string.matchAll(regex)];
  return iterator.map((e) => new Token(e[0], e.groups));  
}