// Break e Continue

// Continue. Continua para próxima interação
// Break. Ele sai do laço.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let numero of numeros){
    if(numero === 4){
        console.log('Pulei o número 4.');
        continue; // Pular para próxima interação do laço.
    }

    console.log(numero);
    if(numero === 7){
        console.log('Número 7 foi encontrado, saindo...');
        break; // Encontra o item desejado, ele sai do
    }

}