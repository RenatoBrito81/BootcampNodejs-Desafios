/*

//### Desafio
Crie um programa onde você receberá valores inteiros não negativos como entrada.
Ordene estes valores de acordo com o seguinte critério:
•	Primeiro os Pares
•	Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

//### Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 105) Este é o número de linhas de entrada que vem logo a seguir.
As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

//### Saída
Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.

|---------------------------------------|
| Exemplo de Entrada | Exemplo de Saída |
|--------------------|------------------|
| 10                 |                  |
| 4                  | 4                |
| 32                 | 32               |
| 34                 | 34               |
| 543                | 98               |
| 3456               | 654              |
| 654                | 3456             |
| 567                | 6789             |
| 87                 | 567              |
| 6789               | 543              |
| 98                 | 87               |
|---------------------------------------|

*/

//Código do desafio:
const N = gets();

const arrayEntradas = [];

for (let i = 0; i < N; i++) {
  arrayEntradas.push(gets());
}

const pares = arrayEntradas.filter(entrada => entrada % 2 === 0);
const impares = arrayEntradas.filter(entrada => entrada % 2 !== 0);

pares.sort((a, b) => a - b);
impares.sort((a, b) => a - b).reverse();

pares.map(par => console.log(par));
impares.map(impar => console.log(impar));