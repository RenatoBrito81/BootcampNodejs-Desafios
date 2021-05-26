/*

//### Desafio
O professor Girafales organizou a confecção de um uniforme para as turmas da escola para comemorar o final do ano.
Após algumas conversas, ficou decidido com os alunos que eles poderiam escolher a cor do uniforme entre branco ou vermelho.
Assim sendo, Girafales precisa de sua ajuda para organizar as listas de quem quer o uniforme em cada uma das turmas, relacionando estas camisetas pela cor, tamanho (P, M ou G) e por último pelo nome.

//### Entrada
Cada caso de teste inicia com um valor N, (1 ≤ N ≤ 60) inteiro e positivo, que indica a quantidade de uniformes a serem feitas para aquela turma.
As próximas N*2 linhas contém informações de cada um dos uniformes (serão duas linhas de informação para cada uniforme).
A primeira linha irá conter o nome do estudante e a segunda linha irá conter a cor do uniforme ("branco" ou "vermelho") seguido por um espaço e pelo tamanho do uniforme "P" "M" ou "G".
A entrada termina quando o valor de N for igual a zero (0) e esta valor não deverá ser processado.

//### Saída
Para cada caso de entrada deverão ser impressas as informações ordenadas pela cor em ordem ascendente, seguido pelos tamanhos em ordem descendente e por último por ordem ascendente de nome, conforme o exemplo abaixo.
 
|----------------------------------------------------|
| Exemplo de Entrada |       Exemplo de Saída        |
|--------------------|-------------------------------|
| 9                  | branco P Cezar Torres Mo      |
| Maria Jose         | branco P Maria Jose           |
| branco P           | branco M JuJu Mentina         |
| Mangojata Mancuda  | branco G Adabi Finho          |
| vermelho P         | branco G Severina Rigudinha   |
| Cezar Torres Mo    | vermelho P Amaro Dinha        |
| branco P           | vermelho P Baka Lhau          |
| Baka Lhau          | vermelho P Carlos Chade Losna |
| vermelho P         | vermelho P Mangojata Mancuda  |
| JuJu Mentina       |                               |
| branco M           |                               |
| Amaro Dinha        |                               |
| vermelho P         |                               |
| Adabi Finho        |                               |
| branco G           |                               |
| Severina Rigudinha |                               |
| branco G           |                               |
| Carlos Chade Losna |                               |
| vermelho P         |                               |
| 0                  |                               |
|----------------------------------------------------|

*/

//Código do desafio:
let alunos = gets();
let dadosAlunos = [];

for(let i=0; i<alunos; i++){
  let nomeAluno = gets();
  let dadosUniforme = gets().split(" ");
  
  dadosAlunos.push({
    nome: nomeAluno,
    cor: dadosUniforme[0],
    tamanho: dadosUniforme[1]
  });
}

let dadosOrdenados = dadosAlunos.sort((a, b) => {
  if(a.cor > b.cor){
    return 1;
  }
  else{
    if(a.cor === b.cor){
      if(a.tamanho < b.tamanho){
        return 1;
      }
      else{
        if(a.cor === b.cor && a.tamanho === b.tamanho){
          if(a.nome > b.nome) return 1;
        }
      }
    }
    return -1;
  }
});

dadosOrdenados.map(aluno => console.log(aluno.cor, aluno.tamanho, aluno.nome));
