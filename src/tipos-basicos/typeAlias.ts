type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto";
type CorPreferida = CorCMYK | CorRGB;

const pessoa: Pessoa = {
  idade: 18,
  nome: "Rafael",
  salario: 200_000
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, "Magenta"));

export {};
