// Tratando e lançando erros (try, catch, throw)

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser número')
    }
    return x + y;
}

// console.log(soma(1, 10));
// console.log(soma('1', 10));


try{
    console.log(soma(1, 3));
    console.log(soma('1', 3));
}catch(error){
    console.log('Alguma coisa mais amigável.');
}

// try{
//    console.log(naoExisto);
// }catch(err){
//    console.log('naoExisto não existe.');
//    console.log(err); // Jamais exiba o erro para o usuário...
// }