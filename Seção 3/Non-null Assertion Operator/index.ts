/**
 * Utilizamos o operador "!" quando temos um valor que pode ser nulo
 * Mas sabemos que em algum momento ele vai vir a existir...
 * Muito comum em eventos de manipulação de dom
 */
const p = document.getElementById("some-p");

console.log(p!.innerText);