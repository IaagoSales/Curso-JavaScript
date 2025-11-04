// For off - Estrutura de Repetição \\

const nome = 'Luiz Otávio';

// Modelo 1 de For Clássico. Um pouco mais complexo
// Usado quando você quer controlar o índice manualmente (número da posição).
// Use quando:
// Precisa do índice (posição) de cada item.
// Quer pular ou parar em uma posição específica.
// Está trabalhando com arrays numéricos.

//for(let i = 0; i < nome.length; i++){
//   console.log(nome[i]);
//}

// Modelo 2 de For In. Um pouco mais simples
// Usado para percorrer as chaves (nomes das propriedades) de um objeto
// Use quando:
// Quer ler propriedades de um objeto.
// ⚠️ Não use com arrays, porque ele percorre índices como strings e pode dar comportamento inesperado.

//for(let i in nome){
//    console.log(nome[i]);
//}

// Modelo 3 de For Off
// Usado para percorrer valores diretamente em arrays, strings, Map, Set, etc.
// ✅ Use quando:
// Quer acessar os valores sem se preocupar com o índice.
// Está lidando com algo “iterável” (array, string, etc).

for(let valor of nome){
    console.log(valor);

}


