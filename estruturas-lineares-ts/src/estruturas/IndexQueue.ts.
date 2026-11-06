import { Queue } from "./Queue.js";

export class IndexQueue<T> implements Queue<T> {
    private itens: (T | undefined)[] = [];
    private inicio: number = 0;
    private fim: number = 0;

    enqueue(item: T): void {
        this.itens[this.fim] = item;
        this.fim++;
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        const item = this.itens[this.inicio];

        delete this.itens[this.inicio];

        this.inicio++;

        if (this.inicio === this.fim) {
            this.itens = [];
            this.inicio = 0;
            this.fim = 0;
        }

        return item;
    }

    front(): T | undefined {
        return this.itens[this.inicio];
    }

    isEmpty(): boolean {
        return this.inicio === this.fim;
    }

    size(): number {
        return this.fim - this.inicio;
    }
}
