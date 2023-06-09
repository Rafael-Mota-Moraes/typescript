export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida.`);
  }

  abstract bordao(): void;
}

class Guerreira extends Personagem {
  protected emoji: string = "\u{1F9DD}";

  bordao(): void {
    console.log(this.emoji + " ATAQUE DA GUERREIRA");
  }
}

class Monstro extends Personagem {
  protected emoji: string = "\u{1F9DF}";

  bordao(): void {
    console.log(this.emoji + " ATAQUE DO MONSTRO");
  }
}

const guerreira = new Guerreira("Guerreira", 100, 1000);
const monstro = new Monstro("Monstro", 80, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);

monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
