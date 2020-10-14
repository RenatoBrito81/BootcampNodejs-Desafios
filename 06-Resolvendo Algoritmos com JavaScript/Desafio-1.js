/*

//### Desafio
Marcos decidiu abandonar o bar da faculdade onde jogava truco para dedicar-se ao mundo da programação.
Para que isso fosse mais fácil, decidiu criar um novo jogo de cartas. 

O coração das cartas, como Marcos apelidou o jogo, é individual e jogado com três pilhas, inicialmente com o mesmo número de cartas.
Cada carta tem um valor numérico inteiro de 0 até 9. O jogador pode, a qualquer momento ver o valor de qualquer carta, mas só pode jogar
com as cartas que estão no topo das pilhas. Em cada rodada, o jogador pode remover qualquer combinação de cartas que estejam no topo da
pilha (pode escolher 1, 2 ou até 3 cartas) cuja soma dos valores seja múltiplo de 3. O jogo é ganho quando todas as cartas forem removidas
das pilhas. Se alguma carta não puder ser removida, perde-se o jogo.

//### Entrada
A entrada é composta por várias instâncias Cada instância é iniciada por um inteiro N (0 ≤ N ≤ 100), que identifica o número de cartas em
cada pilha. A entrada termina quando N = 0. Cada uma das N linhas seguintes contém três inteiros A, B e C, que descrevem os valores numéricos
das cartas em um nível da pilha (0 ≤ A, B, C ≤  9). As pilhas são descritas do topo até o fundo.

//### Saída
Para cada instância, imprima uma linha contendo o número 1 se o jogador pode ganhar a instância do jogo ou o número 0 se o jogo for impossível.

|---------------------------------------|
| Exemplo de Entrada | Exemplo de Saída |
|--------------------|------------------|
| 2                  | 1                |
| 1 1 1              |                  |
| 2 0 4              |                  |
|--------------------|------------------|
| 3                  | 0                |
| 1 0 0              |                  |
| 0 1 0              |                  |
| 0 0 0              |                  |
| 0                  |                  |
|---------------------------------------|

*/

//Código do desafio:
let pilhasCartas = [];
let leitura = "";
do{
  leitura = gets();
  if(leitura !== "0"){
    let qtdPilha = parseInt(leitura);
    let pilha = [];
    for(let i=0; i<qtdPilha; i++){
      pilha.push(gets());
    }
    pilhasCartas.push(pilha);
  }
}while(leitura !== "0");

let resultados = [];
for(pilhas of pilhasCartas){
  let resultadoJogo = [];
  for(pilha of pilhas){
    let cartas = pilha.split(" ").map(num => parseInt(num));
    resultadoJogo.push(verificarRetirada(cartas));
  }
  resultados.push(resultadoJogo);
}

for(resultado of resultados){
  let jogo = true;
  for(let i=0; i<resultado.length; i++){
    jogo = jogo && resultado[i];
  }
  if(jogo){
    console.log(1);
  }
  else{
    console.log(0);
  }
}

function verificarRetirada(cartas){
  let tipo1 = cartas[0];
  let tipo2 = retornarSoma(cartas, 1);
  let tipo3 = retornarSoma(cartas, 2);

  if(tipo1 % 3 === 0 || tipo2 % 3 === 0 || tipo3 % 3 === 0){
    return true;
  }
  else{
    return false;
  }
}

function retornarSoma(cartas, indiceMax){
  let soma = 0;
  for(let i=0; i<=indiceMax; i++){
    soma += cartas[i];
  }
  return soma;
}