function semRetorno(...args: string[]): void {
  for (let arg of args) {
    console.log("Função sem retorno + " + arg);
  }
}

semRetorno("a", "b", "c");
