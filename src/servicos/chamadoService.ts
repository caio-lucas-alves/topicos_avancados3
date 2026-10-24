import { Chamado } from "../tipos/chamado";

const chamados: Chamado[] = [];

export function cadastrarChamado(chamado: Chamado): void {
  const idExiste = chamados.some(
    (item) => item.id === chamado.id
  );

  if (idExiste) {
    throw new Error("Já existe um chamado com esse ID.");
  }

  if (!chamado.descricao.trim()) {
    throw new Error("A descrição do chamado é obrigatória.");
  }

  chamados.push(chamado);
}

export function listarChamados(): Chamado[] {
  return [...chamados];
}

export function atualizarStatusChamado(
  id: number,
  status: Chamado["status"]
): void {
  const chamado = chamados.find((item) => item.id === id);

  if (!chamado) {
    throw new Error("Chamado não encontrado.");
  }

  chamado.status = status;
}