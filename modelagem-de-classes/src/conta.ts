export class Conta {
  numeroDaConta: number;
  nomeDoCorrentista: string;
  saldo: number;

  alterarNome(novoNome: string) {
    this.nomeDoCorrentista = novoNome;
  }

  depositar(valor: number) {
    this.saldo += valor;
    console.log(
      `Você depositou R$${valor}. Seu saldo atual é de ${this.saldo}`
    );
  }

  sacar(valor: number) {
    if (this.saldo <= valor) {
      console.log(
        `Saldo insuficiente para realizar o saque. Seu saldo atual é de R$${this.saldo}`
      );
    } else {
      this.saldo -= valor;
      console.log(`Você sacou R$${valor}. Seu saldo atual é de ${this.saldo}`);
    }
  }
}
