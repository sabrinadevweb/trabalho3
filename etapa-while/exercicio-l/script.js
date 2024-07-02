alert("Bem-vindo!"); 
alert("Bem-vindo!"); 

// Array para armazenar os valores lidos (simulando a leitura dos valores)
const valores = [5, 3, 7, 2, 4, 6, 8, 10, 9, 1, 5, 3, 7, 2, 4]; // Exemplo de valores

// Inicializa o somatório total
let totalSomatorio = 0;

// Índice para percorrer os valores
let i = 0;

// Calcula o somatório dos fatoriais usando um loop while
while (i < 15) {
    const valor = valores[i]; // Lê o valor do array
    let fatorialValor = 1;

    // Calcula o fatorial do valor
    for (let j = 2; j <= valor; j++) {
        fatorialValor *= j;
    }

    totalSomatorio += fatorialValor; // Adiciona ao somatório total
    i++;
}

// Exibe o resultado
document.body.innerHTML += `<p> Total do somatório dos fatoriais: ${totalSomatorio} </p>`;