function somar(n1, n2){
    console.log(n1+n2);
    console.log(arguments[0] + arguments[1]);
}

const saudacao = function(nome){
    return "Olá, " + nome + "!";
}

var somando = (num, nom) => num + nom;

console.log(somando(11, 6));
