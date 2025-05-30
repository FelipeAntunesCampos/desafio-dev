//🔹 6 – Primeira mensagem indevida
let mensagens = [
    "Propaganda indevida",
    "Bom dia, posso ajudar?",
    "Preciso de suporte técnico",
    "Claro, qual o problema?",
    "Erro ao acessar conta"
  ];
  // removendo a primeira mensagem(indevida)
let mensagemRemovida = mensagens.shift();

console.log("Depois da remoção do primeiro item da lista", mensagens);
console.log("Item que foi removido: ", mensagemRemovida);  