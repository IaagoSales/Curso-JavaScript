const verdadeira = true;

// Let tem escopo de bloco {}
// Var so tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

if(verdadeira){
    let nome = 'Otávio' // Criando dentro deste bloco 
    console.log(nome, nome2);

    if(verdadeira){
        console.log('OK.');
    }
}

