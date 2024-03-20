// 8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

var soma = 0;

for (var i = 0; i < 4; i++) {
    var numero = parseInt(prompt("Informe o " + (i + 1) + "º número: "));

    if (numero > 0 && numero < 10) {

    soma += numero;
} else {
    alert("Número inválido! Informe um número entre 0 a 10.");
    break;
    }
}

var media = soma/4;

if (media > 5) {
    alert("Você passou no teste!");
} else {
    alert("Tente novamente");
}


