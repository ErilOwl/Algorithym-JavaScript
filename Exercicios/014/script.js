let vitoria = 100
let derrota = 10
let rank = undefined
//func mmr = vitorias - derrotas com return para var (saldo rank)

function calcularmmr(){
  let saldorank = vitoria - derrota
    return saldorank
}

if (calcularmmr() <= 10){
  rank = "Ferro"
}
else if (calcularmmr() <= 20){
  rank = "Bronze"
}
else if (calcularmmr() <= 50){
  rank = "Prata"
}
else if (calcularmmr() <= 80){
  rank = "Gold"
}
else if (calcularmmr() <= 90){
  rank = "Diamante"
}
else if (calcularmmr() <= 100){
  rank = "Lendário"
}
else{
  rank = "Imortal"
}
console.log(`A diferença de vitória e derrota do herói é: ${calcularmmr()} e o seu ranking é: ${rank}`)