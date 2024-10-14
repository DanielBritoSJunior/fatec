class Processo {
    constructor(id, nome, prioridade, tempoEspera) {
        this.id = id;
        this.nome = nome;
        this.prioridade = prioridade;
        this.tempoEspera = tempoEspera;
    }

    toString() {
        return `Processo(ID=${this.id}, Nome=${this.nome}, Prioridade=${this.prioridade}, Espera=${this.tempoEspera})`;
    }
}

class GerenciadorDeProcessos {
    constructor() {
        this.fila = [];
    }

    incluirProcesso(id, nome, prioridade, tempoEspera) {
        const novoProcesso = new Processo(id, nome, prioridade, tempoEspera);
        if (prioridade === 0) {
            this.fila.unshift(novoProcesso); // Inserir no início se a prioridade for 0
        } else {
            this.fila.push(novoProcesso);    // Inserir no final para outras prioridades
        }
    }

    matarMaiorEspera() {
        if (this.fila.length === 0) {
            console.log("Nenhum processo na fila.");
            return;
        }

        let maiorEsperaIndex = 0;
        this.fila.forEach((processo, index) => {
            if (processo.tempoEspera > this.fila[maiorEsperaIndex].tempoEspera) {
                maiorEsperaIndex = index;
            }
        });

        const removido = this.fila.splice(maiorEsperaIndex, 1)[0];
        console.log(`Processo removido: ${removido}`);
    }

    executarProcesso() {
        if (this.fila.length === 0) {
            console.log("Nenhum processo na fila.");
            return;
        }

        const processo = this.fila.shift(); // Remover o processo do início
        console.log(`Processo executado: ${processo}`);
    }

    imprimirProcessos() {
        if (this.fila.length === 0) {
            console.log("Nenhum processo na fila.");
            return;
        }

        this.fila.forEach(processo => {
            console.log(processo.toString());
        });
    }
}

// Exemplo de uso
const gerenciador = new GerenciadorDeProcessos();
gerenciador.incluirProcesso(104, "Window Manager", 4, 20);
gerenciador.incluirProcesso(101, "System Process", 0, 5);
gerenciador.incluirProcesso(105, "User Application", 2, 15);

gerenciador.imprimirProcessos();
gerenciador.matarMaiorEspera();
gerenciador.executarProcesso();
gerenciador.imprimirProcessos();
