// 4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

var valor1 = parseInt(prompt("Digite o primeiro valor:"));
var valor2 = parseInt(prompt("DIgite o segundo valor:"));
var valor3 = parseInt(prompt("Digite o terceiro:"));

var maiorValor, segundoMaiorValor;

if (valor1 > valor2 && valor1 > valor3) {
    maiorValor = valor1
    segundoMaiorValor = Math.max(valor2, valor3);
} else if (valor2 > valor1 && valor2 > valor3){
    maiorValor = valor2
    segundoMaiorValor = Math.max(valor1, valor3);
} else {
    (valor3 > valor1 && valor3 > valor2);
    maiorValor = valor3
    segundoMaiorValor = Math.max(valor1,valor2)
}

var somaDosMaiores = maiorValor + segundoMaiorValor;

alert("A soma dos dois valores é: " + somaDosMaiores)