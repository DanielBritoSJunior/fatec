class Stack {
    constructor() {
        this.items = [];
    }

    push(element) { // adiciona em cima
        this.items.push(element)
    }

    pop() { // tira do topo e devolve
        return this.items.pop()
    }

    peek() {  // mostra qual está no topo
        return this.items[this.items.length - 1]
    }

    isEmpty() {  // vazio ou não
        return this.items.length === 0
    }

    size() { // tamanho
        return this.items.length
    }

    clear() {
        this.items = []
    }
}

// EXERCÍCIO

let pilha1 = new Stack()
let pilha2 = new Stack()
let pilha3 = new Stack()
let aux

pilha1.push(3)
pilha1.push(2)
pilha1.push(1)
 
aux = pilha1.pop()
pilha3.push(aux)
 
aux = pilha1.pop()
pilha2.push(aux)
 
aux = pilha3.pop()
pilha2.push(aux)
 
aux = pilha1.pop()
pilha3.push(aux)
 
aux = pilha2.pop()
pilha1.push(aux)

aux = pilha2.pop()
pilha3.push(aux)

aux = pilha1.pop()
pilha3.push(aux)

 
console.log(`Torre 1: ${pilha1.items}`)
console.log(`Torre 2: ${pilha2.items}`)
console.log(`Torre 3: ${pilha3.items}`)