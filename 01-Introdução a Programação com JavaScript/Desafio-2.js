/*

//### Desafio
Você receberá dois valores inteiros. Faça a leitura e em seguida calcule o produto entre estes dois valores.
Atribua esta operação à variável PROD, mostrando esta de acordo com a mensagem de saída esperada (exemplo abaixo).   

//### Entrada
A entrada contém 2 valores inteiros.

//### Saída
Exiba a variável PROD conforme exemplo abaixo, tendo obrigatoriamente um espa�o em branco antes e depois da igualdade.
 
|-----------------------------------------|
| Exemplos de Entrada |	Exemplos de Saída |
|---------------------|-------------------|
| 3                   |                   |
| 9	                  | PROD = 27         |
|---------------------|-------------------|
| -30                 |                   |
| 10	                | PROD = -300       |
|---------------------|-------------------|
| 0                   |                   |
| 9 	                | PROD = 0          |
|-----------------------------------------|

*/

//Código do desafio:
let val1 = parseInt(gets());
let val2 = parseInt(gets());

if(isNaN(val1)){
  val1=0;
}

if(isNaN(val2)){
  val2=0;
}

let valor1 = parseInt(val1);
let valor2 = parseInt(val2);

let total = valor1 * valor2;
console.log("PROD = " + total);