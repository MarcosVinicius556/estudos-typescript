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
