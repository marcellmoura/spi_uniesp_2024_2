const pessoas = [
  { nome: "Ana", altura: 1.65, genero: "f" },
  { nome: "Candice", altura: 1.58, genero: "f" },
  { nome: "Marcell", altura: 1.92, genero: "m" },
  { nome: "Tonny", altura: 1.93, genero: "m" },
  { nome: "Miller", altura: 1.95, genero: "m" },
  { nome: "Mayyro", altura: 1.75, genero: "m" },
  { nome: "Katia", altura: 1.66, genero: "f" },
  { nome: "Maya", altura: 1.68, genero: "f" },
  { nome: "João", altura: 1.79, genero: "m" },
  { nome: "Tricia", altura: 1.62, genero: "f" },
  { nome: "Tomaz", altura: 1.61, genero: "m" },
  { nome: "Maria", altura: 1.57, genero: "f" },
  { nome: "Marcio", altura: 1.98, genero: "m" },
  { nome: "Victor", altura: 1.72, genero: "m" },
  { nome: "Vinicus", altura: 1.81, genero: "m" },

]

const maiorAltura = pessoas.reduce((a, b) => {
  if (a.altura > b.altura) {
    return a;
  } else {
    return b;
  }
});

console.log(`A maior altura é: ${maiorAltura.altura}`);

const menorAltura = pessoas.reduce((a, b) => {
  if (a.altura < b.altura) {
    return a;
  } else {
    return b;
  }
});

console.log(`A menor altura é: ${menorAltura.altura}`);

const homens = pessoas.filter(homem => homem.genero === "m");

const somaAlturaMasculino = homens.reduce((a, b) => {
  return (a + b.altura);
}, 0);

const media = somaAlturaMasculino / homens.length;

console.log("A média de todos os homens é: " + media.toFixed(2));

const mulheres = pessoas.filter(mulher => mulher.genero === "f");

console.log("A quantidade de mulheres é: " + mulheres.length);

