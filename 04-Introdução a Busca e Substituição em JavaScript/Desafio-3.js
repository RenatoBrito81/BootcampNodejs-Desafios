/*

//### Desafio
Pedro e Fernando são os desenvolvedores em uma stratup e vão desenvolver o novo sistema de cadastro, e pediram a sua ajuda.
Sua task é fazer o código que valide as senhas que são cadastradas, para isso você deve atentar aos requisitos a seguir:
•	A senha deve conter, no mínimo, uma letra maiúscula, uma letra minúscula e um número;
•	A mesma não pode ter nenhum caractere de pontuação, acentuação ou espaço;
•	Além disso, a senha pode ter de 6 a 32 caracteres.

//### Entrada
A entrada contém vários casos de teste e termina com final de arquivo.
Cada linha tem uma string S, correspondente a senha que é inserida pelo usuário no momento do cadastro.

//### Saída
A saída contém uma linha, que pode ser “Senha valida.”, caso a senha tenha cada item dos requisitos solicitados anteriormente, ou “Senha invalida.”, se um ou mais requisitos não forem atendidos.

|-----------------------------------------------|
|     Exemplo de Entrada     | Exemplo de Saída |
|----------------------------|------------------|
| Digital Innovation One     | Senha invalida.  |
| AbcdEfgh99                 | Senha valida.    |
| DigitalInnovationOne123    | Senha valida.    |
| Digital Innovation One 123 | Senha invalida.  |
| Aass9                      | Senha invalida.  |
| Aassd9                     | Senha valida.    |
|-----------------------------------------------|

*/

//Código do desafio:
let senhas = [];
let palavra = "";

do{
  palavra = gets();
  if(palavra !== ""){
    senhas.push(palavra);
  }
}while(palavra !== "");

for(senha of senhas){
  let status = validarSenha(senha);
  console.log("Senha " + (status ? "valida." : "invalida."));
}

function validarSenha(senha){
  var expressao = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,32})$/;
  return expressao.test(senha);
}