interface Point {
<<<<<<< HEAD
    x: number;
    y: number;
    z: number;
}
=======
    x:number;
    y:number;
    z:number;
}

function showCoords(obj:Point) {
    console.log(`X: ${obj.x}`);
    console.log(`Y: ${obj.y}`);
    console.log(`Z: ${obj.z}`);
}

const coordObj:Point = {
    x:10,
    y:15,
    z:20
}

showCoords(coordObj);

/**
 * Interface VS Type Alias
 */

/**
 * Interfaces podem ser modificadas no decorrer 
 * do código caso tenha a necessidade, já o alias não....
 */
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = { name: "Marcos", age: 21 };

console.log(somePerson);

/**
 * Um type alias não pode ser modificado...
 */
type PersonType = {
    name: string
}

// type PersonType = {
//     age: number
// }

/**
 * Literal types
 * com literal type, podemos tipar uma variável com um valor
 * Geralmente é utilizado com Union types
 */

let test: "teste";

function showDirection(direction: "left" | "right"){
    console.log(direction);
}

//Não permite
// showDirection("top");
showDirection("left");
>>>>>>> 37f89b22b80c5340129eb17d74d14dbbb3ce6e2a
