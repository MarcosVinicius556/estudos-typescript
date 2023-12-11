/**
 * Number
 */
let n1:number = 10;

console.log(n1);

// n1 = ""; //Não permite alterar o tipo da variável...

console.log(typeof n1);

const n2:number = 15.584848;


//Limita em 3 casas, Limitamos os tipos de funções de acordo com o tipo da variável
console.log(n2.toPrecision(3));

console.log(typeof n2);

/**
 * String
 */

const myName:string = "Marcos";

console.log(myName.toUpperCase());

let fullName:string;
let lastName:string = "Vinicius";

fullName = myName + lastName;

console.log(fullName);
console.log(typeof fullName);

/**
 * Boolean
 */

let a:boolean = false;

console.log(a);
console.log(typeof a);

// a = 0; //No typescrypt não é mais permitido esta "gambiarra"



