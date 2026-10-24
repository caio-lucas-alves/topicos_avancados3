import { Turma } from "../tipos/turma";

const turmas: Turma[] = [];

export function cadastrarTurma(turma: Turma): void {
  const idExiste = turmas.some(
    (item) => item.id === turma.id
  );

  if (idExiste) {
    throw new Error("Já existe uma turma com esse ID.");
  }

  if (!turma.nome.trim() || !turma.curso.trim()) {
    throw new Error("O nome da turma e o curso são obrigatórios.");
  }

  turmas.push(turma);
}

export function listarTurmas(): Turma[] {
  return [...turmas];
}