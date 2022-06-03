
/*

Diferença entre Undefined e Null:
    Ambas não apontam para lugar nenhum na memória,
    porém o Null serve para desconfigurar uma variável,
    colocando o valor dela como nulo.
    Basicamente Undefined: Automatico
    e Null: Manual, a gente que escolhe quando será "vazio".


*/

/* Tipos de Dados Primitivos: String, Number, Undefined, Null, Boolean, Symbol */

const nome = 'Iago'; /* String */ 
const nome2 = "Iago"; /* String */
const nome3 = `Iago`; /* String */
const num = 10; /* Number */
const num2 = 10.52; /* Number */
let nomeAluno; /* Undefined = Não aponta pra local nenhum na memória. */
const sobrenomeAluno = null; /* Null = Não aponta pra local nenhum na memória. */
const aprovado = true;  /* Boolean: Só tem "2 valores", true ou false (Lógico) */

console.log(typeof aprovado, aprovado);

let a = 2;
let b = a;

console.log(a, b); // 2,2 

a = 3;
console.log(a, b); // 3,2
