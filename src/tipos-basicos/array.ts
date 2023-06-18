// Array<T> - T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, string) => ac + string, "");
}

console.log(multiplicaArgs(2, 2, 2));
console.log(concatenaStrings("a", "b", "c"));
