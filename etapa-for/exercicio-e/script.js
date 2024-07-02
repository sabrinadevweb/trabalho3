/*
E. Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. 
Para verificar se o número é ímpar, efetue dentro do laço a verificação lógica
desta condição com a condicional if (if), verificando se o número é ímpar; sendo,
mostre-o, não sendo, passe para o próximo passo.
*/
alert("Bem-vindo!"); 

/*
//como isso funciona?
1º i inicou valendo 3
2º compara se 3 é  menor ou igual a 20?  V
3º então executa o codigo dentro da chave {

   a- verifica se 3 é impar? V
   b- se Verdadeiro exibir a mensagem na tela  senão pula
   c- vai para o proximo passo
}
4ª i=i+1, ou seja, i=0+1, volte para o passo 1 com o novo valor de i =4
*/

//usando um laço for para para iterar de 0 a 20
for (let i = 0; i <= 20; i=i+1){
//i=i+1 é o mesmo que i+=1 ou i++

  
  if(i % 2 == 1){// ver se um valor é impar
     document.body.innerHTML+=` ${i}`;
  }
 
}









































