export interface Chamado {
  id: number;
  estudanteId: number;
  descricao: string;
  status: "aberto" | "em andamento" | "resolvido";
}