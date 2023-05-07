export class Bola {
  cor: string;
  circunferencia: number;
  material: string;

  trocarCor(novaCor: string) {
    this.cor = novaCor;
  }

  mostrarCor() {
    console.log(`A cor da bola é ${this.cor}`);
  }
}
