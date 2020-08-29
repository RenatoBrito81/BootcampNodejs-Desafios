/*

//### Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto.
As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1.
Na sequência mostre o valor lido e a relação de notas necessárias.

//### Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

//### Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo.
Após cada linha deve ser imprimido o fim de linha, caso contrário será apresentada a seguinte mensagem: “Presentation Error”.

|--------------------------------------------|
|Exemplo de Entrada |    Exemplo de Saída    |
|-------------------|------------------------|
|576                | 576                    |
|                   | 5 nota(s) de R$ 100,00 |
|                   | 1 nota(s) de R$ 50,00  |
|                   | 1 nota(s) de R$ 20,00  |
|                   | 0 nota(s) de R$ 10,00  |
|                   | 1 nota(s) de R$ 5,00   |
|                   | 0 nota(s) de R$ 2,00   |
|                   | 1 nota(s) de R$ 1,00   |
|-------------------|------------------------|
11257	11257
112 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
0 nota(s) de R$ 1,00
|-------------------|------------------------|
503	503
5 nota(s) de R$ 100,00
0 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
0 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00
|--------------------------------------------|

*/

//Código do desafio:
let valor = gets();
let notas = [100, 50, 20, 10, 5, 2, 1];
let contadorNotas = [0,0,0,0,0,0,0];

if(valor > 0 && valor < 1000000){
  console.log(valor);
  for(let i = 0; i < notas.length; i++){
    if(valor>0){
      contadorNotas[i] = Math.trunc(valor / notas[i]);
      valor %= notas[i];
    }
  }
  
  console.log(contadorNotas[0] + " nota(s) de R$ 100,00");
  console.log(contadorNotas[1] + " nota(s) de R$ 50,00");
  console.log(contadorNotas[2] + " nota(s) de R$ 20,00");
  console.log(contadorNotas[3] + " nota(s) de R$ 10,00");
  console.log(contadorNotas[4] + " nota(s) de R$ 5,00");
  console.log(contadorNotas[5] + " nota(s) de R$ 2,00");
  console.log(contadorNotas[6] + " nota(s) de R$ 1,00");
  
}
else{
  console.log("Presentation Error");
}