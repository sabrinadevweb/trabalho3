alert("Bem-vindo!"); 
alert("Bem-vindo!"); 
let totalGraos = 0;
let graos = 1;  // Começamos com 1 grão no primeiro quadro
let quadro = 1;

while (quadro <= 64) {
    totalGraos += graos;  // Adicionamos os grãos do quadro atual ao total
    document.body.innerHTML += `<p> Quadro ${quadro}: ${graos} grãos - Total acumulado: ${totalGraos} grãos </p>`;
    graos *= 2;  // Dobramos a quantidade de grãos para o próximo quadro
    quadro++;  // Incrementamos o quadro
}

document.body.innerHTML += `<p> Total de grãos no tabuleiro de xadrez: ${totalGraos} grãos. </p>`;