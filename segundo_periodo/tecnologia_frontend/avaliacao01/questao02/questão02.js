/*
2) Faça um programa que peça 10 números inteiros,
calcule e mostre a quantidade de números pares
e a quantidade de números ímpares.

Utilize obrigatoriamente a função prompt() para coletar os números.
*/

let numerosInteiros = [];
let numerosPares = [];
let numerosImpares = [];

for (let i = 1; i <= 10; i++) {
  let entradaUsuario = prompt(`Digite o ${i}º número inteiro:`);
  let entradaInt = parseInt(entradaUsuario);

  if (!isNaN(entradaInt)) {
    numerosInteiros.push(entradaInt);
  } else {
    alert("O valor digitado tem que ser um número inteiro.");
    i--;
  }
}

for (let x = 0; x < numerosInteiros.length; x++) {
  if (numerosInteiros[x] % 2 === 0) {
    numerosPares.push(numerosInteiros[x]);
  } else {
    numerosImpares.push(numerosInteiros[x]);
  }
}

console.log(`Quantidade de números pares: ${numerosPares.length}`);
console.log(`Quantidade de números ímpares: ${numerosImpares.length}`);
