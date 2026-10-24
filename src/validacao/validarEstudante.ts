import { Estudante } from "../tipos/estudante";

export function validarEstudante(
  estudante: Estudante
): string[] {
  const erros: string[] = [];

  if (estudante.nome.trim().length < 3) {
    erros.push("O nome deve ter pelo menos 3 caracteres.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(estudante.email)) {
    erros.push("O e-mail informado é inválido.");
  }

  if (estudante.matricula.trim() === "") {
    erros.push("A matrícula é obrigatória.");
  }

  if (estudante.id <= 0) {
    erros.push("O ID deve ser maior que zero.");
  }

  return erros;
}