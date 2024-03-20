// 5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

var valores = [];
for (var i = 0; i < 6; i++) {
    var valor = parseInt(prompt("Informe o valor " + (i + 1) + ":"));
    valores.push(valor);
}

var soma = 0;
for (var i = 0; i < valores.length; i++) {
    soma += valores[i];
}

var media = soma / valores.length;

var mensagem = "Valores informados: " + valores.join(", ") + "\nMédia aritmética: " + media.toFixed(2);
alert(mensagem);