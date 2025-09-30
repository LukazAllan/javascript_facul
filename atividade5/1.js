/* Supondo que a população de um país A
seja da ordem de 80000 habitantes com uma taxa anual de crescimento de
3% e que a população de B seja 200000 habitantes com uma taxa anual de
crescimento de 1.5%. Faça um programa que calcule e escreva o número de
anos necessários para que a população do país A ultrapasse ou iguale a
população do país B, mantidas as taxas de crescimento.
*/

function crescerPopulacao(nHabitantes, percentual) {
    return Math.floor(nHabitantes * percentual + nHabitantes);
}

let anos = 0;
let popA = 80_000;
let creA = 0.03;
let popB = 200_000;
let creB = 0.015;

while (popA <= popB) {
    popA = crescerPopulacao(popA, creA);
    popB = crescerPopulacao(popB, creB);
    anos++;
}
console.log(`Foram necessários ${anos} anos para popA igualar-se/superar popB`);
console.log("Dados:");
console.log(`popA == ${popA}`);
console.log(`popB == ${popB}`);
