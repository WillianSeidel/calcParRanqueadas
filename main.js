function calcularNivel(vitorias, derrotas) {
    // calculo vitoria - derrotas
    var saldoVitorias = vitorias - derrotas;

    // Aqui o resultado entra no laço para verificar onde se enquadra após o resultado da conta
    var nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibir a mensagem do exercicio
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// a função é chamada no final devendo ser inserido os parametros 
// poderia adicionar os daddos com a insersão feita pelo usuario através do parseInt(prompt() e no python seria int(input()
calcularNivel(90, 15);