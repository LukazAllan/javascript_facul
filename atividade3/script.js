//Trabalho Efetivo Discente

/*Crie uma função chamada calcularTotal que receba:
• O preço unitário de um produto.
• A quantidade comprada.*/
function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}

//Calcule o valor total da compra.
compra = [
    { nome: "salsicha", preco: 3.2, qtd: 10 },
    { nome: "macarrao", preco: 6, qtd: 2 },
    { nome: "molho", preco: 7, qtd: 1 },
    { nome: "Carne Bovina", preco: 50, qtd: 1 },
    { nome: "suco de uva", preco: 30, qtd: 1 },

];
a_pagar = 0;

for (let p of compra) {
    a_pagar = a_pagar + p.preco * p.qtd;
}
console.log("a pagar R$" + a_pagar);

/*
Crie outra função chamada aplicarDesconto que receba o valor total e retorne o valor com
desconto, conforme a regra:
• Compras acima de R$ 100,00 → 10% de desconto
• Compras até R$ 100,00 → sem desconto
*/

function aplicarDesconto(val) {
    if (typeof val != "number") {
        throw new Error("Tipo errado, meu chapa!");
    }
    if (val <= 100) {
        console.log("sem desconto");
        return val;
    } else {
        console.log("com desconto, :)");
        return val - val * 0.1;
    }
}

/*
Adicione uma função exibirResumo() que formate e exiba um resumo final da compra.
• Valor total antes do desconto.
• Valor final com o desconto aplicado.
*/
valor_final = aplicarDesconto(a_pagar);
function exibirResumo() {
    console.log(
        "Valor total: R$" + a_pagar + "\nValor final: R$" + valor_final
    );
}
exibirResumo();
