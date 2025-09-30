function calculaSalario(sal, indice, ano) {
    let resultado = (sal * indice) + sal
    console.log(`Ano ${ano}: R$ ${sal.toFixed(2)} (aumento de ${(indice * 100).toFixed(2)}%) -> R$ ${resultado.toFixed(2)}`);
    return resultado;
}

let salario = 1_000;
let indice = 0.0015;

salario = calculaSalario(salario, indice, 1996);
for (let i = 1997; i < 2025; i++) {
    indice = indice * 2;
    salario = calculaSalario(salario, indice, i);
}
console.log("O Salário é R$" + salario.toFixed(2) + " com indice a " + indice.toFixed(2) + "%");
