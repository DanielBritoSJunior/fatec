function calcularMedia(numeros: number[]): number | string {
    if (numeros.length === 0) return "Erro: O array está vazio.";
    return numeros.reduce((acc, num) => acc + num, 0) / numeros.length;
}

function calcularMediana(numeros: number[]): number | string {
    if (numeros.length === 0) return "Erro: O array está vazio.";
    const sorted = numeros.sort((a, b) => a - b);
    const meio = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[meio - 1] + sorted[meio]) / 2 : sorted[meio];
}

function calcularModa(numeros: number[]): number[] | string {
    if (numeros.length === 0) return "Erro: O array está vazio.";
    const freqMap: Record<number, number> = {};
    let maxFreq = 0;
    let modas: number[] = [];

    numeros.forEach(num => freqMap[num] = (freqMap[num] || 0) + 1);

    for (const num in freqMap) {
        if (freqMap[num] > maxFreq) {
            maxFreq = freqMap[num];
            modas = [Number(num)];
        } else if (freqMap[num] === maxFreq) {
            modas.push(Number(num));
        }
    }

    return modas;
}

const numeros = [];

console.log("Média:", calcularMedia(numeros));
console.log("Mediana:", calcularMediana(numeros));
console.log("Moda:", calcularModa(numeros));
