
import { ArrayStack } from "./estruturas/ArrayStack.js";
import { ShiftQueue } from "./estruturas/ShiftQueue.js";
import { IndexQueue } from "./estruturas/IndexQueue.js";

const pilha = new ArrayStack<number>();

console.log("=== TESTES DA PILHA ===");

console.log(pilha.pop());
console.log(pilha.peek());

pilha.push(10);
pilha.push(20);
pilha.push(30);

console.log(pilha.peek());
console.log(pilha.size());
console.log(pilha.pop());
console.log(pilha.size());

const filaShift = new ShiftQueue<number>();

console.log("=== TESTES DA FILA SHIFT ===");

console.log(filaShift.dequeue());
console.log(filaShift.front());

for (let i = 1; i <= 500; i++) {
    filaShift.enqueue(i);
}

console.log(filaShift.size());
console.log(filaShift.front());

for (let i = 1; i <= 500; i++) {
    filaShift.dequeue();
}

console.log(filaShift.isEmpty());

const filaIndex = new IndexQueue<number>();

console.log("=== TESTES DA FILA POR INDICES ===");

console.log(filaIndex.dequeue());
console.log(filaIndex.front());

for (let i = 1; i <= 500; i++) {
    filaIndex.enqueue(i);
}

console.log(filaIndex.size());
console.log(filaIndex.front());

for (let i = 1; i <= 500; i++) {
    filaIndex.dequeue();
}

console.log(filaIndex.isEmpty());

console.log("=== COMPARACAO DE DESEMPENHO ===");

const quantidade = 10000;

const fila1 = new ShiftQueue<number>();

console.time("Fila Shift");

for (let i = 0; i < quantidade; i++) {
    fila1.enqueue(i);
}

while (!fila1.isEmpty()) {
    fila1.dequeue();
}

console.timeEnd("Fila Shift");

const fila2 = new IndexQueue<number>();

console.time("Fila por indices");

for (let i = 0; i < quantidade; i++) {
    fila2.enqueue(i);
}

while (!fila2.isEmpty()) {
    fila2.dequeue();
}

console.timeEnd("Fila por indices");
