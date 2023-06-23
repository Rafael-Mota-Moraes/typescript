export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {}

export class Cliente extends Pessoa {}

const aluno = new Aluno("Rafael", "Moreira", 18, "000.000.000-00");
const cliente = new Cliente("Rafael", "Moreira", 18, "000.000.000-00");
const pessoa = new Pessoa("Rafael", "Moreira", 18, "000.000.000-00");

console.log(aluno);
console.log(cliente);
console.log(pessoa);
