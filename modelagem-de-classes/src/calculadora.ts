export class Calculadora {
  historico: string[] = [];

  visualizarHistorico() {
    console.log(this.historico);
  }

  somar(valor1: number, valor2: number) {
    const soma = valor1 + valor2;
    console.log(`A soma de ${valor1} e ${valor2} é ${soma}`);

    this.historico.push(`${valor1} + ${valor2} = ${soma}`);
  }

  multiplicar(valor1: number, valor2: number) {
    const multiplicacao = valor1 * valor2;
    console.log(`A multiplicação de ${valor1} e ${valor2} é ${multiplicacao}`);

    this.historico.push(`${valor1} * ${valor2} = ${multiplicacao}`);
  }

  dividir(valor1: number, valor2: number) {
    const divisao = valor1 / valor2;
    console.log(`A divisão de ${valor1} e ${valor2} é ${divisao}`);

    this.historico.push(`${valor1} / ${valor2} = ${divisao}`);
  }

  subtrair(valor1: number, valor2: number) {
    const subtracao = valor1 - valor2;
    console.log(`A subtração de ${valor1} e ${valor2} é ${subtracao}`);

    this.historico.push(`${valor1} - ${valor2} = ${subtracao}`);
  }
}
