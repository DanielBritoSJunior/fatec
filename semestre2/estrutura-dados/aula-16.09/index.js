class Deque{
    constructor(){
        this.count=0;
        this.lowestCount = 0;
        this.items = {};
    }

    addFront(element){ 
        if(this.isEmpty()){
            this.addBack(element);
        } 
        else{
            if(this.lowestCount > 0){ 
                this.lowestCount--;
                this.items[this.lowestCount] = element;
            }
            else{
                for(let i=this.count; i>0; i--){
                    this.items[i] = this.items[i-1];
                }
                this.count++;
                this.lowestCount = 0;
                this.items[0] = element;
            }
        }
        console.log(`${element} foi adicionado`)
    }

    addBack(element){  // inserir na frente.
        this.items[this.count] = element;
        this.count++;
        console.log(`${element} foi adicionado`)
    }

    removeFront(){ // remover elemento da frente.
        if(this.isEmpty()){
            return undefined;
        }
        
        const result = this.items[this.lowestCount]; 
        delete this.items[this.lowestCount];
        this.lowestCount++;
        console.log(`${result} foi removido`)
        return result;
    }

    removeBack(){
        if(this.isEmpty()){
            return undefined;
        }
        
        const result = this.items[this.count-1];
        delete this.items[this.count-1];
        this.count--;
        console.log(`${result} foi removido`)
        return result;
    }
    

    peekFront(){ // mostra, separado, quem está no começo da fila.
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    peekBack(){ // mostra, separado, quem está no final da fila.
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count-1];
    }

    clear(){  // limpa a lista
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    size(){ // retorna o comprimento do deque.
        return this.count - this.lowestCount;
    }

    isEmpty(){ // verifica se ele não está vazio.
        return this.size() === 0;
    }

    toString(){  // coverte oque tem dentro do deque em string
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

// TESTE
const deque = new Deque()
deque.addBack('John')
deque.addBack('Daniel')
deque.addBack('Jack')
console.log("deque.size()",deque.size())
console.log(deque.toString())
deque.addBack("Camila")
console.log(deque.toString())
console.log("deque.isEmpty()",deque.isEmpty())
console.log("deque.size()",deque.size())
deque.removeFront()
console.log("deque.size()" ,deque.size())
console.log(deque.toString())
deque.removeBack()
console.log(deque.toString())
deque.addFront("John")
deque.removeFront()
deque.addBack("John")
deque.addFront("Eric")
console.log(deque.toString())
deque.addFront("Felipe")
console.log(deque.toString())
console.log("deque.size()" ,deque.size())
deque.addBack("Ricardo")
console.log("deque.size()", deque.size())
console.log(deque.toString())
deque.clear()
console.log("deque.isEmpty", deque.isEmpty())
