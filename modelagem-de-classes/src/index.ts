import { Bola } from './bola';
import { BombaCombustivel } from './bombaCombustivel';
import { Calculadora } from './calculadora';
import { Carro } from './carro';
import { Conta } from './conta';
import { Contador } from './contador';

const Atividade1 = () => {
  const contador = new Contador();

  contador.valor = 10;
  contador.incrementar();
  contador.retornarValor();
  contador.zerar();
  contador.retornarValor();

  console.log(contador);
};

const Atividade2 = () => {
  const bola = new Bola();

  bola.cor = 'azul';
  bola.circunferencia = 12;
  bola.material = 'eva';

  bola.mostrarCor();

  bola.trocarCor('dourada');

  bola.mostrarCor();

  console.log(bola);
};

const Atividade3 = () => {
  const conta = new Conta();

  conta.numeroDaConta = 1;
  conta.nomeDoCorrentista = 'Gabriela';
  conta.saldo = 150000;

  console.log(conta);

  conta.alterarNome('Gabriela Leichtweis');
  conta.depositar(1000);
  conta.sacar(500);

  console.log(conta);
};

const Atividade4 = () => {
  const calculadora = new Calculadora();

  calculadora.somar(5, 5);
  calculadora.multiplicar(5, 5);
  calculadora.dividir(5, 5);
  calculadora.subtrair(5, 5);
  calculadora.visualizarHistorico();

  console.log(calculadora);
};

const Atividade5 = () => {
  const bombaCombustivel = new BombaCombustivel();

  bombaCombustivel.tipoCombustivel = 'gasolina';
  bombaCombustivel.valorLitro = 4;
  bombaCombustivel.quantidadeCombustivel = 100;

  bombaCombustivel.abastecerPorValor(100);
  bombaCombustivel.abastecerPorLitro(25);
  bombaCombustivel.alterarValor(5);
  bombaCombustivel.alterarCombustível('disel');
  bombaCombustivel.alterarQuantidadeCombustivel(100);
};

const Atividade6 = () => {
  const carro = new Carro();

  carro.consumoCombustivel = 5;
  carro.quantidadeCombustivel = 0;

  carro.adicionarGasolina(100);
  carro.andar(40);
  carro.obterGasolina();
};
