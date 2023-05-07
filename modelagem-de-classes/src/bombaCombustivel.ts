export class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  quantidadeCombustivel: number;

  abastecerPorValor(valor: number) {
    const abastecimento = valor / this.valorLitro;
    if (this.quantidadeCombustivel < abastecimento) {
      console.log(
        'Não é possível realizar o abastecimento por falta de combustível'
      );
    } else {
      this.quantidadeCombustivel -= abastecimento;

      console.log(`A quantidade abastecida é ${abastecimento} litros`);
      console.log(
        `A quantidade de combustível total da bomba é ${this.quantidadeCombustivel} litros`
      );
    }
  }

  abastecerPorLitro(litros: number) {
    if (this.quantidadeCombustivel < litros) {
      console.log(
        'Não é possível realizar o abastecimento por falta de combustível'
      );
    } else {
      this.quantidadeCombustivel -= litros;
      const valorFinal = litros * this.valorLitro;

      console.log(`O valor a ser pago é R$${valorFinal}`);
      console.log(
        `A quantidade de combustível total da bomba é ${this.quantidadeCombustivel} litros`
      );
    }
  }

  alterarValor(novoValor: number) {
    this.valorLitro = novoValor;

    console.log(
      `O novo valor do combustível ${this.tipoCombustivel} é ${this.valorLitro}`
    );
  }

  alterarCombustível(novoCombustivel: string) {
    this.tipoCombustivel = novoCombustivel;

    console.log(`O combustível é ${this.tipoCombustivel}`);
  }

  alterarQuantidadeCombustivel(novaQuantidade: number) {
    this.quantidadeCombustivel = novaQuantidade;

    console.log(`Há ${this.quantidadeCombustivel} litros disponíveis`);
  }
}
