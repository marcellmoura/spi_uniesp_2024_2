/*
4) Um funcionário de uma empresa recebe aumento salarial anualmente.

a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;

b. Em 1996 recebeu aumento de 0,15% sobre seu salário inicial;

c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem
ao dobro do percentual do ano anterior.

Faça um programa que determine o salário atual desse funcionário.

d. Após concluir isto, faça uma segunda versão do seu código que permita o
usuário informar o salário inicial do funcionário.

Utilize obrigatoriamente a função prompt() para coletar o salário inicial.
*/


let salarioInicial = parseFloat(prompt("Informe o salário inicial: "));

if (isNaN(salarioInicial) || salarioInicial <= 0) {
  alert("Salário inválido.");
} else {
  let salarioAtual = salarioInicial;
  let ajuste = 0.0015;
  const anoInicial = 1996;
  const anoAtual = 2025;

  for (let ano = anoInicial; ano <= anoAtual; ano++) {
    let aumento = salarioAtual * ajuste;
    salarioAtual += aumento;

    if (ano >= 1997) {
      ajuste *= 2;
    }
  }

  alert("Salário final em " + anoAtual + ": R$ " + salarioAtual.toFixed(2));
}
