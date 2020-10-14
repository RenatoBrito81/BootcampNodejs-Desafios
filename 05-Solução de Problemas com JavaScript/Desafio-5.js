/*

//### Desafio
Nesse algoritmo você deverá descobrir se um conjunto de palavras é bom ou ruim. Por definição, um conjunto é bom quando nenhuma palavra
desse conjunto é um prefixo de outra palavra. Caso contrário, é considerado um conjunto ruim.

Por exemplo, {dbc, dae, dbcde} é um conjunto ruim, pois dbc é um prefixo de dbcde. Quando duas palavras são idênticas, definimos como uma
sendo prefixo da outra.

//### Entrada
A entrada contém vários casos de teste. A primeira linha de cada caso de teste terá um inteiro N (1 ≤ N ≤ 10⁵), que representa a quantidade
de palavras no conjunto. Segue então N linhas, cada uma tendo uma palavra de no máximo 100 letras minúsculas. A entrada termina quando
N = 0 e não deve ser processada.

//### Saída
Para cada caso de teste, você deverá imprimir "Conjunto Bom", ou "Conjunto Ruim", conforme explicado acima.
 
|---------------------------------------|
| Exemplo de Entrada | Exemplo de Saída |
|--------------------|------------------|
| 3                  | Conjunto Ruim    |
| abc                |                  |
| dae                |                  |
| abcde              |                  |
|--------------------|------------------|
| 2                  | Conjunto Bom     |
| abc                |                  |
| def                |                  |
| 0                  |                  |
|---------------------------------------|
 
*/

//Código do desafio:
let conjuntos = [];
let leitura = "";

do{
  leitura = gets();
  if(leitura !== "0"){
    let contador = parseInt(leitura);
    let entrada = [];
    for(let i=0; i<contador; i++){
      entrada.push(gets());
    }
    conjuntos.push([...entrada]);
  }
}while(leitura !== "0");

for(conjunto of conjuntos){
  let contem = conjunto.reduce((acc, cur, idx, arr) => {
    for(let ind=0; ind<arr.length; ind++){
      if(idx !== ind){
        if(arr[ind].includes(cur)){
          acc++;
        }
      }
    }
    return acc;
  }, 0);

  if(contem > 0){
    console.log("Conjunto Ruim");
  }
  else{
    console.log("Conjunto Bom");
  }
}