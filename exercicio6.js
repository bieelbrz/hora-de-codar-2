// 6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

var valor1 = parseInt(prompt("Digite o primeiro valor: "));
var valor2 = parseInt(prompt("Digite o segundo valor: "));
var valor3 = parseInt(prompt("Digite o terceiro valor: "));
var valor4 = parseInt(prompt("Digite o quarto valor: "));

var maiorValor = Math.max(valor1, valor2, valor3, valor4);

alert("Primeiro valor: " + valor1 + "\nÚltimo valor: " + valor4 + "\nMaior valor: " + maiorValor);