//🔹 20 – Formatando lista de preços
let precos = [
    129.9,
    399.5,
    259.0,
    89.9,
    599.99,
    39.5,
    999.0
  ];
let contadorPrecosTransformados = [];
for (let i = 0; i < precos.length; i++) {
  contadorPrecosTransformados.push('R$: ' + precos[i]);
}
console.log(contadorPrecosTransformados);