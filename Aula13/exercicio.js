let varA = 'a'; // B
let varB = 'b'; // C
let varC = 'c'; // A

/*
const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

*/

[varA,varB,varC] = [varB,varC,varA];

console.log(varA, varB, varC);


