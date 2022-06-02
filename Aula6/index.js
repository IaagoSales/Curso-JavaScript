/* Regras para criar uma variável

    1 - Não podemos criar variáveis com palavras reservadas. EX: let if = 'Leticia'; <- Não pode
    2 - Variáveis precisam ter nomes significativos 
    3 - Não pode começar o nome de uma variável com um número. EX: let 1nome = 'Iago'
    4 - Os nomes das variáveis não podem conter espaçoes ou traços. EX: let nome-cliente = 'Iago'
    5 - Utilizar camelcase para variáveis com nomes compostos. Ex: let nomeCliente = 'Leticia'
    6 - Case Sensitive EX: let nomeCliente = 'Luiz' e let nomecliente = "Iago"  No caso são 2 variáveis diferentes, pois letras maiusculas e minusculas fazem diferença.
    7 - Não podemos redeclarar variáveis usando let
    8 - Não utilize VAR, utilize LET.

*/

let nome = 'Iago'; /* Let = Declarar e Inicializar uma variável */

console.log(nome, "nasceu em 1984");
console.log("Em 2000", nome, "Conheceu Maria");
console.log(nome, "Casou com Maria em 2012");
console.log("Maria teve um filho com o", nome, "em 2015");
console.log("O filho de", nome, "se chama Eduardo");

nome = 'Lucas';
console.log(nome);
nome = 'Luana';
console.log(nome);
