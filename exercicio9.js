// 9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

var anoNascimento = parseInt(prompt("Informe o ano de nascimento: "));

var anoAtual = new Date().getFullYear();

var idade = anoAtual - anoNascimento;

if (idade >= 16 && idade < 18 || idade >= 18 && idade <= 70) {
    alert("Você pode votar esse ano!");
} else if (idade >= 18) {
    alert("Você é obrigado a votar este ano.");
} else {
    alert("Você ainda não tem idade para votar.");
}