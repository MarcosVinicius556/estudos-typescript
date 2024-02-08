/**
 * Revisão de generics
 */

function showData<T>(arg: T): string {
    return `O dado é: ${arg}`;
}

/**
 * Aqui podemos observar que utilizando generics, 
 * a função faz a conversão para o tipo que a função retorna....
 */
console.log(showData(5));
console.log(showData('Testando genéric'));
console.log(showData(true));

/**
 * Constraints em generics
 * 
 * Limitar os tipos de um generic
 */

function showProductName<T extends { name: string }>(obj: T) {
    return `O nome do produto é: ${obj.name}`;
}

const myObj = {name: 'Lanterna', color: 'black'};

console.log(showProductName(myObj));

const myObj2 = {color: 'white'};

//console.log(showProductName(myObj2)); //Erro, pois não atende aos requisitos do generics

/**
 * Generics com Interfaces
 */

/**
 * Aqui na criação da interface, dizemos que ela poderá ter
 * 2 atributos do qual não sabemos o valor, apenas que eles
 * estarão presentes no objeto....
 */
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

/**
 * Aqui criamos um tipo para utilizar em outras funções, tornando o código mais simples de ser lido
 */
type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = {
    name: "Fusca",
    wheels: 4,
    engine: 1.5,
    color: "Azul"
}

const myPen: Pen = {
    name: "Caneta BIC",
    wheels: false,
    engine: false,
    color: "Azul"
}

console.log(myCar);
console.log(myPen);

/**
 * Type parameters
 * 
 * Um recurso de generics, utilizado para dizer 
 * que algum parâmetro da função, será a chave de um objeto....
 * (Ligando um argumento ao outro...)
 */

/**
 * 
 */
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave está presente em ${obj[key]}`;
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'));
// console.log(getSomeKey(server, 'rams')); //Erro, pois a chave não está presente no objeto

/**
 * Keyof Type Operator
 * 
 * Podemos criar um novo tipo e ele aceita dados do tipo objeto
 */

type Character = { name: string, age: number, hasDriveLicense: boolean };

/**
 * Aqui definimos que este tipo, deverá ser uma das chaves de Character, 
 * tipando assim os parâmetros de uma função por exemplo, e dessa forma 
 * limitando o que poderá ser recebido e tendo uma função mais "segura"
 */
type C = keyof Character;

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`;
}

const myChar: Character = {
    name: 'Marcos',
    age: 21,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'));
// console.log(showCharName(myChar, 'namess')); //Erro, pois não existe esta chave dentro de myChar

/**
 * Typeof type Operator
 * 
 * Cria um objeto baseado em outro objeto...
 */

const userName: string = "Marcos";

const userName2: typeof userName = "Marcos 2";
// const userName3: typeof userName = 2; //Erro pois não é do mesmo tipo

/**
 * Indexed Access Types
 * 
 * Pode criar tipos baseados em chaves de objetos
 */

type Truck = {
    km: number, 
    kg: number,
    description: string
}

type Km = Truck['km']; //Aqui limitamos o tipo da chave de 'Truck' para o tipo de Km

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga!'
}

function showKm(km: Km){
    console.log(`O veículo tem a km de: ${km}`);
}

showKm(newTruck.km);

/**
 * Conditional Expressions Type
 * 
 * Permite criar um novo tipo com base em IF/ELSE
 */

interface A {};

interface B extends A {};

interface Teste {
    showName(): string;
}

type MyType = B extends A ? number : string;

const someVar: MyType = 5;
// const someVar2: MyType = ""; //Erro, pois B extende de A, então a variável é do tipo number

type MyTypeB = Teste extends { showName(): string } ? string : boolean;

/**
 * Template Literals Type
 */

type testA = 'text';

type customType = `some ${testA}`;

const testing: customType = 'some text';
// const testing2: customType = 'some text 2'; //Erro, pois o valor não corresponde ao definido no tipo acima....


type a1 = "Testando";
type a2 = "Union";

type a3 = `${a1}` | `${a2}`;

