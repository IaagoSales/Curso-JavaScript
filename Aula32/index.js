const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320

    }

};
//Atribuição via Desestruturação\\
const{nome = '', sobrenome = '', ...resto} = pessoa;
console.log(nome, sobrenome);
//Atribuição "Normal"\\
// const nome = pessoa.nome;
// console.log(nome);