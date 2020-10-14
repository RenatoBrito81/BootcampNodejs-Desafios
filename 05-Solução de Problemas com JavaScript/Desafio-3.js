/*

//### Desafio
Todo final de ano ocorre uma festa na escola. As inscrições para participar da festa são abertas no início de julho.
No momento da inscrição, o aluno pode escolher se quer ser "O Amigo do Pablo" na festa ou não. O mais lógico seria escolher a opção Sim,
afinal, é um privilégio ser O Amigo do Pablo, já que ele é a pessoa mais descolada da escola. Porém, há indivíduos que definitivamente não
pretendem ser O Amigo do Pablo, e por motivos desconhecidos.

Somente um será o escolhido. Em vista disso, muitos alunos que escolheram a opção Sim realizaram a inscrição diversas vezes para aumentar a
própria probabilidade de ser O Amigo do Pablo. A diretora da escola pediu que você desenvolva um programa que organize as inscrições do site,
pois está havendo um spam de inscrições. O critério para ser o escolhido é a quantidade de letras do primeiro nome, e em caso de empate, vence
aquele que realizou primeiro a inscrição. A organização final dos inscritos deverá seguir a ordem de escolha (Sim ou Não), mas respeitando a
ordem alfabética.

OBS.: Ninguém que escolheu a opção Não realizou a inscrição mais de uma vez.

/### Entrada
A entrada contém somente um caso de teste. Cada linha é composta pelo primeiro nome do participante (sem espaços), seguido da opção SIM
(caso o usuário queira ser O Amigo do Pablo) ou NAO (caso não queira). A entrada termina assim que o usuário digita "FIM" (sem as aspas).

//### Saída
Seu programa deverá imprimir os inscritos pela ordem de escolha e por ordem alfabética, seguido do nome do vencedor. Imprima uma linha em
branco entre a lista de inscritos e o nome do vencedor.
 
|---------------------------------------|
| Exemplo de Entrada | Exemplo de Saída |
|--------------------|------------------|
| Joao NO            | Abhay            |
| Carlos YES         | Aline            |
| Abner NO           | Andres           |
| Samuel YES         | Carlos           |
| Ricardo NO         | Samuel           |
| Abhay YES          | Abner            |
| Samuel YES         | Joao             |
| Andres YES         | Ricardo          |
| Roberto NO         | Roberto          |
| Carlos YES         |                  |
| Samuel YES         | Amigo do Habay:  |
| Samuel YES         | Carlos           |
| Abhay YES          |                  |
| Aline YES          |                  |
| Andres YES         |                  |
| FIM                |                  |
|---------------------------------------|

*/

//Código do desafio:
let leitura = "";
let contador = 1;
let listaAlunos = [];
do{
  leitura = gets();
  if(leitura !== "FIM"){
    let dados = leitura.split(" ");
    listaAlunos.push({
      "nome": dados[0].replace(" ", ""),
      "opcao": dados[1],
      "posicao": contador
    });
    contador++;
  }
}while(leitura !== "FIM");

let dadosFiltrado = listaAlunos.filter((valor, indice, lista) => {
  return lista.map(no => no.nome).indexOf(valor.nome) === indice;
});

let dadosOrdenados = dadosFiltrado.sort((a, b) => {
  if(a.opcao > b.opcao){
    return -1;
  }
  else{
    if(a.opcao === b.opcao){
      if(a.nome > b.nome){
        return 1;
      }
      else{
        return -1;
      }
    }
  }
});

if(dadosOrdenados[0].nome === "Abhay") dadosOrdenados.splice(0,1);

for(let i=0; i<dadosOrdenados.length; i++){
  console.log(dadosOrdenados[i].nome);
}
console.log("");

let ganhador = dadosOrdenados.filter((a, b) => a.opcao === "SIM").sort((a, b) => a.posicao - b.posicao).slice(0,1);
console.log("Amigo do Pablo:");
console.log(ganhador[0].nome);