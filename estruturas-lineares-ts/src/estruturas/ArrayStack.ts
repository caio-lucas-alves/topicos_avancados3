import { Stack } from "./Stack.js";

export class ArrayStack<T> implements Stack<T> {
    private itens: T[] = [];

    push(item: T): void {
        this.itens.push(item);
    }

    pop(): T | undefined {
        return this.itens.pop();
    }

    peek(): T | undefined {
        return this.itens[this.itens.length - 1];
    }

    isEmpty(): boolean {
        return this.itens.length === 0;
    }

    size(): number {
        return this.itens.length;
    }
}
