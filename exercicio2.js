// 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero

var valor = parseInt(prompt("Digite um número"));

if (valor > 0) {
    alert("O valor é positivo.");
} else if (valor < 0) {
    alert("O valor é negativo");
} else {
    alert("O valor é 0")
}