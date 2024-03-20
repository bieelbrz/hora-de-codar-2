// 11. Uma micro calculadora
// Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
// O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 
// Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações

var valor1 = parseInt(prompt("Digite o primeiro valor:"));
var valor2 = parseInt(prompt("Digite o segundo valor:"));

var operacao = parseInt(prompt("Escolha uma operação: \n1. Adição\n2. Subtração\n3 Divisão\n4. Multiplicação"));

var resultado
switch (operacao){
    case 1:
        resultado = valor1 + valor2;
        break;
    case 2:
        resultado = valor1 - valor2;
        break;
    case 3:
        resultado = valor1/valor2;
        break;
    case 4:
        resultado = valor1 * valor2;
        break;
    default:
        alert("Operação inválida. Escolha entre 1, 2, 3, 4.");
        break;
}

if (resultado !== undefined) {
    alert("O resultado da opeação é: " + resultado);
}