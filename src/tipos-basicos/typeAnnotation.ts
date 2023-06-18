let nome_1: string = "Rafael";
//        Type annotation

let nome_2 = "Pedro";

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = "Rafael"; // Qualquer tipo de strings: '' "" ``
let idade: number = 18; // 10 1.57 -5.55, 0xf00d, 0b1010 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol("qualquer-symbol"); // Symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5];
let arrayDeStrings: string[] = ["a", "b"];

// Objetos

let pessoa: {
  nome: string;
  idade: number;
  adulto?: boolean;
} = {
  nome: "Rafael",
  idade: 18,
  adulto: true
};

console.log(pessoa);

// Funções

function soma(x: number, y: number): number {
  return x + y;
}

const result = soma(2, 2); // Aqui ocorre inferência
