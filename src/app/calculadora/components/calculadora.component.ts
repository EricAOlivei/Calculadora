import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private num1: string;
  private num2: string;
  private result: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicializa todos os  operadores para os valores padrão.
   *
   * @return void
   */
  limpar(): void {
    this.num1 = '0';
    this.num2 = null;
    this.result = null;
    this.operacao = null;
  }

  /**
   * Adiciona o número selecionado para o cálculo posteriormente
   *
   * @param string num
   * @return void
   */
  adicionarNumero(num: string): void {
    if (this.operacao === null) {
      this.num1 = this.concatenarNumero(this.num1, num);
    } else {
      this.num2 = this.concatenarNumero(this.num2, num);
    }
  }

  /**
   * Retorna o valor concatenado. Trata o separador decimal.
   *
   * @param string numAtual
   * @param string numConcat
   * @return string
   */
  concatenarNumero(numAtual: string, numConcat: string) {
    //caso tenha apenas '0' ou null, reinica o valor
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    //primeiro dígito é '.', concatena '0' antes do ponto
    if (numConcat === '.' && numAtual === '') {
      return numAtual;
    }

    //caso '.' digitado e já contenha um '.', apenas retorna
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }


  /**
   * Executa lógica quando um operador for selecionado.
   * Caso já possua uma opeação selecionada, executa a
   * operação anterior, e define uma nova operação.
   *
   * @param string operacao
   * @return void
   */
  definirOperacao(operacao: string) {
    //apenas define a operação caso não exista uma
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    /* caso operação definida e o segundo número selecionado,
      efetua o cálculo da operação */
    if (this.num2 !== null) {
      this.result = this.calculadoraService.calcular(
        parseFloat(this.num1),
        parseFloat(this.num2),
        this.operacao);
      this.operacao = operacao;
      this.num1 = this.result.toString();
      this.num2 = null;
      this.result = null;
    }
  }

  /**
   * Retorna o cálculo de uma operação.
   *
   * @return void
   */
  calcular(): void {
    if (this.num2 === null) {
      return;
    }

    this.result = this.calculadoraService.calcular(
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.operacao);
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   *
   * @return string
   */
  get display() {
    if (this.result !== null) {
      return this.result.toString();
    }
    if (this.num2) {
      return this.num2;
    }
    return this.num1;
  }
}
