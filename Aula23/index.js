
/* IF, ELSE IF, ELSE */
/*Entre 0 - 11 -> Bom dia
  Entre 12 - 17 -> Boa Tarde
  Entre 18 - 23 - Boa Noite  */

// IF - pode ser usado sozinho
// ELSE - Sempre que utilizo a palavra else, preciso de um if antes
// ELSE IF - posso ter vários else ifs na checagem
// ELSE - Só posso ter um else na chegagem e por ultimo e o mesmo não tem CONDIÇÃO.
// Podemos usar condições sem else if, utilizando só if e else

const hour = 10;


// Se a condição for falsa, o todo o restante referente a esse trecho não será executado.
if(hour >= 0 && hour <= 11){
    console.log('Bom dia.');
}else if(hour >= 12 && hour <= 17){
    console.log('Boa Tarde.');
}else if(hour >= 18 && hour <= 23){
    console.log('Boa noite.');
}else{
    console.log("Olá")
} 


const tenhoGrana = false;

if(tenhoGrana){
    console.log('Vou sair de casa');
}else{
    console.log('Não vou sair de casa')
}

/* 
Operadores de comparação
>  maior que
>= maior que ou igual a
<  menor que 
<= menor que ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/
const num1 = 10;
const num2 = 10;
const comp = num1 === num2;
console.log(comp);
