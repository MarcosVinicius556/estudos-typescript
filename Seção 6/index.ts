interface Product {
    name: string,
    price: number,
    isAvailable: boolean
}

function showProductDetails(obj: Product) {
    console.log(obj);
}

const shirt:Product = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt);
showProductDetails({name: 'Tenis', price: 199.99, isAvailable: true});

/**
 * Interface com parâmetro opcional
 */

interface User {
    email: string,
    role?: string // "?" define que esta propriedade não é obrigatória, então um objeto pode ser criada sem informar ela
}

function showUserDetails(obj: User) {
    console.log(obj);
    if(obj.role) {
        console.log('ROLE PRENCHIDA!');
    }
}

const marcos:User = {
    email: "marcos@teste",
}

const marco:User = {
    email: "marcos@teste",
    role: "admin"

}

showUserDetails(marcos);
showUserDetails(marco);

/**
 * Propriedades com readonly (semelhante ao 'FINAL')
 */

interface Car {
    brand: string,
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

// fusca.wheels = 5; //Não permite, pois a variável só pode receber valor ao ser criada

/**
 * Index Signature
 * 
 * Utilizado quando não sabemos o nome da chave do objeto
 */

interface CoordsObject {
    //Aqui definimos que o nome da propriedade será do tipo <string> e o valor dela do tipo number
    [index: string]: number
}

let coords: CoordsObject = {
    x: 10
}

coords.y = 15;
// coords.z = ''; //Erro...


/**
 * Herança de interfaces
 */

interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const humano:Human = {
    name: "Marcos",
    age: 21
}


const goku:SuperHuman = {
    name: "Marcos",
    age: 21,
    superpowers: ["Genki Dama"]
}

/**
 * Intersection Types
 * 
 * Criação de tipos mais complexos a partir de 2 interfaces (Junção de 2 interfaces)
 */

interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun;

const humanWithGun: HumanWithGun = {
    name: 'Jhon',
    type: 'Revolver',
    caliber: 22
}

/**
 * Readonly para Arrays.... 
 */
//Aqui definimos a tipagem do array, como sendo readonly do tipo 'string'...
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"];

// myArray[3] = "Mamão"; //Não permite....

console.log(myArray);

myArray.forEach((item) => {
    /**
     * Permitiria a alteração....
     */
    console.log(item);
});

myArray = myArray.map((item) => {
    return `Fruta: ${item}`; //Permite alterar....
});

console.log(myArray);


/**
 * Utilizando Tuplas...
 */

type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [0, 1, 2, 3, 4] //Tipamos nosso array, tipando cada um dos itens dele...

console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ["Marcos", 21];

console.log(anotherUser[0]);

anotherUser[0] = "Marco";

// anotherUser[1] = "teste"; //Não permite, pos o tipo não corresponde

/**
 * Tuplas com Readonly
 * 
 * Limita o numero de itens, o tipo e não são modificáveis
 */

function showNumbers(numbers: readonly [number, number]){
    // numbers[0] = 10; //Não permite....
    console.log(numbers[0]);
    console.log(numbers[1]);
}