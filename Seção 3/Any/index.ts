/**
 * Com any, declaramos uma variável que pode 
 * receber qualquer tipo de dado...
 * Deve ser evitado, pois acaba perdendo o sentido de se utilizar TS
 */

const arr1:any = [1, "", true, { nome: "Marcos"}];

console.log(arr1);

arr1.push([1, 2, 3]);

console.log(arr1);