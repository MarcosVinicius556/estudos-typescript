/**
 * Tipos de objetos
 */

function passCoordinates(coord: {x: number, y: number}) {
    console.log(`X coordinates: ` + coord.x);
    console.log(`y coordinates: ` + coord.y);
}

const objCoord = { x: 339, y: 84.2 };

passCoordinates(objCoord);

/**
 * Propriedades opcionais
 * 
 * Colocar a prop + ? faz com que aquele atrib seja opcional
 */

function showNumbers(a: number, b: number, c?: number){
    console.log("A: "+ a);
    console.log("B: "+ b);
    console.log("C: "+ c);
}

showNumbers(1, 2, 3);

/**
 * Validando prop opcional
 */

function advancedGreeting(firstName: string, lastName?: string){
    if(lastName !== undefined){
        return ` Olá, ${ firstName } ${ lastName } `;    
    }

    return `Olá, ${ firstName }, tudo bem?`;
}

console.log(advancedGreeting("Marcos", "Vinicius"));
console.log(advancedGreeting("Marcos"));

/**
 * Union type 
 * Uma alternativa melhor que o any,
 * pois podemos controlar os tipos de dados 
 * que uma variável pode aceitar
 */

function showBalance(balance: string | number){
    console.log(`O saldo da conta é de ${ balance }`)
}


showBalance(100);
showBalance("200");

const arr2: Array< number | string | boolean > = ["" , "", true, 1];

function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "usuario não aprovado";
    }

    return `A função do usuário é: ${ role }`;
}

console.log(showUserRole(false));
console.log(showUserRole('Admin'));

/**
 * Type Alias
 */

function showId(id: string | number) {
    console.log(`O id é: ${id}`)
}

showId(1);
showId("TESTE");

//Aqui definimos um alias para poder utilizar no lugar de union types por exemplo
type ID = string | number;


function showIdAlias(id: ID) {
    console.log(`O id é: ${id}`)
}

showIdAlias(2);
showIdAlias("TESTE 2");