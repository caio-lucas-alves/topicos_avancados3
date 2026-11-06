import { Queue } from "./Queue.js";

export class ShiftQueue<T> implements Queue<T> {
    private itens: T[] = [];

    enqueue(item: T): void {
        this.itens.push(item);
    }

    dequeue(): T | undefined {
        return this.itens.shift();
    }

    front(): T | undefined {
        return this.itens[0];
    }

    isEmpty(): boolean {
        return this.itens.length === 0;
    }

    size(): number {
        return this.itens.length;
    }
}
