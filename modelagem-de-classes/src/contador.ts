export class Contador {
  valor: number;

  zerar() {
    this.valor = 0;
  }

  incrementar() {
    this.valor++;
  }

  retornarValor() {
    console.log(`O valor do contador é ${this.valor}`);
  }
}
