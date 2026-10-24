import { cadastrarEstudante, listarEstudantes } from "./servicos/estudanteService";
import { cadastrarTurma, listarTurmas } from "./servicos/turmaService";
import {
  cadastrarChamado,
  listarChamados,
  atualizarStatusChamado
} from "./servicos/chamadoService";

console.log("=== CADASTRO ACADÊMICO ===");

try {
  cadastrarEstudante({
    id: 1,
    nome: "Maria Silva",
    email: "maria@email.com",
    matricula: "2026001"
  });

  cadastrarTurma({
    id: 1,
    nome: "Turma A",
    curso: "Informática"
  });

  cadastrarChamado({
    id: 1,
    estudanteId: 1,
    descricao: "Problema no acesso ao sistema",
    status: "aberto"
  });

  atualizarStatusChamado(1, "em andamento");

  console.log("\nEstudantes cadastrados:");
  console.log(listarEstudantes());

  console.log("\nTurmas cadastradas:");
  console.log(listarTurmas());

  console.log("\nChamados registrados:");
  console.log(listarChamados());

} catch (erro) {
  console.error(
    "Erro:",
    erro instanceof Error ? erro.message : erro
  );
}