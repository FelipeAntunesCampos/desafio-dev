//🔹 21 – Filtrar itens acima do estoque mínimo
let estoque = [
    { produto: "Teclado", quantidade: 5 },
    { produto: "Mouse", quantidade: 12 },
    { produto: "Monitor", quantidade: 3 },
    { produto: "Notebook", quantidade: 18 },
    { produto: "Impressora", quantidade: 9 },
    { produto: "Webcam", quantidade: 20 }
  ];
  let produtosAcimaDoMinimo = estoque.filter(item => item.quantidade > 10);
  console.log("Produtos com mais de 10 unidades estoque ", produtosAcimaDoMinimo);  