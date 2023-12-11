/**
 * Parâmetros tipados
 */

function soma(a: number, b: number) {
    console.log(a + b)
}

soma(1, 2);

/**
 * Retorno tipado
 */
//Aqui estamos definindo o retorno da função sendo string...
function greeting(name: string): string {
    return `Olá ${name}`;
}

/**
 * Funções anônimas
 */

setTimeout(() => {
    const salary: number = 1000;

    // console.log(parseFloat(salary));

    // console.log(salary);

}, 2000);

