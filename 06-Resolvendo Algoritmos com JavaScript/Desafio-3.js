/*

//### Desafio
Crie um algoritmo que receba dois inputs que sejam strings e combine-as alternando as letras de cada string. 

Deve começar pela primeira letra da primeira string, seguido pela primeira letra da segunda string, em seguida pela segunda letra da
primeira string e continuar dessa forma sucessivamente.

As letras restantes da cadeia mais longa devem ser adicionadas ao fim da string resultante e retornada.

//### Entrada
A entrada contém vários casos de teste. A primeira linha contém um inteiro N que indica a quantidade de casos de teste que vem a seguir.
Cada caso de teste é composto por uma linha que contém duas cadeias de caracteres, cada cadeia de caracteres contém entre 1 e 50 caracteres
inclusive.

//### Saída
Combine as duas cadeias de caracteres da entrada como mostrado no exemplo abaixo e exiba a cadeia resultante.

|---------------------------------------|
| Exemplo de Entrada | Exemplo de Saída |
|--------------------|------------------|
| 2                  | aBAb             |
| aA Bb              | abab             |
| aa bb              |                  |
|---------------------------------------|

*/

//Código do desafio:
let qtdCasos = gets();
let palavras = [];

for(let i=0; i<qtdCasos; i++){
  let leitura = gets().split(" ");
  palavras.push({
    "texto1": leitura[0],
    "texto2": leitura[1]
  });
}

let stringCombinada = [];
for(palavra of palavras){
  let contador = palavra.texto1.length > palavra.texto2.length ? palavra.texto1.length : palavra.texto2.length;
  let texto = "";
  for(let i=0; i<contador; i++){
    if(i < palavra.texto1.length){
      texto = texto.concat(palavra.texto1.substring(i, i+1));
    }
    if(i < palavra.texto2.length){
      texto = texto.concat(palavra.texto2.substring(i, i+1));
    }
  }

  console.log(texto);
}