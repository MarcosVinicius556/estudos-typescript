/**
 * Função sem retorno (void)
 */
function withOutReturn():void {
    console.log('esta função não tem retorno');
}

withOutReturn();

/**
 *  callback como argumento
 */

function greeting(name: string): string {
    return `Olá ${name}` ;
}

/** Recebe uma função, que recebe uma outra função que retorna uma string */
function preGreeting(f: (name: string) => string, userName: string){
    console.log("Preparando a execução");

    const greet = f(userName);

    console.log(greet);
}

/**
 * Função que será executada e o parâmetro name que foi definido...
 */
preGreeting(greeting, "Marcos");

/**
 * Generic Function
 */
/* 
 * T -> Generic, aqui estamos definindo que:   
    -> A função retornará um tipo T
    -> O parâmetro recebido pela função deverá ser do tipo
       T
    -> Dessa forma conseguimos fazer uma função genérica
       Capaz de executar qualquer coisa e retornar algo a partir disto....

    Uso parecido com linguagens orientadas a objeto e fortemente tipadas....
 */

function firstElement<T>(arr: T[]): T {
    return arr[0];
}


console.log(firstElement([1, 2, 3]));
console.log(firstElement(["!", "@", "#"]));

function mergeObjects<U, T>(obj1: U, obj2: T){
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects("Marcos ", "Vinicius");

console.log(newObject);

/**
 * Constraints e generics function
 * limitamos os tipos que generics podem aceitar
 */

function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T;

    if(+a > +b){
        biggest = a;
    } else {
        biggest = b
    }
    return biggest;
}

console.log(biggestNumber(1, 2));
console.log(biggestNumber("10", "20"));

/**
 * Especificando tipo de parâmetros
 */

function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2);
}

//Definindo os tipos de parâmetros aceitos direto na execução...
console.log(mergeArrays<number | string>([1,2,3], ["Marcos ", " Vinicius"]));


/**
 * Argumentos opcionais
 */

function modernGreeting(name: string, greet?: string) {
    if(greet){
        return `Olá ${greet} ${name}`;
    } 

    return `Olá ${name}`;
}

console.log(modernGreeting("Marcos"));
console.log(modernGreeting("Marcos", "Dev."));

/**
 * Parâmetro default
 */

function somaDefault(n: number, m = 10): number {
    return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(10, 20));

/**
 * Tipo Unknouwn
 * Parecido com Any, porém obriga uma validação de tipo...
 */

function doSomething(x: unknown) {
    if(Array.isArray(x))
        console.log(x[0]);
    
}

doSomething([1, 2, 3]);
