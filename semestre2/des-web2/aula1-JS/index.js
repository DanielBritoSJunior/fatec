// // Variáves

// const a = 10    // variável constante
// let b = 20  //  pode mudar o valor, não é constante
// var c = 30  // não é muito apropriado usar var para variáveis

// // Operações

// const total = a + b
// console.log(total)

// // if and else


// if (total > 30) {
//     console.log('Total > que 30')
// } else {
//     console.log('Total <= 30')
// }


// //  Switch

// const dia = 'segunda'

// switch (dia.toLowerCase()) {
//     case 'segunda':
//         console.log('aberto')
//         break;
//     case 'sabado':
//         console.log('fechado')
//         break;
//     default:
//         console.log('meio aberto')
//         break;
// }

// let idade = 18
// let podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode beber' //if ternário
// console.log(podeBeber)

// // Outra forma de fazer o de cima

// // if(idade >=18) {
// //     podeBeber = 'Pode beber'
// // }   else {
// //     podeBeber = 'Não pode beber'
// // }
// // console.log(podeBeber)

// const maiorIdade = true
// const temCarteiraTrab = false
// // && and || or
// const podeAplicarVaga = maiorIdade && temCarteiraTrab

// // Operador de negação

// if(!maiorIdade){
//     // coloca exclamação no começo
// }

// // Laços de repetição

// // FOR

// for (let i = 0; i <= 10; i++) { // (x;y;z) x= começo y= até onde vai z= incrementador
//     console.log(i)
// }

// let count = 0
// let valor = 150
// let valorAcrescimo = 0.2
// let novoValor = valor
// while(novoValor < valor * 3) {
//     novoValor = novoValor + novoValor * valorAcrescimo
//     count ++
// }

// console.log(count)


// Praticando + instalação da biblioteca Promt-Sync

// const prompt = require('prompt-sync')() // importação prompt para usuario entrar com o valor


// let saldo = Number(prompt('Digite o saldo inicial: '))
// const saldoDesejado = saldo * 3
// let taxaMes = Number(prompt('Digite a taxa: '))
// let qntMeses = 0

// while (saldo < saldoDesejado) {
    //     saldo = saldo + (saldo*taxaMes)
    //     console.log(saldo)
    //     qntMeses++
    // }
    
    // console.log('Quantidade de meses necessários:', qntMeses)
    
import PromptSync from "prompt-sync"
const prompt = PromptSync()

let valor = Number(prompt('Digite o valor: '))
for(let i=0; i<=10 ; i++) {
    let resultado = i * valor
    console.log(`${valor}x${i}=${resultado}`)
}
