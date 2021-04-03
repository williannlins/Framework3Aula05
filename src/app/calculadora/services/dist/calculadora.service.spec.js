"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var calculadora_service_1 = require("./calculadora.service");
describe('CalculadoraService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(calculadora_service_1.CalculadoraService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('Deve garantir que 2 + 3 = 5', testing_1.inject([calculadora_service_1.CalculadoraService], function (service) {
        var soma = service.calcular(2, 3, calculadora_service_1.CalculadoraService.SOMA);
        expect(soma).toEqual(5);
    }));
});
