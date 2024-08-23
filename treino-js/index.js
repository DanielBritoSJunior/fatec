import PromptSync from "prompt-sync";
const prompt = PromptSync()

// let valor = Number(prompt('Digite um número: '))
// for(let i=0; i<=10; i++){
//     let resultado = valor * i
//     console.log(`${valor} x ${i} = ${resultado}`)
// }

let saldo = Number(prompt('Insira o saldo: '))
const saldoDesejado = saldo * 3
let taxaMes = Number(prompt('Digite a taxa do mês: '))
let qntdMeses = 0

while (saldo < saldoDesejado) {
    saldo = saldo + (saldo*taxaMes)
    console.log('saldo do mês: ' ,saldo)
    qntdMeses++
}

while( saldo > saldoDesejado) {
    console.log('Você precisou de',qntdMeses, 'meses para bater a meta')
    break
}



