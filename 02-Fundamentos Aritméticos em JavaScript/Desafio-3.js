/*

//### Desafio
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

//### Entrada
Você receberá 5 valores inteiros.

//### Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

|----------------------------------------------|
| Exemplo de Entrada |    Exemplo de Saída     |
|--------------------|-------------------------|
| -5                 |                         |
| 0                  | 3 valor(es) par(es)     |
| -3                 | 2 valor(es) impar(es)   |
| -4                 | 1 valor(es) positivo(s) |
| 12                 | 3 valor(es) negativo(s) |
|----------------------------------------------|

*/

//Código do desafio:
let numeros = new Array(5);
numeros[0]=gets();
numeros[1]=gets();
numeros[2]=gets();
numeros[3]=gets();
numeros[4]=gets();

let valoresPares = numeros.reduce((totalPares, num) => {
  if(isNaN(num) === false && num % 2 === 0){
   totalPares++;
 }
 return totalPares;
}, 0);

let valoresImpares = numeros.reduce((totalImpares, num) => {
  if(isNaN(num) === false && num % 2 !== 0){
   totalImpares++;
 }
 return totalImpares;
}, 0);

let valoresPositivos = numeros.reduce((totalPositivos, num) => {
  if(isNaN(num) === false && num > 0){
   totalPositivos++;
 }
 return totalPositivos;
}, 0);

let valoresNegativos = numeros.reduce((totalNegativos, num) => {
  if(isNaN(num) === false && num < 0){
   totalNegativos++;
 }
 return totalNegativos;
}, 0);

console.log(valoresPares + " valor(es) par(es)");
console.log(valoresImpares + " valor(es) impar(es)");
console.log(valoresPositivos + " valor(es) positivo(s)");
console.log(valoresNegativos + " valor(es) negativo(s)");