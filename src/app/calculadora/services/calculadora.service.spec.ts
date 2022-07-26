import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', () => {
    let sum = service.calcular(1, 4, CalculadoraService.sum);
    expect(sum).toEqual(5);
  });

  it('deve garantir que 1 - 4 = -3', () => {
    let sub = service.calcular(1, 4, CalculadoraService.subtraction);
    expect(sub).toEqual(-3);
  });

  it('deve garantir que 1 / 4 = 2', () => {
    let div = service.calcular(1, 4, CalculadoraService.division);
    expect(div).toEqual(0.25);
  });

  it('deve garantir que 4 * 2 = 8', () => {
    let mult = service.calcular(4, 2, CalculadoraService.multiplication);
    expect(mult).toEqual(8);
  });

  it('deve retornar 0 para operação inválida', () => {
    let operacaoInvalida = service.calcular(1, 4, '$');
    expect(operacaoInvalida).toEqual(0);
  });
});
