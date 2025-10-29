//For - Clássico - Estrutura de Repetição\\

//console.log('Linha1');
//console.log('Linha2');
//console.log('Linha3');
//console.log('Linha4');

//Primeira Parte: Criar uma variáel de Controle\\
//Segunda Parte: Criar uma condição, para saber quando o FOR vai parar.\\
//Terceira Parte: Incrementar(+) ou Decrementar(-) a variável\\

//Exemplo 01\\

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
    //console.log(`Linha ${i}`);\\

}

//Exemplo 02\\

const frutas =['Maçã', 'Pera', 'Uva', 'Luiz', 'Otávio'];
for(let i = 0; i <=frutas.length; i++){
    console.log(`Índice ${i}`, frutas[i]);

};