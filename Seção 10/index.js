"use strict";
/**
 * Exemplo de decorator
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    return function (target, propertKey, descriptor) {
        console.log('Executando decorator');
        console.log(target);
        console.log(propertKey); //Objeto que o decorator está atrelado
        console.log(descriptor); //Descrição do que está sendo feito
    };
}
class myClass {
    /**
     * Aqui estamos utilizando o decorator, então quando o método abaixo for executado
     * O decorator também irá ser executado junto...
     */
    testing() {
        console.log('Terminando execução do método');
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
/**
 * Multiplos decorators
 */
function a() {
    return function (target, propertKey, descriptor) {
        console.log('executou a');
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log('executou b');
    };
}
class MultipleDecorators {
    testing() {
        console.log('terminando função');
    }
}
__decorate([
    a(),
    b() //Sempre o primeiro a ser executado é o mais abaixo
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
/**
 * Decorator de classe
 *
 * - Atrelado ao construtor
 */
//Definindo um decorator de classe
function classDecorator(constructor) {
    console.log(constructor);
    if (constructor.name === 'User') { //Verificando o nome da classe
        console.log('Criando usuário');
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const marcos = new User('Marcos');
console.log(marcos);
/**
 * Decorator de método
 *
 * executado antes do m´´etodo que o chama
 */
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        /**
         * enumerable == false, faz com que o método não seja acessível
         */
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
/**
 * Acessor decorator
 *
 * utilizado em getters e setters
 */
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return this.name;
    }
    get showAge() {
        return this.age;
    }
}
__decorate([
    enumerable(true) //Listando os métodos
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false) //Escondendo os métodos
], Monster.prototype, "showAge", null);
const charmander = new Monster('Charmander', 10);
console.log(charmander);
