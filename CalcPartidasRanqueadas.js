//Variáveis com as informações sobre o player
let vitorias = 235
let derrotas = 167
//retorno do rank do jogador
let rank = playerRank(vitorias,derrotas)
console.log("O Herói tem de saldo de " + String(vitorias-derrotas) + " está no nível de " + rank)

//Função para descobrir o rank do jogador
function playerRank(vitorias, derrotas){
    let resultado = vitorias - derrotas
    let player = ""
    resultado < 10 ? player="Ferro" :
    resultado <= 20 ? player="Bronze" :
    resultado <= 50 ? player="Prata" :
    resultado <= 80 ? player="Ouro" :
    resultado <= 90 ? player="Platina" :
    resultado <= 100 ? player="Ascendente" :
    player ="Radiante";
    return player
}