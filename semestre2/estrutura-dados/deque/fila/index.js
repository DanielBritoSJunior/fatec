//queue (fila): first in first out, o elemento mais antigo é o primeiro a ser removido
//lowestCount: começo da fila, próximo elemento a ser retirado
//count: fim da fila, último elemento a ser retirado
class Queue {
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    };
    size(){
        return this.count - this.lowestCount;
    };
    isEmpty(){
        return this.size() === 0;
    };
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    };
    dequeue(){
        if (this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    peek(){
        if (this.isEmpty()){
            return undefined;
        };
        return this.items[this.lowestCount];
    };
    clear(){
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    };
    toString(){
        if (this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`;
        };
        return objString;
    }
};

module.exports = Queue;

/*let fila = new Queue();
console.log(fila.isEmpty())
fila.enqueue('John')
fila.enqueue('Jack')
console.log(fila.toString())
fila.enqueue('Camila')*/