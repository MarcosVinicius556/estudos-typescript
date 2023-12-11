var firstName = "Marcos";
var anotherName = 1;
var x = true;
//Aqui passamos a tipar os parâmetros da função, desta forma,
//o ts não irá mais permitir que a função aceite qualquer parâmetro
function greeting(name) {
    console.log("Olá " + name);
}
greeting(firstName);
// greeting(anotherName); //Não é mais válido
// greeting(x); //Não é mais válido
