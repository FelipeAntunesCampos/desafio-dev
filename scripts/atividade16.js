//🔹 16 – Substituição de matérias na grade
let gradeCurricular = [
    "Matemática",
    "Português",
    "Biologia",
    "Física",
    "História",
    "Educação Física",
    "Inglês"
  ];
  
  // Remove "Biologia" (1 elemento no índice 2) e insere "Programação"
  gradeCurricular.splice(2, 1, "Programação");
  
  // Remove "Física" (1 elemento no índice 3) e insere "Robótica"
  gradeCurricular.splice(3, 1, "Robótica");
  
  console.log("Após a troca", gradeCurricular);