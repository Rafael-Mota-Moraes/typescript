let x = 10;

// Subtipo de number = 10
const y = 10;

let a = 100 as const;

const pessoa = { nome: "Rafael" as const, sobrenome: "Moreira" };

function escolhaCor(cor: "Vermelho" | "Amaerelo" | "Azul") {
  return cor;
}

console.log(escolhaCor("Vermelho"));

export {};
