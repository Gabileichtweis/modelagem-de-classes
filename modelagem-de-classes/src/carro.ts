export class Carro {
  consumoCombustivel: number;
  quantidadeCombustivel: number;

  andar(km: number) {
    this.quantidadeCombustivel -= km / this.consumoCombustivel;

    console.log(`Você andou ${km}km`);
  }

  obterGasolina() {
    console.log(
      `A quantidade de combustível disponível é ${this.quantidadeCombustivel} litros`
    );
  }

  adicionarGasolina(combustivel: number) {
    this.quantidadeCombustivel += combustivel;

    console.log(`Você adicionou ${combustivel} litros de combustível`);
  }
}
