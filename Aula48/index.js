// As várias maneiras de declarar funções em JavaScript

// 1 - Function hoisting
falaOi();

function falaOi(){
    console.log('Oie');
}

// 2 - First-class objects (Objetos de primeira classe)
// function expression

const souUmDado = function(){
    console.log('Sou um dado.');
}
souUmDado();
function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado);

// 3 - Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Demtro de um objeto

const obj = {
    falar(){
        console.log('Estou falando...')
    }
};

obj.falar();