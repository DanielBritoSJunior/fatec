function fibonacci(n) {
    // Verifica se n é menor que 0, e lança um erro se for o caso
    if (n < 0) {
        throw new Error("O índice deve ser um número inteiro não negativo.");
    }
    
    // Casos base
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Array para armazenar os números de Fibonacci
    let fib = [0, 1];
    
    // Calcula os números de Fibonacci até a posição n
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    // Retorna o número na posição n
    return fib[n];
}

// Exemplos de uso
console.log(fibonacci(3)); // Saída: 2
console.log(fibonacci(7)); // Saída: 13
console.log(fibonacci(9)); // Saída: 34
console.log(fibonacci(10))
