import { Estudante } from "../tipos/estudante";
import { validarEstudante } from "../validacao/validarEstudante";

const estudantes: Estudante[] = [];

export function cadastrarEstudante(
  estudante: Estudante
): void {
  const erros = validarEstudante(estudante);

  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }

  const matriculaExiste = estudantes.some(
    (item) => item.matricula === estudante.matricula
  );

  if (matriculaExiste) {
    throw new Error("Essa matrícula já está cadastrada.");
  }

  estudantes.push(estudante);
}

export function listarEstudantes(): Estudante[] {
  return [...estudantes];
}