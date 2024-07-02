alert("Bem-vindo!"); 

//Inicializando a variável para armazenar a soma
let soma = 0;

// usando um laço for para somar os números de 1 a 100
for (let i = 1; i <= 100;i++) {
soma += i ;
}

//Exibindo o resultado
document.body.innerHTML += '<p> A soma dos cem primeiros números inteiros é: ${soma} </p>'