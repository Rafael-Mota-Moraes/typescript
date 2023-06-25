export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log("Não posso escrever sem ferramenta");
      return;
    }

    this._ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor("Rafa");
const caneta = new Caneta("BIC");
const maquinaEscrever = new MaquinaEscrever("Positivo");

escritor.ferramenta = maquinaEscrever;

escritor.escrever();
