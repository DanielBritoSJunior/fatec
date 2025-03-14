"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soma = soma;
exports.sub = sub;
exports.mult = mult;
exports.divisao = divisao;
function soma(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mult(a, b) {
    if (b == 0)
        throw new Error('Divisão por zero');
    return a * b;
}
function divisao(a, b) {
    return a / b;
}
