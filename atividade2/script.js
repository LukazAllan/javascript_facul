const botao = document.getElementById('botao');
const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const aulap = document.getElementById('aulap');
const aulat = document.getElementById('aulat');
const rec = document.getElementById('rec');


function calculandoMedia() {
    //
    alert("Calculando Média...");
    let ap = parseFloat(aulap.value);
    let at = parseFloat(aulat.value);
    let presenca = (ap / at) * 100;
    if (presenca < 75) {
        alert("Reprovado por falta");
        return 0;
    }

    let n1 = parseFloat(nota1.value);
    let n2 = parseFloat(nota2.value);
    let re = parseFloat(rec.value);
    console.log(n1, n2, re);

    let media = (n1 + n2) / 2;
    if (media >= 7) {
        alert("Aprovado com média: " + media.toFixed(2));
    } else if (media >= 5) {
        if (isNaN(re)) {
            alert("Por falta da nota de recuperação, Recuperação sem média: " + media.toFixed(2));
        } else {
            media = (media + re) / 2;
            alert("Recuperação com média: " + media.toFixed(2));
        }

    } else {
        alert("Reprovado com média: " + media.toFixed(2));
    }

}

botao.addEventListener('click', calculandoMedia)