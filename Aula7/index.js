/* Regras para criar uma constante 

    1 - Não podemos criar constantes com palavras reservadas. 
    2 - Constantes precisam ter nomes significativos 
    3 - Não pode começar o nome de uma constante com um número. 
    4 - Os nomes das constantes não podem conter espaçoes ou traços. 
    5 - Utilizar camelcase para constantes com nomes compostos. 
    6 - Case Sensitive. No caso são 2 Contantes diferentes, pois letras maiusculas e minusculas fazem diferença.
    7 - Não podemos modificar o valor de uma constante 
    8 - Não utilize VAR, utilize CONST.

*/


/* String = Texto | Number = Número */

const nome = 'Iago';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10; 
const resultado = primeiroNumero * segundoNumero; 
console.log(resultado);

const resultadoDuplicado = resultado * 2; 
console.log(resultadoDuplicado);

console.log(typeof(primeiroNumero + segundoNumero));
