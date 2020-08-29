/*

//### Desafio
Nas férias de Dezembro, várias escolas se organizam e levam seus alunos para um acampamento de férias por uma semana.
Nestes acampamentos os alunos são divididos em cabanas coletivos por gênero e idade, sempre com um adulto que, além de dormir com o grupo no cabana, também são responsáveis por criar e executar várias atividades, como por exemplo jogos, excursões, Gincanas Noturnas, etc.
No primeiro dia foi realizada uma gincana em que a atividade constituia em agrupar os alunos em um círculo (organizado no sentido anti-horário) do qual seriam retiradas uma a uma até que sobrasse apenas um aluno, que seria o vencedor.
No momento em que entra no círculo, cada aluno recebe uma pequena ficha que contém um valor de 1 a 500.
Depois que o círculo é formado, conta-se, iniciando no aluno que está ao lado da primeira que entrou no círculo, o número correspondente à ficha que o primeiro detém. O aluno onde o número contado cair, deve ser retirado do grupo, e a contagem inicia novamente segundo a ficha do aluno que acabou de ser eliminado.
Para ficar mais interessante, quando o valor que consta na ficha é par, a contagem é feita no sentido horário e quando o valor que consta na ficha é ímpar, a contagem é feita no sentido anti-horário.
Desenvolva um programa para que no próximo evento o responsável pela brincadeira saiba previamente qual criança irá ser a vencedora de cada grupo, com base nas informações fornecidas.

//### Entrada
A entrada contém vários casos de teste.
A primeira linha de cada caso de teste contém um inteiro N (1 ≤ N ≤ 100), indicando a quantidade de alunos que farão parte de cada círculo.
Em seguida, as N linhas de cada caso de teste conterão duas informações, o Nome e o Valor (1 ≤ Valor ≤ 500) que consta na ficha de cada aluno, separados por um espaço, na ordem de entrada na formação do círculo inicial.

OBS: O Nome de cada aluno não deverá ultrapassar 30 caracteres e contém apenas letras maiúsculas e minúsculas, sem acentos, e o caractere “_”. O final da entrada é indicado pelo número zero.

//### Saída
Para cada caso de teste, deve-se apresentar a mensagem Vencedor(a): xxxxxx, com um espaço após o sinal ":" indicando qual é o aluno do grupo que venceu a brincadeira.

|--------------------------------------------|
| Exemplo de Entrada |    Exemplo de Saída   |
|--------------------|-----------------------|
| 3                  | Vencedor(a): Fernanda |
| Fernanda 7         |                       |
| Fernando 9         |                       |
| Gustavo 11         |                       |
|--------------------|-----------------------|
| 5                  | Vencedor(a): Pedro    |
| Maria 7            |                       |
| Pedro 9            |                       |
| Joao_Vitor 5       |                       |
| Isabel 12          |                       |
| Laura 8            |                       |
|--------------------|-----------------------|
| 3                  | Vencedor(a): Pedro    |
| Maria 4            |                       |
| Pedro 3            |                       |
| Joao 2             |                       |
| 0                  |                       |
|--------------------------------------------|

*/

//Código do desafio:
let qtdAluno;
let dadosAluno = [];
let vencedores = [];

while(true){
  qtdAluno = gets();
  if(qtdAluno === "0") break;
  
  if(qtdAluno >= 1 && qtdAluno <= 100){
    let dadosLinha = [];
    for(let i=0; i<qtdAluno; i++){
      let linha = gets().split(" ");
      dadosLinha.push({
        nome:  (linha[0].length > 30) ? linha[0].substring(0,30) : linha[0],
        ficha: (parseInt(linha[1]) > 500) ? 500 :  parseInt(linha[1])
      });
    }
    dadosAluno.push(dadosLinha);
  }
}

for(let circ = 0; circ < dadosAluno.length; circ++){
  let contadorFicha = dadosAluno[circ][0].ficha;
  let indice = 0;
  let indiceMax = dadosAluno[circ].length-1;
  let indiceMin = 0;

  while(dadosAluno[circ].length > 1){
    for(let cont = 0; cont < contadorFicha; cont++){
      if(contadorFicha % 2 === 0){
        //sentido horário (do fim para o começo)
        indice--;
      }
      else{
        //sentido antí-horário (do começo para o fim)
        indice++;
      }
      
      if(indice > indiceMax){
        indice = indiceMin;
      }
      if(indice < indiceMin){
        indice = indiceMax;
      }
    }

    contadorFicha = dadosAluno[circ][indice].ficha;
    dadosAluno[circ].splice(indice,1);
    indiceMax = dadosAluno[circ].length-1;

    if(contadorFicha % 2 === 0){
      if(indice > indiceMax) {
        indice = indiceMin;
      }
    }
    else{
      indice--;
    }
    if(indice > indiceMax) {
      indice = indiceMin;
    }
    if(indice < indiceMin){
      indice = indiceMax;
    }
  }
}

for(dado of dadosAluno){
  console.log("Vencedor(a): " + dado[0].nome);
}