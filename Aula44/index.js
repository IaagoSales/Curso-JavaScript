// Continuação aula43

// try{
    // É executada quando não há erros.
//    console.log(a); 
//    console.log('Abri um arquivo.');
//    console.log('Manipulei o arquivo e gerou erro.');
//    console.log('Fechei o arquivo.');
// }catch(e){
//    console.log('Tratando o erro.');
    // É executada quando há erros.
// } finally{
//    console.log('FINALLY: Eu sempre sou executado.')
    // Sempre
// }

// Exemplo prático

function retornaHora(data){
    if(data && !(data instanceof Date)){ // Checar de forma invertida, não é nescessário usar o Else.
       throw new TypeError('Esperando instância de Date.');
    }
    
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

        hour: '2-digit', // Colocar a hora com apenas 2 digitos.
        minute: '2-digit', // Colocar os minutos com apenas 2 digitos.
        second: '2-digit', // Colocar os segundos com apenas 2 digitos.
        hour12: false

    });
}

try{

const data = new Date('01-01-1970');
const hora = retornaHora(11);
console.log(hora);

}catch{
    // Tratar erro.
    //console.log(e);
}finally{

    console.log('Tenha um bom dia.');

}
// retornaHora(new Date());