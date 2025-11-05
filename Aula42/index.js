// Escreva uma função que recebe um número e
// Retorne o seguinte
// Número divisível por 3 = Fizz
// Número divisível por 5 = Buzz
// Número divisível por 3 e 5 = FizzBuzz
// Número não divisível por 3 e 5 = Retorna o própio número
// Checar se o número é ralmente um número = Retorna o própio número
// Use a função de números de 0 a 100

function fizzBuzz(numero){
    if(typeof numero !== 'number') return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 ===0) return 'Fizz';
    if(numero % 5 ===0) return 'Buzz';
    return numero;

}
console.log('a', fizzBuzz('a'));
for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}