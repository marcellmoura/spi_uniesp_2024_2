/*
5) Escreva um programa que calcule a área e o perímetro de um círculo,
de acordo com o raio fornecido. Utilize obrigatoriamente a função prompt().
*/

let raio = prompt("Digite o raio do círculo:");

raio = parseFloat(raio);


if (isNaN(raio)) {
  alert("Valor inválido. Digite um número.");
} else {
  let area = 3.14 * raio * raio;
  let perimetro = 2 * 3.14 * raio;

  alert("Área do círculo: " + area.toFixed(2) + "\nPerímetro do círculo: " + perimetro.toFixed(2));
}
