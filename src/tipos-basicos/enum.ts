enum Cores {
  VERMELHO = "VERMELHO",
  AZUL = "AZUL",
  AMARELO = "AMARELO"
}

enum Cores {
  ROXO = "ROXO",
  PRETO = "PRETO"
}

console.log(Cores);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
