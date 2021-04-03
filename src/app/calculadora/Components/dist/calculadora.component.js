"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalculadoraComponent = void 0;
var core_1 = require("@angular/core");
var CalculadoraComponent = /** @class */ (function () {
    function CalculadoraComponent(CalculadoraService) {
        this.CalculadoraService = CalculadoraService;
    }
    CalculadoraComponent.prototype.ngOnInit = function () {
        this.limpar();
    };
    CalculadoraComponent.prototype.limpar = function () {
        this.numero1 = '0';
        this.numero2 = null;
        this.resultado = null;
        this.operacao = null;
    };
    CalculadoraComponent.prototype.adicionarNumero = function (Numero) {
        if (this.operacao === null) {
            this.numero1 = this.concatenarNumero(this.numero1, Numero);
        }
        else {
            this.numero2 = this.concatenarNumero(this.numero2, Numero);
        }
    };
    CalculadoraComponent.prototype.concatenarNumero = function (numAtual, numConcat) {
        if (numAtual === '0' || numAtual === null) {
            numAtual = '';
        }
        if (numConcat === '.' && numAtual === '') {
            return '0.';
        }
        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual;
        }
        return numAtual + numConcat;
    };
    CalculadoraComponent.prototype.definirOperacao = function (operacao) {
        if (this.operacao === null) {
            this.operacao = operacao;
            return;
        }
        if (this.numero2 !== null) {
            this.resultado = this.CalculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
            this.operacao = operacao;
            this.numero1 = this.resultado.toString();
            this.numero2 = null;
            this.resultado = null;
        }
    };
    CalculadoraComponent.prototype.calcular = function () {
        if (this.numero2 === null) {
            return;
        }
        this.resultado = this.CalculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
    };
    Object.defineProperty(CalculadoraComponent.prototype, "display", {
        get: function () {
            if (this.resultado !== null) {
                return this.resultado.toString();
            }
            if (this.numero2 !== null) {
                return this.numero2;
            }
            return this.numero1;
        },
        enumerable: false,
        configurable: true
    });
    CalculadoraComponent = __decorate([
        core_1.Component({
            selector: 'app-calculadora',
            templateUrl: './calculadora.component.html',
            styleUrls: ['./calculadora.component.css']
        })
    ], CalculadoraComponent);
    return CalculadoraComponent;
}());
exports.CalculadoraComponent = CalculadoraComponent;
