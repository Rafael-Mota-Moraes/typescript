type TemNome = {
  nome: string;
};

type TemSobrenome = {
  sobrenome: string;
};

type TemIdade = {
  idade: number;
};

// OU
// type Pessoa = TemNome | TemIdade | TemSobrenome;
// AND
type Pessoa = TemNome & TemIdade & TemSobrenome;

const pessoa: Pessoa = {
  idade: 18,
  nome: "Rafael",
  sobrenome: "Moreira"
};

export {};
