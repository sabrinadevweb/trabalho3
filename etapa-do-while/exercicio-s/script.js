alert("Bem-vindo!"); 
alert("Bem-vindo!"); 

function divisaoInteira(dividendo, divisor) {
    if (divisor === 0) {
        return "Erro: divisão por zero.";
    }

    let quociente = 0;

    // Utilizando do-while
    do {
        dividendo -= divisor; // Subtrai o divisor do dividendo
        quociente++; // Incrementa o quociente
    } while (dividendo >= divisor);

    return quociente;
}

// Exemplos de uso
alert(divisaoInteira(10, 3)); // Saída esperada: 3
alert(divisaoInteira(15, 4)); // Saída esperada: 3
alert(divisaoInteira(20, 7)); // Saída esperada: 2
alert(divisaoInteira(7, 2)); // Saída esperada: 3
alert(divisaoInteira(0, 5)); // Saída esperada: 0
alert(divisaoInteira(10, 0)); // Saída esperada: "Erro: divisão por zero."

