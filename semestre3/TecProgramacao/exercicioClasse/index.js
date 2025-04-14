var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Veiculo.prototype.descrever = function () {
        console.log("Ve\u00EDculo: ".concat(this.marca, " ").concat(this.modelo, ", Ano: ").concat(this.ano));
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(marca, modelo, ano, numeroDePortas) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.numeroDePortas = numeroDePortas;
        return _this;
    }
    Carro.prototype.descrever = function () {
        console.log("Carro: ".concat(this.marca, " ").concat(this.modelo, ", Ano: ").concat(this.ano, ", Portas: ").concat(this.numeroDePortas));
    };
    return Carro;
}(Veiculo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, ano, temCarenagem) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.temCarenagem = temCarenagem;
        return _this;
    }
    Moto.prototype.descrever = function () {
        var carenagemInfo = this.temCarenagem ? 'com carenagem' : 'sem carenagem';
        console.log("Moto: ".concat(this.marca, " ").concat(this.modelo, ", Ano: ").concat(this.ano, ", ").concat(carenagemInfo));
    };
    return Moto;
}(Veiculo));
var carro1 = new Carro('Toyota', 'Corolla', 2021, 4);
var moto1 = new Moto('Honda', 'CB500F', 2022, false);
carro1.descrever();
moto1.descrever();
