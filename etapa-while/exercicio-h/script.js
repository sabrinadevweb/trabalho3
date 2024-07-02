alert("Bem-vindo!"); 

let base;
let expoente;

do{
 base=parseInt(prompt("Informe um valor da base ou digite -1 para sair:"));
 if(base<0){
  break;
 }else{
  expoente=parseInt(prompt("informe um valor da expoente:"));
  document.body.innerHTML +=`<p>${base}<sup>${expoente}</sup> = ${base**expoente} </p>`;
 }
}while(base>0);