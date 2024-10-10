function calcularMedia(numeros) {
    if (numeros.length === 0)
        return "Erro: O array está vazio.";
    return numeros.reduce(function (acc, num) { return acc + num; }, 0) / numeros.length;
}
function calcularMediana(numeros) {
    if (numeros.length === 0)
        return "Erro: O array está vazio.";
    var sorted = numeros.sort(function (a, b) { return a - b; });
    var meio = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[meio - 1] + sorted[meio]) / 2 : sorted[meio];
}
function calcularModa(numeros) {
    if (numeros.length === 0)
        return "Erro: O array está vazio.";
    var freqMap = {};
    var maxFreq = 0;
    var modas = [];
    numeros.forEach(function (num) { return freqMap[num] = (freqMap[num] || 0) + 1; });
    for (var num in freqMap) {
        if (freqMap[num] > maxFreq) {
            maxFreq = freqMap[num];
            modas = [Number(num)];
        }
        else if (freqMap[num] === maxFreq) {
            modas.push(Number(num));
        }
    }
    return modas;
}
var numeros = [1,1,1,1,2,3,4,5,6,7,8,9];
console.log("Média:", calcularMedia(numeros));
console.log("Mediana:", calcularMediana(numeros));
console.log("Moda:", calcularModa(numeros));
