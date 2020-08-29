/*

//### Desafio
Pedra-papel-tesoura-lagarto-Spock é uma expansão do clássico método de seleção em jogo de pedra-papel-tesoura. Atua sob o mesmo princípio básico, mas inclui outras duas armas adicionais: o lagarto (formado pela mão igual a uma boca de fantoche) e Spock (formada pela saudação dos vulcanos em Star Trek). Isso reduz as chances de uma rodada terminar em um empate. O jogo foi inventado por Sam Kass e Karen Bryla, como "Rock Paper Scissors Lizard Spock". As regras de vantagem são as seguintes:
•	Tesoura corta papel
•	Papel cobre pedra
•	Pedra derruba lagarto
•	Lagarto adormece Spock
•	Spock derrete tesoura
•	Tesoura prende lagarto
•	Lagarto come papel
•	Papel refuta Spock
•	Spock vaporiza pedra
•	Pedra quebra tesoura
Um dia, duas amigas, Fernanda e Marcia, decidiram apostar quem pagaria um almoço para o outro, com esta brincadeira. Sua missão será fazer um algoritmo que, baseado no que eles escolherem, informe quem irá ganhar ou se dará empate.

//### Entrada
Haverá diversos casos de teste. O primeiro número a ser lido será um inteiro, representando a quantidade de casos de teste. Cada caso de teste tem duas palavras, representando a escolha de Fernanda e de Marcia, respectivamente.

//### Saída
Para cada caso de teste, imprima quem venceu, ou se houve empate.

|---------------------------------------|
| Exemplo de Entrada | Exemplo de Saída |
|--------------------|------------------|
| 3                  |                  |
| spock spock        | empate           |
| tesoura spock      | Marcia           |
| lagarto spock      | Fernanda         |
|---------------------------------------|

*/

//Código do desafio:
let dados = ["spock spock", "tesoura spock", "lagarto spock"];
let regras = [
  [0,1,-1,-1,1],
  [-1,0,1,1,-1],
  [1,-1,0,1,-1],
  [1,-1,-1,0,1],
  [-1,1,1,-1,0]
];

let nome = ["empate","fernanda","marcia"];

let tipos = [
  {nome: 'papel', indice: 0},
  {nome: 'pedra', indice: 1},
  {nome: 'tesoura', indice: 2},
  {nome: 'lagarto', indice: 3},
  {nome: 'spock', indice: 4}
  ];


let casos = gets();
let escolhas = [];

for(let i=0; i<casos; i++){
  escolhas.push(gets().split(" "));
}

function verificarGanhador(jogoA, jogoB){
  let jogadorA = tipos.filter(dado => dado.nome === jogoA)[0].indice;
  let jogadorB = tipos.filter(dado => dado.nome === jogoB)[0].indice;
  let status = regras[jogadorA][jogadorB] === -1 ? 2 : regras[jogadorA][jogadorB];

  return nome[status];
}

for(escolha of escolhas){
  console.log(verificarGanhador(escolha[0],escolha[1]));
}