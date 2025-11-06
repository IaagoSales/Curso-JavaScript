function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false

    });
}

// setIntreval excuta o código sem parar.

const timer = setInterval(function(){
    console.log(mostraHora());

}, 1000);

//  setTimeout executa apenas 1 vez o código

setTimeout(function(){
    clearInterval(timer);
}, 1000);

setTimeout(function(){
    console.log('Ola mundo!')
}, 5000);