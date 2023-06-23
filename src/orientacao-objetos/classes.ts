export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Empresa("Google", "100.100.100.100");
const c1 = new Colaborador("Rafael", "Moreira");
const c2 = new Colaborador("João", "Silva");

empresa1.adicionaColaborador(c1);
empresa1.adicionaColaborador(c2);

empresa1.mostrarColaboradores();

console.log(empresa1);
