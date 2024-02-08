/**
 * Campos em classe
 */

class User {
    //Typescript obrigado que o campo seja iniciado em classes, 
    //porém, se não quisermos inicializar, basta adicionarmos o
    //sindal de "!", assim o typescript libera
    name!: string; 
    age!: number;
}

const marcos = new User();

console.log(marcos);

marcos.name = 'Marcos';
// marcos.job = 'Programmer'; //Não permite

console.log(marcos);


/**
 * Constructor
 */

class NewUser {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const newMarcos = new NewUser('Marcos 2', 21);
console.log(newMarcos);


/**
 * Propriedades readonly
 */

class Car {
    name: string;
    readonly wheels: number = 4; //Não permite alterar

    constructor(name: string){
        this.name = name;
    }
}

const fusca = new Car('Fusca');

console.log(fusca);


/**
 * Herança e Super
 */

class Machine {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const trator = new Machine('Trator');

console.log(trator);

class KillMachine extends Machine {
    guns: string[];

    constructor(name: string, guns: string[]){
        super(name);
        this.guns = guns;
    }

}

const destroyer = new KillMachine('Destroyer', ['Minigun']);

console.log(destroyer);

/**
 * Métodos
 */

class Dwarf {
    name: string;

    constructor(name: string){
        this.name = name;
    }


    greeting() {
        console.log('Opa');
    }

}

const jimmy = new Dwarf('Jimmy');

jimmy.greeting();


/**
 * This em classes
 */

class Truck {
    model: string;
    hp: number

    constructor(model: string, hp: number){
        this.model = model;
        this.hp = hp;
    }

    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}

const volvo = new Truck('Volvo', 400);

volvo.showDetails();


/**
 * Getters
 */

class Person {
    name: string;
    surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + " " + this.surname;
    }

}


const marcosVinicius = new Person('Marcos Vinicius', 'Angeli Costa');

console.log(marcosVinicius.fullName);

/**
 * Setters
 */

class Coords {
    x!: number;
    y!: number;

    set fillX(x: number){
        if(x === 0)
            return

            this.x = x
            console.log('O novo valor de X é ' + x);
    }

    set fillY(y: number){
        if(y === 0)
            return

            this.y= y
            console.log('O novo valor de X é ' + y);
    }
}

const myCoords = new Coords();

myCoords.fillX = 1;
myCoords.fillY = 1;

console.log(myCoords);

/**
 * Herdando interfaces
 */

interface showTitle {
    itemTitle(): string;
}

class blogPost implements showTitle {

    title: string;

    constructor(title: string) {
        this.title = title;
    }

    itemTitle(): string {
        return `O titulo do post é ${this.title}`;
    }
}

const myPost = new blogPost('Olá mundo');

console.log(myPost.itemTitle());

class TestingInterface implements showTitle{
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    itemTitle(): string {
        return `O titulo é ${this.title}`;
    }
}


const myPost2 = new blogPost('Olá mundo');

console.log(myPost2.itemTitle());

/**
 * Overrride de métodos
 */


class Base {
    someMethod() {
        console.log('Alguma coisa');
    }
}


class Nova extends Base {

    /**
     * Para dar override em um método herdado, 
     * apenas basta reescrevelo com o mesmo nome 
     * da classe filha
     */
    someMethod() {
        console.log('ALTERADO');
    }

}

const myObject = new Nova();

myObject.someMethod();

/**
 * static member
 */

class StaticMembers {
    static prop = "Teste static";

    static staticMethod() {
        console.log('Este é um mpetodo estático');
    }
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();

/**
 * Generic Class
 */

class Item<T, U> { //A classe pode receber parâmetros genéricos em seus argumentos por exemplo...
    first;
    second;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }
}

const newItem = new Item('UM', 'DOIS');

/**
 * Parameters Properties
 */

class ParameterProperties {
    /**
     * Definimos as variáveis direto no construtor,
     * semelhante ao que temos com o 'record' nas 
     * versões mais recentes de JAVA 
     */
    constructor(public name: string, private qty: number, private price: number) {        
        this.name = name;
        this.qty = qty;
        this.price = price;
    }

    get showQty() {
        return `${this.qty}`;
    }

    get showPrice() {
        return `${this.price}`;
    }
}

const newShirt = new ParameterProperties('Camisa', 5, 9.99);

console.log(newShirt);


/**
 * Class Expressions
 */

const myClass = class<T> { //Definição de uma classe anônima
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const pessoa = new myClass('Opa');

console.log(pessoa);

/**
 * Classe abstrata
 */

abstract class AbstractClass {
    abstract showName(): void;
}


// const newObj = new AbstractClass(); //Erro

class AbstractExample extends AbstractClass {
    
    name: string;

    constructor(name: string){
        super();
        this.name = name;
    }

    showName(): void {
        console.log('O nome é: ' + this.name);
    }
}

const newExample = new AbstractExample('Marcos');

newExample.showName();


/**
 * Relação entre classes
 */

class Dog {
    name!: string;
}

class Cat {
    name!: string;
}

const doguinho: Dog = new Cat(); //O TS NÃO bloqueia, mas não deve ser utilizado....