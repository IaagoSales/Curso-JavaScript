// Escreva uma função chamada ePaisagem que recebe dois argumentos
// largura e altura de uma imagem (number)
// Retorne true se a imagem estiver em modo paisagem

// Resolução 1

// function ePaisagem(largura, altura){
//    return largura > altura ? true : false;
//}

// Resolução 2

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1080, 1920));