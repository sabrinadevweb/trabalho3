alert("Bem-vindo!"); 
// Array para armazenar os valores lidos (simulando a leitura dos valores)
let valores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Inicializando com 10 elementos zerados

// Variáveis para armazenar somatório e calcular média
let somatorio = 0;
let media = 0;

// Simulação de leitura dos valores (pode ser substituído por entrada do usuário)
let i = 0;
do {
    valores[i] = parseInt(prompt(`Digite o ${i + 1}º valor:`));
    i++;
} while (i < 10);

// Calculando somatório
i = 0; // Reinicializando o contador
do {
    somatorio += valores[i]; // Somando todos os valores
    i++;
} while (i < 10);

media = somatorio / 10; // Calculando a média

// Exibindo os resultados
document.body.innerHTML += `<p> \nValores digitados: ${valores.join(', ')} </p>`;
document.body.innerHTML += `<p> Total do somatório: ${somatorio} </p>`;
document.body.innerHTML += `<p> Média dos valores: ${media} </p>`;
