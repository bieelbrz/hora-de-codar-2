// 7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.  

var soma = 0;

var numeros = [];

for (var i = 0; i < 6; i++) {
    var numero = parseInt(prompt("Informe o " + (i + 1) + 'º número:'));

if (numero < 72) {
    soma += numero;
}

numeros.push(numero); 
}

alert("A somados números menores que 72 é: " + soma);

alert("Valores informados: " + numeros.join(', '));


