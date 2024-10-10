//stack (pilha): last in first out, o elemento mais recente é o primeiro a ser removido
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

module.exports = Stack;

/*const stack = new Stack;
console.log(stack.isEmpty())
stack.push(5)
stack.push(8)

console.log(stack.peek())
const coisa = new Stack*/