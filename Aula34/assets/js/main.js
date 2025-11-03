const elementos = [
     {tag: 'p', texto: 'Frase 1'}, // 0
     {tag: 'div', texto: 'Frase 2' }, // 1
     {tag: 'section', texto: 'Frase 3'}, // 2 
     {tag: 'footer', texto: 'Frase 4'}, // 3
];

const container = document.querySelector('.container'); // querySelector Seleciona o primeiro elemento com essa classe
const div = document.createElement('div');  // Criar o elemento nescessario

for (let i = 0; i < elementos.length; i++ ){
     let {tag, texto} = elementos[i]; // Associação via desestruturação 
     let tagCriada = document.createElement(tag); 
     let textoCriado = document.createTextNode(texto);
     tagCriada.appendChild(textoCriado);
     //tagCriada.innerHTML = texto; // innerHTML acessar ou modificar o conteúdo HTML de um elemento na página. Em outras palavras, ele permite ler ou alterar tudo que está dentro de uma tag.
     div.appendChild(tagCriada); // appendChild usado para adicionar um novo elemento (ou nó) como filho de um elemento existente no DOM (Document Object Model). Em outras palavras, ele serve para inserir algo dentro de um elemento HTML.
}

 container.appendChild(div);
