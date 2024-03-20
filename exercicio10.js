// 10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

var calcularPesoIdeal = function(){

var altura = parseFloat(prompt("Informe sua altura em metros:"));
var sexo = parseInt(prompt("Digite seu sexo 1 para feminino, 2 para masculino:"));
var pesoIdeal;

if (sexo === 1) {
    pesoIdeal = (62.1 * altura) - 44.7;
} else if (sexo === 2) {
    pesoIdeal = (72.7 * altura) - 58;
} else {
    alert("Sexo inválido. Use 1 para feminino ou 2 para masculino.");
    return;
}

alert("O peso ideial é aproximadamente " + pesoIdeal.toFixed(2) + " kg.");
};

calcularPesoIdeal()


