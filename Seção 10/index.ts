/**
 * Exemplo de decorator
 */

/**
 * Criando um decorator...
 * 
 * Um decorator deverá retornar uma função que recebe 3 argumentos
 */
function myDecorator() {

    console.log('iniciando decorator');

    /**
     * Retornamos uma função, que por padrão já recebe os parâmetros default de um decorator...
     * Parâmetros estes que vão nos ajudar na hora de descobrir onde ou o que um decorator executa
     */
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log('Executando decorator');
        console.log(target);
        console.log(propertKey); //Objeto que o decorator está atrelado
        console.log(descriptor); //Descrição do que está sendo feito
    }

}

class myClass {

    name!: string;

    /**
     * Aqui estamos utilizando o decorator, então quando o método abaixo for executado
     * O decorator também irá ser executado junto...
     */
    @myDecorator()
    testing() {
        console.log('Terminando execução do método')
    }
}

const myObj = new myClass();
         
myObj.testing();

/**
 * Multiplos decorators
 */

function a() {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log('executou a');
    }
}

function b() {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log('executou b');
    }
}

class MultipleDecorators {
    @a() 
    @b()//Sempre o primeiro a ser executado é o mais abaixo
    testing() {
        console.log('terminando função')
    }
}

const multiple = new MultipleDecorators();

multiple.testing();

/**
 * Decorator de classe
 * 
 * - Atrelado ao construtor
 */

//Definindo um decorator de classe
function classDecorator(constructor: Function) {
    console.log(constructor);
    if(constructor.name === 'User') { //Verificando o nome da classe
        console.log('Criando usuário');
    }
}

@classDecorator
class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const marcos = new User('Marcos');

console.log(marcos);

/**
 * Decorator de método
 * 
 * executado antes do m´´etodo que o chama
 */

function enumerable(value: boolean) {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        /**
         * enumerable == false, faz com que o método não seja acessível
         */
        descriptor.enumerable = value;
    }
}

class Machine {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @enumerable(false)
    showName() {
        return `O nome da máquina é: ${this.name}`
    }
}

const trator = new Machine("Trator");

console.log(trator.showName())

/**
 * Acessor decorator
 * 
 * utilizado em getters e setters
 */

class Monster {
    name?
    age?

    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }

    @enumerable(true) //Listando os métodos
    get showName() {
        return this.name;
    }

    @enumerable(false) //Escondendo os métodos
    get showAge() {
        return this.age;
    }
}

const charmander = new Monster('Charmander', 10);

console.log(charmander)

/**
 * Property Decorator
 * 
 * Utilizado nas propriedades de uma classe...
 * 
 * Geralmente utilizado para validações
 */

//Criando um decorator de atributo, que forma o campo id, 
//até ele possuir 5 casas. Ex: 00001
function formatNumber() {
    return function(target: Object, propertyKey: string){
        let value: string;
        
        /*
            Aqui podemos criar novas estruturas de getter, setter, etc...
        */

        const getter = () => {
            return value;
        }

        const setter = (newVal: string) => {
            value = newVal.padStart(5, "0"); //concatena '0' até ter o tamanho de 5
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })

    }
}

class ID {
    //Adicionando o decorator no atributo, e assim,
    //quando chamado, ele já será formatado automáticamente
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id;
    }
}

const newItem = new ID('1');

console.log(newItem);

/**
 * Exemplo real com Class Decorator
 */

/**
 * Criando as datas automaticamente...
 */
function createdDate(created: Function) {
    //Pegamos o construtor e adicionamos uma nova propriedade chamada
    //'createdAt' e inicializamos ela com a data atual, desta forma poderia
    //Ser reutilizado em qualquer classe
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id;
    createdAt?: Date; //Necessário definir, pois se o fizermos, não podemos acessa-la

    constructor(id: number) {
        this.id = id;
    }
}

@createdDate
class Pen {
    id;
    createdAt?: Date;

    constructor(id: number) {
        this.id = id;
    }
}

const newBook = new Book(1);
const newPen = new Book(2);

console.log(newBook);
console.log(newPen);

/**
 * Exemplo real com method decorator
 * 
 * Alterar a execução de um método
 * 
 * ex: verificar se um usuário pode fazer alteração no sistema de acordo com seu nível de acesso
 */

function checkIfUserPosted() {
    return (targert: Object, key: string | Symbol, descriptor: PropertyDescriptor) => {
        //Pegamos a função
        const childFunction = descriptor.value;
        console.log(childFunction)
        
        descriptor.value = function(...args: any[]) {//Pegamos todos os argumentos da função
            if(args[1] === true) {
                console.log('Usuário já postou');
                return null;
            } else {
                //Caso seja válido, executa a função normalmente
                return childFunction.apply(this, args);
            }
        }

        return descriptor;
    }
}

class Post {
    alreadyPosted = false;

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true;
        console.log(`post do usuário: ${content}`)
    }
}

const newPost = new Post();

newPost.post('Meu primeiro post', newPost.alreadyPosted);

//Com o decorator, não permitimos que o usuário faça mais de um post....
newPost.post('Meu segundo post', newPost.alreadyPosted);

newPost.post('Meu terceiro post', newPost.alreadyPosted);

/**
 * Exemplo real com property decorator
 * 
 * ex: validação da quantidade de caracteres
 */
function Max(limit: number) {
    return (target: Object, propertyKey: string) => {
        let value: string;

        const getter = () => {
            return value;
        }

        const setter = (newValue: string) => {
            if(newValue.length > limit){
                console.log('O valor deve ter no máximo de ' + limit)
            }
            value = newValue
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}

class Admin {
    @Max(10) //Definimos que o username deverá ter no máximo 10 characteres
    username

    constructor(username: string){
        this.username = username;
    }

}


const pedrinho = new Admin('Pedrinho Marcão Costa'); //Inválido...
const pedrinho2 = new Admin('Pedrinho 2'); //Valido...

