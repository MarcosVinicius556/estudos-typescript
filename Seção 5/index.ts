/**
 * never é semelhante ao void
 * muito utilizado quando se tem algo que lança exeções por exemplo
 */

function showErrorMessage(msg: string): never{
    throw new Error(msg)
}

// showErrorMessage('Algum Erro');

/**
 * REST Operator (...)
 */

function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1, 2, 3));
//console.log(sumAll('teste')); //Erro pois não é do tipo esperado


/**
 * Destructing com parametro
 */

//Para podermos utilizar a desestruturação com TS, é necessário "tipar" o nosso objeto
//Pode ser hardcode como fizemos aqui neste exemplo, ou chamando o tipo do objeto, ex ": Produto"
function showProductDetails({name, price}: {name: string, price: number}): string {
    return `O nome do produto é ${name} e ele custa R$ ${price}`
}

const shirt = {name: 'Camisa', price: 20.00};

showProductDetails(shirt);



