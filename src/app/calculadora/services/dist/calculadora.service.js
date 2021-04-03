"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalculadoraService = void 0;
var core_1 = require("@angular/core");
var CalculadoraService = /** @class */ (function () {
    function CalculadoraService() {
    }
    CalculadoraService_1 = CalculadoraService;
    /**
     * Metodo utilizado para calcular o valor da operação
     * @param num1: primeiro valor inserido pelo usuário na calculadora
     * @param num2: segundo valor inserido pelo usuário na calculadora
     * @param operacao: Operação solicitada pelo usuário
     * @returns: Resultado
     */
    CalculadoraService.prototype.calcular = function (num1, num2, operacao) {
        var resultado;
        switch (operacao) {
            case CalculadoraService_1.SOMA:
                resultado = num1 + num2;
                break;
            case CalculadoraService_1.SUBTRACAO:
                resultado = num1 - num2;
                break;
            case CalculadoraService_1.DIVISAO:
                resultado = num1 / num2;
                break;
            case CalculadoraService_1.MULTIPLICACAO:
                resultado = num1 * num2;
                break;
            default:
                resultado = 0;
        }
        return resultado;
    };
    var CalculadoraService_1;
    //Definição das constantes para identificar as operações
    CalculadoraService.SOMA = "+";
    CalculadoraService.SUBTRACAO = "-";
    CalculadoraService.DIVISAO = "/";
    CalculadoraService.MULTIPLICACAO = "*";
    CalculadoraService = CalculadoraService_1 = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CalculadoraService);
    return CalculadoraService;
}());
exports.CalculadoraService = CalculadoraService;
