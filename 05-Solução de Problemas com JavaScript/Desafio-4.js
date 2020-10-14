/*

/### Desafio
A nutricionista Juliana Alcantra é uma excelente profissional de sua área. Em determinado dia, ela foi entrevistada ao vivo para um jornal
da cidade. No entanto, ficou um pouco nervosa na hora, e diante da situação, sua fala ficou um pouco distorcida, repetindo o final de cada
palavra após dizer a mesma. Para que isso não aconteça novamente, ela precisa da sua ajuda para escrever um programa que omita a parte
repetida, de modo que as palavras sejam pronunciadas como deveriam ser.

Escreva um programa que, dada uma palavra errada, a mesma seja corrigida.

//### Entrada
Haverá diversos casos de teste. Cada caso de teste é formado por uma palavra, de, no máximo, 30 caracteres, dita da forma errada.
A entrada termina com fim de arquivo.

//### Saída
Para cada caso de teste, escreva a palavra devidamente corrigida. Analise os exemplos para verificar o padrão, de modo a consertar todos os
casos.
 
|---------------------------------------|
| Exemplo de Entrada | Exemplo de Saída |
|--------------------|------------------|
| sanduicheiche      | sanduiche        |
| barrilarril        | barril           |
| ratoato            | rato             |
| sol                | sol              |
| coliseueu          | coliseu          |
| queijoijo          | queijo           |
| astroastro         | astro            |
| a                  | a                |
|---------------------------------------|

*/

//Código do desafio:
let palavras = [];
let leitura = "";

do{
  leitura = gets();
  if(leitura !== ""){
    palavras.push(leitura);
  }
}while(leitura !== "");

let novasPalavras = [];

for(palavra of palavras){
  if(palavra.length > 1){
    let pErro1 = palavra;
    let pErro2 = "";
    let pErro3 = "";
    let contador = -1;
    while(true){
      pErro2 = pErro1.slice(contador).concat(pErro2);
      pErro1 = pErro1.substring(0, pErro1.length + contador);

      if(pErro1.includes(pErro2)){
        pErro3 = pErro2;
      }
      else{
        novasPalavras.push(palavra.replace(pErro3, ""));
        contador = 0;
      }

      if(contador === 0 || pErro1.length <= 1) break;
    }
  }
  else{
    novasPalavras.push(palavra);
  }
}

novasPalavras.forEach(p => console.log(p));