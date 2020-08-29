/*

//### Desafio
Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores, porém temos apenas a quantidade de horas trabalhadase o valorhora.
Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse colaborador.
Em seguida, apresente o número e o salário do colaborador, com duas casas decimais.

//### Entrada
Você receverá 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada.

//### Saída
Exiba o número e o salário do colaborador, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
No caso do salário, também deve haver um espaço em branco após o $.

|-------------------------------------------|
| Exemplos de Entrada |	 Exemplos de Saída  |
|---------------------|---------------------|
| 25                  |                     |
| 100                 | NUMBER = 25         |
| 5.50                | SALARY = U$ 550.00  |
|---------------------|---------------------|
| 1                   |                     |
| 200                 | NUMBER = 1          |
| 20.50	              | SALARY = U$ 4100.00 |
|---------------------|---------------------|
| 6                   |                     |
| 145                 | NUMBER = 6          |
| 15.55	              | SALARY = U$ 2254.75 |
|-------------------------------------------|

*/

//Código do desafio:
let idColab = gets();
let horasTrab = gets();
let valorH = gets();

if(isNaN(idColab)){
  idColab=0;
}

if(isNaN(horasTrab)){
  horasTrab=0;
}

if(isNaN(valorH)){
  valorH=0;
}

if(idColab!=0 && horasTrab!=0 && valorH !=0){
  let idColaborador = parseInt(idColab);
  let horasTrabalhadas = parseInt(horasTrab);
  let valorHora = parseFloat(valorH);
  
  let salario = parseFloat(horasTrabalhadas * valorHora).toFixed(2);
  console.log("NUMBER = " + idColaborador);
  console.log("SALARY = U$ " + salario);
}