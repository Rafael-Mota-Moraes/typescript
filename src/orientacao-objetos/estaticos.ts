export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = "";

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa("Rafael", "Moreira", 18, "000.000.000-00");
const pessoa2 = Pessoa.criaPessoa("Maria", "Silva");

console.log(pessoa1);
console.log(pessoa2);
