/*
//### Desafio
Neste desafio sua tarefa será ler vários números e em seguida dizer quantas vezes cada número aparece, ou seja,
deve-se escrever cada um dos valores distintos que aparecem na entrada por ordem crescente de valor.

//### Entrada
A primeira linha de entrada contem um único inteiro N, que indica a quantidade de valores que serão lidos para X (1 ≤ N ≤ 2000) logo em seguida.
Com certeza cada número não aparecerá mais do que 20 vezes na entrada de dados.

//### Saída
Imprima a saída de acordo com o exemplo fornecido abaixo, indicando quantas vezes cada um deles aparece na entrada por ordem crescente de valor.

|--------------------------------------------|
| Exemplo de Entrada |    Exemplo de Saída   |
|--------------------|-----------------------|
| 7                  | 4 aparece 1 vez(es)   |
| 8                  | 8 aparece 2 vez(es)   |
| 10                 | 10 aparece 3 vez(es)  |
| 8                  | 260 aparece 1 vez(es) |
| 260                |                       |
| 4                  |                       |
| 10                 |                       |
| 10                 |                       |
|--------------------------------------------|

*/

//Código do desafio:
let casos = gets();
let numeros = [];

for(let i=0; i<casos; i++){
  numeros.push(gets());
}

let ocorrencias = numeros.filter((valor, indice, numero) => {
  return numero.indexOf(valor) === indice;
}).sort((a, b) => a - b);

for(numero of ocorrencias){
  let contador = numeros.reduce((acc, cur) => {
    if(numero === cur){
      acc++;
    }
    return acc;
  }, 0);

  console.log(numero + " aparece " + contador + " vez(es)");
}