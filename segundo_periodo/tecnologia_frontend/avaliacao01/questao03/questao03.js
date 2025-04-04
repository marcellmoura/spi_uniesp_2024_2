/*
3) Faça um programa que, dado um conjunto de N números,
determine o menor valor, o maior valor
e a soma dos valores.
*/

let numeros = [14, 52, 6, 21, 24, 85, 76, 25, 65, 94];
let soma = 0;

numeros.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(`O menor numero é: ${numeros[0]}`);
console.log(`O maior número é: ${numeros[numeros.length - 1]}`);
console.log(`A soma de todos os numeros é: ${soma}`);