alert("Bem-vindo!"); 

//Inicializando a variável para armazenar a soma
let soma = 0;

//usando um laço for para iterar de 1 a 500
for (let i = 1; i <=500; i++) {
//verificando se o numero é par 
if (i % 2 === 0) {
//adicionando o número par á soma
soma += i;
}
}
// exibindo o resultado no console
document.body.innerHTML += '<p> o somatório dos valores pares de 1 até 500 é: ${soma} </p>';