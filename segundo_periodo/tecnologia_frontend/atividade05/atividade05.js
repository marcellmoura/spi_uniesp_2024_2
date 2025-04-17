fetch("alunos.json")
  .then(function (respostaDoArquivo) {
    return respostaDoArquivo.json();
  })
  .then(function (listaDeAlunos) {
    console.log("Tabela completa dos alunos carregados:");
    console.table(listaDeAlunos);

    function mostrarApenasAprovados(alunos) {
      for (let aluno of alunos) {
        let soma = aluno.notas.reduce(function (total, nota) {
          return total + nota;
        }, 0);

        let media = soma / aluno.notas.length;

        if (media >= 7) {
          console.log(`Nome: ${aluno.nome}`);
          console.log(`Média: ${media.toFixed(2)}`);
          console.log(`Curso: ${aluno.curso}`);
          console.log('------------------------');
        }
      }
    }

    console.log("Alunos aprovados (média ≥ 7):");
    mostrarApenasAprovados(listaDeAlunos);
  })
  .catch(function (erro) {
    console.error("Erro ao carregar o JSON:", erro);
  });
