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

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }

  getNomeCompleto(): string {
    console.log("Fazendo algo antes");
    return super.getNomeCompleto();
  }
}

export class Cliente extends Pessoa {}

const aluno = new Aluno("Rafael", "Moreira", 18, "000.000.000-00", "LAB 2");
const cliente = new Cliente("Rafael", "Moreira", 18, "000.000.000-00");
const pessoa = new Pessoa("Rafael", "Moreira", 18, "000.000.000-00");

console.log(aluno.getNomeCompleto());
console.log(aluno);
