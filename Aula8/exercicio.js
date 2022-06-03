
/*

 Escreva isso no console usando variaveis e constantes.
    Iago Sales tem 30 anos, pesa 84 kg, tem 1.8 de altura e seu IMC é de 25.925925925925924
    Iago Sales Nasceu em 2001 

*/


const nome = 'Iago';
const sobrenome = 'Sales';
const idade = 21;
const peso = 84;
const altura = 1.80;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

/* Primeira Resolução do Exercício, Forma mais legível de ser feita. */

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);

/* Segunda Resolução do Exercício */

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg, tem", altura, "de altura e seu IMC é de", imc + ".");
console.log(nome, sobrenome, "Nasceu em", anoNascimento + ".");
