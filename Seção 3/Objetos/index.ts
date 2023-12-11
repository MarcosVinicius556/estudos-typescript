/**
 * Tipos de objetos
 */

function passCoordinates(coord: {x: number, y: number}) {
    console.log(`X coordinates: ` + coord.x);
    console.log(`y coordinates: ` + coord.y);
}

const objCoord = { x: 339, y: 84.2 };

passCoordinates(objCoord);