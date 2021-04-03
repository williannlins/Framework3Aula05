import { TestBed, inject } from '@angular/core/testing';

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

  it('Deve garantir que 2 + 3 = 5',
    inject([CalculadoraService], (service: CalculadoraService)=> {
      let soma = service.calcular(2, 3, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    }))
  it('Deve garantir que 3 - 2 = 1',
    inject([CalculadoraService], (service: CalculadoraService)=> {
      let subtracao = service.calcular(3, 2, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(1);
   }))
  it('Deve garantir que 3 * 2 = 6',
    inject([CalculadoraService], (service: CalculadoraService)=> {
    let multiplicacao = service.calcular(3, 2, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(6);
  }))
  it('Deve garantir que 10 / 2 = 5',
    inject([CalculadoraService], (service: CalculadoraService)=> {
    let divisao = service.calcular(10, 2, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(5);
  }))

  it('Deve garantir que 10 / 0 = não exite numero divisivel por zero',
    inject([CalculadoraService], (service: CalculadoraService)=> {
    let divisao = service.calcular(10, 0, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(Infinity);
  }))


});
