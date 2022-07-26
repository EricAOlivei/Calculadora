/**
 * Serviço responsável por executar as operações da
 * calculadora.
 *
 * @author Eric A. de Oliveira<oliveiras.eric2012@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /* Define as constantes utilizadas
     para identificar as operações de cálculo */
  static readonly sum: string = '+'
  static readonly subtraction: string = '-'
  static readonly division: string = '/'
  static readonly multiplication: string = '*'

  constructor() { }

  /**
   * Método que calcula uma operação ,atemática dado
   * dois números.
   * Suporta as operações de soma, subtração, divisão e
   * multiplicação
   *
   * @param num1 num1 number
   * @param num2 num2 number
   * @param operacao operacao string Operação a ser executada
   * @returns number Resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string) {
    let result: number

    switch (operacao) {
      case CalculadoraService.sum:
        result = num1 + num2
        break
      case CalculadoraService.subtraction:
        result = num1 - num2
        break
      case CalculadoraService.division:
        result = num1 / num2
        break
      case CalculadoraService.multiplication:
        result = num1 * num2
        break
      default:
        result = 0
    }

    return result
  }
}
