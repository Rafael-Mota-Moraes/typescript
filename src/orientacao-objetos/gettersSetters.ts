export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string
  ) {
    this.cpf = _cpf;
  }

  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, "");
  }
}

const pessoa = new Pessoa("Rafael", "Moreira", 18, "000.000.000-00");
pessoa.cpf = "000.000.000-99";
console.log(pessoa.cpf);
