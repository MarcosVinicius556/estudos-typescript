/**
 * BigInt -> Utilizado para valores númericos muito altos
 * Mas para poder ser utilizado é necessário alterar na config do TS
 * para a versão mínima do ES2020...
 */
let n: bigint;

n = 1000n;

console.log(n);
console.log(typeof n);

/**
 * Symbol
 * Resumidamente, cria uma referência única para um valor
 * Mesmo que duas variáveis possuam um mesmo valor X, com o Symbol
 * elas vão ser diferentes para o TS
 */
let symbolA:Symbol = Symbol("a"); //Declarando um symbol
let symbolB:Symbol = Symbol("a"); //Declarando um symbol

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);