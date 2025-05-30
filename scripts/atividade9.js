//🔹 9 – Conferência de presença
let presenca = [
    "João Lima",
    "Carla Nunes",
    "Amanda Souza",
    "Bruno Ribeiro",
    "Fernanda Sales"
  ];
//Verificando se foi confirmada a presença de um funcionario
const presencaFuncionario = 'Amanda Souza';

if (!presenca.includes(presencaFuncionario)) {
  console.log("O funcionário",presencaFuncionario,"não participou da reunião ");
} else {
  console.log("O funcionário",presencaFuncionario, "participou da reunião");
}

