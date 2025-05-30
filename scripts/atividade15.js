//🔹 15 – Remoção de itens inativos no menu
let menuNavegacao = [
    "Início",
    "Serviços",
    "Portfólio",
    "Blog",
    "Contato",
    "Login",
    "Área do cliente"
  ];
let elementosRemovidos = menuNavegacao.splice(1, 2);
console.log("Depois da remoção:", menuNavegacao);

console.log("Elementos removidos:", elementosRemovidos);