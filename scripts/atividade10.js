//🔹 10 – Verificação de produto em estoque
let estoque = [
    "mesa para PC",
    "cadeira gamer",
    "monitor 27 polegadas",
    "hub USB",
    "mouse sem fio"
  ];
//Verificando se tem produto em estoque
const produtoVerificarEstoque = 'cadeira gamer';

if (!estoque.includes(produtoVerificarEstoque)) {
  console.log("O produto",produtoVerificarEstoque,"se estogotou! ");
} else {
  console.log("O produto",produtoVerificarEstoque, "tem em estoque!");
}
