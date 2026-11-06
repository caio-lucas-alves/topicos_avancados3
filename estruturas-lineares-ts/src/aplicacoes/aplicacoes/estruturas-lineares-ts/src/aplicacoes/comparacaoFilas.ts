import { ShiftQueue } from "../estruturas/ShiftQueue.js";
import { IndexQueue } from "../estruturas/IndexQueue.js";

const quantidade = 10000;

const filaShift = new ShiftQueue<number>();
const filaIndex = new IndexQueue<number>();

console.time("Fila com shift");

for (let i = 0; i < quantidade; i++) {
    filaShift.enqueue(i);
}

while (!filaShift.isEmpty()) {
    filaShift.dequeue();
}

console.timeEnd("Fila com shift");

console.time("Fila com indices");

for (let i = 0; i < quantidade; i++) {
    filaIndex.enqueue(i);
}

while (!filaIndex.isEmpty()) {
    filaIndex.dequeue();
}

console.timeEnd("Fila com indices");
