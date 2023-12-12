/**
 * Narrowing é utilizado em typescript para identificar
 * tipos de dados, podendo assim definir o rumo de uma aplicação
 * de acordo com o tipo da variável que é recebido
 */

/**
 * type guard
 * 
 * Aqui estamos fazendo tratativas diferentes para cada tipo 
 * de dado diferente que recebemos, este tipo de narrowing pode 
 * ser chamado de type guard....
 */

function sum(a: number | string, b: number | string) {
    if(typeof a === 'string' && typeof b === 'string'){
        console.log(parseFloat(a) + parseFloat(b));
    } else if(typeof a === 'number' && typeof b === 'number'){
        console.log(a + b);
    } else {
        console.log('Não é possível realizar esta operação');
    }
}

sum("10", "20");
sum(1, 2);
sum("5", 10);

/**
 * Checando se um valor existe
 */

function operations(arr: number[], operation?: string | undefined) {
    if(operation){
        if(operation === 'sum'){
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        } else if(operation === 'multiply'){
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        } else {
            console.log('Operação não existente!');
        }
    } else {
        console.log('Por favor defina uma operação');
    }
}

operations([ 1 ]);
operations([ 1, 2 ], 'sum');
operations([ 1, 2, 3 ], 'multiply');
operations([ 1, 2, 3, 4 ], 'divide');

/**
 * Instanceof
 * 
 * Utilizado para tipos mais complexos de objetos...
 */

class User {
    name;
    constructor(name: string){
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name:string){
        super(name);
    }
}

const marcos = new User("Marcos");
const jhon = new User("Jhon");

console.log(marcos)
console.log(jhon)

function userGreeting(user: Object) {
    if(user instanceof SuperUser) {
        console.log(`Olá ${user.name}, Deseja ver os dados do sistema?`);
    } else if(user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}

/**
 * Operador in
 */

class Dog {
    name;
    breed;

    constructor(name: string, breed?: string){
        this.name = name;
        if(breed){
            this.breed = breed;
        }
    }
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");

function showDogDetails(dog: Dog){
    if('breed' in dog) { //Verificando se existe uma propriedade dentro de um objeto
        console.log(`O cachorro é da raça ${dog.breed}`);
    } else {
        console.log(`O cachorro é um SRD`);
    }
}

showDogDetails(turca);
showDogDetails(bob);