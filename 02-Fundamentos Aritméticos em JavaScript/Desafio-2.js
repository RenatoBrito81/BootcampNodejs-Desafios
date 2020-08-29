/*

//### Desafios
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

//### Entrada
Você receberá 1 valor inteiro N, onde N > 0.

//### Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

|---------------------------------------|
| Exemplo de Entrada | Exemplo de Saída |
|--------------------|------------------|
| 6	                 | 2                |
|                    | 4                |
|                    | 6                |
|---------------------------------------|

*/

//Código do desafio:
let numero = gets();

if(isNaN(numero)){
  numero = 0;
}

if(numero>0){
  for(let i=1; i <= numero; i++){
    if(i % 2 === 0){
      console.log(i);
    }
  }
}