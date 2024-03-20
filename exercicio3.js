// 3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

var valor1 = parseInt(prompt("Digite o primeiro valor: "));
var valor2 = parseInt(prompt("Digite o segundo valor: "));
var valor3 = parseInt(prompt("Digite o terceiro valor: "));

var maiorValor;

if (valor1 > valor2 && valor1 > valor3) {
    maiorValor = valor1;
} else if (valor2 > valor1 && valor2 > valor3){
    maiorValor = valor2;
} else {
    maiorValor = valor3;
}

alert("O maior valor é o: " + maiorValor)