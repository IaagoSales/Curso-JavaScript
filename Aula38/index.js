// While e Do While - Estrutura de Repetição

// Exemplo 1 

let i = 0;

while(i <= 10){
    console.log(i);
    i++;
}

console.log('Segue a vida...');

// Exemplo 2

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1, 50);
console.log(rand);

// const min = 1;
// const max = 50;
// let rand = random(min, max);

// while(rand !== 10){
//    rand = rand(min, max);
//    console.log(rand);
//}

// do{
// rand = random(min, max);
// console.log(rand);
// }while(rand !== 10);