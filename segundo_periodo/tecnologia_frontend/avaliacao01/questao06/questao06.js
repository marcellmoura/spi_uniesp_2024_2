/*
6) Escreva uma função que informe o retorno de um investimento (montante)
com base nos valores do capital inicial, tempo em meses e taxa de juros mensal,
fornecidos pelo usuário. Utilize obrigatoriamente a função prompt() para coletar
os valores necessários.

Use a fórmula: M = C * (1 + i)^t

Onde:
  - C = Capital inicial investido
  - i = Taxa de juros, em percentual
  - t = Tempo do investimento, em meses

Exiba o resultado com duas casas decimais.
*/

let capital = parseFloat(prompt("Digite o capital inicial investido:"));
let taxa = parseFloat(prompt("Digite a taxa de juros mensal (em %):"));
let mes = parseInt(prompt("Digite o tempo do investimento (em meses):"));

if (isNaN(capital) || isNaN(taxa) || isNaN(mes) || capital <= 0 || taxa < 0 || mes <= 0) {
  alert("Valores inválidos. Por favor, preencha corretamente.");
} else {
  let i = taxa / 100;
  let montante = capital * (1 + i) ** mes;

  alert("Montante final do investimento: R$ " + montante.toFixed(2));
}