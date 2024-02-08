import importGreet from "./greet";

importGreet();

/**
 * Import de variável
 */
import { x } from "./variable";

console.log(x);

/**
 * Multiplas importações
 */
import { a, b, myFunction } from "./multiples";

console.log(a);
console.log(b);
myFunction();

/**
 * Alias na importacao
 */
import { someName as name } from "./changename"; //Definindo um alias para o import

console.log(name);

/**
 * Import de todos os dados de um arquivo
 */

import * as numbers from './numbers';

console.log(numbers);

const nx = numbers.n1;
console.log(nx);

/**
 * Importando tipos / interfaces
 */

import { Human } from "./mytype";

class User implements Human {
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const Marcos = new User('Marcos', 21);

console.log(Marcos);