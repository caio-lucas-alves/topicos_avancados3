# Biblioteca Genérica de Estruturas Lineares

## Objetivo

Desenvolver uma biblioteca genérica em TypeScript com estruturas de dados lineares, utilizando pilhas e filas.

## Estruturas implementadas

- Stack<T>: interface de pilha.
- Queue<T>: interface de fila.
- ArrayStack<T>: implementação de pilha utilizando array.
- ShiftQueue<T>: implementação de fila utilizando shift.
- IndexQueue<T>: implementação de fila utilizando índices.

## Integração com o sistema acadêmico

- ArrayStack<AlteracaoCampo>: utilizada para armazenar alterações de formulários e permitir desfazer operações.
- IndexQueue<Chamado>: utilizada para organizar os chamados de atendimento.
- ShiftQueue<T>: utilizada para comparação de desempenho com a fila por índices.

## Complexidade das operações

### Pilha (ArrayStack)

- push: O(1) amortizado.
- pop: O(1).
- peek: O(1).
- isEmpty: O(1).
- size: O(1).

### Fila com shift (ShiftQueue)

- enqueue: O(1) amortizado.
- dequeue: O(n), pois os elementos precisam ser reorganizados.
- front: O(1).

### Fila por índices (IndexQueue)

- enqueue: O(1) amortizado.
- dequeue: O(1).
- front: O(1).

## Comparação de desempenho

A ShiftQueue utiliza o método shift(), que reorganiza os elementos após a remoção.

A IndexQueue utiliza índices de início e fim, evitando a reorganização dos elementos.

Por isso, a fila por índices é mais eficiente para grandes quantidades de operações.

## Testes

O arquivo testes.ts realiza testes de pilha e filas, incluindo estruturas vazias, inserção, remoção e comparação de desempenho utilizando console.time() e console.timeEnd().

## Tecnologias utilizadas

- TypeScript
- JavaScript
- Node.js
- GitHub
