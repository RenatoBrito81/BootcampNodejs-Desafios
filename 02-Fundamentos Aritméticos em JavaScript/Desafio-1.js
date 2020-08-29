/*

//### Desafio
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

//### Entrada
Você receberá seis valores, negativos e/ou positivos.

//### Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.

|------------------------------------------|
| Exemplo de Entrada |  Exemplo de Saída   |
|--------------------|---------------------|
| 7                  |                     |
| -5                 |                     |
| 6                  |                     |
| -3.4               |                     |
| 4.6                |                     |
| 12                 | 4 valores positivos |
|------------------------------------------|

*/

//Código do desafio:
let numeros = new Array(6);
numeros[0]=gets();
numeros[1]=gets();
numeros[2]=gets();
numeros[3]=gets();
numeros[4]=gets();
numeros[5]=gets();

for(let i; i<6; i++){
  if(isNaN(numeros[i])){
    numeros[i]=-1;
  }
}

let qtdNumerosPositivos = numeros.reduce((totalNum, num) => {
  if(num > 0){
    totalNum++;
  }
  return totalNum;
}, 0);

console.log(qtdNumerosPositivos + " valores positivos");