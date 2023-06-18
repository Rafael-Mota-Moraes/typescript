const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: "Valor A",
  chaveB: "Valor B",
  chaveC: "Valor C",
  chaveD: "Valor D"
};

objetoA.chaveB = "Outro valor";
objetoA.chaveD = "Chave D";

console.log(objetoA);
