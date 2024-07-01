const pessoa1 ={
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    }

};

pessoa1.fala();


// const nome01 = 'Luiz';
// const sobrenome01 = 'Miranda';
// const idade01 = 25;

// const nome02 = 'Maria';
// const sobrenome02 = 'Oliveira';
// const idade02 = 20;

// const pessoa1 = {
    // nome: 'Luiz',
    // sobrenome: 'Miranda',
    // idade: 25
// };

// console.log(pessoa1.nome)

// Maneira correta \\

// function criaPessoa(nome, sobrenome, idade){
   // return{
       // nome: nome,
       // sobrenome: sobrenome,
       // idade: idade
   // };
// };

// const pessoa1 = criaPessoa('Iago', 'Sales', 23);
// const pessoa2 = criaPessoa('Luana', 'Pensado', 41);
// const pessoa3 = criaPessoa('Pedro', 'Ramos', 18);
// console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)


// const array = [1,2,3];
// array.push(4);
// array[0] = 'Iago';
// console.log(array);