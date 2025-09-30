// Trabalho Efetivo Discente
//• Crie um array com 5 nomes e exiba o terceiro nome no console.
nomes = ["Allan", "Frankk", "Felipe", "Linda", "Rebeca"];
console.log("1. resultado = " + nomes[2]);

//• Adicione um nome ao final e um no início do array.
nomes.push("Cinthya");
console.log("2. nomes: " + nomes);

// • Remova o último nome e exiba o array atualizado.
nomes.pop();
console.log("3. nomes: " + nomes);

// • Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8].
nums = [2, 4, 6, 8];
let result = nums.map((valor, indice, array) => valor * 2);
console.log("4. resultado = " + result);

//• Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]
nums = new Array(1, 3, 5, 7, 9);
result = nums.filter((valor, indice, array) => valor > 5);
console.log("5. resultado = " + result);
