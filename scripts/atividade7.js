//🔹 7 – Prioridade na fila
let filaAtendimento = [
    "cliente 003",
    "cliente 004",
    "cliente 005",
    "cliente 006",
    "cliente 007"
  ];
// adicionando cliente vip na primeira posição do índice
let clientesVip = filaAtendimento.unshift("Cliente Vip (Fernando)", "Cliente Vip (Josivaldo)");

console.log("Depois de adicionar os clientes vip", filaAtendimento);