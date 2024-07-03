/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> Vai retornar "o valor verdadeiro, caso tenha, se não tiver ira verificar o ultimo valor false"

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

// const corUser = null;
// const corDefault = corUser || 'black';
// console.log(corDefault);


// console.log(0 || false || null || 'Iago Sales' || true);

// function falaOi(){
//    return 'Oi';
// }

// const vaiExecutar = false;
// console.log(vaiExecutar && (falaOi()));


// console.log('Iago Sales' && true && 'Gabrielle');