// 1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

var numero1 = parseInt(prompt("Insira o primeiro número"));
var numero2 = parseInt(prompt("Insira o segundo número"));

if (numero1 > numero2) {
    alert("O maior número é o: " + numero1);
} else if (numero2 > numero1) {
    alert("O maior número é o: " + numero2);
} else {
    alert("Os números são iguais.");
}