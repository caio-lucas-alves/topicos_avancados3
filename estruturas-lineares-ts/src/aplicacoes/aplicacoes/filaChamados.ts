import { IndexQueue } from "../estruturas/IndexQueue.js";
import { Chamado } from "../dominio/Chamado.js";

export class FilaChamados {
    private fila: IndexQueue<Chamado>;

    constructor() {
        this.fila = new IndexQueue<Chamado>();
    }

    adicionar(chamado: Chamado): void {
        this.fila.enqueue(chamado);
    }

    atenderProximo(): Chamado | undefined {
        return this.fila.dequeue();
    }

    proximoChamado(): Chamado | undefined {
        return this.fila.front();
    }

    quantidade(): number {
        return this.fila.size();
    }

    estaVazia(): boolean {
        return this.fila.isEmpty();
    }
}
