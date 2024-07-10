// Objeto Date

// Date - JavaScript | MDN

// const data  = new Date();

// Formato mais utilizado.
function formatarData (data){

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mes começa do zero
console.log('Anos', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Hora', data.getMinutes());
console.log('Seg', data.getSeconds()); // Domingo é 0
console.log(data.toString());

return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

const data = new Date();
const dataBrasil = formatarData(data);
console.log(dataBrasil);