class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.count = 0
    }

    push(element) {
        const node = new Node(element)
        if (this.head == null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    insertInOrder(element) {
        const node = new Node(element)
        if (this.head == null || this.head.element > element) {
            node.next = this.head
            this.head = node
        } else {
            let current = this.head
            while (current.next != null && current.next.element < element) {
                current = current.next
            }
            node.next = current.next
            current.next = node
        }
        this.count++
    }
    
    toString() {
        let current = this.head
        let string = ''
        while (current) {
            string += current.element + (current.next ? ' -> ' : '')
            current = current.next
        }
        return string
    }
}
const listaDesordenada = new LinkedList()
const nomesDesordenados = ['ARTHUR DAVI GOMES',
'BRUNO HENRIQUE QUERICHELLI GARCIA',
'CAIO HENRIQUE FERREIRA DE SOUZA',
'DANIEL BRITO DA SILVA JUNIOR',
'DANIEL GALVAO MAGALHAES DA SILVA',
'DAVI BERTO MANSUR DUARTE',
'ELISA APARECIDA MARTINS DE OLIVEIRA',
'ERIC VINICIUS DA SILVA MENEGON',
'FELIPE AUGUSTO PEREIRA LEMES',
'FERNANDA VICTORIA FELIX OLIVEIRA',
'ADRIANO DOS SANTOS',
'GIOVANI DE BIAGI ALVES',
'VITOR CARDOSO DA CRUZ',
'GRAZIELLA SOUZA',
'RODRIGO MORAES DE SOUZA GARCIA',
'HOSANA AZEVEDO PIRES',
'JOAO PEDRO SOUZA SILVA',
'LEONARDO VINÍCIUS GURTLER HUBERT',
'MARCELO HENRIQUE REDUZINO',
'WILLIAM SILVA DOS REIS',
'NATHAN FERRACINI BATISTA',
'GUSTAVO SILVA DE CARVALHO',
'PEDRO HENRIQUE BONOMO SANTOS',
'RAMON GODINHO',
'JOAO VITOR FERNANDES DE MATOS ROCHA',
'MATHEUS HENRIQUE ALMEIDA VIEIRA NEVES',
'ROBSON ALAN MANTOVANI'
]

for (let nome of nomesDesordenados) {
    listaDesordenada.push(nome)
}

const listaOrdenada = new LinkedList()


let current = listaDesordenada.head
while (current) {
    listaOrdenada.insertInOrder(current.element)
    current = current.next
}


console.log(listaOrdenada.toString())
